/* ================================================================
   Dashboard v2 · Rafaella Mazzei · Bellz House
   Lógica de navegação + renderização
   ================================================================ */

const { STATUS, ECOSSISTEMA, PERSONAS, TRILHAS, FRAMEWORKS, PRODUTOS, JORNADA_DETALHADA, EXTRACAO, APROVACOES, ESCOPO_INCEPTION, ENTREGAVEIS, PLANO_ENSINO, calcularProgressoFrameworks, calcularProgressoTrilha } = window.DATA;

// Helpers
const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));
const esc = (s) => String(s ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));

// Quebra textos com passos numerados ("1) ... 2) ..." ou "1. ... 2. ...") em lista visual.
// Usado em "como funciona na prática" e textos longos — separa números com quebra de linha.
function formatarPassos(txt){
  if(!txt) return '';
  // separa por padrões "N)" ou "· N)" mantendo o número
  const partes = String(txt).split(/\s*(?:·\s*)?(\d+)\)\s*/).filter(x=>x!=='');
  // se não achou numeração, devolve parágrafo simples
  if(partes.length < 3){
    return `<p style="font-size:15px;line-height:1.65;color:var(--txt);margin:0;">${esc(txt)}</p>`;
  }
  // reagrupa em pares [num, texto]
  const itens=[];
  for(let i=0;i<partes.length;i++){
    if(/^\d+$/.test(partes[i]) && partes[i+1]){
      itens.push({n:partes[i], t:partes[i+1].replace(/\s*·\s*$/,'').trim()});
      i++;
    }
  }
  if(!itens.length) return `<p style="font-size:15px;line-height:1.65;color:var(--txt);margin:0;">${esc(txt)}</p>`;
  return `<ol style="margin:0;padding:0;list-style:none;counter-reset:cf;">${itens.map(it=>`<li style="position:relative;padding:9px 0 9px 38px;font-size:14.5px;line-height:1.55;color:var(--txt);border-bottom:1px solid var(--cream-3,rgba(14,15,13,0.06));"><span style="position:absolute;left:0;top:9px;width:24px;height:24px;border-radius:50%;background:rgba(199,90,44,0.14);color:var(--laranja);display:grid;place-items:center;font-weight:700;font-size:12px;">${esc(it.n)}</span>${esc(it.t)}</li>`).join('')}</ol>`;
}
const ul = (arr) => arr && arr.length ? `<ul>${arr.map(i => `<li>${esc(i)}</li>`).join('')}</ul>` : '<p style="color:var(--txt-3);font-style:italic;">(em construção)</p>';

const getTrilha = (id) => TRILHAS.find(t => t.id === id);
const getFramework = (id) => FRAMEWORKS.find(f => f.id === id);

// ================================================================
// ROUTER
// ================================================================
const routes = {
  '': renderHome,
  'home': renderHome,
  'para-rafa': renderParaRafa,
  'ecossistema': renderEcossistema,
  'metodo': renderMetodo,
  'trilhas': renderTrilhas,
  'trilha': renderTrilha,
  'frameworks': renderFrameworks,
  'framework': renderFrameworkPage,
  'produtos': renderProdutos,
  'produto': renderProduto,
  'jornada': renderJornada,
  'extracao': renderExtracao,
  'aprovacoes': renderAprovacoes,
  'escopo': renderEscopo,
  'entregas': renderEntregas,
  'entregavel': renderEntregavel,
  'plano-ensino': renderPlanoEnsino
};

// Páginas consolidadas: Diagnóstico e Plano Mestre vivem só na Jornada do Aluno.
// URLs antigas de Entregável redirecionam pra fonte única (evita conteúdo duplicado).
const REDIRECT_ENTREGAVEL_JORNADA = ['diagnostico-360', 'plano-mestre'];

function handleRoute() {
  const hash = window.location.hash.slice(1) || 'home';
  const [view, id] = hash.split('/');

  if (view === 'entregavel' && REDIRECT_ENTREGAVEL_JORNADA.includes(id)) {
    window.location.replace('#jornada/' + id);
    return;
  }

  const handler = routes[view] || renderNotFound;
  const html = handler(id);
  $('#main-inner').innerHTML = html;
  updateSidebar(view, id);
  window.scrollTo(0, 0);
}

function updateSidebar(view, id) {
  $$('.nav-link, .nav-child').forEach(el => el.classList.remove('active'));

  // Encontra o elemento exato da página aberta (cada tipo tem seu seletor específico)
  let activeEl = null;
  if (view === 'entregavel' && id)      activeEl = $(`.nav-link[data-entregavel="${id}"]`);
  else if (view === 'jornada' && id)    activeEl = $(`.nav-child[data-jornada="${id}"]`);
  else if (view === 'trilha' && id)     activeEl = $(`.nav-child[data-trilha="${id}"]`);
  else if (view === 'produto' && id)    activeEl = $(`.nav-child[data-produto="${id}"]`);
  else                                  activeEl = $(`.nav-link[data-view="${view}"]`);

  // Fallbacks de rota → item de nav (views que renderizam mas o link mora noutro lugar)
  if (!activeEl) {
    if (view === '' || view === 'home') activeEl = $('.nav-link[data-view="home"]');
    else if (view === 'trilhas')        activeEl = $('.nav-sublabel a[data-view="trilhas"]');
    else if (view === 'framework')      activeEl = $('.nav-link[data-view="frameworks"]');
    else if (view === 'produtos')       activeEl = $('.nav-link[data-view="produtos"]');
  }

  if (activeEl) {
    activeEl.classList.add('active');
    abrirGrupoDoElemento(activeEl);   // garante que a seção pai esteja aberta
    activeEl.scrollIntoView({ block:'nearest' });
  }
}

// Abre só a seção (sidebar-nav) que contém o elemento ativo — fecha as demais
// (acordeão: na troca de rota, mantém a sidebar curta deixando 1 seção aberta)
function abrirGrupoDoElemento(el) {
  const nav = el.closest('.sidebar-nav');
  if (!nav) return;
  // fecha todas as outras seções colapsáveis
  $$('.sidebar-section.toggleable').forEach(header => {
    const sec = header.nextElementSibling;
    if (sec && sec !== nav && sec.classList.contains('sidebar-nav')) toggleSecao(header, false);
  });
  // abre a do elemento ativo (se não for a fixa, que não tem header colapsável)
  const header = nav.previousElementSibling;
  if (header && header.classList.contains('sidebar-section')) toggleSecao(header, true);
}

// Toggle de uma seção: mostra/esconde a .sidebar-nav logo após o header
function toggleSecao(header, forceOpen) {
  const nav = header.nextElementSibling;
  if (!nav || !nav.classList.contains('sidebar-nav')) return;
  const abrir = forceOpen === true ? true : (forceOpen === false ? false : nav.classList.contains('collapsed'));
  nav.classList.toggle('collapsed', !abrir);
  header.classList.toggle('open', abrir);
}

// Inicializa os toggles: cada header de seção é clicável e começa FECHADO
// (só a seção da página ativa abre, via updateSidebar → abrirGrupoDoElemento)
function initSidebarToggles() {
  $$('.sidebar-section').forEach(header => {
    const nav = header.nextElementSibling;
    if (!nav || !nav.classList.contains('sidebar-nav')) return;
    header.classList.add('toggleable');   // clicável
    header.classList.remove('open');      // começa fechado
    nav.classList.add('collapsed');       // escondido por padrão
    header.addEventListener('click', () => toggleSecao(header));
  });
}

