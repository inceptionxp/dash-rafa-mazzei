/* ================================================================
   DASHBOARD DATA · Rafaella Mazzei · Bellz House
   ----------------------------------------------------------------
   Como editar este arquivo:
   - Status válidos: 'pronto' · 'parcial' · 'extrair'
   - Categoria de trilha: 'pilar' · 'reforco'
   - Para mudar uma cor/paleta, edite assets/style.css
   - O cálculo de progresso global é automático (ver app.js)
   ================================================================ */

(function() {

const STATUS = {
  pronto:  { label:'Pronto',   icon:'✓', cor:'var(--status-pronto)' },
  parcial: { label:'Parcial',  icon:'◐', cor:'var(--status-parcial)' },
  extrair: { label:'Extrair',  icon:'○', cor:'var(--status-extrair)' }
};

// ================================================================
// ECOSSISTEMA BELLZ HOUSE
// ================================================================
const ECOSSISTEMA = {
  marca_mae: {
    id:'bellz-house',
    nome:'Bellz House',
    camada:'Empresa-mãe',
    funcao:'Ecossistema de soluções em negócios, vendas e gestão. Território dos negócios anti-ordinários.',
    puv:'Retiramos o empresário da arena do improviso e o posicionamos no governo do seu próprio negócio através de um ecossistema de soluções em negócios, vendas & gestão, onde o lucro deixa de ser uma aposta e se torna um projeto à prova de ansiedade.',
    tagline:'O território dos negócios anti-ordinários.',
    arquetipo:'Governante + Criador (com sombra do Rebelde)',
    tom:'Provocador, assertivo, analítico'
  },
  componentes:[
    { id:'rafa-mazzei', nome:'Rafa Mazzei', camada:'Pessoa · autoridade',
      funcao:'A expert por trás do método. Voz, presença e provocação.',
      puv:'Guio empresários decididos a romper o próprio teto rumo ao domínio do seu faturamento e liberdade.',
      tem_pagina:false },
    { id:'dois-z-level', nome:'2Z Level', camada:'Produto · avançado',
      funcao:'Mentoria em grupo contínua para empresários consolidados. Acompanhamento profundo, encontros recorrentes, garantia condicional.',
      puv:'Direcionamos o crescimento do seu negócio através de um modelo de conselho estratégico de alto nível, para que você assuma o domínio do seu legado sem que a escala dependa do seu sacrifício pessoal.',
      tem_pagina:true },
    { id:'sell-z', nome:'Sell-Z', camada:'Produto · intermediário',
      funcao:'Cohort de 8 semanas de aceleração comercial. Implementação guiada do método de vendas.',
      puv:'Aceleramos a sua virada como empresário através de um método de implementação guiada, para que você deixe o improviso de lado e assuma o controle das suas vendas.',
      tem_pagina:true },
    { id:'imersao', nome:'Imersão', camada:'Produto · captação',
      funcao:'Evento presencial pago anual. Topo de funil + primeiro contato direto com o método.',
      puv:'(Nome e PUV finais em definição.)',
      tem_pagina:true }
  ]
};

// ================================================================
// PERSONAS
// ================================================================
const PERSONAS = [
  {
    id:'ana',
    nome:'Ana',
    idade:36,
    perfil:'Prestadora de serviço · R$10-35k/mês',
    arquetipos:['advogada','arquiteta','nutricionista','personal','contadora','consultora'],
    vende_por:'indicação, feeling, achismo',
    dor:'Sabe que tem potencial mas não transforma em previsibilidade. Faturamento oscila.',
    busca:'Sell-Z',
    valoriza:['acompanhamento próximo','resultado concreto e rápido','sentir que não está sozinha','facilitadores tecnológicos'],
    evita:['grupos grandes','respostas genéricas','acompanhamento que ensina sem entrar no negócio']
  },
  {
    id:'fernanda',
    nome:'Fernanda',
    idade:42,
    perfil:'Dona de negócio consolidado · R$35-150k/mês',
    arquetipos:['advogada','consultora','médica','empresária técnica'],
    vende_por:'cresceu por heroísmo — tudo passa por ela',
    dor:'Crescimento chegou no teto. Sabe que precisa escalar sem comprometer qualidade.',
    busca:'2Z Level',
    valoriza:['profundidade','presença','clareza estratégica','ser tratado como empresário, não aluno'],
    evita:['grupos grandes','respostas genéricas','mentorias que ensinam sem entrar no negócio']
  }
];

// ================================================================
// TRILHAS
// ================================================================
const TRILHAS = [
  // ============ PILARES ============
  {
    id:'comercial',
    nome:'Comercial',
    categoria:'mestra',
    frase:'Do vender por feeling ao processo repetível',
    objetivo:'O aluno sai do "vender por feeling, fechamento exaustivo, faturamento oscilante" e instala um processo comercial repetível. Resultado: previsibilidade de receita.',
    quando_acionar:[
      'Faturamento oscila muito',
      'Não sabe a taxa de conversão',
      'Vende por feeling',
      'CRM inexistente ou subutilizado',
      'Trava no fechamento',
      'Pipeline opaco',
      'Cada conversa é uma performance nova'
    ],
    duracao:'3-4 meses',
    frameworks:['leitura-consciencia','venda-consultiva','qualificacao-lead','leitura-indicadores'],
    aulas:[
      { num:1, nome:'Da primeira conversa ao pix', ensina:'Conduzir uma sessão de venda consultiva completa', quem:'Rafa', entregavel:'Roteiro de venda + playbook de condução', status:'extrair' },
      { num:2, nome:'Transformando o "vou pensar" em decisão', ensina:'Antecipar e contornar objeções', quem:'Rafa', entregavel:'Banco de objeções + IA Simulador de Objeções', status:'extrair' },
      { num:3, nome:'Enxergando onde o dinheiro trava no funil', ensina:'Estruturar etapas do funil e medir conversão', quem:'Rafa', entregavel:'Planilha de funil + taxa de conversão', status:'extrair' },
      { num:4, nome:'Nunca mais perca um lead: seu CRM rodando', ensina:'CRM no Notion na prática', quem:'Maiara + Rafa', entregavel:'Template de CRM no Notion', status:'planejada' },
      { num:5, nome:'Decidindo com números, não com achismo', ensina:'Ler indicadores comerciais (conversão, ticket, CAC)', quem:'Rafa', entregavel:'Playbook de leitura de indicadores', status:'extrair' },
      { num:6, nome:'Aumentando a conversão com ajustes de abordagem', ensina:'Adaptar a venda ao nível de consciência do lead', quem:'Rafa', entregavel:'Playbook de venda por consciência', status:'extrair' },
      { num:7, nome:'O pós-venda que gera indicação e recompra', ensina:'Onboarding do cliente / pós-venda comercial', quem:'Rafa', entregavel:'Playbook de pós-venda comercial', status:'extrair' }
    ],
    instrumentos:[
      'Template de CRM no Notion',
      'Roteiro de sessão de venda consultiva',
      'Tabela de qualificação de leads',
      'Banco de quebra de objeções (vivo)',
      'Planilha de funil',
      'Formulário de briefing pré-reunião'
    ],
    kpis:{
      numericos:['Taxa de conversão por etapa','Ticket médio','Nº de propostas/mês','Nº de reuniões qualificadas/mês','CAC'],
      subjetivos:['Segurança ao conduzir reunião','Sabe ler indicadores e decidir','Identifica o gargalo do funil']
    },
    lacunas:[
      'Como conduz a sessão de venda (passo a passo, frases-chave)',
      'Como ensina quebra de objeção',
      'Como estrutura o funil',
      'Como lê indicadores comerciais',
      'Como adapta a venda ao nível de consciência',
      'Como ensina pós-venda'
    ],
    sessao_extracao:'S1 (Venda consultiva) + S2 (Hot seats gravados)'
  },
  {
    id:'oferta',
    nome:'Oferta e Produto',
    categoria:'mestra',
    frase:'Da oferta genérica à oferta blindada',
    objetivo:'O aluno sai de uma oferta genérica e confusa e constrói uma oferta blindada — transformação clara, material de apresentação comercial que comunica valor antes do preço, precificação sustentável. Resultado: para de competir por preço.',
    quando_acionar:[
      'Oferta genérica',
      'Revisa a apresentação repetidamente sem fechar',
      'Cobra por feeling',
      'Medo de cobrar o que vale',
      'Escopo aberto',
      'Não articula a transformação em uma frase',
      'Vende serviço avulso sem esteira'
    ],
    duracao:'2-3 meses',
    frameworks:['3-cadeiras','anatomia-pdf','precificacao-valor','esteira','valor-do-tempo'],
    aulas:[
      { num:1, nome:'A anatomia da oferta blindada', ensina:'Estrutura de uma oferta sólida', quem:'Rafa', entregavel:'Playbook de construção de oferta', status:'extrair' },
      { num:2, nome:'A apresentação comercial que comunica valor', ensina:'Estrutura dos elementos do material — adaptável a qualquer formato/nicho', quem:'Rafa', entregavel:'🛠 Skill criadora de apresentação comercial', status:'extrair' },
      { num:3, nome:'Cobrando o que vale sem medo', ensina:'Precificação por valor', quem:'Rafa', entregavel:'Calculadora de precificação (planilha + IA)', status:'extrair' },
      { num:4, nome:'Mostrando a transformação antes do preço', ensina:'Comunicar valor percebido', quem:'Rafa', entregavel:'Mapa de transformação + playbook', status:'extrair' },
      { num:5, nome:'Da venda única à esteira que sustenta o mês', ensina:'Esteira: oferta principal × condicional', quem:'Rafa', entregavel:'Template de esteira + biblioteca multi-nicho', status:'extrair' }
    ],
    instrumentos:[
      'Estrutura modular de apresentação comercial',
      'Planilha de precificação por valor',
      'Mapa de transformação',
      'Calculadora de valor do tempo',
      'Template de esteira (principal × condicional)'
    ],
    kpis:{
      numericos:['Ticket médio','Margem','% de propostas aceitas','Valor médio do contrato'],
      subjetivos:['Articula a transformação em uma frase','Cobra sem desconforto','Oferta tem diferencial claro']
    },
    lacunas:[
      'Como estrutura uma oferta',
      'Os elementos de uma apresentação comercial forte',
      'Como precifica por valor',
      'Como ensina a esteira (principal × condicional) com exemplos por nicho'
    ],
    sessao_extracao:'S1 (3 Cadeiras + Anatomia PDF + Engenharia Reversa)'
  },
  {
    id:'gestao',
    nome:'Gestão Adm. e Financeira',
    categoria:'mestra',
    frase:'Do "decido no escuro" à operação sem heroísmo',
    objetivo:'O aluno sai do "misturo tudo, decido no escuro" e instala a base de gestão de um empresário — separação PF/PJ, fluxo de caixa, custos e margem, contratos, e o time de apoio certo.',
    quando_acionar:[
      'Mistura conta e identidade PF/PJ',
      'Não sabe se o mês fechou no azul',
      'Não conhece a margem',
      'Faz cobrança no improviso',
      'Trabalha sem contrato',
      'Sem contador estratégico',
      'Vive apagando incêndio'
    ],
    duracao:'2-3 meses',
    frameworks:['pf-pj','fluxo-caixa','custos-margem','contratacao-apoio'],
    aulas:[
      { num:1, nome:'De autônomo a empresário: a separação que muda tudo', ensina:'Separação PF/PJ — dinheiro e identidade', quem:'Rafa', entregavel:'Planilha de separação PF/PJ', status:'extrair' },
      { num:2, nome:'Sabendo se o mês fechou no azul', ensina:'Leitura de fluxo de caixa', quem:'Rafa', entregavel:'Planilha + IA Leitora de Caixa', status:'extrair' },
      { num:3, nome:'Onde o seu faturamento está vazando', ensina:'Custos, margem e ponto de equilíbrio', quem:'Rafa', entregavel:'Mapa de custos + calculadora de margem', status:'extrair' },
      { num:4, nome:'A casa organizada: do caos ao processo', ensina:'Processos administrativos mínimos', quem:'Rafa', entregavel:'Template de processos administrativos', status:'extrair' },
      { num:5, nome:'Contratos que protegem o seu negócio', ensina:'Contrato de prestação, escopo, cláusulas essenciais', quem:'Rafa', entregavel:'Modelo de contrato editável', status:'extrair' },
      { num:6, nome:'Quando (e quem) contratar: contador e gestão financeira', ensina:'Critérios para montar o time de apoio administrativo', quem:'Rafa', entregavel:'Checklist de critérios de contratação', status:'extrair' }
    ],
    instrumentos:[
      'Planilha de separação PF/PJ',
      'Planilha de fluxo de caixa',
      'Mapa de custos + calculadora de margem',
      'Template de processos administrativos',
      'Modelo de contrato',
      'Aplicativo Indicadores Bellz (escopo a confirmar)'
    ],
    kpis:{
      numericos:['% de separação PF/PJ concluída','Margem conhecida','Saldo de caixa projetado','Reserva em meses','Contratos formalizados'],
      subjetivos:['Se vê e opera como empresário','Sabe se o mês fechou no azul sem abrir planilha','Operação roda sem apagar incêndio']
    },
    lacunas:[
      'Como ensina a separação PF/PJ na parte de identidade',
      'Critérios para contratar contabilidade',
      'Critérios para contratar gestão financeira (interna vs BPO)',
      'Como orienta sobre contratos',
      'O que o app do Marco entrega aqui'
    ],
    sessao_extracao:'S2 (Hot seats gravados PF/PJ + Fluxo de caixa)'
  },
  // ============ REFORÇOS ============
  {
    id:'posicionamento',
    nome:'Posicionamento',
    categoria:'especializada',
    frase:'De "sou mais um" à escolha antes da comparação',
    objetivo:'O aluno sai de "sou mais um, comparado por preço" e constrói um posicionamento que faz o cliente escolher antes de comparar.',
    quando_acionar:[
      'Cliente sempre compara preço',
      'Sem diferencial articulado',
      'Comunicação genérica',
      'Aceita qualquer cliente',
      'Não sabe se constrói marca no próprio nome ou de empresa',
      'Comunicação inconsistente entre canais'
    ],
    duracao:'1-2 meses',
    frameworks:['3-cadeiras','diferenciacao-atributos','engenharia-reversa-posicionamento','marca-pessoal-corporativa'],
    aulas:[
      { num:1, nome:'Saindo da guerra de preço', ensina:'O movimento de Comparado a Escolhido', quem:'Rafa', entregavel:'Playbook de posicionamento', status:'extrair' },
      { num:2, nome:'O que faz o cliente te escolher antes de comparar', ensina:'Atributos, diferenciação e engenharia reversa (caso Bellz House)', quem:'Rafa', entregavel:'Matriz de atributos + templates de manifesto/golden circle/tom de voz', status:'extrair' },
      { num:3, nome:'Seu nome ou o nome da empresa?', ensina:'Quando construir marca pessoal × corporativa', quem:'Rafa', entregavel:'Guia de decisão', status:'extrair' },
      { num:4, nome:'O poder de dizer não: definindo seus limites', ensina:'Postura, escopo, recusa de cliente fora do perfil', quem:'Rafa', entregavel:'Template de limites de atuação', status:'extrair' },
      { num:5, nome:'Sua voz em cada canal', ensina:'Linha editorial coerente — adaptar a mensagem a cada canal', quem:'Rafa', entregavel:'🛠 Skill/template de linha editorial por canal', status:'extrair' }
    ],
    instrumentos:[
      'Mapa de posicionamento',
      'Matriz de atributos e diferenciais',
      'Template de limites de atuação',
      'Templates de marca preenchíveis (manifesto, golden circle, arquétipo, tom de voz)',
      'Guia de decisão marca pessoal × corporativa',
      'Template de linha editorial por canal'
    ],
    kpis:{
      numericos:['% de clientes que não pedem desconto','Ticket médio','Taxa de fechamento sem negociar preço'],
      subjetivos:['Cliente ainda compara com concorrente','Sabe dizer o diferencial em uma frase','Tem clareza de marca pessoal/corporativa']
    },
    lacunas:[
      'Como trabalha o movimento Comparado → Justificado → Escolhido',
      'Como ensina a descobrir o diferencial',
      'Como orienta marca pessoal × corporativa',
      'Como orienta limites / dizer não',
      'Como pensa linha editorial coerente'
    ],
    sessao_extracao:'S1 (3 Cadeiras + Engenharia Reversa) + S4 (Marca pessoal/corporativa)'
  },
  {
    id:'tracao',
    nome:'Tração',
    categoria:'especializada',
    frase:'Da indicação passiva ao sistema de aquisição',
    objetivo:'O aluno sai de "dependo 100% de indicação passiva" e constrói um sistema de tração — primeiro ativando o que já tem, depois expandindo.',
    quando_acionar:[
      'Depende de indicação passiva',
      'Sem canal de aquisição mapeado',
      'Base de contatos parada',
      'Participa de grupos mas não converte',
      'Já tem oferta + processo comercial e precisa de mais volume'
    ],
    duracao:'2-3 meses',
    frameworks:['mapa-canais','indicacao-estruturada','escala-funis'],
    aulas:[
      { num:1, nome:'Mapeando os canais que você já tem', ensina:'Identificar canais de baixo custo (base, grupos, networking, indicação)', quem:'Rafa', entregavel:'Mapa de canais de aquisição', status:'extrair' },
      { num:2, nome:'Transformando indicação em sistema', ensina:'Sair da indicação passiva para a estruturada', quem:'Rafa', entregavel:'Sistema de indicação estruturada', status:'extrair' },
      { num:3, nome:'Reativando a base que está parada', ensina:'Trabalhar lista de contatos e ex-clientes', quem:'Rafa', entregavel:'Playbook de ativação de base', status:'extrair' },
      { num:4, nome:'Networking que vira cliente', ensina:'Networking estratégico com intenção comercial', quem:'Rafa', entregavel:'Roteiro de networking', status:'extrair' },
      { num:5, nome:'Clientes pelo YouTube', ensina:'YouTube como canal de aquisição', quem:'Convidado expert', entregavel:'Playbook de YouTube para serviço', status:'planejada' },
      { num:6, nome:'Autoridade e clientes no LinkedIn', ensina:'LinkedIn como canal de aquisição', quem:'Convidado expert', entregavel:'Playbook de LinkedIn', status:'planejada' },
      { num:7, nome:'TikTok para negócios de serviço', ensina:'TikTok como canal de aquisição', quem:'Convidado expert', entregavel:'Playbook de TikTok', status:'planejada' },
      { num:8, nome:'Tráfego pago sem desperdício', ensina:'Noções de tráfego pago', quem:'Convidado expert', entregavel:'Checklist de tráfego pago', status:'planejada' },
      { num:9, nome:'Escalando os canais que funcionam', ensina:'Operação e escala de funis de aquisição', quem:'Rafa + convidado', entregavel:'Playbook de escala de funil', status:'extrair' }
    ],
    instrumentos:[
      'Mapa de canais de aquisição',
      'Sistema de indicação estruturada',
      'Planilha de ativação de base',
      'Roteiro de networking estratégico',
      'Checklist de prontidão para canais pagos'
    ],
    kpis:{
      numericos:['Nº de leads/mês por canal','% de leads de canais estruturados (vs indicação passiva)','CAC por canal'],
      subjetivos:['Clareza de quais canais funcionam para ele','Gera leads sem depender de sorte']
    },
    lacunas:[
      'Como ensina a estruturar indicação',
      'Como orienta a reativação de base',
      'Critérios para quando o aluno está pronto para canais pagos',
      'Até onde ela vai em marketing e onde passa para o convidado',
      'Programa de embaixadores (sugerido no anteprojeto)'
    ],
    sessao_extracao:'S4 (Mapa de canais + Indicação estruturada)'
  },
  {
    id:'lideranca',
    nome:'Liderança',
    categoria:'especializada',
    frase:'Do gargalo único ao time que sustenta',
    objetivo:'O aluno sai de "faço tudo sozinho, sou o gargalo" e constrói um time que sustenta o negócio sem depender dele em cada detalhe.',
    quando_acionar:[
      'Dono é o gargalo',
      'Cresce por esforço pessoal no limite',
      'Tem demanda mas não entrega mais',
      'Primeira contratação travada',
      'Tem equipe mas não delega',
      'Equipe não performa',
      'Precisa montar time comercial'
    ],
    duracao:'3-4 meses',
    frameworks:['timing-contratacao','time-comercial','lideranca-delegacao','roteiro-desligamento'],
    aulas:[
      { num:1, nome:'Saindo do gargalo: o que delegar primeiro', ensina:'Identificar o que tira do dono', quem:'Rafa', entregavel:'Mapa de funções', status:'extrair' },
      { num:2, nome:'A hora certa de contratar', ensina:'Critérios objetivos de timing', quem:'Rafa', entregavel:'Checklist de prontidão para contratar', status:'extrair' },
      { num:3, nome:'Contratando a pessoa certa', ensina:'Processo seletivo, definição de perfil', quem:'Rafa', entregavel:'Roteiro de processo seletivo', status:'extrair' },
      { num:4, nome:'Formando o seu time comercial', ensina:'Estruturar e treinar time de vendas', quem:'Rafa', entregavel:'Estrutura de time comercial', status:'extrair' },
      { num:5, nome:'Liderando para o time entregar', ensina:'Liderança, delegação, acompanhamento', quem:'Rafa', entregavel:'Playbook de liderança + modelo de avaliação', status:'extrair' },
      { num:6, nome:'Quando e como desligar alguém', ensina:'Demissão, condutas, reunião de alinhamento', quem:'Rafa', entregavel:'Roteiro de desligamento', status:'extrair' }
    ],
    instrumentos:[
      'Checklist de prontidão para contratar',
      'Mapa de funções',
      'Organograma evolutivo',
      'Roteiro de processo seletivo',
      'Template de treinamento/onboarding',
      'Modelo de avaliação de desempenho',
      'Roteiro de reunião de alinhamento e feedback'
    ],
    kpis:{
      numericos:['Nº de funções delegadas','% do tempo do dono em atividade estratégica vs operacional','Nº de pessoas no time','Turnover'],
      subjetivos:['O negócio funciona quando o dono se ausenta','Lidera com segurança','Equipe entrega sem retrabalho']
    },
    lacunas:[
      'Critérios para quando contratar (a régua exata)',
      'Como orienta a primeira contratação',
      'Ordem de contratação recomendada',
      'Como ensina a formar time comercial',
      'Como orienta liderança e delegação',
      'Como conduz demissão'
    ],
    sessao_extracao:'S3 (Critérios contratação + Time comercial + Liderança)'
  },
  {
    id:'mentalidade',
    nome:'Mentalidade e Identidade',
    categoria:'especializada',
    frase:'Da identidade técnica à identidade empresarial',
    objetivo:'O aluno confuso, travado ou em transição faz a virada interna antes de tomar decisões estruturais — sai da identidade de "profissional técnico" e assume a de empresário.',
    quando_acionar:[
      'Aluno muito confuso',
      'Momento de transição',
      'Trava decisões por medo (não por falta de informação)',
      'Não se vê como empresário',
      'Escala heroica como mentalidade',
      'Autossabotagem / síndrome do impostor'
    ],
    duracao:'1-2 meses',
    frameworks:['transicao-identidade','roda-vida-empresarial','crencas-limitantes'],
    aulas:[
      { num:1, nome:'De profissional a empresário: a virada interna', ensina:'Transição de identidade', quem:'Rafa', entregavel:'Playbook de transição de identidade', status:'extrair' },
      { num:2, nome:'Parando de crescer no sufoco', ensina:'Sair da escala heroica como mentalidade', quem:'Rafa', entregavel:'Exercício guiado de autodiagnóstico', status:'extrair' },
      { num:3, nome:'As crenças que travam o seu negócio', ensina:'Crenças limitantes sobre dinheiro, venda e valor', quem:'Rafa', entregavel:'Mapa de crenças', status:'extrair' },
      { num:4, nome:'Decidir com clareza, não com medo', ensina:'Tomada de decisão consciente', quem:'Rafa', entregavel:'Diário de decisões', status:'extrair' }
    ],
    instrumentos:[
      'Roda da Vida Empresarial',
      'Exercício de autoconhecimento / zona de maestria',
      'Mapa de crenças limitantes',
      'Diário de decisões'
    ],
    kpis:{
      numericos:['Nº de decisões relevantes destravadas no período'],
      subjetivos:['Se vê e age como empresário','Decide sem travar','Identificou e trabalha as crenças limitantes','Abandonou a escala heroica']
    },
    lacunas:[
      'Como percebe que um aluno precisa dessa trilha',
      'Como trabalha a transição de identidade',
      'Como usa a Roda da Vida Empresarial',
      'Como aborda crenças limitantes e medo',
      'Histórias dela de transição (alimenta banco de histórias)'
    ],
    sessao_extracao:'S5 (Transição de identidade + Roda da Vida + Score Soberano)'
  }
];

// ================================================================
// FRAMEWORKS AUTORAIS
// ================================================================
const FRAMEWORKS = [
  {
    id:'3-cadeiras',
    nome:'As 3 Cadeiras',
    tecnico:'Movimento de posição na mente do cliente (Comparado → Justificado → Escolhido)',
    trilhas:['posicionamento','oferta'],
    status:'parcial',
    o_que_e:'Movimento que tira o cliente de "te comparar com qualquer um" para "te escolher antes de comparar".',
    o_que_temos:[
      'Conceito nomeado e estruturado em 3 etapas (Comparado, Justificado, Escolhido)',
      'Caso de aplicação documentado: anteprojeto Bellz House',
      'Validado em 27 hot seats de posicionamento',
      'Linha de bio do Instagram já comunica ("De comparado a escolhido")'
    ],
    o_que_falta:[
      'Passo-a-passo de como a Rafa conduz o cliente entre cadeiras',
      'Critérios objetivos de diagnóstico (em qual cadeira o cliente está hoje)',
      'Instrumentos (mapa de atributos, matriz de diferenciação)',
      'Roteiro de transição (gatilhos de movimento entre cadeiras)'
    ],
    fonte_primaria:'Gravações de mentoria existentes (a confirmar com Rafa) OU entrevista 1h',
    fonte_secundaria:'Anteprojeto Bellz House + 27 hot seats de posicionamento',
    sessao:'S1 · Posicionamento + Oferta (sessão âncora)',
    duracao_rafa:'1h30 OU 0h se as gravações cobrirem',
    vira_conteudo:[
      'Aula T2.1 "A anatomia da oferta blindada"',
      'Aula T4.1 "Saindo da guerra de preço"',
      'Playbook de posicionamento',
      'IA Mapeador de Posicionamento',
      'Post de Instagram (já no calendário desta semana)'
    ]
  },
  {
    id:'anatomia-pdf',
    nome:'Anatomia do PDF de Oferta',
    tecnico:'Estrutura modular de apresentação comercial — adaptável a qualquer formato (PDF, deck, vídeo, landing) e nicho',
    trilhas:['oferta'],
    status:'parcial',
    o_que_e:'Os elementos que toda apresentação comercial precisa ter para comunicar valor antes do preço.',
    o_que_temos:[
      'Rafa revisa PDF em 1 a cada 4 hot seats (32 ocorrências no histórico de 10 meses)',
      'Hot seat #65 (Maria Luiza), #66 (Priscilla), #115 (Lorena Diniz) — casos reais para análise'
    ],
    o_que_falta:[
      'A lógica que a Rafa usa "na cabeça" para revisar PDF — explicitar como ela diagnostica o que está faltando',
      'Estrutura modular padronizada (lista de elementos × função de cada um)',
      'Adaptações por nicho (advocacia, arquitetura, saúde, consultoria)',
      'Skill/IA que aplica essa estrutura'
    ],
    fonte_primaria:'Gravação de 3 hot seats de revisão de PDF (zero esforço para a Rafa)',
    fonte_secundaria:'Anteprojeto Bellz House',
    sessao:'S1 · Posicionamento + Oferta · OU S2 · Hot seats gravados',
    duracao_rafa:'0h (gravação) OU 1h (entrevista)',
    vira_conteudo:[
      'Aula T2.2 "A apresentação comercial que comunica valor"',
      'Skill criadora de apresentação comercial',
      'Template Canva/PowerPoint multi-nicho',
      'Biblioteca de PDFs modelo por nicho'
    ]
  },
  {
    id:'engenharia-reversa-posicionamento',
    nome:'Engenharia Reversa de Posicionamento',
    tecnico:'Reconstrução de uma marca a partir do que ela é hoje, identificando atributos diferenciais e construindo a comunicação',
    trilhas:['posicionamento'],
    status:'parcial',
    o_que_e:'Método de descobrir o posicionamento natural de um negócio analisando o que ele já entrega de diferente, não o que ele "gostaria" de ser.',
    o_que_temos:[
      'Caso Bellz House documentado em detalhe (anteprojeto)',
      'Resultado da pesquisa com 35 mentorados + 16 leads (palavras-chave reais)',
      'Eixos cartesianos de competidores (G4, Permaneo, Moving Girls, Marcus Marques, Joel Jota) já mapeados'
    ],
    o_que_falta:[
      'O passo-a-passo dela para conduzir uma engenharia reversa em outro negócio',
      'Perguntas-chave de extração',
      'Como ler os achados e transformar em posicionamento'
    ],
    fonte_primaria:'Entrevista 1h (passar pelo case Bellz House como método explícito)',
    fonte_secundaria:'Anteprojeto Bellz House completo',
    sessao:'S1 · Posicionamento + Oferta',
    duracao_rafa:'1h',
    vira_conteudo:[
      'Aula T4.2 "O que faz o cliente te escolher antes de comparar"',
      'Matriz de atributos + templates de manifesto/golden circle/tom de voz',
      'Playbook de engenharia reversa para o aluno aplicar no próprio negócio'
    ]
  },
  {
    id:'diferenciacao-atributos',
    nome:'Diferenciação por Atributos',
    tecnico:'Como construir diferencial real a partir de atributos do negócio, não de adjetivos',
    trilhas:['posicionamento'],
    status:'parcial',
    o_que_e:'Estruturar diferencial em atributos verificáveis (não em "qualidade", "atendimento", "compromisso").',
    o_que_temos:[
      'Anteprojeto Bellz House com matriz de atributos',
      'Eixos cartesianos da concorrência'
    ],
    o_que_falta:[
      'Método de extração de atributos do aluno (perguntas, instrumentos)',
      'Como diferenciar atributo "real" de atributo "desejado"',
      'Tradução de atributo para mensagem'
    ],
    fonte_primaria:'Entrevista (compartilha sessão com Engenharia Reversa)',
    fonte_secundaria:'Anteprojeto Bellz House',
    sessao:'S1 · Posicionamento + Oferta',
    duracao_rafa:'compartilha sessão',
    vira_conteudo:[
      'Aula T4.2 (parte 2)',
      'Matriz de atributos preenchível',
      'IA Mapeador de Posicionamento'
    ]
  },
  {
    id:'leitura-consciencia',
    nome:'Leitura de Cliente por Nível de Consciência',
    tecnico:'Adaptação da abordagem comercial ao nível de consciência do lead (referência: Eugene Schwartz)',
    trilhas:['comercial'],
    status:'parcial',
    o_que_e:'Diagnosticar em qual nível de consciência o lead está e ajustar reunião, apresentação e fechamento.',
    o_que_temos:[
      'Hot seat #85 (Lorena Diniz) explicitando o problema: "como direcionar a apresentação para cada nível"',
      'Referência bibliográfica clássica (Schwartz · 5 níveis de consciência)'
    ],
    o_que_falta:[
      'Como a Rafa adapta perguntas de reunião por nível',
      'Sinais para diagnosticar nível em 5 minutos de conversa',
      'Roteiros de reunião por nível'
    ],
    fonte_primaria:'Entrevista 1h',
    fonte_secundaria:'Hot seat #85 + referência Schwartz',
    sessao:'S1 · Comercial (Venda consultiva)',
    duracao_rafa:'1h',
    vira_conteudo:[
      'Aula T1.6 "Aumentando a conversão com ajustes de abordagem"',
      'Playbook de venda por consciência',
      'IA Qualificador de Lead'
    ]
  },
  {
    id:'venda-consultiva',
    nome:'Sessão de Venda Consultiva',
    tecnico:'Estrutura completa de uma sessão de venda consultiva — pré-qualificação, reunião única, diagnóstico de impacto, apresentação no fim com BFI',
    trilhas:['comercial'],
    status:'parcial',
    o_que_e:'O framework central da Rafa de como conduzir uma reunião comercial que termina em fechamento. Reunião única (não duas), com pré-qualificação por formulário antes.',
    o_que_temos:[
      'Estrutura geral capturada na transcrição da Consultoria Presencial (26/05): pré-qualificação por formulário → reunião → diagnóstico mostrando o "o quê" (não o "como") → impacto → apresenta proposta na mesma reunião → bônus + BFI',
      '38 hot seats com perguntas sobre fechamento (32% do dataset)',
      'Taxa de conversão de alunos: 60-70% (mercado: 40%) — prova de aplicação',
      'Princípio fixado: "Reunião é inegociável. Quem aceita reunião personalizada é cliente; quem só aceita PDF no WhatsApp não é cliente."'
    ],
    o_que_falta:[
      'Passo-a-passo de cada momento da reunião (abertura, dor, valor, preço, fechamento)',
      'Frases-chave por momento (palavras proibidas: "posso te apresentar meu trabalho", "o que você achou")',
      'Roteiro de quebra de objeções ao vivo',
      'Adaptação por nicho (B2C vs B2B onde fechamento imediato não funciona)'
    ],
    fonte_primaria:'Transcrição Consultoria Presencial (26/05) + gravação de 4 hot seats',
    fonte_secundaria:'38 hot seats do dataset',
    sessao:'S1 · Comercial · TEMA ÂNCORA',
    duracao_rafa:'0h (já gravado) + 4 hot seats',
    vira_conteudo:[
      'Aula T1.1 "Da primeira conversa ao pix"',
      'Roteiro de sessão de venda consultiva',
      'Aula T1.2 "Transformando o vou pensar em decisão"',
      'IA Simulador de Objeções'
    ]
  },
  {
    id:'diferenciacao-personalizacao',
    nome:'Diferenciação por Personalização',
    tecnico:'Posicionamento estratégico autoral — adaptar metodologia de personalização para qualquer nicho',
    trilhas:['posicionamento','comercial'],
    status:'parcial',
    o_que_e:'O grande diferencial autoral da Rafa: ensinar empresários a se posicionar como referência no nicho por meio de venda personalizada e atendimento consultivo — o oposto do mercado de massa.',
    o_que_temos:[
      'Tese explicitada pela Rafa na Consultoria Presencial: "Você não é mentora de vendas qualquer. Você é mentora que ensina diferenciação por personalização."',
      'Cases vividos: consultoria de moda em loja (R$ 1k+ em 1 cliente), Mary Kay (estoque pronto + uso ensinado), arquitetura, doces de casamento personalizado',
      'Posicionamento alinhado ao Bellz House: território dos negócios anti-ordinários'
    ],
    o_que_falta:[
      'Como identificar se um nicho aceita personalização',
      'Critérios de filtro de cliente (quem é cliente, quem não é)',
      'Adaptações por nicho (serviço, produto, comércio com produto pronto, B2B)',
      'Como ensinar o aluno a transpor o método para o nicho dele'
    ],
    fonte_primaria:'Transcrição Consultoria Presencial (26/05) — sessão inteira gira em torno dessa tese',
    fonte_secundaria:'Anteprojeto Bellz House',
    sessao:'S1 · Posicionamento + Oferta (sessão âncora)',
    duracao_rafa:'30min validação',
    vira_conteudo:[
      'Posicionamento da Rafa como expert (bio Instagram, copy de vendas)',
      'Aula transversal nas trilhas Comercial e Posicionamento',
      'Filtro de qualificação de aluno'
    ]
  },
  {
    id:'plano-de-foco',
    nome:'Plano de Foco · Inegociável × Importante × Sabotador',
    tecnico:'Framework de priorização aplicado a todas as ações do aluno — substitui o "plano de ação" tradicional',
    trilhas:['comercial','gestao','lideranca','mentalidade'],
    status:'parcial',
    o_que_e:'Cada ação do aluno se classifica em 3 colunas: Inegociável (sem isso, fora), Importante (com flexibilidade), Sabotador (está roubando energia). Aplicado em todas as etapas do método.',
    o_que_temos:[
      'Framework formalizado na Consultoria Presencial (26/05)',
      'Aplicação prática descrita: reunião é inegociável, CRM é importante (pode ser planilha), mandar PDF no WhatsApp é sabotador',
      'Princípio: pode ter consequência dura — "não fez o inegociável → não tem próximo encontro"'
    ],
    o_que_falta:[
      'Templates por trilha (cada trilha tem sua lista de inegociáveis × importantes × sabotadores)',
      'IA que classifica as ações do aluno automaticamente',
      'Treinamento da Consultora de Progresso pra aplicar no acompanhamento'
    ],
    fonte_primaria:'Transcrição Consultoria Presencial (26/05)',
    fonte_secundaria:'(em construção)',
    sessao:'S1 · Comercial · estende para todas as trilhas',
    duracao_rafa:'30min validação',
    vira_conteudo:[
      'Instrumento universal de priorização',
      'Template Notion no Home Office Bellz',
      'IA classificadora de ações',
      'Treinamento da Consultora de Progresso'
    ]
  },
  {
    id:'pdf-oferta-irresistivel',
    nome:'PDF de Oferta Irresistível',
    tecnico:'Estrutura modular do material de apresentação comercial — antecipação de objeções, demonstração de valor, bônus e BFI',
    trilhas:['oferta','comercial'],
    status:'parcial',
    o_que_e:'Material que vai à mesa na reunião consultiva. Estrutura: antecipa objeções identificadas no formulário de pré-qualificação, mostra solução completa (não pedaços), inclui bônus + bônus de fechamento imediato (BFI).',
    o_que_temos:[
      'Existe aula gravada (precisa renomear: "PDF" não pega bem por causa do acrônimo)',
      'Estrutura geral capturada na transcrição (26/05): formulário antes → reunião → PDF com antecipação de objeções → bônus + BFI',
      '32 hot seats com revisões reais da Rafa (último 10 meses)',
      'Antes/depois de alunos documentado (link existe)'
    ],
    o_que_falta:[
      'Renomear (o nome "PDF" não comunica)',
      'Template Canva / PowerPoint editável por nicho',
      'Lógica de antecipação de objeção (como ler o formulário e converter em slide)',
      'Skill criadora de apresentação comercial (IA)'
    ],
    fonte_primaria:'Transcrição Consultoria Presencial (26/05) + revisões reais em hot seats',
    fonte_secundaria:'Hot seats #65 (Maria Luiza), #66 (Priscilla), #115 (Lorena)',
    sessao:'S1 · Oferta · sub-sessão dedicada (Clínica de Oferta)',
    duracao_rafa:'1h entrevista + análise de 3 PDFs reais',
    vira_conteudo:[
      'Aula T2.2 "A apresentação comercial que comunica valor"',
      'Skill criadora de apresentação comercial',
      'Template Canva multi-nicho',
      'Biblioteca de modelos por nicho',
      '🆕 Clínica de Oferta (separada do Hot Seat)'
    ]
  },
  {
    id:'bonus-bfi',
    nome:'Bônus + BFI (Bônus de Fechamento Imediato)',
    tecnico:'Mecânica de bônus modulada por perfil de público — BFI mais forte para B2C, menos forte para B2B/pesquisa',
    trilhas:['oferta','comercial'],
    status:'parcial',
    o_que_e:'Estrutura dupla: bônus regular + BFI. Modulada conforme tendência do público a fechar imediato ou pesquisar mais. Validade do bônus só APÓS não-fechamento.',
    o_que_temos:[
      'Estrutura explicitada na transcrição (26/05)',
      'Casos práticos: aluno que vende doces de casamento (BFI menos forte, gera impacto pelo presencial)',
      'Regra: nunca apresentar bônus com validade antes do não-fechamento'
    ],
    o_que_falta:[
      'Critérios de modulação por nicho (matriz de "quão impactante deve ser o BFI")',
      'Banco de bônus por nicho',
      'Cenários de B2B onde fechamento imediato não funciona'
    ],
    fonte_primaria:'Transcrição Consultoria Presencial (26/05)',
    fonte_secundaria:'(em construção)',
    sessao:'S1 · Oferta',
    duracao_rafa:'30min',
    vira_conteudo:[
      'Aula T2.1 (complemento) "A anatomia da oferta blindada"',
      'Matriz de modulação de BFI',
      'Banco de bônus por nicho'
    ]
  },
  {
    id:'pos-nao-venda',
    nome:'Pós-NÃO-venda',
    tecnico:'Protocolo para aprender com quem não comprou — pergunta o que comprou e por quê',
    trilhas:['comercial'],
    status:'parcial',
    o_que_e:'Quem não comprou de você é a fonte mais rica de melhoria. Protocolo da Rafa para perguntar (sem soar mal) o que a pessoa comprou do concorrente, por quê, e o que faltou na sua apresentação.',
    o_que_temos:[
      'Tese capturada na transcrição (26/05): "A única maneira de melhorar é receber crítica. As pessoas não estão abertas a receber"',
      'Maxima da Rafa: "O empreendedor maduro melhora com as críticas, o imaturo se justifica"'
    ],
    o_que_falta:[
      'Roteiro exato de perguntas (como abordar quem não comprou)',
      'Timing certo do contato',
      'Como interpretar e aplicar a resposta'
    ],
    fonte_primaria:'Transcrição Consultoria Presencial (26/05)',
    fonte_secundaria:'(em construção)',
    sessao:'S1 · Comercial',
    duracao_rafa:'30min',
    vira_conteudo:[
      'Aula T1.7 (nova) "O pós-NÃO-venda que ensina mais que o sim"',
      'Roteiro de contato pós-não-venda',
      'Banco de aprendizados por nicho'
    ]
  },
  {
    id:'uau-do-cliente',
    nome:'O Uau do Cliente',
    tecnico:'Princípio operacional aplicado em cada interação — gerar diferencial percebido em todo ponto de contato',
    trilhas:['posicionamento','comercial','oferta'],
    status:'parcial',
    o_que_e:'A composição inteira é o produto, não só o que é vendido. Cada etapa (atendimento, follow-up, entrega, pós-venda) precisa gerar um "uau" — sem o uau, fica genérico.',
    o_que_temos:[
      'Tese explicitada na transcrição (26/05)',
      'Casos práticos: óptica que entregou óculos perfeito de primeira, papelaria que comenta sobre canetas',
      'Aplicação cruzada: posicionamento + venda + entrega + pós-venda'
    ],
    o_que_falta:[
      'Mapa de pontos de "uau" por nicho',
      'Como auditar onde está faltando uau na operação atual do aluno',
      'Métrica de uau (NPS qualitativo?)'
    ],
    fonte_primaria:'Transcrição Consultoria Presencial (26/05)',
    fonte_secundaria:'(em construção)',
    sessao:'S1 · Posicionamento (transversal)',
    duracao_rafa:'30min',
    vira_conteudo:[
      'Aula transversal (entra em várias trilhas)',
      'Checklist de auditoria de uau',
      'Banco de exemplos por nicho'
    ]
  },
  {
    id:'plano-vida-vs-negocio',
    nome:'Plano de Vida × Plano de Negócio',
    tecnico:'Etapa 1 do método — identidade do empresário e modelo de negócio coerente com o estilo de vida desejado',
    trilhas:['mentalidade'],
    status:'parcial',
    o_que_e:'Antes de qualquer estratégia comercial, o aluno define quem ele quer ser, que estilo de vida quer ter, e qual modelo de negócio sustenta isso (recorrente × pontual, personalizado × escalável, sozinha × time).',
    o_que_temos:[
      'Etapa formalizada na transcrição (26/05)',
      'Identificação de incoerências como ferramenta (ex.: "quero faturar 100k trabalhando 3 dias por semana")',
      'Modelos de negócio mapeados com prós/contras (recorrente é menos CAC mas acomoda; pontual exige captação constante)',
      'Tese: "Empreender é identidade. Você é dono da piscina, não turista."'
    ],
    o_que_falta:[
      'IA que conduz o aluno por essa decisão (perguntas + diagnóstico)',
      'Mapa visual das possíveis combinações',
      'Caso de aplicação documentado'
    ],
    fonte_primaria:'Transcrição Consultoria Presencial (26/05)',
    fonte_secundaria:'Post "Ser dono da piscina, não turista" (referência usada na conversa)',
    sessao:'S5 · Mentalidade + Diagnóstico 360º',
    duracao_rafa:'1h',
    vira_conteudo:[
      'Etapa 1 do método (universal)',
      'Aula T7.1 "De profissional a empresário"',
      'IA Diagnóstico de Identidade Empresarial',
      'Roda de Decisões de Modelo de Negócio'
    ]
  },
  {
    id:'termometro-felicidade',
    nome:'Termômetro da Felicidade',
    tecnico:'Substituto da Roda da Vida tradicional — ações mínimas inegociáveis por área para satisfação',
    trilhas:['mentalidade'],
    status:'parcial',
    o_que_e:'Não dá nota numérica por área (saúde, espiritualidade, família). Define 1-2 ações mínimas inegociáveis por área que, cumpridas, geram sensação de realização. Conecta diretamente com Plano de Vida × Plano de Negócio.',
    o_que_temos:[
      'Tese explicitada na transcrição (26/05) — Rafa rejeita explicitamente o termo "Roda da Vida" por ser genérico',
      'Lógica: "Você não passa 20h por dia desenvolvendo espiritualidade. Mas se você faz oração diária 10 min, isso te realiza."'
    ],
    o_que_falta:[
      'Estrutura do instrumento (categorias, perguntas)',
      'Template preenchível no Notion',
      'Integração com calendário (rotina)'
    ],
    fonte_primaria:'Transcrição Consultoria Presencial (26/05)',
    fonte_secundaria:'(em construção)',
    sessao:'S5 · Mentalidade',
    duracao_rafa:'45min',
    vira_conteudo:[
      'Instrumento Termômetro da Felicidade (Notion)',
      'Conecta com Diagnóstico 360º',
      'Aula T7.2 (renomeada) "Parando de crescer no sufoco"'
    ]
  },
  {
    id:'anteceder-erros',
    nome:'Anteceder Erros',
    tecnico:'Diferencial autoral — antecipar tudo o que pode dar errado é profissionalismo, não pessimismo',
    trilhas:['gestao','lideranca','oferta'],
    status:'parcial',
    o_que_e:'Pergunta-âncora da Rafa em qualquer decisão: "O que pode dar errado?" — aplicado em vendas, contratação, parcerias, contratos. Anteceder protege.',
    o_que_temos:[
      'Tese explicitada na transcrição (26/05)',
      'Frase autoral: "Anteceder erros é profissionalismo, não pessimismo"',
      'Aplicação documentada: contratos, parcerias, processo seletivo'
    ],
    o_que_falta:[
      'Checklist de "o que pode dar errado" por área (venda, contratação, parceria, contrato, entrega)',
      'Como aplicar sem virar paranoia ou paralisia',
      'Mapa de mitigação por risco'
    ],
    fonte_primaria:'Transcrição Consultoria Presencial (26/05)',
    fonte_secundaria:'(em construção)',
    sessao:'S3 · Liderança / aplicação transversal',
    duracao_rafa:'30min',
    vira_conteudo:[
      'Princípio universal aplicado em várias trilhas',
      'Checklist de anteceder erros por área',
      'Frase para linha editorial Instagram'
    ]
  },
  {
    id:'mentalidade-minima-admissao',
    nome:'Mentalidade Mínima de Admissão',
    tecnico:'Critérios objetivos de quem pode entrar no método e quem não pode — filtro de cliente ideal',
    trilhas:['mentalidade'],
    status:'parcial',
    o_que_e:'O método não atende qualquer perfil. Existe uma mentalidade mínima exigida: autorresponsabilidade, expertise pré-existente no offline, disposição para desconforto, aceitar que empreender ≠ liberdade total.',
    o_que_temos:[
      'Critérios mapeados na transcrição (26/05)',
      'Exemplos práticos: aluno que entrou esperando fórmula mágica = não funciona; aluno com mentalidade de adulto empresarial = funciona',
      'Tese: "Quem não tem expertise no offline, não vai aprender no online comigo"'
    ],
    o_que_falta:[
      'Formulário/quiz de pré-admissão',
      'Casos de fronteira (quem está perto mas não está pronto)',
      'Comunicação pública dos critérios (quem se identifica, vem; quem não, vai embora)'
    ],
    fonte_primaria:'Transcrição Consultoria Presencial (26/05)',
    fonte_secundaria:'Anteprojeto Bellz House',
    sessao:'S5 · Mentalidade',
    duracao_rafa:'30min',
    vira_conteudo:[
      'Formulário de pré-admissão',
      'Página de produto com filtro explícito',
      'Linha editorial Instagram (atrai e repele intencionalmente)'
    ]
  },
  {
    id:'engenharia-reversa-funil',
    nome:'Engenharia Reversa do Funil',
    tecnico:'Cálculo reverso de leads necessários a partir da meta de faturamento e da taxa de conversão atual',
    trilhas:['comercial'],
    status:'parcial',
    o_que_e:'Não busque mais leads — aumente conversão primeiro. Para vender X, com sua taxa atual, precisa de Y leads. Aumentando conversão de 20% para 70%, precisa de muito menos leads. Pare de gastar com tráfego antes de ajustar o processo comercial.',
    o_que_temos:[
      'Lógica explicitada na transcrição (26/05) com exemplo numérico claro (cliente que mandou orçamento × cliente que fez reunião)',
      'Taxa de conversão típica dos alunos: 60-70% em reunião (vs mercado 40%)',
      'Aplicação prática: aluno que aumentou de 20% para 70% sem mudar volume de leads'
    ],
    o_que_falta:[
      'Calculadora interativa (input: meta + taxa atual + ticket → output: leads necessários)',
      'Diagnóstico de etapa onde o funil vaza mais',
      'Banco de scripts de melhoria por etapa'
    ],
    fonte_primaria:'Transcrição Consultoria Presencial (26/05)',
    fonte_secundaria:'Hot seats de funil/conversão',
    sessao:'S1 · Comercial',
    duracao_rafa:'30min',
    vira_conteudo:[
      'Calculadora de Engenharia Reversa do Funil',
      'Aula T1.3 "Enxergando onde o dinheiro trava no funil"',
      'IA Diagnosticador de Funil'
    ]
  },
  {
    id:'qualificacao-lead',
    nome:'Qualificação de Lead',
    tecnico:'Critérios para qualificar lead antes da reunião',
    trilhas:['comercial'],
    status:'extrair',
    o_que_e:'Como filtrar quem entra em reunião comercial e quem fica para conteúdo orgânico.',
    o_que_temos:['Hot seat #1 (Adriana), #43 (Beatriz) — pedidos de qualificação'],
    o_que_falta:['Critérios objetivos','Formulário de briefing pré-reunião','Sinais de "não qualifica"'],
    fonte_primaria:'Entrevista 30min',
    fonte_secundaria:'Hot seats',
    sessao:'S1 · Comercial',
    duracao_rafa:'30min',
    vira_conteudo:['Tabela de qualificação','Formulário de briefing']
  },
  {
    id:'leitura-indicadores',
    nome:'Leitura de Indicadores Comerciais',
    tecnico:'Ler conversão, ticket, CAC e decidir com base neles',
    trilhas:['comercial'],
    status:'extrair',
    o_que_e:'Como olhar os números comerciais e tomar decisão sem virar refém de dashboard.',
    o_que_temos:['Hot seat #22 (Adriana), #46 (Simone) — perguntas sobre indicadores'],
    o_que_falta:['Quais indicadores ela prioriza','Frequência de leitura','Critérios de ação por indicador'],
    fonte_primaria:'Entrevista 1h',
    fonte_secundaria:'Hot seats',
    sessao:'S1 · Comercial',
    duracao_rafa:'1h',
    vira_conteudo:['Aula T1.5 "Decidindo com números"','Playbook de leitura de indicadores']
  },
  {
    id:'precificacao-valor',
    nome:'Precificação por Valor',
    tecnico:'Como precificar a partir de valor entregue, não de hora trabalhada — primeiro aumenta valor, depois aumenta preço',
    trilhas:['oferta'],
    status:'parcial',
    o_que_e:'Sair da precificação por hora/custo e construir preço baseado em transformação. Tese: "Primeiro aumenta valor, depois aumenta preço." Critérios identificados: posicionamento, público, ROI, pesquisa de mercado.',
    o_que_temos:[
      'Lógica explicitada na transcrição (26/05) — critérios + caso prático (social mídia que cobrava R$ 900, ajustou para R$ 3-5k)',
      'Frase autoral: "Primeiro aumenta valor, depois aumenta preço"',
      'Princípio: "Para pagar, a pessoa tem que pensar: cara, ficou barato"',
      '19 hot seats de precificação no dataset (16,1%)',
      'Caso Luciana Ulhoa (#100)'
    ],
    o_que_falta:[
      'Calculadora multi-critério (posicionamento + público + ROI + concorrência)',
      'Roteiro de como vencer o medo de cobrar',
      'Sinalizadores de quando o preço está pronto para subir'
    ],
    fonte_primaria:'Transcrição Consultoria Presencial (26/05)',
    fonte_secundaria:'Hot seats + caso Luciana',
    sessao:'S1 · Oferta',
    duracao_rafa:'30min',
    vira_conteudo:['Aula T2.3 "Cobrando o que vale sem medo"','Calculadora de precificação multi-critério','IA Calculadora de Preço']
  },
  {
    id:'esteira',
    nome:'Esteira de Produtos e Serviços',
    tecnico:'Construção de esteira coerente — "o downsell é o concorrente"',
    trilhas:['oferta'],
    status:'parcial',
    o_que_e:'Mover o cliente de oferta avulsa para esteira que sustenta o mês. Tese-bandeira: "O meu downsell é o meu concorrente" — você entrega solução completa, não pedaços.',
    o_que_temos:[
      'Tese central capturada na transcrição (26/05): "O meu downsell é o meu concorrente"',
      'Princípio: vender pedaços = você vira commodity',
      'Modelo de negócio (recorrente × pontual / personalizado × escalável / sozinha × time) mapeado'
    ],
    o_que_falta:[
      'Exemplos por nicho (advocacia, arquitetura, saúde, consultoria)',
      'Critérios de "vale fazer esteira"',
      'Como construir a oferta principal vs condicional sem virar fragmentação'
    ],
    fonte_primaria:'Transcrição Consultoria Presencial (26/05)',
    fonte_secundaria:'(em construção)',
    sessao:'S1 · Oferta',
    duracao_rafa:'30min',
    vira_conteudo:['Aula T2.5 "Da venda única à esteira"','Template de esteira multi-nicho','Frase para linha editorial']
  },
  {
    id:'valor-do-tempo',
    nome:'Cálculo do Valor do Tempo',
    tecnico:'Quanto vale a hora do empresário, e como isso impacta precificação e delegação',
    trilhas:['oferta'],
    status:'extrair',
    o_que_e:'Calcular valor da hora do dono e usar isso pra decidir o que delegar e o que fazer.',
    o_que_temos:[],
    o_que_falta:['Fórmula da Rafa','Como aplicar na decisão de delegar','Como aplicar na precificação'],
    fonte_primaria:'Entrevista 30min',
    fonte_secundaria:'(buscar em hot seats)',
    sessao:'S1 · Oferta',
    duracao_rafa:'30min',
    vira_conteudo:['Calculadora de valor do tempo','Playbook de decisão']
  },
  {
    id:'pf-pj',
    nome:'Análise PF/PJ',
    tecnico:'Separação financeira e de identidade entre pessoa física e jurídica',
    trilhas:['gestao'],
    status:'extrair',
    o_que_e:'A primeira virada de "autônomo que recebe" para "empresário que opera CNPJ".',
    o_que_temos:['Caso Luciana #100, #106','Conhecimento tácito da Rafa'],
    o_que_falta:['Método de separação financeira','Identidade — como ensinar a se ver como empresário','Critérios de saúde PF/PJ'],
    fonte_primaria:'Entrevista 1h OU hot seat gravado',
    fonte_secundaria:'Caso Luciana',
    sessao:'S2 · Financeiro',
    duracao_rafa:'1h ou 0h',
    vira_conteudo:['Aula T3.1','Planilha de separação','IA Leitora de Caixa']
  },
  {
    id:'fluxo-caixa',
    nome:'Leitura de Fluxo de Caixa',
    tecnico:'Ler o fluxo financeiro e decidir sem precisar abrir planilha toda hora',
    trilhas:['gestao'],
    status:'extrair',
    o_que_e:'Saber se o mês fechou no azul em 5 minutos.',
    o_que_temos:['Caso Luciana #106'],
    o_que_falta:['Estrutura de leitura','Indicadores que ela prioriza','Como decidir investimento a partir de caixa'],
    fonte_primaria:'Hot seat gravado (caso real)',
    fonte_secundaria:'Caso Luciana',
    sessao:'S2 · Financeiro',
    duracao_rafa:'0h se gravar hot seat',
    vira_conteudo:['Aula T3.2','Planilha + IA Leitora de Caixa']
  },
  {
    id:'custos-margem',
    nome:'Mapa de Custos e Margem',
    tecnico:'Custos fixos, variáveis e cálculo de margem real',
    trilhas:['gestao'],
    status:'extrair',
    o_que_e:'Onde o faturamento está vazando.',
    o_que_temos:[],
    o_que_falta:['Método dela','Como identificar custos invisíveis','Como calcular ponto de equilíbrio'],
    fonte_primaria:'Entrevista 30min',
    fonte_secundaria:'(buscar)',
    sessao:'S2 · Financeiro',
    duracao_rafa:'30min',
    vira_conteudo:['Aula T3.3','Mapa de custos + calculadora']
  },
  {
    id:'contratacao-apoio',
    nome:'Critérios de Contratação de Apoio',
    tecnico:'Quando e quem contratar (contador, gestão financeira, BPO)',
    trilhas:['gestao'],
    status:'extrair',
    o_que_e:'Régua para decidir quando vale contratar suporte administrativo/financeiro.',
    o_que_temos:[],
    o_que_falta:['Critérios objetivos','Ordem de contratação','Diferenças BPO vs interno'],
    fonte_primaria:'Entrevista 30min',
    fonte_secundaria:'(buscar)',
    sessao:'S2 · Financeiro',
    duracao_rafa:'30min',
    vira_conteudo:['Aula T3.6','Checklist de contratação']
  },
  {
    id:'mapa-canais',
    nome:'Mapa de Canais de Aquisição',
    tecnico:'Mapeamento de canais quentes a frios (base, indicação, networking, conteúdo, pago)',
    trilhas:['tracao'],
    status:'extrair',
    o_que_e:'Mapa visual dos canais que o aluno tem hoje + os que pode acessar.',
    o_que_temos:['Hot seats #39 (Ana Cláudia), #55 (Webert) — pedidos sobre canais'],
    o_que_falta:['Estrutura do mapa','Critérios de priorização','Como medir cada canal'],
    fonte_primaria:'Entrevista 1h',
    fonte_secundaria:'Hot seats',
    sessao:'S4 · Tração',
    duracao_rafa:'1h',
    vira_conteudo:['Aula T5.1','Mapa de canais']
  },
  {
    id:'indicacao-estruturada',
    nome:'Indicação Estruturada',
    tecnico:'Sair da indicação passiva para sistema de indicação ativa',
    trilhas:['tracao'],
    status:'extrair',
    o_que_e:'Sistema que faz cliente indicar sem você precisar pedir do nada.',
    o_que_temos:[],
    o_que_falta:['O sistema dela','Scripts de pedir indicação','Programa de embaixadores (anteprojeto sugere)'],
    fonte_primaria:'Entrevista 30min',
    fonte_secundaria:'(buscar)',
    sessao:'S4 · Tração',
    duracao_rafa:'30min',
    vira_conteudo:['Aula T5.2','Sistema de indicação']
  },
  {
    id:'escala-funis',
    nome:'Escala de Funis de Aquisição',
    tecnico:'Operação e escala de funis quando o aluno passa para canais pagos',
    trilhas:['tracao'],
    status:'extrair',
    o_que_e:'Fase 2 da Tração — fora do território forte da Rafa, traz convidados experts.',
    o_que_temos:[],
    o_que_falta:['Critérios de prontidão para canais pagos','Quem ela traz (convidados)','Briefing pra convidados'],
    fonte_primaria:'Entrevista 30min + briefings para convidados',
    fonte_secundaria:'(buscar)',
    sessao:'S4 · Tração',
    duracao_rafa:'30min',
    vira_conteudo:['Aula T5.9','Playbook de escala','Aulas Fase 2 (convidados)']
  },
  {
    id:'timing-contratacao',
    nome:'Critérios de Timing de Contratação',
    tecnico:'Quando contratar — a régua exata',
    trilhas:['lideranca'],
    status:'extrair',
    o_que_e:'Critérios objetivos para decidir o momento de contratar a primeira (ou próxima) pessoa.',
    o_que_temos:[
      'Hot seats #25 (Thiago), #63 (Webert), #103 (Priscilla) — pedidos sobre equipe',
      'A própria Rafa contratando a Consultora de Progresso agora (vivo)'
    ],
    o_que_falta:['A régua explícita da Rafa','Sinais para esperar mais um pouco','Como calcular o ROI da contratação'],
    fonte_primaria:'Entrevista 1h (a Rafa pode aproveitar o caso vivo dela)',
    fonte_secundaria:'Hot seats',
    sessao:'S3 · Liderança · prioritário',
    duracao_rafa:'1h',
    vira_conteudo:['Aula T6.2 "A hora certa de contratar"','Checklist de prontidão','Aula T6.1 "O que delegar primeiro"']
  },
  {
    id:'time-comercial',
    nome:'Estrutura de Time Comercial',
    tecnico:'Como montar e operar time de vendas',
    trilhas:['lideranca'],
    status:'extrair',
    o_que_e:'Estrutura mínima de time comercial + treinamento + ritual de gestão.',
    o_que_temos:['Hot seat #63 (Webert) — supervisora de vendas'],
    o_que_falta:['Estrutura mínima','Treinamento','Como cobrar/acompanhar'],
    fonte_primaria:'Entrevista 30min',
    fonte_secundaria:'Hot seats',
    sessao:'S3 · Liderança',
    duracao_rafa:'30min',
    vira_conteudo:['Aula T6.4','Estrutura de time comercial']
  },
  {
    id:'lideranca-delegacao',
    nome:'Liderança e Delegação',
    tecnico:'Como liderar para o time entregar',
    trilhas:['lideranca'],
    status:'extrair',
    o_que_e:'Sair do micromanagement e construir time que entrega.',
    o_que_temos:['Hot seats #25, #63'],
    o_que_falta:['Filosofia de liderança da Rafa','Como dá feedback','Modelo de avaliação'],
    fonte_primaria:'Entrevista 1h',
    fonte_secundaria:'Hot seats',
    sessao:'S3 · Liderança',
    duracao_rafa:'1h',
    vira_conteudo:['Aula T6.5','Playbook de liderança','Modelo de avaliação']
  },
  {
    id:'roteiro-desligamento',
    nome:'Roteiro de Desligamento',
    tecnico:'Como conduzir uma demissão e reunião de alinhamento',
    trilhas:['lideranca'],
    status:'extrair',
    o_que_e:'Demissão com clareza e respeito — protocolo conduzido pela Rafa.',
    o_que_temos:['Hot seat #103 (Priscilla)'],
    o_que_falta:['Passo-a-passo','Frases-chave','Cuidados legais (advogada da Rafa pode contribuir)'],
    fonte_primaria:'Entrevista 30min',
    fonte_secundaria:'Hot seat #103',
    sessao:'S3 · Liderança',
    duracao_rafa:'30min',
    vira_conteudo:['Aula T6.6','Roteiro de desligamento']
  },
  {
    id:'transicao-identidade',
    nome:'Transição de Identidade',
    tecnico:'De profissional técnico a empresário — a virada interna',
    trilhas:['mentalidade'],
    status:'extrair',
    o_que_e:'A virada que precede toda mudança estrutural — o aluno parar de se ver como técnico e começar a se ver como empresário.',
    o_que_temos:['Banco de histórias da Rafa (própria trajetória)'],
    o_que_falta:['Como ela identifica que o aluno precisa dessa virada','Como ela conduz a virada','Suas próprias histórias documentadas'],
    fonte_primaria:'Entrevista 1h + banco de histórias',
    fonte_secundaria:'(documento estratégico mar/26)',
    sessao:'S5 · Mentalidade',
    duracao_rafa:'1h',
    vira_conteudo:['Aula T7.1','Playbook de transição','Banco de histórias']
  },
  {
    id:'roda-vida-empresarial',
    nome:'Roda da Vida Empresarial',
    tecnico:'Diagnóstico em múltiplas dimensões da vida do empresário',
    trilhas:['mentalidade'],
    status:'extrair',
    o_que_e:'Instrumento de diagnóstico — usado tanto no Diagnóstico 360º quanto na Trilha de Mentalidade.',
    o_que_temos:['Citação na arquitetura — não documentado'],
    o_que_falta:['As dimensões','Como aplicar','Como interpretar'],
    fonte_primaria:'Entrevista 1h (instrumento + framework juntos)',
    fonte_secundaria:'(buscar referências)',
    sessao:'S5 · Mentalidade · também alimenta Diagnóstico 360º',
    duracao_rafa:'1h',
    vira_conteudo:['Aula T7','Instrumento Diagnóstico 360º','Roda da Vida preenchível']
  },
  {
    id:'crencas-limitantes',
    nome:'Mapa de Crenças Limitantes',
    tecnico:'Identificar e trabalhar crenças que travam decisões do empresário',
    trilhas:['mentalidade'],
    status:'extrair',
    o_que_e:'Crenças sobre dinheiro, venda, valor que sabotam decisões estratégicas.',
    o_que_temos:[],
    o_que_falta:['Lista das crenças mais comuns','Como diagnosticar','Como trabalhar'],
    fonte_primaria:'Entrevista 30min',
    fonte_secundaria:'(buscar)',
    sessao:'S5 · Mentalidade',
    duracao_rafa:'30min',
    vira_conteudo:['Aula T7.3','Mapa de crenças']
  },

  // ============================================================
  // FRAMEWORKS NOVOS · varredura de transcrições (26/05/2026)
  // Extraídos diretamente das aulas, planejamentos e hot seats
  // ============================================================
  {
    id:'cinco-regras-objecao',
    nome:'5 Regras de Contorno de Objeções',
    tecnico:'Sequência fixa de 5 movimentos para tratar objeções na sessão de venda consultiva',
    trilhas:['comercial'],
    status:'parcial',
    o_que_e:'Antecipar → Eliminar → Encontrar a real → Não discordar → Esgotar com pergunta. Estrutura fixa que a Rafa ensina nas aulas.',
    o_que_temos:[
      'Estrutura completa explicada na aula gravada (Transcrições Aulas do Método Mazzei ~linha 754-802)',
      'Tese central confirmada: "Pergunta não é argumentando"',
      'Aplicação prática documentada em hot seats'
    ],
    o_que_falta:[
      'Banco de objeções por nicho (advocacia, arquitetura, saúde, social mídia, consultoria)',
      'Scripts exatos das perguntas que substituem argumentação',
      'IA simuladora de objeções pra aluno treinar'
    ],
    fonte_primaria:'Transcrições Aulas do Método Mazzei (~linha 754-802) + Engenharia de Vendas PDF',
    fonte_secundaria:'Hot Seats múltiplos com aplicação ao vivo',
    sessao:'S2 · Comercial · já temos material',
    duracao_rafa:'0h-30min (Inception consolida)',
    vira_conteudo:[
      'Aula T1.2 "Transformando o vou pensar em decisão"',
      'IA Simulador de Objeções',
      'Banco de objeções por nicho'
    ]
  },
  {
    id:'matematica-funil',
    nome:'Matemática Multiplicativa do Funil',
    tecnico:'Engenharia de Vendas — cada etapa é uma estação de linha de montagem; pequenas otimizações geram crescimento exponencial',
    trilhas:['comercial'],
    status:'parcial',
    o_que_e:'Funil não é soma, é multiplicação composta. Subir cada etapa de 50% pra 60% amplifica exponencialmente. Engenharia (não marketing) sustenta crescimento.',
    o_que_temos:[
      'Aula gravada "Engenharia de Vendas" cobre tema completo',
      'Tese formalizada: "Crescimento sustentável não começa na atração, começa na eficiência da engrenagem"',
      'Analogia da linha de montagem documentada'
    ],
    o_que_falta:[
      'Calculadora visual de funil composto (input: taxas atuais → output: leverage por melhoria)',
      'Diagnóstico de qual etapa otimizar primeiro (maior ROI por hora)'
    ],
    fonte_primaria:'Transcrição aula Engenharia de Vendas - 03_03_26 (PDF)',
    fonte_secundaria:'Aplicação em planejamentos individuais',
    sessao:'S2 · Comercial',
    duracao_rafa:'0h (Inception extrai)',
    vira_conteudo:[
      'Aula T1.3 "Enxergando onde o dinheiro trava no funil"',
      'Calculadora interativa de Engenharia de Funil',
      'IA Diagnóstico de gargalo de funil'
    ]
  },
  {
    id:'icp-estrutural',
    nome:'ICP Estrutural (Filtro Invisível)',
    tecnico:'Definição estrutural de Ideal Customer Profile — regime tributário, faturamento mínimo, conhecimento técnico do cliente',
    trilhas:['comercial','posicionamento'],
    status:'parcial',
    o_que_e:'Sem ICP estrutural definido, aluno alimenta o funil com qualquer peça. Cada lead descartado pós-qualificação é hora de trabalho jogada fora. ICP define matéria-prima do funil.',
    o_que_temos:[
      'Conceito explicado na aula Engenharia de Vendas (~12:32-11:44min)',
      'Tese central: "Sem ICP definido, você alimenta a linha com qualquer peça"',
      'Distinção entre ICP estrutural e qualificação tática documentada'
    ],
    o_que_falta:[
      'Template de definição de ICP estrutural (perguntas que cliente precisa responder)',
      'IA Construtor de ICP — pega contexto do aluno e gera ICP'
    ],
    fonte_primaria:'Engenharia de Vendas PDF (~12:32-11:44)',
    fonte_secundaria:'Planejamentos individuais',
    sessao:'S2 · Comercial',
    duracao_rafa:'0h (Inception extrai)',
    vira_conteudo:[
      'Template ICP Estrutural',
      'IA Construtor de ICP',
      'Aula T1.1 (slide de pré-qualificação)'
    ]
  },
  {
    id:'tres-duvidas-vou-pensar',
    nome:'As 3 Únicas Dúvidas Reais Atrás do "Vou Pensar"',
    tecnico:'Diagnóstico de objeção — produto/serviço, preço/forma de pagamento, confiança. Qualquer outra é mentira ou medo',
    trilhas:['comercial'],
    status:'parcial',
    o_que_e:'Framework de diagnóstico de objeção. Quando cliente fala "vou pensar", Rafa identifica em qual das 3 dúvidas ele está — se não está em nenhuma, força perguntar "o que exatamente?". Destrava o jogo.',
    o_que_temos:[
      'Documentado em aulas (~linha 947-956)',
      'Tese cautelar: "Proibido perder venda por saber que o cliente está mentindo e você fingiu que acreditou"'
    ],
    o_que_falta:[
      'Scripts por dúvida (resposta específica pra cada uma)',
      'Diagnóstico rápido em 30 segundos durante a reunião'
    ],
    fonte_primaria:'Transcrições Aulas do Método Mazzei (~linha 947-956)',
    fonte_secundaria:'Hot seats',
    sessao:'S2 · Comercial',
    duracao_rafa:'0h (Inception extrai)',
    vira_conteudo:[
      'Roteiro de Sessão de Venda Consultiva (slide de fechamento)',
      'IA Diagnóstico de Objeção'
    ]
  },
  {
    id:'pre-vendas-vs-vendas',
    nome:'Funil de Pré-Vendas × Funil de Vendas',
    tecnico:'Dois funis paralelos — Pré-Vendas gera valor (Uau do Cliente), Vendas conduz reunião consultiva',
    trilhas:['comercial'],
    status:'parcial',
    o_que_e:'Pré-Vendas: Captação + Qualificação + Diagnóstico. Vendas: Apresentação + Objeção + Fechamento. Rafa estrutura formulários progressivos para reduzir fricção entre etapas.',
    o_que_temos:[
      'Detalhamento em planejamentos individuais (~linha 932-1467)',
      'Princípio de formulário progressivo documentado'
    ],
    o_que_falta:[
      'Templates dos formulários por etapa',
      'IA que monta funil progressivo por nicho',
      'Conexão com Engenharia Reversa do Funil'
    ],
    fonte_primaria:'Planejamentos Individuais MAZZEI$TRIA (~linha 932-1467)',
    fonte_secundaria:'Aulas de Engenharia de Vendas',
    sessao:'S2 · Comercial',
    duracao_rafa:'0h-30min',
    vira_conteudo:[
      'Templates de formulário progressivo',
      'IA Construtor de Funil Progressivo',
      'Aula T1.3 (complemento)'
    ]
  },
  {
    id:'pergunta-empatica',
    nome:'Pergunta Empática × Convencimento',
    tecnico:'Micro-framework de condução de venda — não convença, pergunte. Cliente responde sozinho',
    trilhas:['comercial'],
    status:'parcial',
    o_que_e:'Estrutura de 3 passos: (1) Reconhecer dor específica, (2) Fazer pergunta reflexiva, (3) Deixar silêncio trabalhar. Substitui o "você precisa de X" pela pergunta que faz cliente concluir sozinho.',
    o_que_temos:[
      'Caso aplicado documentado (Fran personal · Hot Seat NS 18/03 ~linha 1648-1690)',
      'Tese central: "Quem tenta convencer não convence. Faz pergunta."',
      'Comparação errado vs certo com exemplos'
    ],
    o_que_falta:[
      'Banco de "pergunta empática" por dor de cliente',
      'IA Treinadora de Pergunta'
    ],
    fonte_primaria:'Hot Seat NS 18/03 (~linha 1648-1690)',
    fonte_secundaria:'Múltiplas aplicações em planejamentos',
    sessao:'S2 · Comercial',
    duracao_rafa:'30min (banco de exemplos)',
    vira_conteudo:[
      'Banco de perguntas empáticas por nicho',
      'IA Treinadora de Pergunta',
      'Frase para linha editorial Instagram'
    ]
  },
  {
    id:'etapa-nao-e-produto',
    nome:'Etapa ≠ Produto',
    tecnico:'Princípio fundamental de oferta — vender etapa do método não vende produto. Aluno entrega resultado, não fragmento',
    trilhas:['oferta'],
    status:'parcial',
    o_que_e:'Quando aluno fragmenta entrega (vende "planejamento" sem implementação, vende "prévia" sem pacote), está vendendo etapa, não produto. Rafa força: "isso é etapa ou é produto?"',
    o_que_temos:[
      'Caso Duda (maquiadora de noivas) — vendia prévia separada, mudou e disse 7 NÃOs em 2024 (Hot Seats NS ~linha 610-633)',
      'Caso Mari (consultoria) — entregava só planejamento, virou caso de virada',
      'Tese explícita: "Etapa não é produto, então não vai entrar na sua esteira"'
    ],
    o_que_falta:[
      'Critério objetivo de etapa vs produto',
      'IA Diagnosticadora de Esteira'
    ],
    fonte_primaria:'Hot Seats NEGÓCIO SOBERANO (~linha 610-633)',
    fonte_secundaria:'Múltiplos casos em planejamentos',
    sessao:'S1 · Oferta',
    duracao_rafa:'30min',
    vira_conteudo:[
      'Diagnóstico de Esteira (aluno classifica seus serviços)',
      'Frase para linha editorial'
    ]
  },
  {
    id:'etica-vs-carater',
    nome:'Ética × Caráter',
    tecnico:'Diferenciação entre cumprir regra quando observado (ética) e agir certo quando ninguém vê (caráter)',
    trilhas:['mentalidade'],
    status:'parcial',
    o_que_e:'Ética = o que você faz quando estão olhando. Caráter = o que você faz quando ninguém tá vendo. Aplicado em conduta com cliente: contratos, registro de marca, posicionamento honesto.',
    o_que_temos:[
      'Caso Mari (registro de marca) documentado (Hot Seats NS ~linha 440-489)',
      'Frase autoral consolidada',
      'Aplicação prática em conduta comercial'
    ],
    o_que_falta:[
      'Checklist de conduta empresarial',
      'Casos comparativos'
    ],
    fonte_primaria:'Hot Seats NEGÓCIO SOBERANO (~linha 440-489)',
    fonte_secundaria:'WhatsApp + planejamentos',
    sessao:'S5 · Mentalidade',
    duracao_rafa:'30min',
    vira_conteudo:[
      'Frase autoral em linha editorial',
      'Checklist de conduta'
    ]
  },
  {
    id:'investimento-presenca',
    nome:'Investimento em Presença = Retorno Acelerado',
    tecnico:'Cenário físico, stories e visual do escritório/atelier não são custo estético — são ticket de diferenciação',
    trilhas:['posicionamento'],
    status:'parcial',
    o_que_e:'Quando aluno tem ticket alto mas presença visual de ticket baixo, há gap que sabota a percepção. Reformar cenário não é vaidade — é comunicar autoridade desde o primeiro contato visual.',
    o_que_temos:[
      'Caso Evelyn (arquiteta) documentado (Hot Seats MAZZEI$TRIA ~linha 532-550)',
      'Caso Gabi confirmado',
      'Princípio aplicável a stories, fundo de videocall, atelier físico'
    ],
    o_que_falta:[
      'Checklist visual por nicho',
      'Calculadora "ticket × presença atual" → gap'
    ],
    fonte_primaria:'Hot Seats MAZZEI$TRIA (~linha 532-550)',
    fonte_secundaria:'Múltiplos casos em planejamentos',
    sessao:'S4 · Posicionamento',
    duracao_rafa:'30min',
    vira_conteudo:[
      'Checklist Visual Bellz House',
      'IA Diagnóstico Visual'
    ]
  },
  {
    id:'depoimento-vs-elogio',
    nome:'Depoimento × Elogio',
    tecnico:'Estrutura de prova social — depoimento traz números e transformação, elogio é genérico',
    trilhas:['posicionamento','comercial'],
    status:'parcial',
    o_que_e:'Elogio ("trabalho com fulana, ela é ótima") não vende. Depoimento (estruturado em ANTES/DEPOIS + números + transformação concreta) vende. 4 perguntas-âncora para extrair depoimento real.',
    o_que_temos:[
      'Estrutura de 4 perguntas documentada (Planejamentos Individuais ~linha 545-1876)',
      'Tese: "Elogio é genérico. Depoimento traz indicadores e transformação real."',
      'Aplicação confirmada em casos práticos'
    ],
    o_que_falta:[
      'Template de formulário de depoimento',
      'IA Extratora de Depoimento'
    ],
    fonte_primaria:'Planejamentos Individuais MAZZEI$TRIA (~linha 545-1876)',
    fonte_secundaria:'Hot seats',
    sessao:'S4 · Posicionamento',
    duracao_rafa:'30min',
    vira_conteudo:[
      'Template formulário de depoimento',
      'IA Extratora de Depoimento',
      'Banco de modelos por nicho'
    ]
  },
  {
    id:'regra-link-nao-telefone',
    nome:'Regra do Link, não Telefone',
    tecnico:'Protocolo de qualificação para indicação — sempre dar link de formulário, nunca telefone direto',
    trilhas:['tracao','comercial'],
    status:'parcial',
    o_que_e:'Quando indicação chega (BNI, networking, parceiro), aluno dá link único de qualificação (formulário 2min), não o telefone. Lead preenche, cai no CRM, aluno qualifica antes de marcar reunião.',
    o_que_temos:[
      'Protocolo documentado (Hot Seat NS 18/03 ~linha 3001-3058)',
      'Aplicação prática com Lorena (BNI) confirmada',
      'Frase-âncora: "Quando me indicar, você dá o link, não meu telefone."'
    ],
    o_que_falta:[
      'Template de formulário de qualificação',
      'IA que monta o formulário por nicho',
      'Scripts pra parceiros (como ensinar quem indica)'
    ],
    fonte_primaria:'Hot Seat NS 18/03 (~linha 3001-3058)',
    fonte_secundaria:'Aplicações múltiplas em planejamentos',
    sessao:'S5 · Tração',
    duracao_rafa:'30min',
    vira_conteudo:[
      'Template formulário de qualificação',
      'IA Construtor de Formulário Qualificação'
    ]
  },

  // ============================================================
  // FRAMEWORKS ORIGINAIS (continuação)
  // ============================================================
  {
    id:'marca-pessoal-corporativa',
    nome:'Marca Pessoal × Corporativa',
    tecnico:'Quando construir marca no próprio nome × no nome da empresa',
    trilhas:['posicionamento'],
    status:'extrair',
    o_que_e:'Decisão estratégica de em qual marca investir.',
    o_que_temos:['Doc estratégico mar/26'],
    o_que_falta:['Critérios da Rafa','Quando é uma, quando é a outra','Exemplos por nicho'],
    fonte_primaria:'Entrevista 30min',
    fonte_secundaria:'Doc estratégico',
    sessao:'S4 · Posicionamento',
    duracao_rafa:'30min',
    vira_conteudo:['Aula T4.3','Guia de decisão']
  }
];

// ================================================================
// JORNADA DETALHADA
// ----------------------------------------------------------------
// Cada peça da jornada do aluno tem página dedicada com:
// - objetivo · processo · papéis · ferramentas · o que falta criar
// ================================================================
const JORNADA_DETALHADA = {

  'onboarding': {
    id:'onboarding',
    nome:'Onboarding',
    subtitulo:'A entrada do aluno no ecossistema',
    objetivo:'Garantir que toda novo aluno comece com plataformas configuradas, ritmo entendido, regras conhecidas e expectativa alinhada — sem que isso consuma a agenda da Rafa.',
    duracao:'7 dias corridos · do pagamento ao primeiro encontro',
    status:'parcial',
    papeis:[
      { quem:'Consultora de Progresso', papel:'Conduz 100% do processo. É o ponto único de contato do aluno nesta fase.' },
      { quem:'Rafa', papel:'Não participa operacionalmente. Recebe relatório da CP quando o onboarding fecha.' },
      { quem:'Aluno', papel:'Preenche briefing inicial, faz acesso às plataformas, lê documento de regras, assiste 2 aulas de boas-vindas.' },
      { quem:'IA', papel:'IA de Boas-Vindas (a criar) — recebe o aluno, faz briefing inicial conversacional, gera resumo pra CP.' }
    ],
    processo:[
      { dia:'Dia 0 · pagamento confirmado', acao:'CP é notificada automaticamente. Manda mensagem de boas-vindas + link de acesso à área de membros + agenda do primeiro encontro.' },
      { dia:'Dia 1', acao:'Aluno recebe email com vídeo de 5min da Rafa explicando o método em alta-visão + link para conversa com a IA de Boas-Vindas.' },
      { dia:'Dia 2-3', acao:'Aluno conversa com IA de Boas-Vindas (briefing inicial: contexto do negócio, expectativas, momento). IA gera resumo estruturado pra CP.' },
      { dia:'Dia 4', acao:'CP revisa o resumo, manda WhatsApp pro aluno com cronograma personalizado + lista de pré-requisitos do Diagnóstico 360º.' },
      { dia:'Dia 5-6', acao:'Aluno completa pré-requisitos (assina contrato, preenche dados, agenda Diagnóstico 360º).' },
      { dia:'Dia 7', acao:'Aluno entra no grupo de WhatsApp da comunidade. CP faz apresentação rápida no grupo.' }
    ],
    ferramentas_stack:[
      { item:'Curseduca', uso:'Área de membros com vídeos de boas-vindas + documento de regras', status:'pronto' },
      { item:'Notion-mãe (gestão de alunos)', uso:'CP atualiza status do onboarding + dispara automações', status:'em construção' },
      { item:'WhatsApp Business', uso:'Comunicação direta CP-aluno + grupo da comunidade', status:'pronto' },
      { item:'IA de Boas-Vindas (Claude Project)', uso:'Briefing conversacional inicial', status:'a criar' },
      { item:'Calendly / Google Agenda', uso:'Agendamento de Diagnóstico 360º + primeiro 1:1', status:'pronto' },
      { item:'Contrato eletrônico (DocuSign / Assiny)', uso:'Assinatura digital', status:'pronto' }
    ],
    a_criar:[
      'IA de Boas-Vindas no Claude Project (knowledge base: regras do produto, contexto Bellz House, perguntas do briefing)',
      'Documento de regras do 2Z Level (antecedência hot seat, política de reposição, sino, garantia) — formato PDF Bellz House',
      'Vídeo de 5min da Rafa (script + gravação) — entrega o método em alta-visão',
      'Templates de mensagem WhatsApp da CP (banco de 15 mensagens cobrindo cenários do onboarding)',
      'Estrutura do Notion-mãe (DBs de alunos, status do onboarding, automações)'
    ],
    output:'Aluno sai pronta para o Diagnóstico 360º: conta na plataforma ativa, contrato assinado, contexto entregue à Rafa pela CP, expectativa alinhada, comunidade conhecida.'
  },

  'diagnostico-360': {
    id:'diagnostico-360',
    nome:'Diagnóstico 360º',
    subtitulo:'Mapeamento estratégico do ponto de partida do aluno',
    objetivo:'Capturar o estado atual do aluno em múltiplas dimensões (estratégica, financeira, identidade, posicionamento) para que o Plano Mestre seja construído com base em fatos, não em achismo.',
    duracao:'2 semanas · do início do preenchimento ao Plano Mestre',
    status:'parcial',
    papeis:[
      { quem:'Aluno', papel:'Preenche o Diagnóstico 360º com apoio das IAs. Disponibiliza dados reais do negócio (P&L, faturamento, processos).' },
      { quem:'IAs de Diagnóstico', papel:'Conduzem o aluno por cada instrumento, fazem perguntas socráticas, geram relatório consolidado pra Rafa.' },
      { quem:'Rafa', papel:'Lê o relatório consolidado (não preenche). Vai com leitura pronta pra reunião de Plano Mestre.' },
      { quem:'Consultora de Progresso', papel:'Acompanha o preenchimento, cobra entregáveis, garante que o aluno chegue no Plano Mestre com o Diagnóstico 100% pronto.' }
    ],
    processo:[
      { etapa:'01 · Score Soberano', desc:'Diagnóstico em ~30 critérios cruzando saúde do negócio, identidade empresarial e maturidade comercial. Output: score de 0-100 + mapa de prioridades.' },
      { etapa:'02 · Roda da Vida Empresarial', desc:'Mapeamento das áreas do negócio (Comercial, Oferta, Gestão, Posicionamento, Tração, Liderança, Mentalidade) com ações mínimas inegociáveis por área. Substitui Roda da Vida tradicional. Output: termômetro de satisfação + ações de virada.' },
      { etapa:'03 · Leitura PF/PJ', desc:'Análise da separação financeira e de identidade. Como aluno se vê: técnica, autônoma, dona ou empresária? Output: status atual + ações de transição.' },
      { etapa:'04 · PUV Atual', desc:'Captura da PUV que aluno usa hoje (mesmo que tácita). Análise de coerência com público e produto. Output: mapa de gap entre PUV declarada e PUV ideal.' }
    ],
    ferramentas_stack:[
      { item:'IA Score Soberano (Claude Project)', uso:'Conduz aluno por 30 perguntas, gera relatório', status:'a criar' },
      { item:'IA Roda da Vida Empresarial', uso:'Conduz auto-avaliação por área + sugere ações mínimas', status:'a criar' },
      { item:'IA Leitura PF/PJ', uso:'Diagnóstico financeiro + identidade empresarial', status:'a criar' },
      { item:'IA Analisadora de PUV', uso:'Captura PUV atual + sugere ajustes', status:'a criar' },
      { item:'Notion (Home Office Bellz)', uso:'Aluno preenche, IAs consomem, relatório fica documentado', status:'em construção' },
      { item:'Loom / vídeo', uso:'Aluno grava 1 vídeo de 5min apresentando o negócio (input pras IAs)', status:'pronto' }
    ],
    a_criar:[
      '4 IAs independentes (uma por instrumento) no Claude Project',
      'Templates Notion preenchíveis para cada instrumento',
      'IA Consolidadora — recebe outputs das 4 IAs + vídeo do aluno, gera relatório executivo pra Rafa (5 páginas)',
      'Rubrica de avaliação do Score Soberano (critérios + pesos — precisa extrair da Rafa)',
      'Definição final das áreas da Roda da Vida Empresarial (parcial — ver Knowledge Base)',
      'Vídeo da Rafa explicando o Diagnóstico 360º (script + gravação)'
    ],
    output:'Relatório de 5 páginas com: score atual, áreas de virada, prioridades, perguntas para a Rafa investigar no Plano Mestre. Aluno chega na reunião com dor mapeada + Rafa chega com leitura pronta.'
  },

  'plano-mestre': {
    id:'plano-mestre',
    nome:'Plano Mestre',
    subtitulo:'O mapa anual do aluno · 1:1 com a Rafa',
    objetivo:'Transformar o Diagnóstico 360º em um plano anual estruturado: trilhas que vai percorrer, ordem, metas mensais, marcos de auditoria. Não é planejamento estratégico — é cronograma de aplicação do método na realidade do aluno.',
    duracao:'1 sessão de 90min com a Rafa + 1 semana de finalização assíncrona',
    status:'extrair',
    papeis:[
      { quem:'Rafa', papel:'Conduz 100% da sessão. Ouve o relatório do Diagnóstico, faz perguntas-âncora, propõe trilhas e ordem, valida metas com o aluno.' },
      { quem:'Aluno', papel:'Apresenta contexto, recebe direção, confirma ou ajusta propostas, sai com plano em mãos.' },
      { quem:'IA Gerador de Plano Mestre', papel:'Após sessão, recebe transcrição + Diagnóstico + decisões da Rafa, gera documento final do Plano Mestre estruturado.' },
      { quem:'Consultora de Progresso', papel:'Garante que aluno chegou preparada (Diagnóstico 100%) + acompanha cumprimento do plano nos meses seguintes (sinaliza desvios pra Rafa).' }
    ],
    processo:[
      { etapa:'01 · Pré-sessão (Rafa)', desc:'Rafa lê o relatório consolidado do Diagnóstico (15-20min). Identifica áreas mais críticas, formula 3-5 perguntas-âncora para a sessão.' },
      { etapa:'02 · Sessão Plano Mestre (90min)', desc:'Rafa abre questionando o aluno sobre as áreas críticas (não confirmando o relatório — testando se aluno se reconhece). Propõe ordem das trilhas + metas mensais. Aluno pode ajustar ritmo.' },
      { etapa:'03 · Gravação + transcrição', desc:'Sessão é gravada. Transcrição alimenta a IA Gerador de Plano Mestre.' },
      { etapa:'04 · Geração do documento', desc:'IA recebe: transcrição + Diagnóstico + template Plano Mestre. Gera documento final estruturado em até 48h.' },
      { etapa:'05 · Validação (Rafa)', desc:'Rafa revisa o documento gerado pela IA, ajusta o que necessário, libera pro aluno.' },
      { etapa:'06 · Entrega (CP)', desc:'CP entrega o Plano Mestre pro aluno em conversa síncrona (30min), configura no Home Office Bellz, define ritmo de check-in.' }
    ],
    ferramentas_stack:[
      { item:'Google Meet / Loom', uso:'Sessão gravada com a Rafa', status:'pronto' },
      { item:'IA Gerador de Plano Mestre (Claude Project)', uso:'Gera documento estruturado a partir da transcrição + Diagnóstico', status:'a criar' },
      { item:'Template Plano Mestre (Notion)', uso:'Estrutura padrão que a IA preenche', status:'a criar' },
      { item:'Home Office Bellz (Notion do aluno)', uso:'Onde o Plano Mestre fica vivo, com check-ins mensais', status:'em construção' },
      { item:'Otter / Descript', uso:'Transcrição automática da sessão', status:'pronto' }
    ],
    a_criar:[
      'Template do Plano Mestre — estrutura padrão (12 meses, trilhas atribuídas por mês, metas, marcos, instrumentos por etapa)',
      'IA Gerador de Plano Mestre no Claude Project (knowledge base: template + Diagnóstico exemplo + transcrições de Planos Mestres reais)',
      'Roteiro da sessão de 90min com a Rafa (perguntas-âncora, fluxo, regras)',
      'Documento de regras do Plano Mestre (o que pode/não pode mudar depois, frequência de revisão, etc)',
      'Banco de Planos Mestres aprovados (referência cruzada — IA aprende com casos reais ao longo do tempo)'
    ],
    output:'Documento de Plano Mestre (10-15 páginas) entregue ao aluno até 7 dias após a sessão. Contém: contexto do diagnóstico, trilhas atribuídas, ordem de execução, metas mensais, marcos (Revisão de Rota mês 6, Travessia mês 11), instrumentos por etapa.'
  },

  'a-fundacao': {
    id:'a-fundacao',
    nome:'A Fundação',
    subtitulo:'A base universal · todo aluno passa · também base do Sell-Z',
    objetivo:'Antes das trilhas personalizadas, todo aluno estrutura a base que sustenta qualquer crescimento: identidade, visão estratégica, leitura de mercado, infraestrutura mínima do negócio. Sem A Fundação, qualquer outra ação fica em cima de fundação rasa.',
    duracao:'Primeiros 60 dias da jornada (paralelo às trilhas iniciais)',
    status:'parcial',
    papeis:[
      { quem:'Aluno', papel:'Executa as ações concretas (com ajuda dos aceleradores). 80% do trabalho é dela.' },
      { quem:'IAs (Aceleradores)', papel:'Cada ação tem uma IA dedicada que reduz o tempo de execução em ~70%. Aluno não aprende a fazer do zero — usa o acelerador.' },
      { quem:'Rafa', papel:'Aparece em 2 momentos: revisão crítica do Plano de Vida × Plano de Negócio (15min) e revisão crítica do Posicionamento autoral (30min).' },
      { quem:'Consultora de Progresso', papel:'Cobra entregáveis semanais. Garante que aluno não fica patinando em uma etapa.' }
    ],
    principio:'Aluno só aprende o que é ESSENCIALMENTE necessário. Tudo o que pode ser acelerado por IA é acelerado. O tempo do aluno é gasto fazendo o que REALMENTE precisa ser ela.',
    checklist_acoes:[
      {
        ordem:'01',
        acao:'Plano de Vida × Plano de Negócio',
        descricao:'Definir identidade pretendida, estilo de vida desejado e modelo de negócio que sustenta isso. Sem incoerências.',
        tempo_aluna:'2h',
        acelerador:{ nome:'IA Coerência de Vida × Negócio', status:'a criar', desc:'Conduz aluno por 18 perguntas + identifica incoerências + sugere modelo de negócio coerente.' },
        rafa_envolvida:'Revisão crítica de 15min após preenchimento'
      },
      {
        ordem:'02',
        acao:'Leitura do Tabuleiro (Pesquisa de Mercado)',
        descricao:'Mapear concorrentes diretos e indiretos, fazer cliente oculto em 5 concorrentes, identificar gaps de mercado. Sair com clareza do território.',
        tempo_aluna:'4h distribuídas em 1 semana',
        acelerador:{ nome:'IA Mapeadora de Concorrência', status:'a criar', desc:'Recebe nicho, gera lista de 10-15 concorrentes diretos/indiretos, roteiro de cliente oculto, planilha de comparação.' },
        rafa_envolvida:'Não participa diretamente — aluno leva achados pra próxima sessão'
      },
      {
        ordem:'03',
        acao:'Setup PF × PJ',
        descricao:'Abrir CNPJ (se não tem), separar contas bancárias PF/PJ, configurar contador estratégico, montar fluxo de caixa básico.',
        tempo_aluna:'1h decisão + 1-2 semanas execução com profissionais',
        acelerador:{ nome:'Checklist de Setup PJ + IA Indicadora de Contador', status:'a criar', desc:'Checklist passo-a-passo + IA que indica perfil de contador ideal pro nicho do aluno + scripts pra fazer triagem de contadores.' },
        rafa_envolvida:'Não participa — execução operacional do aluno'
      },
      {
        ordem:'04',
        acao:'Criação do Material de Oferta Comercial',
        descricao:'Criar o PDF de Oferta Irresistível do produto/serviço principal do aluno usando o Criador de Ofertas Bellz House.',
        tempo_aluna:'1h briefing + 30min revisão',
        acelerador:{ nome:'Criador de Ofertas Bellz House', status:'em construção (Sprint 0 pronto)', desc:'Briefing conversacional → gera HTML estilizado com identidade visual do aluno em 14 slides estruturados.' },
        rafa_envolvida:'Revisão estratégica de 15min no primeiro Hot Seat'
      },
      {
        ordem:'05',
        acao:'Setup de Posicionamento Autoral',
        descricao:'Construir frase de posicionamento autoral, matriz de diferenciação por atributos verificáveis, bio Instagram/LinkedIn coerente, manifesto pessoal.',
        tempo_aluna:'3h distribuídas em 1 semana',
        acelerador:{ nome:'IA Construtor de Posicionamento', status:'a criar', desc:'Faz engenharia reversa do posicionamento do aluno (perguntas socráticas) + gera matriz de atributos + 3 versões de bio + manifesto draft.' },
        rafa_envolvida:'Revisão crítica de 30min — aprova ou pede ajuste'
      },
      {
        ordem:'06',
        acao:'Setup Mínimo de CRM',
        descricao:'Implantar CRM básico (Notion ou Trello), começar a registrar leads, agendar reuniões consultivas, medir taxa de conversão.',
        tempo_aluna:'2h setup + uso diário',
        acelerador:{ nome:'Template CRM Notion Bellz', status:'a criar', desc:'Notion pronto pro aluno duplicar. Já vem com etapas do funil, automações básicas, dashboard de taxa de conversão.' },
        rafa_envolvida:'Não participa — execução operacional'
      },
      {
        ordem:'07',
        acao:'Ritual Mínimo de Vendas',
        descricao:'Definir bloco fixo na agenda semanal pra prospecção/follow-up/reuniões consultivas. Vender não é tarefa, é rotina.',
        tempo_aluna:'30min setup + execução semanal',
        acelerador:{ nome:'IA Estruturador de Agenda Comercial', status:'a criar', desc:'Sugere blocos baseados no estilo de vida do aluno (de Plano de Vida × Negócio) + envia lembretes via WhatsApp.' },
        rafa_envolvida:'Não participa — execução operacional'
      }
    ],
    ferramentas_stack:[
      { item:'7 IAs aceleradoras (Claude Project)', uso:'1 IA por ação do checklist', status:'a criar (1 de 7 em construção)' },
      { item:'Home Office Bellz (Notion)', uso:'Onde o aluno executa A Fundação + acompanha progresso', status:'em construção' },
      { item:'Curseduca', uso:'Aulas curtas (10-15min) explicando o ESSENCIAL de cada ação — não tutorial completo, só o que aluno precisa pra usar o acelerador', status:'em construção' },
      { item:'Template CRM Notion', uso:'Aluno duplica e usa', status:'a criar' }
    ],
    a_criar:[
      'IA Coerência de Vida × Negócio',
      'IA Mapeadora de Concorrência',
      'Checklist Setup PJ + IA Indicadora de Contador',
      'IA Construtor de Posicionamento',
      'Template CRM Notion Bellz',
      'IA Estruturador de Agenda Comercial',
      '7 aulas curtas (10-15min cada) explicando o essencial de cada ação',
      'Dashboard de progresso d\'A Fundação no Home Office Bellz (visual: 7 ações com check verde/amarelo/vermelho)'
    ],
    output:'Aluno sai d\'A Fundação com: modelo de negócio claro, leitura de mercado feita, infraestrutura PJ resolvida, PDF de Oferta pronto, posicionamento construído, CRM rodando, ritual de vendas instalado. Base sólida pra qualquer trilha personalizada que venha depois.',
    nota_sell_z:'A Fundação será também a estrutura base do Sell-Z (cohort 8 semanas) — adaptada para grupo. As 7 ações do checklist são as mesmas, com aceleradores compartilhados. Diferença: no 2Z Level cada aluno roda no próprio ritmo; no Sell-Z roda em cohort sincronizado.'
  }
};

// ================================================================
// PRODUTOS DO ECOSSISTEMA
// ----------------------------------------------------------------
// Cada produto tem dados gerais + jornada do aluno + encontros.
// Trilhas e frameworks ficam em TRILHAS/FRAMEWORKS (agnósticos).
// ================================================================
const PRODUTOS = [
  {
    id:'dois-z-level',
    nome:'2Z Level',
    formato:'Mentoria contínua em grupo · 3 encontros/mês · garantia 6 meses condicional',
    publico:'Persona Fernanda · R$35-150k/mês',
    ticket:'R$20.4k-22.8k/ano (atual)',
    quando:'Em operação · 26 alunos ativos (migradas de Maestria)',
    trilhas_cobertas:'Todas as 7 trilhas conforme Plano Mestre individual',
    promessa:'Acompanhamento próximo para empresários consolidados que precisam escalar sem comprometer qualidade.',
    puv:'Direcionamos o crescimento do seu negócio através de um modelo de conselho estratégico de alto nível, para que você assuma o domínio do seu legado sem que a escala dependa do seu sacrifício pessoal.',
    tagline:'Onde você recebe o domínio definitivo da sua estrutura.',
    status:'ativo',
    paleta:{ primaria:'#7da5b8', secundaria:'#1f3a2a' },
    // === JORNADA DO ALUNO (cada etapa abre página detalhada via #jornada/<id>) ===
    jornada:{
      entrada:[
        { id:'onboarding', num:'01', nome:'Onboarding', quem:'Consultora de Progresso', desc:'Apresenta funcionamento + plataformas + ritual. Conduzido 100% pela CP — Rafa não opera nesta etapa.' },
        { id:'diagnostico-360', num:'02', nome:'Diagnóstico 360º', quem:'Aluno + IAs de apoio', desc:'Score Soberano + Roda da Vida Empresarial + leitura PF/PJ + PUV atual. 4 IAs conduzem.' },
        { id:'plano-mestre', num:'03', nome:'Plano Mestre', quem:'1:1 com a Rafa (90min)', desc:'Mapa anual do aluno: trilhas + metas mensais + ordem de execução. Gerado por IA, validado pela Rafa.' }
      ],
      base_universal:[
        { id:'a-fundacao', nome:'A Fundação', desc:'Base universal de todo aluno. Inclui Plano de Vida × Negócio, Leitura do Tabuleiro, Setup PJ, Material de Oferta, Posicionamento, CRM, Ritual de Vendas. 7 ações concretas com aceleradores IA. Também é a base do Sell-Z.' }
      ],
      marcos_ciclo:[
        { quando:'Mês 6', nome:'Revisão de Rota', desc:'1:1 com a Rafa. Leitura dos números + ajuste do plano.' },
        { quando:'Mês 11-12', nome:'A Travessia', desc:'1:1 com a Rafa. Balanço do ciclo + janela de renovação.' }
      ]
    },
    // === ENCONTROS RECORRENTES ===
    encontros:[
      { nome:'A Mesa Bellz', frequencia:'1×/mês · manhã', desc:'Ritual de comunidade + café + convidado especialista. Fortalece pertencimento.' },
      { nome:'Janela do Mentorado', frequencia:'2×/mês · 30min', desc:'1:1 com a Rafa, outros alunos assistem como ouvintes. 24/ano sem reposição.' },
      { nome:'Engenharia Reversa', frequencia:'1×/mês · a partir de ago/2026', desc:'Análise de uma reunião comercial gravada do aluno. Pré-requisito: oferta definida.' },
      { nome:'Hot Seat', frequencia:'1×/semana', desc:'Sessão grupal para análise de caso específico de um aluno. Material entregue antes (regra inegociável).' },
      { nome:'Evento presencial anual', frequencia:'1×/ano · 3 dias', desc:'1 dia exclusivo + 2 dias abertos a pagantes. Imersão profunda.' }
    ],
    // === COMPONENTES TANGÍVEIS ===
    componentes:[
      { nome:'Home Office Bellz', tipo:'Notion', desc:'Ambiente do aluno: gestão diária + CRM com metodologia + banco de materiais.' },
      { nome:'Indicadores Bellz', tipo:'Aplicativo (Marco)', desc:'Painel de indicadores financeiros e comerciais.' },
      { nome:'Biblioteca de gravações', tipo:'Curseduca', desc:'Aulas, Engenharias Reversas, Mesas Bellz arquivadas.' },
      { nome:'Comunidade WhatsApp', tipo:'WhatsApp', desc:'Grupo de alunos ativos.' }
    ]
  },
  {
    id:'sell-z',
    nome:'Sell-Z',
    formato:'Cohort de 8 semanas · workshop 21-22/07 · kick-off 29/07',
    publico:'Persona Ana · R$10-35k/mês',
    ticket:'R$1k-3k (a confirmar)',
    quando:'Workshop 21-22/07 · kick-off 29/07 · conteúdo 5/08-set/2026',
    trilhas_cobertas:'Comercial · Oferta · Gestão (parcial) · Posicionamento (intro)',
    promessa:'Em 8 semanas, instala o processo comercial que faz a venda acontecer com previsibilidade.',
    puv:'Aceleramos a sua virada como empresário através de um método de implementação guiada, para que você deixe o improviso de lado e assuma o controle das suas vendas.',
    tagline:'8 semanas de aceleração implacável. Domine o método. Faça o sino tocar.',
    status:'em_construcao',
    paleta:{ primaria:'#c75a2c', secundaria:'#0e0f0d' },
    jornada_status:'A jornada do aluno, os encontros específicos e a estrutura interna do Sell-Z serão documentados durante a preparação do lançamento (junho/julho 2026), em sessão conjunta com Pedro (responsável pela operação técnica do lançamento).'
  },
  {
    id:'imersao',
    nome:'Imersão',
    formato:'Evento presencial / online · pago · anual',
    publico:'Topo de funil · primeiro contato profundo com o método',
    ticket:'A definir',
    quando:'Anual · primeira edição em planejamento (data a definir)',
    trilhas_cobertas:'Recortes diagnósticos das trilhas — varia conforme curadoria do evento',
    promessa:'Imersão estratégica para empresários começarem a entender a Bellz House e o método.',
    puv:'(PUV em construção — depende de decisões de naming e posicionamento do evento.)',
    tagline:'(Em construção)',
    status:'em_construcao',
    paleta:{ primaria:'#e8e3d4', secundaria:'#c75a2c' },
    jornada_status:'A jornada e a curadoria da Imersão serão documentadas após decisão de naming, data e formato do evento (definições previstas para junho/julho 2026).'
  }
];

// ================================================================
// PLANO DE EXTRAÇÃO
// ================================================================
const EXTRACAO = {
  observacao:'VARREDURA COMPLETA EXECUTADA em 26/05/2026: 4 agentes paralelos varreram ~7MB de transcrições (Aulas · Planejamentos · Hot Seats · WhatsApp). Extraídos 11 frameworks NOVOS direto das transcrições + 4 detalhamentos de frameworks existentes — sem precisar consultar a Rafa. Score global do método saltou para refletir o material já extraído. Relatório completo em outputs/varredura-transcricoes-2026-05-26.md. Próximas sessões com a Rafa são SOMENTE para validação + renomeação + autorização de uso de casos reais.',
  sessoes:[
    { sessao:'S1', foco:'Posicionamento + Oferta (sessão âncora)', frameworks:'3 Cadeiras · PDF de Oferta · Diferenciação por Personalização · Engenharia Reversa', fonte:'Já capturado na Consultoria Presencial — sessão é de validação Rafa', duracao_rafa:'1h validação' },
    { sessao:'S2', foco:'Comercial', frameworks:'Venda consultiva · Quebra de objeções · Leitura de consciência · Plano de Foco', fonte:'Transcrições das mentorias (Rafa indica quais) + hot seats gravados', duracao_rafa:'0h (Inception extrai)' },
    { sessao:'S3', foco:'Financeiro', frameworks:'PF/PJ · Fluxo de caixa · Custos/margem · Critérios de contratação de apoio', fonte:'Transcrições + caso Luciana (#100, #106)', duracao_rafa:'0h-30min (Rafa indica fontes)' },
    { sessao:'S4', foco:'Liderança', frameworks:'Timing contratação · Time comercial · Liderança/delegação · Desligamento', fonte:'Transcrições + caso vivo (Rafa contratando Consultora de Progresso agora)', duracao_rafa:'30min (caso vivo)' },
    { sessao:'S5', foco:'Tração + Posicionamento avançado', frameworks:'Mapa de canais · Indicação estruturada · Marca pessoal × corporativa', fonte:'Transcrições + entrevista se necessário', duracao_rafa:'30min-1h' },
    { sessao:'S6', foco:'Mentalidade + Diagnóstico 360º', frameworks:'Plano Vida × Negócio · Termômetro da Felicidade · Mentalidade Mínima · Crenças', fonte:'Transcrições + áudio Rafa (se faltar)', duracao_rafa:'30min-1h' },
    { sessao:'S7', foco:'Validação final + renomeação de frameworks', frameworks:'Renomear frameworks · Compilar instrumentos · Aprovar nomes', fonte:'Assíncrono — Rafa lê e confirma', duracao_rafa:'30min' }
  ],
  total_rafa:'~3h-4h distribuídas em junho, dependendo de quanto material já está nas transcrições',
  fontes_disponiveis:[
    'Transcrição Consultoria Presencial (26/05/2026) — 1273 linhas',
    '🆕 Aulas do Método Mazzei (Engenharia de Vendas PDF · Processo de Vendas · Transcrições Aulas — 904KB)',
    '🆕 Planejamentos em Grupo NS · 518KB · ~11000 linhas',
    '🆕 Planejamentos Individuais MAZZEI$TRIA · 882KB · ~18000 linhas',
    '🆕 Hot Seats NS + MAZZEI$TRIA + NS 18/03 — total ~1.3MB',
    '🆕 WhatsApp MAZZEI$TRIA · 3MB · 35.365 linhas (out/2023-nov/2025)',
    'Notion de gestão atual da Rafa (operação)',
    '118 hot seats analisados (10 meses · CSV)',
    'ARQUITETURA_MENTORIA.md (7 trilhas detalhadas — produzido pela Inception)',
    'Doc estratégico Mar/26 (escrito pela Rafa)',
    'Análise de público-alvo (pesquisa Inception com Gemini + Claude)'
  ],
  // De-para: o que a Rafa precisa indicar (assíncrono, 30-45 min)
  de_para_pedido:{
    descricao:'Após a varredura completa (26/05/2026), a maioria dos temas foi extraída diretamente das transcrições. A lista abaixo é APENAS o que ainda precisa de input direto da Rafa — validação, renomeação ou autorização. Tempo estimado dela: 1h-1h30 assíncrona.',
    temas:[
      { tema:'Validar os 11 frameworks novos extraídos da varredura', status_fonte:'extraído · aguarda validação', acao:'Rafa lê o relatório varredura-transcricoes-2026-05-26.md e confirma/ajusta cada um' },
      { tema:'Renomear frameworks com nomes provisórios (Task #12 original)', status_fonte:'mapeado', acao:'Sessão de naming · 30min · Rafa propõe nomes finais para 15-20 frameworks' },
      { tema:'Autorizar uso público dos casos reais documentados (8 alunos)', status_fonte:'documentado', acao:'Rafa confirma quais casos podem virar prova em copy/Criador de Ofertas (Adriana, Fran, Duda, Evelyn, Igor, Karolyne, Geicy, Lorena)' },
      { tema:'Confirmar Tema A (Burnout do Empresário) — virar framework formal?', status_fonte:'identificado · gap nas trilhas', acao:'Rafa decide se cria protocolo "Energia do Empresário" em Mentalidade ou trata caso a caso' },
      { tema:'Confirmar Tema B (Presença em Sala/Pitch) — virar framework formal?', status_fonte:'identificado · gap nas trilhas', acao:'Rafa decide se cria framework "Presença e Pitch ao Vivo" em Posicionamento/Tração' },
      { tema:'Score Soberano · pesos e critérios exatos', status_fonte:'estrutura mapeada · pesos a definir', acao:'1h com Rafa para pesos da rubrica · pode ser assíncrono via Notion' },
      { tema:'Roda da Vida Empresarial → Termômetro da Felicidade · áreas finais', status_fonte:'parcial', acao:'30min com Rafa para definir áreas e perguntas-chave' },
      { tema:'Nome final da Imersão', status_fonte:'pendente', acao:'Aguardando branding Bellz House (julho)' }
    ]
  }
};

// ================================================================
// APROVAÇÕES
// ================================================================
const APROVACOES = {
  validados:[
    { item:'Nome do cargo Consultora de Progresso (substitui GP)', data:'2026-05-26' },
    { item:'Categorização das trilhas em Mestras e Especializadas', data:'2026-05-26' },
    { item:'Separação Método (agnóstico) × Jornada de Produto (específica)', data:'2026-05-26' },
    { item:'Paleta visual Bellz House', data:'2026-05-26' },
    { item:'Varredura de ~7MB de transcrições · 11 frameworks novos extraídos', data:'2026-05-26' },
    { item:'Gênero neutro em todos os textos (aluno em vez de aluna)', data:'2026-05-26' }
  ],
  aguardando:[
    'Validação dos 11 frameworks NOVOS extraídos (5 Regras Objeção · Matemática Funil · ICP Estrutural · 3 Dúvidas · Pré-Vendas × Vendas · Pergunta Empática · Etapa ≠ Produto · Ética × Caráter · Investimento em Presença · Depoimento × Elogio · Regra do Link)',
    'Autorização de uso público dos casos reais (Adriana, Fran, Duda, Evelyn, Igor, Karolyne, Geicy, Lorena)',
    'Decisão sobre Burnout do Empresário virar framework formal',
    'Decisão sobre Presença em Sala/Pitch virar framework formal',
    'Renomeação de frameworks com nomes provisórios',
    'Nome final da Imersão',
    'Validação da arquitetura de mentoria pela Rafa (ARQUITETURA_MENTORIA.md)',
    'Confirmação modalidade/carga/remuneração da Consultora de Progresso'
  ],
  pendentes:[
    'Data da Imersão presencial anual (nov ou início dez)',
    'Decisão de plataforma de automação (RD vs Full Funnel)',
    'Decisão de checkout (Notacy/Cine/Bling) com NF automática',
    'Definição de formato do workshop Sell-Z (2 noites OU 1 sábado)'
  ]
};

// ================================================================
// CÁLCULO DE PROGRESSO (auto)
// ================================================================
function calcularProgressoFrameworks(){
  const c = { pronto:0, parcial:0, extrair:0 };
  FRAMEWORKS.forEach(f => c[f.status]++);
  const total = FRAMEWORKS.length;
  const score = total ? ((c.pronto * 100 + c.parcial * 40) / total) / 100 * 100 : 0;
  return { ...c, total, score:Math.round(score) };
}

function calcularProgressoTrilha(trilhaId){
  const fws = FRAMEWORKS.filter(f => f.trilhas.includes(trilhaId));
  if(!fws.length) return 0;
  const score = fws.reduce((s, f) => {
    if(f.status === 'pronto') return s + 100;
    if(f.status === 'parcial') return s + 40;
    return s;
  }, 0) / fws.length;
  return Math.round(score);
}

// ================================================================
// EXPORTAR PARA APP.JS
// ================================================================
window.DATA = {
  STATUS,
  ECOSSISTEMA,
  PERSONAS,
  TRILHAS,
  FRAMEWORKS,
  PRODUTOS,
  JORNADA_DETALHADA,
  EXTRACAO,
  APROVACOES,
  calcularProgressoFrameworks,
  calcularProgressoTrilha
};

})();