// ================================================================
// PARA A RAFA · vista dedicada de decisão
// ================================================================
function renderParaRafa() {
  const stats = calcularProgressoFrameworks();
  // Frameworks novos extraídos da varredura (aguardam validação)
  const novosIds = ['cinco-regras-objecao','matematica-funil','icp-estrutural','tres-duvidas-vou-pensar','pre-vendas-vs-vendas','pergunta-empatica','etapa-nao-e-produto','etica-vs-carater','investimento-presenca','depoimento-vs-elogio','regra-link-nao-telefone'];
  const novos = novosIds.map(id => FRAMEWORKS.find(f => f.id === id)).filter(Boolean);

  // Casos reais a autorizar
  const casos = [
    { aluno:'Adriana', setor:'Confeitaria', situacao:'Contrato inadequado · cliente lesado', virada:'Rafa apontou risco', resultado:'Caso cautelar — aluna decidiu não mexer' },
    { aluno:'Fran', setor:'Personal trainer · Volta Redonda', situacao:'Crença "minha cidade não comporta esse preço"', virada:'Rafa força cálculo objetivo (3 turmas × 3 pessoas)', resultado:'Quebra de crença socioeconômica' },
    { aluno:'Duda', setor:'Maquiagem de noivas', situacao:'Vendia "prévia" separada do pacote', virada:'"Etapa não é produto"', resultado:'Disse 7 NÃOs em 2024 · margem subiu' },
    { aluno:'Evelyn', setor:'Arquitetura', situacao:'Cenário do escritório sem reforma há 2 anos', virada:'Refez stories + escritório', resultado:'Assinatura voltou rápido · ticket comunicado' },
    { aluno:'Igor', setor:'Consultoria financeira', situacao:'Medo de perder venda · agarrava em "vou pensar"', virada:'Aplicou Pergunta Empática', resultado:'Parou de "fingir que cliente vai voltar"' },
    { aluno:'Karolyne', setor:'A confirmar', situacao:'Travava na apresentação', virada:'Testou método com cliente real', resultado:'Fechou na primeira aplicação · celebrada no WhatsApp' },
    { aluno:'Geicy', setor:'A confirmar', situacao:'Vendedora dela achava "impossível"', virada:'Aplicou método com a vendedora', resultado:'Vendedora bateu meta improvável' },
    { aluno:'Lorena', setor:'BNI', situacao:'Recebia indicação por telefone direto', virada:'Aplicou Regra do Link', resultado:'Qualificação prévia · economia de tempo' }
  ];

  return `
    <div class="page-head">
      <div class="breadcrumb">Bellz House <span class="sep">/</span> Para a Rafa</div>
      <h1 class="page-title">Pra você, <em>Rafa.</em></h1>
      <p class="page-lead">Esta página centraliza <strong>tudo o que precisa de você</strong> — e nada mais. A Inception já extraiu, estruturou, documentou. O que está aqui é o que <em>só você pode validar, decidir ou autorizar</em>. Tempo estimado de leitura + resposta: <strong>~1h30 assíncrona</strong>.</p>
    </div>

    <div class="hero" style="background:var(--verde);margin-bottom:36px;">
      <div class="hero-tag" style="color:var(--laranja);">Status do método em 26/05</div>
      <h1 class="hero-title" style="font-size:42px;color:var(--cream);">${stats.parcial} frameworks <em style="color:var(--laranja);">documentados</em> esperando seu olhar.</h1>
      <p class="hero-sub" style="color:rgba(232,227,212,0.85);max-width:680px;">A Inception extraiu seu método de ~7 MB de transcrições nesta semana. Você não precisa começar do zero — só conferir, corrigir e dizer o que está errado.</p>
      <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:14px;margin-top:24px;">
        <div style="background:rgba(232,227,212,0.06);padding:14px 16px;border-radius:var(--radius);">
          <div style="font-family:var(--serif);font-style:italic;font-size:32px;color:var(--cream);line-height:1;">${stats.score}%</div>
          <div style="font-family:var(--mono);font-size:9.5px;letter-spacing:0.18em;text-transform:uppercase;color:rgba(232,227,212,0.6);margin-top:4px;">Progresso global</div>
        </div>
        <div style="background:rgba(232,227,212,0.06);padding:14px 16px;border-radius:var(--radius);">
          <div style="font-family:var(--serif);font-style:italic;font-size:32px;color:var(--cream);line-height:1;">${novos.length}</div>
          <div style="font-family:var(--mono);font-size:9.5px;letter-spacing:0.18em;text-transform:uppercase;color:rgba(232,227,212,0.6);margin-top:4px;">A validar</div>
        </div>
        <div style="background:rgba(232,227,212,0.06);padding:14px 16px;border-radius:var(--radius);">
          <div style="font-family:var(--serif);font-style:italic;font-size:32px;color:var(--cream);line-height:1;">${casos.length}</div>
          <div style="font-family:var(--mono);font-size:9.5px;letter-spacing:0.18em;text-transform:uppercase;color:rgba(232,227,212,0.6);margin-top:4px;">Casos a autorizar</div>
        </div>
        <div style="background:rgba(232,227,212,0.06);padding:14px 16px;border-radius:var(--radius);">
          <div style="font-family:var(--serif);font-style:italic;font-size:32px;color:var(--cream);line-height:1;">2</div>
          <div style="font-family:var(--mono);font-size:9.5px;letter-spacing:0.18em;text-transform:uppercase;color:rgba(232,227,212,0.6);margin-top:4px;">Decisões abertas</div>
        </div>
      </div>
    </div>

    <div class="section">
      <div class="section-title" style="color:var(--laranja);">PARTE 01 · validar frameworks novos</div>
      <h2 class="section-h">Os ${novos.length} frameworks que a Inception extraiu das suas transcrições</h2>
      <p class="section-sub"><strong>Como funciona:</strong> cada framework abaixo veio diretamente de alguma transcrição sua (aula, planejamento ou mentoria). Está com status <span style="color:var(--laranja);font-weight:600;">PARCIAL</span> esperando você dizer "tá certo", "ajusta isso" ou "isso aqui não é meu".</p>
      <p class="section-sub">⏱ Tempo estimado: 5min por framework · total ~1h. Pode fazer aos poucos.</p>

      <div class="frameworks-grid" style="margin-top:18px;">
        ${novos.map(f => `
          <div class="framework-card" onclick="openFramework('${f.id}')" style="border-left:3px solid var(--laranja);">
            <div class="fw-status parcial">◐ A VALIDAR</div>
            <div class="fw-nome">${esc(f.nome)}</div>
            <div class="fw-tecnico">${esc(f.tecnico)}</div>
            <div class="fw-meta"><span>${esc(f.trilhas.map(tid => getTrilha(tid)?.nome).filter(Boolean).join(' · '))}</span><span class="fw-acao">Abrir e validar →</span></div>
          </div>
        `).join('')}
      </div>
    </div>

    <div class="section">
      <div class="section-title" style="color:var(--laranja);">PARTE 02 · decisões abertas</div>
      <h2 class="section-h">2 lacunas que precisam da sua decisão</h2>
      <p class="section-sub">Identificamos 2 temas que aparecem MUITO nas suas transcrições mas não estão cobertos pelas 7 trilhas atuais. Você decide se viram framework formal ou se ficam como acompanhamento caso a caso.</p>

      <div style="display:grid;grid-template-columns:1fr 1fr;gap:18px;margin-top:18px;">
        <div style="background:#fff;border:1px solid var(--linha);border-radius:var(--radius-card);padding:24px 28px;">
          <div style="font-family:var(--mono);font-size:10px;letter-spacing:0.22em;text-transform:uppercase;color:var(--laranja);margin-bottom:8px;font-weight:600;">Decisão A · prioridade alta</div>
          <h3 style="font-family:var(--serif);font-style:italic;font-size:22px;color:var(--preto);margin-bottom:10px;">Burnout do Empresário</h3>
          <p style="font-size:13.5px;line-height:1.55;color:var(--txt-2);margin-bottom:12px;"><strong>798 menções no WhatsApp.</strong> Suas alunas reclamam de cansaço/sobrecarga/esgotamento o tempo todo. Hoje você responde caso a caso ("respira fundo 500x").</p>
          <p style="font-size:13.5px;line-height:1.55;color:var(--txt-2);margin-bottom:14px;"><strong>Você decide:</strong> isso vira protocolo formal "Energia do Empresário" dentro de Mentalidade (com ritual de pausa, micro-recuperações, separação real de horário) — ou continua sendo tratado caso a caso na sua intuição?</p>
          <div style="font-family:var(--mono);font-size:10px;letter-spacing:0.14em;text-transform:uppercase;color:var(--verde);font-weight:600;">Tempo de decisão: 5 min</div>
        </div>
        <div style="background:#fff;border:1px solid var(--linha);border-radius:var(--radius-card);padding:24px 28px;">
          <div style="font-family:var(--mono);font-size:10px;letter-spacing:0.22em;text-transform:uppercase;color:var(--laranja);margin-bottom:8px;font-weight:600;">Decisão B · prioridade média</div>
          <h3 style="font-family:var(--serif);font-style:italic;font-size:22px;color:var(--preto);margin-bottom:10px;">Presença em Sala / Pitch ao Vivo</h3>
          <p style="font-size:13.5px;line-height:1.55;color:var(--txt-2);margin-bottom:12px;"><strong>613+ menções no WhatsApp.</strong> Suas alunas falam "não sei desembolar na hora de apresentar", "como ganhar credibilidade na sala". Você TEM isso muito forte (palco é onde você brilha) mas não documentou como ensina.</p>
          <p style="font-size:13.5px;line-height:1.55;color:var(--txt-2);margin-bottom:14px;"><strong>Você decide:</strong> vira framework formal "Presença e Pitch ao Vivo" dentro de Posicionamento — ou cabe diluído nas trilhas existentes?</p>
          <div style="font-family:var(--mono);font-size:10px;letter-spacing:0.14em;text-transform:uppercase;color:var(--verde);font-weight:600;">Tempo de decisão: 5 min</div>
        </div>
      </div>
    </div>

    <div class="section">
      <div class="section-title" style="color:var(--laranja);">PARTE 03 · autorizar uso público</div>
      <h2 class="section-h">8 casos reais documentados nas transcrições</h2>
      <p class="section-sub">Esses casos aparecem nas suas mentorias e viram <strong>prova social poderosa</strong> em material de marketing, página de vendas, linha editorial. Mas só podemos usar com autorização. Você marca um por um: <strong>autorizado · com anonimato · não usar</strong>.</p>
      <p class="section-sub">⏱ Tempo estimado: 1 min por caso · total ~10min.</p>

      <table class="extracao-tabela" style="margin-top:18px;">
        <thead><tr><th>Aluno</th><th>Setor</th><th>Situação</th><th>Virada</th><th>Resultado</th></tr></thead>
        <tbody>
          ${casos.map(c => `
            <tr>
              <td style="font-weight:600;">${esc(c.aluno)}</td>
              <td style="font-size:12.5px;color:var(--txt-2);">${esc(c.setor)}</td>
              <td style="font-size:12.5px;color:var(--txt-2);">${esc(c.situacao)}</td>
              <td style="font-size:12.5px;color:var(--verde);font-style:italic;">${esc(c.virada)}</td>
              <td style="font-size:12.5px;color:var(--txt-2);">${esc(c.resultado)}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>

    <div class="section">
      <div class="section-title" style="color:var(--laranja);">PARTE 04 · renomear</div>
      <h2 class="section-h">Frameworks com nomes provisórios</h2>
      <p class="section-sub">Vários frameworks ainda estão com o nome que a Inception colocou. Você costuma renomear melhor — quando puder, abre cada framework abaixo e propõe o nome final. Pode usar nomes autorais (PUV, 3 Cadeiras, Anatomia da Oferta etc).</p>
      <ul style="margin-top:14px;padding-left:20px;">
        <li style="margin-bottom:6px;">⚠ <strong>Termômetro da Felicidade</strong> — substituto da "Roda da Vida"</li>
        <li style="margin-bottom:6px;">⚠ <strong>5 Regras de Contorno de Objeções</strong> — sua sequência fixa</li>
        <li style="margin-bottom:6px;">⚠ <strong>Matemática Multiplicativa do Funil</strong> — Engenharia de Vendas</li>
        <li style="margin-bottom:6px;">⚠ <strong>ICP Estrutural (Filtro Invisível)</strong> — vai além de qualificação</li>
        <li style="margin-bottom:6px;">⚠ <strong>3 Únicas Dúvidas Reais Atrás do "Vou Pensar"</strong></li>
        <li style="margin-bottom:6px;">⚠ <strong>Pergunta Empática × Convencimento</strong></li>
        <li style="margin-bottom:6px;">⚠ <strong>Etapa ≠ Produto</strong> — princípio de oferta</li>
        <li style="margin-bottom:6px;">⚠ <strong>Investimento em Presença = Retorno Acelerado</strong></li>
        <li style="margin-bottom:6px;">⚠ <strong>Regra do Link, não Telefone</strong></li>
      </ul>
    </div>

    <div class="lacunas-box" style="margin-top:30px;">
      <div class="lacunas-label">Mensagem da Inception</div>
      <h4 style="font-family:var(--serif);font-style:italic;font-size:24px;color:var(--cream);margin-bottom:14px;">Você está mais perto do que sente.</h4>
      <p style="font-size:14.5px;line-height:1.65;color:rgba(232,227,212,0.88);max-width:760px;margin-bottom:14px;">Há uma semana você abriu o áudio dizendo "como pode estar pronto se eu não vejo?". Hoje, <strong>${stats.parcial} frameworks do seu método estão documentados</strong> — não 0. Score global subiu de 8% para ${stats.score}%. Isso saiu das suas próprias transcrições. Não inventamos nada.</p>
      <p style="font-size:14.5px;line-height:1.65;color:rgba(232,227,212,0.88);max-width:760px;margin-bottom:14px;">O que esta dashboard mostra é: <strong>o seu método já existe</strong>. Está espalhado em transcrições, planejamentos, mentorias, WhatsApp. A gente está só dando forma ao que já estava lá.</p>
      <p style="font-size:14.5px;line-height:1.65;color:rgba(232,227,212,0.88);max-width:760px;">Você não precisa de uma maratona de reuniões com a gente. Precisa de <strong>~1h30 assíncrona</strong> pra revisar essa página. O resto a Inception executa, conforme as demandas do projeto.</p>
    </div>
  `;
}

// ================================================================
// HOME
// ================================================================
function renderHome() {
  const stats = calcularProgressoFrameworks();
  const trilhasComProg = TRILHAS.map(t => ({...t, progresso: calcularProgressoTrilha(t.id)}));

  return `
    <div class="hero">
      <div class="hero-tag">Bellz House · Status do Método</div>
      <h1 class="hero-title">O método da Rafa,<br>em <em style="color:var(--laranja);">arquitetura.</em></h1>
      <p class="hero-sub">Esta dashboard é o estado vivo do método em construção. Cada trilha, cada framework, cada aula — com status real, plano de extração e fontes. Atualizada conforme as sessões com a Rafa avançam.</p>
      <div class="hero-progress">
        <span class="hero-progress-label">Progresso global</span>
        <div class="hero-progress-bar"><div class="hero-progress-fill" style="width:${stats.score}%"></div></div>
        <span class="hero-progress-pct">${stats.score}%</span>
      </div>
    </div>

    <div class="status-grid">
      <div class="status-card">
        <div class="status-symbol pronto">✓</div>
        <div class="status-num">${stats.pronto}</div>
        <div class="status-label">Pronto</div>
        <div class="status-meta">Frameworks documentados</div>
      </div>
      <div class="status-card">
        <div class="status-symbol parcial">◐</div>
        <div class="status-num">${stats.parcial}</div>
        <div class="status-label">Parcial</div>
        <div class="status-meta">Têm material, falta detalhar</div>
      </div>
      <div class="status-card">
        <div class="status-symbol extrair">○</div>
        <div class="status-num">${stats.extrair}</div>
        <div class="status-label">A Extrair</div>
        <div class="status-meta">Em fila de sessões</div>
      </div>
      <div class="status-card">
        <div class="status-symbol proxima">◆</div>
        <div class="status-num">S1</div>
        <div class="status-label">Próxima sessão</div>
        <div class="status-meta">Posicionamento + Oferta · 1h30</div>
      </div>
    </div>

    <div class="trilhas-progresso">
      <div class="section-title">Por trilha</div>
      <h2 class="section-h">Progresso de cada trilha</h2>
      <p class="section-sub">◆ 3 Mestras (carros-chefe — quase todo aluno percorre) &nbsp; · &nbsp; ◇ 4 Especializadas (acionadas conforme contexto). Clique para abrir cada uma.</p>

      ${trilhasComProg.map(t => `
        <a href="#trilha/${t.id}" class="trilha-prog-row ${t.categoria === 'especializada' ? 'refor' : ''}">
          <span class="simb">${t.categoria === 'mestra' ? '◆' : '◇'}</span>
          <span class="nome">${esc(t.nome)}</span>
          <span class="frase">${esc(t.frase)}</span>
          <div class="bar"><div class="bar-fill" style="width:${t.progresso}%"></div></div>
          <span class="pct">${t.progresso}%</span>
        </a>
      `).join('')}
    </div>

    <div class="section">
      <div class="section-title">Plano de extração</div>
      <h2 class="section-h">Validação dos frameworks por trilha</h2>
      <p class="section-sub">A extração já foi feita pela Inception. Agora a Rafa abre <strong>cada framework</strong> no dashboard e comenta — corrige, ajusta ou aprova. São <strong>48 frameworks</strong> nas 7 trilhas (32 com material detalhado), mais as 2 páginas centrais. <strong>Tempo total: ~4h30 a 5h30 — melhor dividir em 2-3 blocos de ~1h30-2h, não tudo de uma vez.</strong></p>
      <table class="extracao-tabela">
        <thead><tr><th>Sessão</th><th>Foco</th><th>Frameworks</th><th>Tempo da Rafa</th></tr></thead>
        <tbody>
          ${EXTRACAO.sessoes.map(s => `
            <tr>
              <td style="font-family:var(--mono);font-size:11px;letter-spacing:0.1em;color:var(--laranja);font-weight:600;">${esc(s.sessao)}</td>
              <td><strong>${esc(s.foco)}</strong></td>
              <td style="font-size:12.5px;color:var(--txt-2);">${esc(s.frameworks)}</td>
              <td style="font-family:var(--mono);font-size:12px;">${esc(s.duracao_rafa)}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
  `;
}

// ================================================================
// ECOSSISTEMA
// ================================================================
function renderEcossistema() {
  const m = ECOSSISTEMA.marca_mae;
  return `
    <div class="page-head">
      <div class="breadcrumb">Bellz House <span class="sep">/</span> Ecossistema</div>
      <h1 class="page-title">O <em>ecossistema</em> Bellz House</h1>
      <p class="page-lead">Bellz House é a empresa-mãe. Dentro dela: a expert Rafa Mazzei e os três produtos que entregam o método ao mercado.</p>
    </div>

    <div class="eco-grid">
      <div class="eco-card marca">
        <div class="eco-camada">${esc(m.camada)}</div>
        <div class="eco-nome">${esc(m.nome)}</div>
        <div class="eco-funcao">${esc(m.funcao)}</div>
        <div class="eco-puv">"${esc(m.tagline)}"</div>
      </div>
      ${ECOSSISTEMA.componentes.map(c => {
        const clickable = c.tem_pagina ? `onclick="window.location.hash='produto/${c.id}'" style="cursor:pointer;"` : '';
        const cta = c.tem_pagina ? `<div class="fw-meta" style="margin-top:14px;padding-top:12px;border-top:1px solid var(--linha);font-family:var(--mono);font-size:10px;letter-spacing:0.12em;text-transform:uppercase;"><span style="color:var(--txt-2);">${esc(c.camada)}</span><span style="color:var(--laranja);font-weight:600;">Abrir página →</span></div>` : '';
        return `
        <div class="eco-card" ${clickable}>
          ${!c.tem_pagina ? `<div class="eco-camada">${esc(c.camada)}</div>` : ''}
          <div class="eco-nome">${esc(c.nome)}</div>
          <div class="eco-funcao">${esc(c.funcao)}</div>
          ${c.puv && !c.puv.startsWith('(') ? `<div class="eco-puv">"${esc(c.puv)}"</div>` : ''}
          ${cta}
        </div>
      `}).join('')}
    </div>

    <div class="section">
      <div class="section-title">PUV completa</div>
      <h2 class="section-h">Bellz House</h2>
      <p style="font-family:var(--serif);font-style:italic;font-size:18px;line-height:1.5;color:var(--verde);max-width:680px;">"${esc(m.puv)}"</p>
      <div style="display:flex;gap:24px;margin-top:20px;flex-wrap:wrap;">
        <div><strong style="font-family:var(--mono);font-size:10px;letter-spacing:0.2em;text-transform:uppercase;color:var(--laranja);display:block;margin-bottom:4px;">Arquétipo</strong><span>${esc(m.arquetipo)}</span></div>
        <div><strong style="font-family:var(--mono);font-size:10px;letter-spacing:0.2em;text-transform:uppercase;color:var(--laranja);display:block;margin-bottom:4px;">Tom</strong><span>${esc(m.tom)}</span></div>
      </div>
    </div>

    <div class="section">
      <div class="section-title">Personas</div>
      <h2 class="section-h">Quem compra cada produto</h2>
      <div class="eco-grid">
        ${PERSONAS.map(p => `
          <div class="eco-card">
            <div class="eco-camada">${esc(p.perfil)}</div>
            <div class="eco-nome">${esc(p.nome)} · ${p.idade}</div>
            <div class="eco-funcao"><strong>Vende por:</strong> ${esc(p.vende_por)}</div>
            <p style="font-size:13px;color:var(--txt-2);line-height:1.5;margin-bottom:10px;"><strong>Dor:</strong> ${esc(p.dor)}</p>
            <p style="font-size:13px;color:var(--txt-2);line-height:1.5;"><strong>Busca:</strong> ${esc(p.busca)}</p>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

// ================================================================
// O MÉTODO
// ================================================================
function renderMetodo() {
  const mestras = TRILHAS.filter(t => t.categoria === 'mestra');
  const especializadas = TRILHAS.filter(t => t.categoria === 'especializada');

  return `
    <div class="page-head">
      <div class="breadcrumb">Bellz House <span class="sep">/</span> O Método</div>
      <h1 class="page-title">O <em>método</em><br>autoral da Rafa.</h1>
      <p class="page-lead">O método é <em>agnóstico de produto</em>. As 7 trilhas, frameworks e teses se aplicam em qualquer um dos produtos do ecossistema. A jornada do aluno — onboarding, encontros, marcos — fica documentada em cada <a href="#ecossistema" style="color:var(--laranja);">página de produto</a>.</p>
    </div>

    <div class="section">
      <div class="section-title">As 7 trilhas</div>
      <h2 class="section-h">◆ Mestras &nbsp;&nbsp;·&nbsp;&nbsp; ◇ Especializadas</h2>
      <p class="section-sub"><strong>Mestras:</strong> carros-chefe — quase todo aluno percorre. &nbsp;&nbsp; <strong>Especializadas:</strong> acionadas conforme contexto do aluno.</p>

      <div style="font-family:var(--mono);font-size:10px;letter-spacing:0.22em;text-transform:uppercase;color:var(--laranja);margin:24px 0 12px;font-weight:600;">◆ Trilhas Mestras</div>
      <div class="frameworks-grid">
        ${mestras.map(t => `
          <a href="#trilha/${t.id}" class="framework-card">
            <div class="fw-status parcial">◆ Mestra</div>
            <div class="fw-nome">${esc(t.nome)}</div>
            <div class="fw-tecnico">${esc(t.frase)}</div>
            <div class="fw-meta"><span>${esc(t.duracao)}</span><span class="fw-acao">Abrir →</span></div>
          </a>
        `).join('')}
      </div>

      <div style="font-family:var(--mono);font-size:10px;letter-spacing:0.22em;text-transform:uppercase;color:var(--azul);margin:32px 0 12px;font-weight:600;">◇ Trilhas Especializadas</div>
      <div class="frameworks-grid">
        ${especializadas.map(t => `
          <a href="#trilha/${t.id}" class="framework-card">
            <div class="fw-status extrair">◇ Especializada</div>
            <div class="fw-nome">${esc(t.nome)}</div>
            <div class="fw-tecnico">${esc(t.frase)}</div>
            <div class="fw-meta"><span>${esc(t.duracao)}</span><span class="fw-acao">Abrir →</span></div>
          </a>
        `).join('')}
      </div>
    </div>

    <div class="section">
      <div class="section-title">Princípios e teses bandeira</div>
      <h2 class="section-h">O que sustenta o método</h2>
      <p class="section-sub">As teses que a Rafa defende em qualquer produto. Aparecem em comunicação, mentoria, sessão de venda e linha editorial.</p>

      <div style="display:grid;grid-template-columns:1fr 1fr;gap:14px;margin-top:8px;">
        <div style="background:var(--cream);padding:18px 22px;border-left:3px solid var(--laranja);border-radius:0 var(--radius) var(--radius) 0;">
          <p style="font-family:var(--serif);font-style:italic;font-size:15px;line-height:1.4;color:var(--verde);margin:0;">"O problema não é venda. É estrutura."</p>
        </div>
        <div style="background:var(--cream);padding:18px 22px;border-left:3px solid var(--laranja);border-radius:0 var(--radius) var(--radius) 0;">
          <p style="font-family:var(--serif);font-style:italic;font-size:15px;line-height:1.4;color:var(--verde);margin:0;">"O downsell é o concorrente."</p>
        </div>
        <div style="background:var(--cream);padding:18px 22px;border-left:3px solid var(--laranja);border-radius:0 var(--radius) var(--radius) 0;">
          <p style="font-family:var(--serif);font-style:italic;font-size:15px;line-height:1.4;color:var(--verde);margin:0;">"Vender é dar clareza do ROI."</p>
        </div>
        <div style="background:var(--cream);padding:18px 22px;border-left:3px solid var(--laranja);border-radius:0 var(--radius) var(--radius) 0;">
          <p style="font-family:var(--serif);font-style:italic;font-size:15px;line-height:1.4;color:var(--verde);margin:0;">"Qualidade é obrigação. Diferencial é o que vem depois."</p>
        </div>
        <div style="background:var(--cream);padding:18px 22px;border-left:3px solid var(--laranja);border-radius:0 var(--radius) var(--radius) 0;">
          <p style="font-family:var(--serif);font-style:italic;font-size:15px;line-height:1.4;color:var(--verde);margin:0;">"Você não precisa de mais clientes. Precisa de mais conversão."</p>
        </div>
        <div style="background:var(--cream);padding:18px 22px;border-left:3px solid var(--laranja);border-radius:0 var(--radius) var(--radius) 0;">
          <p style="font-family:var(--serif);font-style:italic;font-size:15px;line-height:1.4;color:var(--verde);margin:0;">"Empreender é identidade. Você é dono da piscina, não turista."</p>
        </div>
        <div style="background:var(--cream);padding:18px 22px;border-left:3px solid var(--laranja);border-radius:0 var(--radius) var(--radius) 0;">
          <p style="font-family:var(--serif);font-style:italic;font-size:15px;line-height:1.4;color:var(--verde);margin:0;">"Vender não é tarefa, é rotina."</p>
        </div>
        <div style="background:var(--cream);padding:18px 22px;border-left:3px solid var(--laranja);border-radius:0 var(--radius) var(--radius) 0;">
          <p style="font-family:var(--serif);font-style:italic;font-size:15px;line-height:1.4;color:var(--verde);margin:0;">"Anteceder erros é profissionalismo, não pessimismo."</p>
        </div>
      </div>
    </div>

    <div class="section">
      <div class="section-title">Diferença · Método × Jornada de Produto</div>
      <h2 class="section-h">Por que isso importa</h2>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:18px;">
        <div style="background:var(--verde);color:var(--cream);padding:24px 28px;border-radius:var(--radius-card);">
          <strong style="font-family:var(--mono);font-size:10px;letter-spacing:0.22em;text-transform:uppercase;color:var(--laranja);display:block;margin-bottom:8px;">O Método (esta página)</strong>
          <h4 style="font-family:var(--serif);font-style:italic;font-size:22px;margin-bottom:12px;color:var(--cream);">Agnóstico de produto</h4>
          <p style="font-size:13.5px;line-height:1.5;color:rgba(232,227,212,0.88);">As 7 trilhas, os frameworks autorais e as teses são <strong>os mesmos</strong> independentemente do produto. É o "o quê" do método.</p>
        </div>
        <div style="background:var(--preto);color:var(--cream);padding:24px 28px;border-radius:var(--radius-card);">
          <strong style="font-family:var(--mono);font-size:10px;letter-spacing:0.22em;text-transform:uppercase;color:var(--laranja);display:block;margin-bottom:8px;">A Jornada de cada Produto</strong>
          <h4 style="font-family:var(--serif);font-style:italic;font-size:22px;margin-bottom:12px;color:var(--cream);">Específica de produto</h4>
          <p style="font-size:13.5px;line-height:1.5;color:rgba(232,227,212,0.88);">Onboarding, Diagnóstico 360º, Plano Mestre, Mesa Bellz, Mentoria, Travessia — tudo isso é <strong>do produto</strong>. Cada produto tem sua estrutura. Veja em <a href="#produtos" style="color:var(--laranja);">Produtos</a>.</p>
        </div>
      </div>
    </div>
  `;
}

// ================================================================
// PRODUTO (página individual)
// ================================================================
function renderProduto(id) {
  const p = PRODUTOS.find(prod => prod.id === id);
  if (!p) return renderNotFound();

  if (p.status === 'em_construcao') {
    return `
      <div class="page-head" style="margin-bottom:20px;">
        <div class="breadcrumb"><a href="#produtos">Produtos</a> <span class="sep">/</span> ${esc(p.nome)}</div>
      </div>
      <div class="trilha-hero" style="background:${p.paleta?.primaria || 'var(--verde)'};">
        <div class="trilha-hero-cat">${esc(p.formato)}</div>
        <h1 class="trilha-hero-name">${esc(p.nome)}</h1>
        <p class="trilha-hero-frase">"${esc(p.promessa)}"</p>
      </div>
      <div class="section">
        <div class="section-title">Dados gerais</div>
        <h2 class="section-h">Sobre o ${esc(p.nome)}</h2>
        <div class="produto-meta">
          <div class="meta-item"><div class="meta-label">Público</div><div class="meta-value">${esc(p.publico)}</div></div>
          <div class="meta-item"><div class="meta-label">Ticket</div><div class="meta-value">${esc(p.ticket)}</div></div>
          <div class="meta-item"><div class="meta-label">Quando</div><div class="meta-value">${esc(p.quando)}</div></div>
          <div class="meta-item"><div class="meta-label">Trilhas cobertas</div><div class="meta-value">${esc(p.trilhas_cobertas)}</div></div>
        </div>
        ${p.puv && !p.puv.startsWith('(') ? `
          <div style="margin-top:24px;padding-top:24px;border-top:1px solid var(--linha);">
            <strong style="font-family:var(--mono);font-size:10px;letter-spacing:0.2em;text-transform:uppercase;color:var(--laranja);display:block;margin-bottom:6px;">PUV</strong>
            <p style="font-family:var(--serif);font-style:italic;font-size:16px;line-height:1.5;color:var(--verde);">"${esc(p.puv)}"</p>
          </div>
        ` : ''}
      </div>
      <div class="placeholder-box">
        <h3>Jornada do aluno em construção</h3>
        <p>${esc(p.jornada_status)}</p>
      </div>
    `;
  }

  // Produto ATIVO (2Z Level)
  return `
    <div class="page-head" style="margin-bottom:20px;">
      <div class="breadcrumb"><a href="#produtos">Produtos</a> <span class="sep">/</span> ${esc(p.nome)}</div>
    </div>

    <div class="trilha-hero" style="background:${p.paleta?.primaria || 'var(--verde)'};">
      <div class="trilha-hero-cat">${esc(p.formato)}</div>
      <h1 class="trilha-hero-name">${esc(p.nome)}</h1>
      <p class="trilha-hero-frase">"${esc(p.promessa)}"</p>
      <div class="trilha-hero-meta">
        <div class="meta-block"><span class="meta-label">Público</span><span class="meta-value">${esc(p.publico)}</span></div>
        <div class="meta-block"><span class="meta-label">Ticket</span><span class="meta-value">${esc(p.ticket)}</span></div>
        <div class="meta-block"><span class="meta-label">Status</span><span class="meta-value">${esc(p.quando)}</span></div>
      </div>
    </div>

    <div class="section">
      <div class="section-title">PUV completa</div>
      <h2 class="section-h">A promessa</h2>
      <p style="font-family:var(--serif);font-style:italic;font-size:18px;line-height:1.5;color:var(--verde);max-width:760px;">"${esc(p.puv)}"</p>
      ${p.tagline ? `<p style="font-family:var(--mono);font-size:11px;letter-spacing:0.14em;color:var(--txt-3);margin-top:10px;">${esc(p.tagline)}</p>` : ''}
    </div>

    <div class="section">
      <div class="section-title">Jornada do aluno · entrada (Mês 1)</div>
      <h2 class="section-h">Como o aluno começa</h2>
      <p class="section-sub">Clique em cada etapa para ver detalhes: processo passo a passo, papéis (Rafa · CP · Aluno · IA), ferramentas e o que ainda precisa ser criado.</p>
      <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin-top:16px;">
        ${p.jornada.entrada.map(e => `
          <a href="#jornada/${e.id}" style="background:var(--cream);padding:22px 22px;border-left:3px solid var(--verde);border-radius:0 var(--radius) var(--radius) 0;display:block;text-decoration:none;color:inherit;transition:transform .15s,box-shadow .15s;" onmouseover="this.style.transform='translateY(-2px)';this.style.boxShadow='0 8px 20px rgba(14,15,13,0.06)';" onmouseout="this.style.transform='';this.style.boxShadow='';">
            <strong style="font-family:var(--mono);font-size:10px;letter-spacing:0.2em;text-transform:uppercase;color:var(--laranja);display:block;margin-bottom:6px;">${esc(e.num)} · ${esc(e.quem)}</strong>
            <h4 style="font-family:var(--serif);font-style:italic;font-size:18px;color:var(--verde);margin-bottom:6px;">${esc(e.nome)}</h4>
            <p style="font-size:13px;color:var(--txt-2);margin-bottom:10px;">${esc(e.desc)}</p>
            <span style="font-family:var(--mono);font-size:10px;letter-spacing:0.18em;color:var(--laranja);font-weight:600;">Ver detalhes →</span>
          </a>
        `).join('')}
      </div>
    </div>

    <div class="section">
      <div class="section-title">A Fundação · base universal</div>
      <h2 class="section-h">Todo aluno passa</h2>
      <p class="section-sub">Antes das trilhas personalizadas, A Fundação. 7 ações concretas com aceleradores IA. Também é a base do Sell-Z. Clique para ver checklist completo + estado de cada acelerador.</p>
      ${p.jornada.base_universal.map(b => `
        <a href="#jornada/${b.id}" style="display:block;background:var(--verde);color:var(--cream);padding:30px 36px;border-radius:var(--radius-card);text-decoration:none;transition:transform .15s,box-shadow .15s;position:relative;overflow:hidden;" onmouseover="this.style.transform='translateY(-2px)';this.style.boxShadow='0 14px 32px rgba(14,15,13,0.12)';" onmouseout="this.style.transform='';this.style.boxShadow='';">
          <div style="font-family:var(--mono);font-size:10px;letter-spacing:0.22em;text-transform:uppercase;color:var(--laranja);font-weight:600;margin-bottom:10px;">Base Universal · Setup do Empresário</div>
          <h4 style="font-family:var(--serif);font-style:italic;font-size:32px;margin-bottom:12px;color:var(--cream);">${esc(b.nome)}</h4>
          <p style="font-size:14.5px;line-height:1.55;color:rgba(232,227,212,0.88);max-width:680px;">${esc(b.desc)}</p>
          <span style="display:inline-block;margin-top:16px;font-family:var(--mono);font-size:11px;letter-spacing:0.2em;text-transform:uppercase;color:var(--laranja);font-weight:600;">Ver checklist completo →</span>
        </a>
      `).join('')}
    </div>

    <div class="section">
      <div class="section-title">Trilhas personalizadas</div>
      <h2 class="section-h">Definidas no Plano Mestre</h2>
      <p class="section-sub">Cado aluno percorre uma combinação de trilhas conforme o diagnóstico inicial. Veja todas as trilhas em <a href="#metodo" style="color:var(--laranja);">O Método</a>.</p>
    </div>

    <div class="section">
      <div class="section-title">Marcos do ciclo</div>
      <h2 class="section-h">Pontos de auditoria</h2>
      <table class="extracao-tabela">
        <thead><tr><th>Quando</th><th>Marco</th><th>O que é</th></tr></thead>
        <tbody>
          ${p.jornada.marcos_ciclo.map(m => `
            <tr>
              <td style="font-family:var(--mono);color:var(--laranja);">${esc(m.quando)}</td>
              <td><strong>${esc(m.nome)}</strong></td>
              <td>${esc(m.desc)}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>

    <div class="section">
      <div class="section-title">Encontros recorrentes</div>
      <h2 class="section-h">A rotina viva do produto</h2>
      <table class="extracao-tabela">
        <thead><tr><th>Encontro</th><th>Frequência</th><th>Função</th></tr></thead>
        <tbody>
          ${p.encontros.map(e => `
            <tr>
              <td><strong>${esc(e.nome)}</strong></td>
              <td style="font-family:var(--mono);font-size:11px;">${esc(e.frequencia)}</td>
              <td>${esc(e.desc)}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>

    <div class="section">
      <div class="section-title">Componentes tangíveis</div>
      <h2 class="section-h">O que o aluno recebe</h2>
      <div class="frameworks-grid">
        ${p.componentes.map(c => `
          <div class="framework-card">
            <div class="fw-status parcial">${esc(c.tipo)}</div>
            <div class="fw-nome">${esc(c.nome)}</div>
            <div class="fw-tecnico">${esc(c.desc)}</div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

// ================================================================
// TRILHAS (lista — redireciona ao Método)
// ================================================================
function renderTrilhas() {
  window.location.hash = 'metodo';
  return renderMetodo();
}

// ================================================================
// TRILHA (página de uma trilha)
// ================================================================
function renderTrilha(id) {
  const t = getTrilha(id);
  if (!t) return renderNotFound();

  const progresso = calcularProgressoTrilha(id);
  const isEspecializada = t.categoria === 'especializada';
  const fws = t.frameworks.map(fid => getFramework(fid)).filter(Boolean);

  return `
    <div class="page-head" style="margin-bottom:20px;">
      <div class="breadcrumb"><a href="#metodo">O Método</a> <span class="sep">/</span> ${esc(t.nome)}</div>
    </div>

    <div class="trilha-hero ${isEspecializada ? 'refor' : ''}">
      <div class="trilha-hero-cat">${isEspecializada ? '◇ Especializada' : '◆ Mestra'} · ${esc(t.duracao)}</div>
      <h1 class="trilha-hero-name">${esc(t.nome)}</h1>
      <p class="trilha-hero-frase">"${esc(t.frase)}"</p>
      <div class="trilha-hero-meta">
        <div class="meta-block">
          <span class="meta-label">Progresso</span>
          <span class="meta-value">${progresso}%</span>
        </div>
        <div class="trilha-hero-progress">
          <div class="bar"><div class="bar-fill" style="width:${progresso}%"></div></div>
        </div>
        <div class="meta-block">
          <span class="meta-label">Frameworks</span>
          <span class="meta-value">${fws.length}</span>
        </div>
        <div class="meta-block">
          <span class="meta-label">Aulas</span>
          <span class="meta-value">${t.aulas.length}</span>
        </div>
      </div>
    </div>

    <div class="section">
      <div class="section-title">Objetivo</div>
      <h2 class="section-h">A transformação esperada</h2>
      <p style="font-size:15.5px;line-height:1.6;color:var(--txt);max-width:760px;">${esc(t.objetivo)}</p>

      <div class="quando-acionar" style="margin-top:20px;">
        <div class="quando-acionar-label">Quando acionar essa trilha</div>
        ${ul(t.quando_acionar)}
      </div>
    </div>

    <div class="section">
      <div class="section-title">Frameworks autorais</div>
      <h2 class="section-h">O que sustenta essa trilha</h2>
      <p class="section-sub">Clique em cada card para ver status, plano de extração e como cada framework vira conteúdo.</p>
      <div class="frameworks-grid">
        ${fws.map(f => `
          <div class="framework-card" data-framework="${f.id}" onclick="openFramework('${f.id}')">
            <div class="fw-status ${f.status}">${STATUS[f.status].icon} ${STATUS[f.status].label}</div>
            <div class="fw-nome">${esc(f.nome)}</div>
            <div class="fw-tecnico">${esc(f.tecnico)}</div>
            <div class="fw-meta"><span>${esc(f.duracao_rafa)}</span><span class="fw-acao">Detalhes →</span></div>
          </div>
        `).join('')}
      </div>
    </div>

    <div class="section">
      <div class="section-title">Aulas gravadas</div>
      <h2 class="section-h">A grade da trilha</h2>
      <table class="tabela-aulas">
        <thead><tr><th>#</th><th>Aula</th><th>Quem dá</th><th>Entregável</th><th>Status</th></tr></thead>
        <tbody>
          ${t.aulas.map(a => `
            <tr>
              <td>${a.num}</td>
              <td><div class="aula-nome">${esc(a.nome)}</div><div style="font-size:12px;color:var(--txt-2);margin-top:2px;">${esc(a.ensina)}</div></td>
              <td style="font-size:12.5px;color:var(--txt-2);">${esc(a.quem)}</td>
              <td style="font-size:12.5px;color:var(--txt-2);">${esc(a.entregavel)}</td>
              <td><span class="aula-status ${a.status}">${a.status}</span></td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>

    <div class="section">
      <div class="section-title">Instrumentos</div>
      <h2 class="section-h">As ferramentas</h2>
      <div class="instrumentos-grid">
        ${t.instrumentos.map(i => `<div class="instrumento">${esc(i)}</div>`).join('')}
      </div>
    </div>

    <div class="section">
      <div class="section-title">KPIs</div>
      <h2 class="section-h">Como medir a aplicação</h2>
      <div class="kpis-cols">
        <div class="kpi-block">
          <h5>Numéricos</h5>
          ${ul(t.kpis.numericos)}
        </div>
        <div class="kpi-block">
          <h5>Subjetivos</h5>
          ${ul(t.kpis.subjetivos)}
        </div>
      </div>
    </div>

    <div class="lacunas-box">
      <div class="lacunas-label">Lacunas a extrair com a Rafa</div>
      <h4>O que ainda precisa sair da cabeça dela</h4>
      ${ul(t.lacunas)}
      <div class="agenda">📅 Sessão prevista: <strong>${esc(t.sessao_extracao)}</strong></div>
    </div>
  `;
}

// ================================================================
// FRAMEWORKS (galeria cross-trilha)
// ================================================================
let frameworkFilter = { trilha: 'todas', status: 'todos' };

function renderFrameworks() {
  setTimeout(() => bindFrameworkFilters(), 0);
  return `
    <div class="page-head">
      <div class="breadcrumb">Bellz House <span class="sep">/</span> Frameworks autorais</div>
      <h1 class="page-title">Os <em>frameworks</em><br>autorais da Rafa.</h1>
      <p class="page-lead">Cada framework é um pedaço do método que precisa virar aula, playbook, instrumento ou IA. Filtre por trilha ou por status — clique em qualquer um para ver o plano de extração.</p>
    </div>

    <div class="section">
      <div class="section-title">Filtros</div>
      <div style="display:flex;gap:12px;flex-wrap:wrap;align-items:center;margin-bottom:14px;">
        <label style="font-family:var(--mono);font-size:10px;letter-spacing:0.18em;text-transform:uppercase;color:var(--txt-2);">Trilha:</label>
        <select id="filter-trilha" style="font-family:var(--sans);font-size:13px;padding:6px 12px;border:1px solid var(--linha-2);border-radius:var(--radius);background:#fff;cursor:pointer;">
          <option value="todas">Todas</option>
          ${TRILHAS.map(t => `<option value="${t.id}">${esc(t.nome)}</option>`).join('')}
        </select>
        <label style="font-family:var(--mono);font-size:10px;letter-spacing:0.18em;text-transform:uppercase;color:var(--txt-2);margin-left:8px;">Status:</label>
        <select id="filter-status" style="font-family:var(--sans);font-size:13px;padding:6px 12px;border:1px solid var(--linha-2);border-radius:var(--radius);background:#fff;cursor:pointer;">
          <option value="todos">Todos</option>
          <option value="pronto">Pronto</option>
          <option value="parcial">Parcial</option>
          <option value="extrair">A Extrair</option>
        </select>
      </div>

      <div id="frameworks-grid-container">${renderFrameworksGrid()}</div>
    </div>
  `;
}

function renderFrameworksGrid() {
  const list = FRAMEWORKS.filter(f => {
    if (frameworkFilter.trilha !== 'todas' && !f.trilhas.includes(frameworkFilter.trilha)) return false;
    if (frameworkFilter.status !== 'todos' && f.status !== frameworkFilter.status) return false;
    return true;
  });

  if (!list.length) return '<p style="color:var(--txt-2);font-style:italic;padding:20px 0;">Nenhum framework com esses filtros.</p>';

  return `<div class="frameworks-grid">${list.map(f => `
    <div class="framework-card" onclick="openFramework('${f.id}')">
      <div class="fw-status ${f.status}">${STATUS[f.status].icon} ${STATUS[f.status].label}</div>
      <div class="fw-nome">${esc(f.nome)}</div>
      <div class="fw-tecnico">${esc(f.tecnico)}</div>
      <div class="fw-meta"><span>${esc(f.trilhas.map(tid => getTrilha(tid)?.nome).filter(Boolean).join(' · '))}</span><span class="fw-acao">→</span></div>
    </div>
  `).join('')}</div>`;
}

function bindFrameworkFilters() {
  const ft = $('#filter-trilha');
  const fs = $('#filter-status');
  if (ft) ft.addEventListener('change', e => { frameworkFilter.trilha = e.target.value; $('#frameworks-grid-container').innerHTML = renderFrameworksGrid(); });
  if (fs) fs.addEventListener('change', e => { frameworkFilter.status = e.target.value; $('#frameworks-grid-container').innerHTML = renderFrameworksGrid(); });
}

// ================================================================
// FRAMEWORK MODAL (detalhe)
// ================================================================
function renderFrameworkPage(id) {
  const f = getFramework(id);
  if (!f) return renderNotFound();
  const trilhasNomes = f.trilhas.map(tid => getTrilha(tid)?.nome).filter(Boolean);
  // Frameworks com material extraído por IA — aguardam validação Maiara + Rafa
  const novos = ['cinco-regras-objecao','matematica-funil','icp-estrutural','tres-duvidas-vou-pensar','pre-vendas-vs-vendas','pergunta-empatica','etapa-nao-e-produto','etica-vs-carater','investimento-presenca','depoimento-vs-elogio','regra-link-nao-telefone','anatomia-pdf','venda-consultiva','plano-de-foco','esteira','qualificacao-lead','leitura-indicadores','indicacao-estruturada','escala-funis','valor-do-tempo','pf-pj','fluxo-caixa','custos-margem','contratacao-apoio','time-comercial','lideranca-delegacao','crencas-limitantes','timing-contratacao','roteiro-desligamento','transicao-identidade','marca-pessoal-corporativa','roda-vida-empresarial'];
  const aguardaValidacao = novos.includes(f.id);

  return `
    <div class="page-head" style="margin-bottom:18px;">
      <div class="breadcrumb"><a href="#frameworks" style="color:var(--laranja);">Frameworks autorais</a> <span class="sep">/</span> ${esc(f.nome)}</div>
    </div>
    <div class="framework-page">
    <div class="modal-head">
      <div class="modal-status-row">
        ${trilhasNomes.map(n => `<span class="modal-tag trilha">${esc(n)}</span>`).join('')}
        <span class="modal-tag status-${f.status}">${STATUS[f.status].icon} ${STATUS[f.status].label}</span>
        ${aguardaValidacao ? '<span class="modal-tag" style="background:rgba(199,90,44,0.22);color:#e08c5e;">⚠ AGUARDA SUA VALIDAÇÃO</span>' : ''}
      </div>
      <h2 class="modal-nome">${esc(f.nome)}</h2>
      <p class="modal-tecnico">${esc(f.tecnico)}</p>
      ${aguardaValidacao ? '<div style="margin-top:14px;padding:10px 14px;background:rgba(199,90,44,0.15);border-left:3px solid var(--laranja);border-radius:0 var(--radius) var(--radius) 0;font-size:13px;line-height:1.5;color:rgba(232,227,212,0.92);"><strong>Rafa:</strong> esse framework foi extraído direto das suas transcrições. Confere o que está documentado abaixo — corrige, ajusta ou aprove.</div>' : ''}
    </div>
    <div class="modal-body">
      ${f.o_que_e ? `
      <div class="modal-section" style="background:var(--cream-2);padding:14px 18px;border-radius:var(--radius);border-left:3px solid var(--laranja);">
        <p style="font-family:var(--serif);font-style:italic;font-size:16px;line-height:1.4;color:var(--verde);margin:0;">"${esc(f.o_que_e)}"</p>
      </div>
      ` : ''}

      ${f.quando_acionar && f.quando_acionar.length ? `
      <div class="modal-section">
        <h4><span class="icon">⚡</span>Quando acionar</h4>
        <p style="font-size:13px;color:var(--txt-2);margin:0 0 10px 0;font-style:italic;">Contextos, problemas, situações em que esse framework é indicado.</p>
        ${ul(f.quando_acionar)}
      </div>
      ` : ''}

      ${f.teses_metodologias ? `
      <div class="modal-section" style="background:rgba(90,122,60,0.06);padding:14px 18px;border-radius:var(--radius);border-left:3px solid var(--verde);">
        <h4 style="margin-top:0;"><span class="icon">📚</span>Teses e metodologias</h4>
        ${f.teses_metodologias.base_externa ? `
          <div style="margin-bottom:12px;">
            <div style="font-size:12px;text-transform:uppercase;letter-spacing:0.06em;color:var(--txt-2);margin-bottom:4px;">Base externa</div>
            <p style="margin:0;font-size:14px;line-height:1.5;">${esc(f.teses_metodologias.base_externa)}</p>
          </div>
        ` : `
          <div style="margin-bottom:12px;">
            <div style="font-size:12px;text-transform:uppercase;letter-spacing:0.06em;color:var(--txt-2);margin-bottom:4px;">Base externa</div>
            <p style="margin:0;font-size:13px;line-height:1.5;font-style:italic;color:var(--txt-2);">Autoral — sem base externa identificada.</p>
          </div>
        `}
        ${f.teses_metodologias.teses_rafa && f.teses_metodologias.teses_rafa.length ? `
          <div>
            <div style="font-size:12px;text-transform:uppercase;letter-spacing:0.06em;color:var(--txt-2);margin-bottom:6px;">Teses da Rafa</div>
            <ul style="margin:0;padding-left:18px;">
              ${f.teses_metodologias.teses_rafa.map(t => `<li style="font-family:var(--serif);font-style:italic;font-size:14px;line-height:1.5;color:var(--verde);margin-bottom:6px;">${esc(t)}</li>`).join('')}
            </ul>
          </div>
        ` : ''}
      </div>
      ` : ''}

      ${f.passo_a_passo && f.passo_a_passo.length ? `
      <div class="modal-section">
        <h4><span class="icon">🪜</span>Passo a passo</h4>
        <p style="font-size:13px;color:var(--txt-2);margin:0 0 14px 0;font-style:italic;">Como o framework funciona na prática. Etapas com ramificações quando há condicionais.</p>
        <ol style="margin:0;padding-left:0;list-style:none;counter-reset:passo;">
          ${f.passo_a_passo.map(p => `
            <li style="counter-increment:passo;position:relative;padding:14px 14px 14px 52px;margin-bottom:10px;background:var(--cream-2);border-radius:var(--radius);">
              <div style="position:absolute;left:14px;top:14px;width:28px;height:28px;border-radius:50%;background:var(--verde);color:var(--cream);display:flex;align-items:center;justify-content:center;font-weight:700;font-size:13px;">${p.etapa || ''}</div>
              <div style="font-weight:700;font-size:14px;color:var(--verde);margin-bottom:4px;text-transform:uppercase;letter-spacing:0.04em;">${esc(p.titulo || '')}</div>
              <div style="font-size:14px;line-height:1.55;color:var(--txt);">${esc(p.desc || '')}</div>
              ${p.condicional ? `
                <div style="margin-top:8px;padding:8px 12px;background:rgba(199,90,44,0.10);border-left:2px solid var(--laranja);border-radius:0 var(--radius) var(--radius) 0;font-size:13px;line-height:1.5;color:var(--txt);">
                  <strong style="color:var(--laranja);text-transform:uppercase;font-size:11px;letter-spacing:0.06em;">Ramificação:</strong> ${esc(p.condicional)}
                </div>
              ` : ''}
            </li>
          `).join('')}
        </ol>
      </div>
      ` : ''}

      <div class="modal-section temos">
        <h4><span class="icon">✓</span>O que já temos</h4>
        ${ul(f.o_que_temos)}
      </div>

      <div class="modal-section falta">
        <h4><span class="icon">✗</span>O que falta</h4>
        ${ul(f.o_que_falta)}
      </div>

      <div class="modal-section plano">
        <h4><span class="icon">📅</span>Plano de extração</h4>
        <div class="modal-plano-grid">
          <div class="modal-plano-item">
            <div class="label">Sessão</div>
            <div class="value">${esc(f.sessao)}</div>
          </div>
          <div class="modal-plano-item">
            <div class="label">Duração da Rafa</div>
            <div class="value">${esc(f.duracao_rafa)}</div>
          </div>
          <div class="modal-plano-item">
            <div class="label">Fonte primária</div>
            <div class="value">${esc(f.fonte_primaria)}</div>
          </div>
          <div class="modal-plano-item">
            <div class="label">Fonte secundária</div>
            <div class="value">${esc(f.fonte_secundaria)}</div>
          </div>
        </div>
      </div>

      <div class="modal-section vira">
        <h4><span class="icon">🎯</span>Onde vira conteúdo</h4>
        ${ul(f.vira_conteudo)}
      </div>
    </div>
    </div>
    <div style="max-width:840px;margin:24px auto 0;padding-top:18px;border-top:1px solid var(--cream-3,rgba(14,15,13,0.08));">
      <a href="#frameworks" style="color:var(--laranja);text-decoration:none;font-weight:600;font-size:14px;">← Voltar pros frameworks</a>
    </div>
  `;
}

// openFramework agora NAVEGA pra página do framework. Os comentários da Rafa vêm do
// Giscus do rodapé, que troca de thread por rota (term dash-framework-<id>). O client.js
// do Giscus só inicializa 1 instância por página — por isso a casa do framework é uma
// PÁGINA (não modal): a Rafa rola até o bloco de comentários e comenta ali.
function openFramework(id) {
  if (getFramework(id)) location.hash = '#framework/' + id;
}

function closeFramework() {
  const m = $('#modal');
  if (m) m.classList.remove('active');
  document.body.style.overflow = '';
}

// ================================================================
// PRODUTOS
// ================================================================
// ================================================================
// JORNADA · página detalhada de cada etapa da jornada do aluno
// ================================================================
function renderJornada(id) {
  // Diagnóstico e Plano Mestre: conteúdo canônico (atual) vive em ENTREGAVEIS.
  // A Jornada é a casa oficial — renderiza o conteúdo rico com moldura de jornada.
  if (REDIRECT_ENTREGAVEL_JORNADA.includes(id) && typeof ENTREGAVEIS !== 'undefined' && ENTREGAVEIS[id]) {
    return renderEntregavel(id, { jornada: true });
  }

  const j = JORNADA_DETALHADA && JORNADA_DETALHADA[id];
  if (!j) return renderNotFound();

  const statusBadge = j.status === 'pronto' ? '✓ Pronto'
    : j.status === 'parcial' ? '◐ Parcial'
    : '○ A construir';
  const statusColor = j.status === 'pronto' ? 'var(--status-pronto)'
    : j.status === 'parcial' ? 'var(--status-parcial)'
    : 'var(--txt-2)';

  const statusItem = (s) => {
    if(s.includes('pronto')) return { cor:'var(--status-pronto)', label:'Pronto', bg:'rgba(90,122,60,0.12)' };
    if(s.includes('em construção')) return { cor:'var(--status-parcial)', label:'Em construção', bg:'rgba(199,90,44,0.12)' };
    return { cor:'var(--txt-2)', label:'A criar', bg:'rgba(14,15,13,0.06)' };
  };

  // Header comum
  let html = `
    <div class="page-head" style="margin-bottom:20px;">
      <div class="breadcrumb"><a href="#produto/dois-z-level">2Z Level</a> <span class="sep">/</span> Jornada <span class="sep">/</span> ${esc(j.nome)}</div>
    </div>

    <div class="trilha-hero" style="background:var(--verde);">
      <div class="trilha-hero-cat">${esc(j.subtitulo)}</div>
      <h1 class="trilha-hero-name">${esc(j.nome)}</h1>
      <p class="trilha-hero-frase">"${esc(j.objetivo)}"</p>
      <div class="trilha-hero-meta">
        <div class="meta-block"><span class="meta-label">Duração</span><span class="meta-value">${esc(j.duracao)}</span></div>
        <div class="meta-block"><span class="meta-label">Status</span><span class="meta-value" style="color:${statusColor};">${statusBadge}</span></div>
      </div>
    </div>

    ${j.principio ? `
      <div class="lacunas-box" style="margin-bottom:24px;">
        <div class="lacunas-label">Princípio fundador</div>
        <p style="font-family:var(--serif);font-style:italic;font-size:22px;line-height:1.35;color:var(--cream);margin:0;max-width:780px;">"${esc(j.principio)}"</p>
      </div>
    ` : ''}

    <div class="section">
      <div class="section-title">Papéis · quem faz o quê</div>
      <h2 class="section-h">A divisão de responsabilidades</h2>
      <div class="frameworks-grid">
        ${j.papeis.map(p => `
          <div class="framework-card">
            <div class="fw-nome" style="font-size:18px;">${esc(p.quem)}</div>
            <div class="fw-tecnico" style="margin-top:8px;">${esc(p.papel)}</div>
          </div>
        `).join('')}
      </div>
    </div>
  `;

  // Processo (passos)
  if (j.processo && j.processo.length) {
    html += `
      <div class="section">
        <div class="section-title">Processo passo a passo</div>
        <h2 class="section-h">Como acontece na prática</h2>
        ${j.processo.map((p, i) => `
          <div style="display:grid;grid-template-columns:140px 1fr;gap:24px;padding:18px 0;border-bottom:1px solid var(--linha);${i === j.processo.length - 1 ? 'border-bottom:none;' : ''}">
            <div style="font-family:var(--mono);font-size:11px;letter-spacing:0.18em;text-transform:uppercase;color:var(--laranja);font-weight:600;padding-top:2px;">${esc(p.dia || p.etapa)}</div>
            <div style="font-size:14.5px;line-height:1.6;color:var(--txt);">${esc(p.acao || p.desc)}</div>
          </div>
        `).join('')}
      </div>
    `;
  }

  // Checklist de ações (especial da Fundação)
  if (j.checklist_acoes && j.checklist_acoes.length) {
    html += `
      <div class="section">
        <div class="section-title">Checklist de ações concretas</div>
        <h2 class="section-h">${j.checklist_acoes.length} ações que o aluno executa em A Fundação</h2>
        <p class="section-sub">Cada ação tem um acelerador IA dedicado. O aluno não aprende a fazer do zero — usa o acelerador. <strong>O tempo dela é gasto fazendo só o que REALMENTE precisa ser ela.</strong></p>

        ${j.checklist_acoes.map(c => {
          const ac = c.acelerador;
          const st = statusItem(ac.status);
          return `
          <div style="background:#fff;border:1px solid var(--linha);border-radius:var(--radius-card);padding:24px 26px;margin-bottom:14px;">
            <div style="display:flex;justify-content:space-between;align-items:flex-start;gap:18px;margin-bottom:14px;">
              <div style="display:flex;align-items:center;gap:14px;">
                <span style="font-family:var(--serif);font-style:italic;font-size:32px;color:var(--laranja);line-height:1;">${esc(c.ordem)}</span>
                <h4 style="font-family:var(--serif);font-style:italic;font-size:22px;color:var(--preto);line-height:1.1;">${esc(c.acao)}</h4>
              </div>
              <span style="font-family:var(--mono);font-size:9.5px;letter-spacing:0.16em;text-transform:uppercase;color:${st.cor};background:${st.bg};padding:4px 9px;border-radius:3px;font-weight:600;white-space:nowrap;">${st.label}</span>
            </div>
            <p style="font-size:14px;color:var(--txt-2);line-height:1.55;margin-bottom:14px;">${esc(c.descricao)}</p>

            <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:12px;background:var(--cream-2);padding:14px 16px;border-radius:var(--radius);">
              <div>
                <div style="font-family:var(--mono);font-size:9px;letter-spacing:0.2em;text-transform:uppercase;color:var(--txt-2);margin-bottom:4px;">Tempo do aluno</div>
                <div style="font-size:13px;font-weight:600;">${esc(c.tempo_aluna)}</div>
              </div>
              <div>
                <div style="font-family:var(--mono);font-size:9px;letter-spacing:0.2em;text-transform:uppercase;color:var(--txt-2);margin-bottom:4px;">Acelerador IA</div>
                <div style="font-size:13px;font-weight:600;color:var(--verde);">${esc(ac.nome)}</div>
                <div style="font-size:11.5px;color:var(--txt-2);margin-top:3px;line-height:1.4;">${esc(ac.desc)}</div>
              </div>
              <div>
                <div style="font-family:var(--mono);font-size:9px;letter-spacing:0.2em;text-transform:uppercase;color:var(--txt-2);margin-bottom:4px;">Rafa envolvida?</div>
                <div style="font-size:12.5px;line-height:1.4;">${esc(c.rafa_envolvida)}</div>
              </div>
            </div>
          </div>
        `}).join('')}
      </div>
    `;
  }

  // Ferramentas / Stack
  if (j.ferramentas_stack && j.ferramentas_stack.length) {
    html += `
      <div class="section">
        <div class="section-title">Ferramentas e stack</div>
        <h2 class="section-h">O que esta etapa usa</h2>
        <table class="extracao-tabela">
          <thead><tr><th>Ferramenta</th><th>Uso</th><th>Status</th></tr></thead>
          <tbody>
            ${j.ferramentas_stack.map(f => {
              const st = statusItem(f.status);
              return `
              <tr>
                <td style="font-weight:600;">${esc(f.item)}</td>
                <td style="font-size:13px;color:var(--txt-2);">${esc(f.uso)}</td>
                <td><span style="font-family:var(--mono);font-size:9.5px;letter-spacing:0.16em;text-transform:uppercase;color:${st.cor};background:${st.bg};padding:3px 8px;border-radius:3px;font-weight:600;white-space:nowrap;">${st.label}</span></td>
              </tr>
            `}).join('')}
          </tbody>
        </table>
      </div>
    `;
  }

  // O que falta criar
  if (j.a_criar && j.a_criar.length) {
    html += `
      <div class="section" style="background:var(--preto);color:var(--cream);border:none;">
        <div class="section-title" style="color:var(--laranja);">O que falta criar</div>
        <h2 class="section-h" style="color:var(--cream);">Roadmap desta etapa</h2>
        <ul style="margin-top:8px;">
          ${j.a_criar.map(item => `<li style="color:rgba(232,227,212,0.88);">${esc(item)}</li>`).join('')}
        </ul>
      </div>
    `;
  }

  // Output esperado
  if (j.output) {
    html += `
      <div class="section">
        <div class="section-title">Output esperado</div>
        <h2 class="section-h">Com o que o aluno sai</h2>
        <p style="font-family:var(--serif);font-style:italic;font-size:17px;line-height:1.55;color:var(--verde);max-width:780px;background:var(--cream);padding:20px 28px;border-left:3px solid var(--laranja);border-radius:0 var(--radius) var(--radius) 0;">${esc(j.output)}</p>
      </div>
    `;
  }

  // Nota Sell-Z
  if (j.nota_sell_z) {
    html += `
      <div class="section">
        <div class="section-title">No Sell-Z (cohort 8 semanas)</div>
        <h2 class="section-h">Esta etapa em outro produto</h2>
        <p style="font-size:14.5px;line-height:1.6;color:var(--txt);max-width:780px;">${esc(j.nota_sell_z)}</p>
      </div>
    `;
  }

  return html;
}

function renderProdutos() {
  return `
    <div class="page-head">
      <div class="breadcrumb">Bellz House <span class="sep">/</span> Produtos</div>
      <h1 class="page-title">Os <em>produtos</em><br>do ecossistema.</h1>
      <p class="page-lead">Três produtos, três jornadas distintas. O método (trilhas e frameworks) é o mesmo. O que muda é como cada produto entrega — onboarding, encontros, marcos, ticket, público.</p>
    </div>

    ${PRODUTOS.map(p => {
      const statusBadge = p.status === 'ativo'
        ? '<span class="produto-tag" style="background:rgba(90,122,60,0.15);color:var(--status-pronto);">✓ Ativo · jornada documentada</span>'
        : '<span class="produto-tag" style="background:rgba(199,90,44,0.12);color:var(--laranja);">◐ Em construção</span>';
      return `
      <div class="produto-card" onclick="window.location.hash='produto/${p.id}'" style="cursor:pointer;transition:transform .15s,box-shadow .15s;" onmouseover="this.style.transform='translateY(-2px)';this.style.boxShadow='0 12px 28px rgba(14,15,13,0.08)';" onmouseout="this.style.transform='';this.style.boxShadow='';">
        <div class="produto-card-head">
          <div>
            ${statusBadge}
            <h2 class="produto-nome" style="margin-top:8px;">${esc(p.nome)}</h2>
          </div>
          <span style="font-family:var(--mono);font-size:11px;letter-spacing:0.18em;text-transform:uppercase;color:var(--laranja);font-weight:600;">Abrir página →</span>
        </div>
        <p class="produto-puv">${esc(p.promessa)}</p>
        <div class="produto-meta">
          <div class="meta-item"><div class="meta-label">Público</div><div class="meta-value">${esc(p.publico)}</div></div>
          <div class="meta-item"><div class="meta-label">Ticket</div><div class="meta-value">${esc(p.ticket)}</div></div>
          <div class="meta-item"><div class="meta-label">Quando</div><div class="meta-value">${esc(p.quando)}</div></div>
          <div class="meta-item"><div class="meta-label">Trilhas cobertas</div><div class="meta-value">${esc(p.trilhas_cobertas)}</div></div>
        </div>
      </div>
    `}).join('')}

    <div class="section">
      <div class="section-title">Comparativo</div>
      <h2 class="section-h">Os três lado a lado</h2>
      <table class="extracao-tabela">
        <thead><tr><th>—</th><th>2Z Level</th><th>Sell-Z</th><th>Imersão</th></tr></thead>
        <tbody>
          <tr><td style="font-weight:600;">Persona</td><td>Fernanda · R$35-150k</td><td>Ana · R$10-35k</td><td>Topo de funil</td></tr>
          <tr><td style="font-weight:600;">Formato</td><td>Mentoria contínua · 3 enc/mês</td><td>Cohort 8 semanas</td><td>Evento presencial anual</td></tr>
          <tr><td style="font-weight:600;">Ticket</td><td>R$20.4k-22.8k/ano</td><td>R$1k-3k</td><td>A definir</td></tr>
          <tr><td style="font-weight:600;">Foco</td><td>Advisory estratégico</td><td>Implementação guiada</td><td>Imersão diagnóstica</td></tr>
          <tr><td style="font-weight:600;">Status</td><td>Ativo · 26 alunos</td><td>Em construção · lançamento jul/26</td><td>Em construção · 2026</td></tr>
        </tbody>
      </table>
    </div>
  `;
}

// ================================================================
// PLANO DE EXTRAÇÃO
// ================================================================
function renderExtracao() {
  return `
    <div class="page-head">
      <div class="breadcrumb">Bellz House <span class="sep">/</span> Plano de Extração</div>
      <h1 class="page-title">O <em>plano</em> de extração<br>do método.</h1>
      <p class="page-lead">Como vamos transformar o conhecimento tácito da Rafa em método documentado — sem comer a agenda dela.</p>
    </div>

    <div class="section" style="background:var(--preto);color:var(--cream);border:none;">
      <div class="section-title" style="color:var(--laranja);">Estratégia</div>
      <h2 class="section-h" style="color:var(--cream);">Combinação de 3 fontes</h2>
      <p style="font-size:15px;line-height:1.6;color:rgba(232,227,212,0.88);max-width:720px;">${esc(EXTRACAO.observacao)}</p>
      <div style="margin-top:20px;font-family:var(--mono);font-size:11px;letter-spacing:0.18em;text-transform:uppercase;color:var(--laranja);">Tempo total estimado da Rafa em junho: <strong>${esc(EXTRACAO.total_rafa)}</strong></div>
    </div>

    <div class="section">
      <div class="section-title">Blocos de revisão</div>
      <h2 class="section-h">Validação dos frameworks por trilha</h2>
      <table class="extracao-tabela">
        <thead><tr><th>Sessão</th><th>Foco</th><th>Frameworks</th><th>Fonte</th><th>Tempo da Rafa</th></tr></thead>
        <tbody>
          ${EXTRACAO.sessoes.map(s => `
            <tr>
              <td style="font-family:var(--mono);font-size:11px;letter-spacing:0.1em;color:var(--laranja);font-weight:600;white-space:nowrap;">${esc(s.sessao)}</td>
              <td><strong>${esc(s.foco)}</strong></td>
              <td style="font-size:12.5px;color:var(--txt-2);">${esc(s.frameworks)}</td>
              <td style="font-size:12px;color:var(--txt-2);font-style:italic;">${esc(s.fonte)}</td>
              <td style="font-family:var(--mono);font-size:11px;white-space:nowrap;">${esc(s.duracao_rafa)}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>

    <div class="section">
      <div class="section-title">Material já disponível</div>
      <h2 class="section-h">Fontes que a Inception tem em mãos</h2>
      ${ul(EXTRACAO.fontes_disponiveis)}
    </div>

    <div class="section">
      <div class="section-title">De-para a fazer com a Rafa</div>
      <h2 class="section-h">O que precisamos pedir</h2>
      <p class="section-sub">${esc(EXTRACAO.de_para_pedido.descricao)}</p>
      <table class="extracao-tabela">
        <thead><tr><th>Tema · framework</th><th>Status da fonte</th><th>Ação a fazer</th></tr></thead>
        <tbody>
          ${EXTRACAO.de_para_pedido.temas.map(t => {
            const statusColor = t.status_fonte === '?' ? 'var(--txt-2)'
              : t.status_fonte === 'sem material' ? 'var(--laranja)'
              : 'var(--status-pronto)';
            return `
            <tr>
              <td><strong>${esc(t.tema)}</strong></td>
              <td style="font-family:var(--mono);font-size:11px;color:${statusColor};">${esc(t.status_fonte)}</td>
              <td style="font-size:12.5px;color:var(--txt-2);">${esc(t.acao)}</td>
            </tr>
          `}).join('')}
        </tbody>
      </table>
      <div style="background:var(--verde);color:var(--cream);padding:18px 22px;border-radius:var(--radius);margin-top:18px;font-size:13.5px;line-height:1.55;">
        <strong style="font-family:var(--mono);font-size:10px;letter-spacing:0.22em;text-transform:uppercase;color:var(--laranja);display:block;margin-bottom:6px;">Como a Rafa preenche</strong>
        Para cada tema, ela só precisa responder uma das três opções: <strong>(1)</strong> "mentoria do dia X já cobre", <strong>(2)</strong> "tenho em [Notion/Drive], te mando link", ou <strong>(3)</strong> "preciso gravar áudio do zero". Tempo estimado dela: 30-45 min assíncrono.
      </div>
    </div>
  `;
}

// ================================================================
// APROVAÇÕES
// ================================================================
function renderAprovacoes() {
  return `
    <div class="page-head">
      <div class="breadcrumb">Bellz House <span class="sep">/</span> Aprovações</div>
      <h1 class="page-title">Registro vivo<br>de <em>aprovações.</em></h1>
      <p class="page-lead">O que já foi validado, o que aguarda validação, o que está pendente de decisão. Atualizado a cada sessão.</p>
    </div>

    <div class="aprov-grid">
      <div class="aprov-col validado">
        <h4>✓ Validados</h4>
        <ul>${APROVACOES.validados.map(v => `<li><strong>${esc(v.item)}</strong><br><span style="font-family:var(--mono);font-size:10px;color:var(--txt-3);letter-spacing:0.1em;">${esc(v.data)}</span></li>`).join('')}</ul>
      </div>
      <div class="aprov-col aguardando">
        <h4>◐ Aguardando validação</h4>
        <ul>${APROVACOES.aguardando.map(i => `<li>${esc(i)}</li>`).join('')}</ul>
      </div>
      <div class="aprov-col pendente">
        <h4>○ Decisões pendentes</h4>
        <ul>${APROVACOES.pendentes.map(i => `<li>${esc(i)}</li>`).join('')}</ul>
      </div>
    </div>
  `;
}

// ================================================================
// ESCOPO INCEPTION · o que está dentro e fora desta consultoria
// ================================================================
function statusBadgeGeneric(s) {
  if (!s) return { cor:'var(--txt-2)', label:'—', bg:'rgba(14,15,13,0.06)' };
  const low = String(s).toLowerCase();
  if (low.includes('pronto')) return { cor:'var(--status-pronto)', label:s, bg:'rgba(90,122,60,0.12)' };
  if (low.includes('em construção') || low.includes('parcial')) return { cor:'var(--status-parcial)', label:s, bg:'rgba(199,90,44,0.12)' };
  if (low.includes('a definir')) return { cor:'var(--laranja)', label:s, bg:'rgba(199,90,44,0.18)' };
  if (low.includes('rafa produz') || low.includes('⚐')) return { cor:'#8b6f3a', label:s, bg:'rgba(139,111,58,0.12)' };
  return { cor:'var(--txt-2)', label:s, bg:'rgba(14,15,13,0.06)' };
}

function renderEscopo() {
  const e = ESCOPO_INCEPTION;
  const statusBadge = statusBadgeGeneric;

  return `
    <div class="page-head" style="margin-bottom:24px;">
      <div class="breadcrumb">Inception <span class="sep">/</span> Escopo desta consultoria</div>
      <h1 class="page-h">Escopo da Inception</h1>
      <p class="page-lead">O que entra, o que não entra e como a gente prioriza. Esta página existe pra calibrar expectativa — produto robusto, equipe enxuta, foco em uma coisa por vez.</p>
    </div>

    <div style="background:var(--cream-2);padding:22px 26px;border-radius:var(--radius);border-left:4px solid var(--laranja);margin-bottom:32px;">
      <div style="font-size:12px;text-transform:uppercase;letter-spacing:0.08em;color:var(--laranja);margin-bottom:8px;font-weight:700;">Mensagem para a Rafa</div>
      <p style="font-family:var(--serif);font-style:italic;font-size:17px;line-height:1.55;color:var(--verde);margin:0;">"${esc(e.mensagem_rafa)}"</p>
      <div style="font-size:11px;color:var(--txt-2);margin-top:10px;">— Maiara · ${esc(e.versao)}</div>
    </div>

    ${e.principio_estrategico ? `
    <div class="section" style="margin-bottom:40px;background:var(--verde);color:var(--cream);padding:32px;border-radius:var(--radius);">
      <div style="font-size:12px;text-transform:uppercase;letter-spacing:0.08em;color:var(--laranja);margin-bottom:10px;font-weight:700;">⚐ Princípio estratégico</div>
      <h2 style="margin:0 0 20px 0;font-family:var(--serif);font-size:28px;line-height:1.25;color:var(--cream);">${esc(e.principio_estrategico.titulo)}</h2>
      <div style="background:rgba(232,227,212,0.08);padding:18px 22px;border-radius:var(--radius);border-left:3px solid var(--laranja);margin-bottom:20px;">
        <div style="font-size:11px;text-transform:uppercase;letter-spacing:0.06em;color:var(--laranja);margin-bottom:6px;font-weight:700;">Evidência</div>
        <p style="margin:0;font-size:15px;line-height:1.6;color:var(--cream);">${esc(e.principio_estrategico.evidencia)}</p>
      </div>
      <div style="background:rgba(232,227,212,0.12);padding:18px 22px;border-radius:var(--radius);margin-bottom:20px;">
        <div style="font-size:11px;text-transform:uppercase;letter-spacing:0.06em;color:var(--laranja);margin-bottom:6px;font-weight:700;">Regra</div>
        <p style="margin:0;font-size:15px;line-height:1.6;color:var(--cream);font-weight:600;">${esc(e.principio_estrategico.regra)}</p>
      </div>
      <div style="margin-bottom:20px;">
        <div style="font-size:11px;text-transform:uppercase;letter-spacing:0.06em;color:var(--laranja);margin-bottom:8px;font-weight:700;">O que isso protege</div>
        <ul style="margin:0;padding-left:22px;">
          ${e.principio_estrategico.o_que_isso_protege.map(p => `<li style="margin-bottom:6px;font-size:14px;line-height:1.55;color:var(--cream);">${esc(p)}</li>`).join('')}
        </ul>
      </div>
      <div>
        <div style="font-size:11px;text-transform:uppercase;letter-spacing:0.06em;color:var(--laranja);margin-bottom:10px;font-weight:700;">Divisão de papéis</div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:14px;">
          ${e.principio_estrategico.divisao_papeis.map(d => `
            <div style="background:rgba(232,227,212,0.12);padding:16px 18px;border-radius:var(--radius);">
              <div style="font-weight:700;color:var(--laranja);margin-bottom:6px;font-size:14px;">${esc(d.papel)}</div>
              <p style="margin:0;font-size:13.5px;line-height:1.55;color:var(--cream);">${esc(d.faz)}</p>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
    ` : ''}

    <div class="section" style="margin-bottom:40px;">
      <div class="section-title" style="color:var(--status-pronto);">✓ DENTRO DO ESCOPO</div>
      <h2 class="section-h">${esc(e.dentro_escopo.titulo)}</h2>

      ${e.dentro_escopo.grupos.map(g => `
        <div style="margin-top:24px;">
          <h3 style="font-size:16px;color:var(--verde);margin:0 0 14px 0;text-transform:uppercase;letter-spacing:0.04em;">${esc(g.grupo)}</h3>
          ${typeof g.itens[0] === 'string'
            ? `<ul style="margin:0;padding-left:22px;">${g.itens.map(i => `<li style="font-size:15px;line-height:1.7;margin-bottom:6px;">${esc(i)}</li>`).join('')}</ul>`
            : `<div style="display:grid;gap:14px;">${g.itens.map(i => {
                const sb = statusBadge(i.status);
                return `
                <div style="background:var(--cream-2);padding:18px 20px;border-radius:var(--radius);border-left:3px solid var(--verde);">
                  <div style="display:flex;justify-content:space-between;align-items:flex-start;gap:14px;margin-bottom:8px;flex-wrap:wrap;">
                    <div style="flex:1;min-width:240px;">
                      <div style="font-size:11px;color:var(--txt-2);margin-bottom:4px;">PRIORIDADE ${i.prioridade}</div>
                      <h4 style="margin:0;font-size:16px;color:var(--verde);">${esc(i.nome)}</h4>
                    </div>
                    <span style="background:${sb.bg};color:${sb.cor};padding:5px 11px;border-radius:99px;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.04em;white-space:nowrap;">${sb.label}</span>
                  </div>
                  <p style="margin:0;font-size:14px;line-height:1.55;color:var(--txt);">${esc(i.desc)}</p>
                </div>`;
              }).join('')}</div>`
          }
        </div>
      `).join('')}
    </div>

    <div class="section" style="margin-bottom:40px;">
      <div class="section-title" style="color:var(--laranja);">✗ FORA DO ESCOPO</div>
      <h2 class="section-h">${esc(e.fora_escopo.titulo)}</h2>
      <p style="font-size:14px;color:var(--txt-2);font-style:italic;margin-bottom:18px;">${esc(e.fora_escopo.aviso)}</p>
      <ul style="margin:0;padding-left:0;list-style:none;">
        ${e.fora_escopo.itens.map(i => `
          <li style="padding:12px 16px;margin-bottom:8px;background:rgba(199,90,44,0.06);border-left:3px solid var(--laranja);border-radius:0 var(--radius) var(--radius) 0;font-size:15px;line-height:1.55;color:var(--txt);">
            <span style="color:var(--laranja);font-weight:700;margin-right:8px;">✗</span>${esc(i)}
          </li>
        `).join('')}
      </ul>
    </div>

    <div class="section" style="margin-bottom:40px;">
      <div class="section-title">Princípios de priorização</div>
      <h2 class="section-h">Como decidimos onde focar</h2>
      <ol style="margin:0;padding-left:24px;">
        ${e.principio_priorizacao.map(p => `<li style="font-size:15px;line-height:1.7;margin-bottom:8px;color:var(--txt);">${esc(p)}</li>`).join('')}
      </ol>
    </div>

    <div class="section">
      <div class="section-title">Backlog futuro (para a 2ª etapa OU execução interna da Rafa)</div>
      <h2 class="section-h">Ideias registradas — não esquecidas, não executadas agora</h2>
      <p style="font-size:14px;color:var(--txt-2);font-style:italic;margin-bottom:18px;">Aqui ficam as demandas que surgiram durante a consultoria mas que extrapolam o escopo inicial. A Rafa decide depois: executa internamente, contrata outro fornecedor, ou orça com a Inception uma 2ª etapa.</p>
      <div style="display:grid;gap:10px;">
        ${e.backlog_futuro.map(i => `
          <div style="padding:12px 16px;background:var(--cream-2);border-radius:var(--radius);border-left:2px dashed var(--txt-2);font-size:14px;line-height:1.5;color:var(--txt);">
            <span style="color:var(--txt-2);font-weight:700;margin-right:8px;">↪</span>${esc(i)}
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

// ================================================================
// ENTREGAS · lista geral de todos os entregáveis
// ================================================================
function renderEntregas() {
  const itens = Object.values(ENTREGAVEIS);

  // Agrupar por categoria
  const grupos = {};
  itens.forEach(e => {
    if (!grupos[e.categoria]) grupos[e.categoria] = [];
    grupos[e.categoria].push(e);
  });

  // Ordem das categorias (Sistema Central primeiro)
  const ordemCategorias = ['Sistema Central','Documentação','Notion','Curseduca','IA','App Externo','Treinamento'];
  const gruposOrdenados = {};
  ordemCategorias.forEach(cat => {
    if (grupos[cat]) gruposOrdenados[cat] = grupos[cat];
  });
  // Adiciona qualquer outra categoria não listada
  Object.keys(grupos).forEach(cat => {
    if (!gruposOrdenados[cat]) gruposOrdenados[cat] = grupos[cat];
  });
  Object.keys(grupos).forEach(k => delete grupos[k]);
  Object.assign(grupos, gruposOrdenados);

  return `
    <div class="page-head" style="margin-bottom:24px;">
      <div class="breadcrumb">Inception <span class="sep">/</span> Entregas detalhadas</div>
      <h1 class="page-h">Entregas da consultoria</h1>
      <p class="page-lead">Uma página por entregável — clica em cada um pra ver: o que tem dentro, formato de cada item, como funciona e <strong>o que NÃO tem</strong> (alivia a ansiedade de "será que tá faltando?").</p>
    </div>

    ${Object.entries(grupos).map(([cat, lista]) => `
      <div class="section" style="margin-bottom:36px;">
        <div class="section-title">${esc(cat)}</div>
        <h2 class="section-h">${cat === 'Sistema Central' ? 'Coração do produto (Diagnóstico · Plano Mestre · Squad)' : cat === 'Notion' ? 'Sistemas operacionais (Notion)' : cat === 'Curseduca' ? 'Plataforma de aprendizado (Curseduca)' : cat === 'IA' ? 'Inteligências artificiais' : cat === 'Documentação' ? 'Documentação do método' : cat === 'App Externo' ? 'App de métricas (Marco + Rafa · em dev)' : cat === 'Treinamento' ? 'Entrega final (treinamento Rafa + CP)' : cat}</h2>
        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(320px,1fr));gap:16px;margin-top:20px;">
          ${lista.map(e => {
            const sb = statusBadgeGeneric(e.status);
            const href = REDIRECT_ENTREGAVEL_JORNADA.includes(e.id) ? `#jornada/${e.id}` : `#entregavel/${e.id}`;
            return `
              <a href="${href}" style="text-decoration:none;color:inherit;">
                <div style="background:var(--cream-2);padding:22px;border-radius:var(--radius);border-left:3px solid var(--verde);transition:transform .15s,box-shadow .15s;cursor:pointer;height:100%;" onmouseover="this.style.transform='translateY(-2px)';this.style.boxShadow='0 12px 28px rgba(14,15,13,0.08)';" onmouseout="this.style.transform='';this.style.boxShadow='';">
                  <div style="display:flex;align-items:flex-start;gap:14px;margin-bottom:12px;">
                    <div style="font-size:28px;line-height:1;">${e.icone || '📦'}</div>
                    <div style="flex:1;">
                      <div style="font-size:10.5px;color:var(--txt-2);margin-bottom:2px;text-transform:uppercase;letter-spacing:0.05em;">Prioridade ${e.prioridade}</div>
                      <h3 style="margin:0;font-size:16px;color:var(--verde);">${esc(e.nome)}</h3>
                    </div>
                  </div>
                  <p style="margin:0 0 12px 0;font-size:13px;line-height:1.55;color:var(--txt);">${esc(e.visao_geral.slice(0,160))}${e.visao_geral.length > 160 ? '…' : ''}</p>
                  <div style="display:flex;justify-content:space-between;align-items:center;gap:10px;flex-wrap:wrap;">
                    <span style="background:${sb.bg};color:${sb.cor};padding:4px 10px;border-radius:99px;font-size:10.5px;font-weight:700;text-transform:uppercase;letter-spacing:0.04em;">${esc(sb.label)}</span>
                    <span style="font-size:12px;color:var(--laranja);font-weight:600;">Ver detalhes →</span>
                  </div>
                </div>
              </a>
            `;
          }).join('')}
        </div>
      </div>
    `).join('')}
  `;
}

// ================================================================
// ENTREGÁVEL · página detalhada de UM entregável
// ================================================================
function renderEntregavel(id, opts = {}) {
  const e = ENTREGAVEIS && ENTREGAVEIS[id];
  if (!e) return renderNotFound();

  const sb = statusBadgeGeneric(e.status);
  const fromJornada = opts.jornada === true;

  // Moldura de jornada (quando a página é acessada como etapa da jornada do aluno)
  const JORNADA_STEPS = [
    { id:'onboarding',     label:'01 · Onboarding' },
    { id:'diagnostico-360',label:'02 · Diagnóstico 360º' },
    { id:'plano-mestre',   label:'03 · Plano Mestre' },
    { id:'a-fundacao',     label:'A Fundação' }
  ];
  const breadcrumb = fromJornada
    ? `<div class="breadcrumb"><a href="#produto/dois-z-level" style="color:var(--laranja);">2Z Level</a> <span class="sep">/</span> Jornada do Aluno <span class="sep">/</span> ${esc(e.nome)}</div>`
    : `<div class="breadcrumb"><a href="#entregas" style="color:var(--laranja);">Entregas</a> <span class="sep">/</span> ${esc(e.categoria)} <span class="sep">/</span> ${esc(e.nome)}</div>`;
  const stepper = fromJornada ? `
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin-bottom:20px;">
      ${JORNADA_STEPS.map(s => `
        <a href="#jornada/${s.id}" style="text-decoration:none;font-size:12px;font-weight:600;padding:7px 14px;border-radius:99px;white-space:nowrap;${s.id===id ? 'background:var(--verde);color:var(--cream);' : 'background:var(--cream-2);color:var(--txt-2);border:1px solid var(--cream-3,rgba(14,15,13,0.10));'}">${esc(s.label)}</a>
      `).join('')}
    </div>` : '';

  return `
    <div class="page-head" style="margin-bottom:${fromJornada?'16px':'24px'};">
      ${breadcrumb}
    </div>
    ${stepper}

    <div style="background:var(--verde);color:var(--cream);padding:32px;border-radius:var(--radius);margin-bottom:32px;">
      <div style="display:flex;align-items:center;gap:18px;margin-bottom:16px;">
        <div style="font-size:48px;line-height:1;">${e.icone || '📦'}</div>
        <div style="flex:1;">
          <div style="font-size:11px;text-transform:uppercase;letter-spacing:0.08em;color:var(--laranja);margin-bottom:4px;font-weight:700;">${esc(e.categoria)} · Prioridade ${e.prioridade}</div>
          <h1 style="margin:0;font-family:var(--serif);font-size:32px;line-height:1.2;color:var(--cream);">${esc(e.nome)}</h1>
        </div>
        <span style="background:${sb.bg};color:${sb.cor};padding:6px 14px;border-radius:99px;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.04em;white-space:nowrap;">${esc(sb.label)}</span>
      </div>
      <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin-top:18px;padding-top:18px;border-top:1px solid rgba(232,227,212,0.18);">
        <div>
          <div style="font-size:10.5px;text-transform:uppercase;letter-spacing:0.06em;color:var(--laranja);margin-bottom:4px;font-weight:700;">Público</div>
          <div style="font-size:14px;color:var(--cream);">${esc(e.publico)}</div>
        </div>
        <div>
          <div style="font-size:10.5px;text-transform:uppercase;letter-spacing:0.06em;color:var(--laranja);margin-bottom:4px;font-weight:700;">Plataforma</div>
          <div style="font-size:14px;color:var(--cream);">${esc(e.plataforma)}</div>
        </div>
      </div>
    </div>

    <div class="section" style="margin-bottom:36px;">
      <div class="section-title">Visão geral</div>
      <p style="font-size:16px;line-height:1.65;color:var(--txt);margin:0 0 ${e.link_externo?'20px':'0'} 0;max-width:780px;">${esc(e.visao_geral)}</p>
      ${e.instrucao_rafa ? `<div style="background:rgba(199,90,44,0.10);border-left:3px solid var(--laranja);border-radius:0 var(--radius) var(--radius) 0;padding:14px 18px;margin:0 0 18px 0;"><strong style="color:var(--laranja);font-size:11px;text-transform:uppercase;letter-spacing:.06em;">⚐ Para a Rafa</strong><p style="margin:6px 0 0 0;font-size:14px;line-height:1.55;color:var(--txt);">${esc(e.instrucao_rafa)}</p></div>` : ''}
      ${e.link_externo ? `<a href="${e.link_externo.url}" target="_blank" rel="noopener" style="display:inline-flex;align-items:center;gap:9px;background:var(--laranja);color:#fff;padding:14px 26px;border-radius:99px;text-decoration:none;font-weight:600;font-size:15px;box-shadow:0 10px 24px rgba(199,90,44,0.28);">${esc(e.link_externo.label)} →</a>
      <p style="font-size:12.5px;color:var(--txt-2);margin-top:10px;">Abre em nova aba · publicado em inceptionxp.com (provisório, migra pro domínio da Rafa depois)</p>` : ''}
    </div>

    ${e.fluxo_aluno && e.fluxo_aluno.length ? `
    <div class="section" style="margin-bottom:36px;">
      <div class="section-title">O fluxo, do início ao fim</div>
      <h2 class="section-h">O que acontece depois que o aluno responde</h2>
      <ol style="margin:14px 0 0 0;padding:0;list-style:none;counter-reset:fl;">
        ${e.fluxo_aluno.map(p=>`<li style="counter-increment:fl;position:relative;padding:12px 0 12px 44px;border-bottom:1px solid var(--cream-3,rgba(14,15,13,0.08));font-size:15px;line-height:1.55;color:var(--txt);"><span style="position:absolute;left:0;top:12px;width:28px;height:28px;border-radius:50%;background:var(--verde);color:var(--cream);display:grid;place-items:center;font-weight:700;font-size:13px;content:counter(fl);">${e.fluxo_aluno.indexOf(p)+1}</span>${esc(p)}</li>`).join('')}
      </ol>
    </div>` : ''}

    <div class="section" style="margin-bottom:36px;">
      <div class="section-title">Conteúdo detalhado</div>
      <h2 class="section-h">O que tem dentro</h2>
      <p style="font-size:14px;color:var(--txt-2);font-style:italic;margin-bottom:18px;">Item × formato × descrição × status atual. Status "Rafa produz" = conteúdo final é responsabilidade da expert; Inception entrega briefing/estrutura.</p>
      <div style="display:grid;gap:14px;">
        ${e.conteudo.map(c => {
          const csb = statusBadgeGeneric(c.status);
          return `
            <div style="background:var(--cream-2);padding:18px 22px;border-radius:var(--radius);border-left:3px solid var(--verde);">
              <div style="display:flex;justify-content:space-between;align-items:flex-start;gap:14px;margin-bottom:8px;flex-wrap:wrap;">
                <div style="flex:1;min-width:240px;">
                  <h4 style="margin:0 0 4px 0;font-size:15.5px;color:var(--verde);">${esc(c.item)}</h4>
                  <div style="font-size:12px;color:var(--txt-2);text-transform:uppercase;letter-spacing:0.04em;">${esc(c.formato)}</div>
                </div>
                <span style="background:${csb.bg};color:${csb.cor};padding:4px 10px;border-radius:99px;font-size:10.5px;font-weight:700;text-transform:uppercase;letter-spacing:0.04em;white-space:nowrap;">${esc(csb.label)}</span>
              </div>
              <p style="margin:0;font-size:14px;line-height:1.6;color:var(--txt);">${esc(c.desc)}</p>
            </div>
          `;
        }).join('')}
      </div>
    </div>

    <div class="section" style="margin-bottom:36px;background:var(--cream-2);padding:24px 28px;border-radius:var(--radius);border-left:3px solid var(--laranja);">
      <div class="section-title" style="color:var(--laranja);">Como funciona na prática</div>
      ${formatarPassos(e.como_funciona)}
    </div>

    <div class="section">
      <div class="section-title" style="color:var(--laranja);">O que NÃO tem neste entregável</div>
      <h2 class="section-h">Pra deixar claro o limite</h2>
      <p style="font-size:14px;color:var(--txt-2);font-style:italic;margin-bottom:18px;">Esses itens não estão aqui — ou ficam em OUTRO entregável (link), ou estão no backlog futuro (2ª etapa / execução interna da Rafa).</p>
      <ul style="margin:0;padding-left:0;list-style:none;">
        ${e.o_que_NAO_tem.map(i => `
          <li style="padding:10px 14px;margin-bottom:6px;background:rgba(199,90,44,0.06);border-left:3px solid var(--laranja);border-radius:0 var(--radius) var(--radius) 0;font-size:14px;line-height:1.5;color:var(--txt);">
            <span style="color:var(--laranja);font-weight:700;margin-right:8px;">✗</span>${esc(i)}
          </li>
        `).join('')}
      </ul>
    </div>

    <div style="margin-top:36px;padding-top:24px;border-top:1px solid var(--cream-3);">
      <a href="#entregas" style="color:var(--laranja);text-decoration:none;font-size:14px;font-weight:600;">← Voltar pra todas as entregas</a>
      <span style="margin:0 12px;color:var(--txt-2);">·</span>
      <a href="#escopo" style="color:var(--laranja);text-decoration:none;font-size:14px;font-weight:600;">Ver escopo geral</a>
    </div>
  `;
}

// ================================================================
// PLANO DE ENSINO · aulas da Curseduca por trilha
// ================================================================
function renderPlanoEnsino() {
  const pe = PLANO_ENSINO;
  const totalAulas = pe.trilhas.reduce((s,t)=>s+t.aulas.length,0);

  return `
    <div class="page-head" style="margin-bottom:24px;">
      <div class="breadcrumb">Método <span class="sep">/</span> Plano de Ensino</div>
      <h1 class="page-h">Plano de Ensino</h1>
      <p class="page-lead">As <strong>${totalAulas} aulas</strong> que vão na Curseduca, organizadas pelas 7 trilhas. Cada aula nasce de um framework do método. A Inception entrega o briefing (tema + objetivo + framework base); <strong>você grava o conteúdo</strong>.</p>
      <p style="font-size:13px;color:var(--txt-2);font-style:italic;margin-top:8px;">${esc(pe.legenda)}</p>
    </div>

    <div style="background:var(--cream-2);border-left:3px solid var(--laranja);border-radius:0 var(--radius) var(--radius) 0;padding:16px 20px;margin-bottom:32px;">
      <p style="font-size:14px;line-height:1.6;color:var(--txt);margin:0;">${esc(pe.intro)}</p>
    </div>

    ${pe.trilhas.map(t => `
      <div class="section" style="margin-bottom:34px;">
        <div class="section-title" style="color:var(--${t.cor==='laranja'?'laranja':t.cor==='azul'?'azul':'verde'},var(--laranja));">Trilha · ${esc(t.nome)}</div>
        <h2 class="section-h">${t.aulas.length} aulas</h2>
        <div style="display:flex;flex-direction:column;gap:12px;margin-top:16px;">
          ${t.aulas.map(a => `
            <div style="background:var(--cream);border:1px solid var(--cream-3,rgba(14,15,13,0.08));border-radius:var(--radius);padding:18px 22px;${a.convidado?'border-left:3px solid var(--azul);':a.gap?'border-left:3px solid var(--laranja);':''}">
              <div style="display:flex;align-items:flex-start;gap:14px;flex-wrap:wrap;">
                <span style="font-family:var(--mono,monospace);font-size:12px;font-weight:700;color:var(--laranja);background:rgba(199,90,44,0.10);padding:4px 10px;border-radius:7px;white-space:nowrap;">${esc(a.num)}</span>
                <div style="flex:1;min-width:240px;">
                  <h3 style="font-family:var(--serif);font-size:17px;color:var(--verde);margin:0 0 4px 0;font-weight:600;">${esc(a.titulo)} ${a.convidado?'<span style="font-size:11px;color:var(--azul);font-weight:600;">👤 convidado</span>':'<span style="font-size:11px;color:var(--txt-2);">🎬</span>'}</h3>
                  <p style="font-size:14px;line-height:1.55;color:var(--txt);margin:0 0 8px 0;"><strong style="color:var(--txt-2);font-size:11px;text-transform:uppercase;letter-spacing:.04em;">Ao fim, o aluno consegue:</strong> ${esc(a.objetivo)}</p>
                  <div style="display:flex;gap:14px;flex-wrap:wrap;font-size:12px;color:var(--txt-2);">
                    <span>🧩 ${esc(a.framework)}</span>
                    <span>⏱ ${esc(a.dur)}</span>
                    ${a.gap?'<span style="color:var(--laranja);font-weight:600;">⚠ depende de input da Rafa (desligamento)</span>':''}
                  </div>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `).join('')}
  `;
}

// ================================================================
// NOT FOUND
// ================================================================
function renderNotFound() {
  return `
    <div class="placeholder-box">
      <h3>Página não encontrada</h3>
      <p>Volte ao <a href="#home" style="color:var(--laranja);">início</a> ou use a navegação à esquerda.</p>
    </div>
  `;
}

// ================================================================
// INIT
// ================================================================
window.addEventListener('hashchange', handleRoute);
window.addEventListener('load', () => { initSidebarToggles(); handleRoute(); });

// Expose modal handlers globally
window.openFramework = openFramework;
window.closeFramework = closeFramework;
