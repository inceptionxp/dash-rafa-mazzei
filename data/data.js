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
    funcao:'Uma forma única de integrar estratégia de negócio, vendas consultivas e gestão. O território dos negócios anti-ordinários.',
    puv:'Transformamos donos de negócio em empresários de verdade e os levamos a assumir o governo do próprio negócio, possibilitando que cobrem o real valor da sua entrega e gerem lucro recorrente, tornando possível vender, gerir e sorrir na mesma medida, através de uma forma única de integrar estratégia de negócio, vendas consultivas e gestão.',
    tagline:'O território dos negócios anti-ordinários.',
    arquetipo:'Governante + Criador (com sombra do Rebelde)',
    tom:'Provocador, assertivo, analítico'
  },
  componentes:[
    { id:'rafa-mazzei', nome:'Rafa Mazzei', camada:'Pessoa · autoridade',
      funcao:'A expert por trás do método. Voz, presença e provocação.',
      puv:'Guio donos de negócio cansados da montanha-russa do faturamento a assumir o governo da própria empresa e se tornar empresário de verdade, transformando excelência em lucro recorrente — para viver na prática o vender, gerir e sorrir na mesma medida.',
      tem_pagina:false },
    { id:'dois-z-level', nome:'2Z Level', camada:'Produto · avançado (por maturidade)',
      funcao:'Mentoria de acompanhamento em grupo para donos de negócio que já têm lucro recorrente acontecendo. Acompanhamento profundo, encontros recorrentes, garantia condicional.',
      puv:'Guiamos o dono de negócio que já fatura, mas ainda vive na montanha-russa do faturamento, a assumir o governo da própria empresa, através de uma mentoria de acompanhamento em grupo, para viver na prática o vender, gerir e sorrir na mesma medida.',
      tem_pagina:true },
    { id:'sell-z', nome:'Sell-Z', camada:'Produto · entrada',
      funcao:'Cohort de 8 semanas de implementação guiada. Constrói com o dono de negócio a oferta de alto valor e a base comercial pra sair do improviso.',
      puv:'Tiramos o dono de negócio do improviso e o colocamos no comando do próprio processo comercial, construindo, através de uma implementação guiada, uma oferta de alto valor, pronta para ser a escolhida pelo cliente ideal.',
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
    perfil:'Venda consultiva / alto valor · sem piso de faturamento',
    arquetipos:['advogada','arquiteta','nutricionista','personal','contadora','consultora'],
    vende_por:'indicação, feeling, achismo',
    dor:'Entrega muito e é reconhecida, mas não vira previsibilidade — o fechamento trava e ela trava na hora de cobrar. Carrega uma barreira emocional com a venda (medo de cobrar, "vender é ser chata", sensação de impostora).',
    o_que_busca:'Acha que precisa de mais clientes / prospectar mais.',
    o_que_precisa:'Quase nunca é mais clientes — é converter melhor o que já chega: processo de venda consultiva, definir a oferta, cobrar o que vale sem travar, consistência.',
    busca:'Sell-Z',
    valoriza:['acompanhamento próximo','resultado concreto e rápido','sentir que não está sozinha','IA pra encurtar a curva'],
    evita:['grupos grandes','respostas genéricas','acompanhamento que ensina sem entrar no negócio']
  },
  {
    id:'fernanda',
    nome:'Fernanda',
    idade:42,
    perfil:'Venda consultiva consolidado · lucro/sobra recorrente já acontecendo',
    arquetipos:['advogada','consultora','médica','empresária técnica'],
    vende_por:'cresceu por heroísmo — tudo passa por ela',
    dor:'O crescimento bateu no teto; tudo passa por ela; vive sobrecarregada (na agenda, na vida, na família). Já tem lucro recorrente e conhece os números, mas é o gargalo.',
    o_que_busca:'Acha que quer um negócio que rode sem ela e/ou mais crescimento.',
    o_que_precisa:'Não é o negócio rodar sem ela (isso é um nível além) — é um processo que rode COM ela, mas leve: previsibilidade, governo do negócio, sair da sobrecarga, e transformar o lucro em patrimônio.',
    busca:'2Z Level',
    valoriza:['profundidade','presença','clareza estratégica','ser tratada como empresária, não aluna'],
    evita:['grupos grandes','respostas genéricas','mentorias que ensinam sem entrar no negócio']
  }
];
// NOTA (ICP 30/06/2026): o público é UM só. O corte é comportamento + entrega acima
// da média + leads chegando — NUNCA faturamento. O que separa Ana (Sell-Z) de Fernanda
// (2Z Level) é a MATURIDADE: se já existe lucro/sobra recorrente acontecendo.

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
    sessao_extracao:'S5 (Transição de identidade + Roda da Vida + Score Soberano)',
    brainstorm:{
      fonte:'Notion · etapa "Plano de Vida × Plano de Negócio" (mapeada no início da consultoria, ~6 meses atrás)',
      nota:'Conteúdo antigo resgatado como REFERÊNCIA — só pra você conferir se algum tema importante ficou de fora do método atual. O que vale é o que já está na dash; isto aqui é rascunho pra triar. Em cada item, decida: entra (essencial, todo aluno) · avançado (só na mentoria / sob demanda) · não entra. Os nomes atuais prevalecem.',
      tabela:{
        titulo:'Tabela original do Notion — Plano de Vida × Plano de Negócio',
        objetivo:'Identificar onde o aluno está hoje e onde quer chegar — e as possíveis incoerências entre os dois.',
        conhecimentos:[
          'Tipos e modelos de negócio: prós e contras de cada modelo',
          'Como projetar e antecipar os desafios',
          'Mentalidade de autorresponsabilidade e identidade'
        ],
        acoes:[
          'Decidir qual modelo de negócio quer ter',
          'Se comprometer com a identidade de quem quer se tornar',
          'Organizar a agenda para se tornar a pessoa que constrói a vida que quer ter'
        ]
      },
      grupos:[
        {
          titulo:'Diagnóstico da situação atual',
          itens:[
            { t:'Produtos que tem hoje → margem de cada um → qual o mais lucrativo (mapear tempo de entrega etc.)' },
            { t:'Tem alguma necessidade imediata que o negócio resolve?' },
            { t:'Mentalidade: identidade como empreendedor' },
            { t:'Mapeamento da rotina: estratégico × tático × operacional', sub:[
              'Pensando no negócio × Executando coisas × Apagando incêndios',
              'O que é delegável, automatizável ou eliminável',
              'O que é demanda pessoal e o que é trabalho'
            ]},
            { t:'Recursos: CNPJ, fluxo de caixa, CRM, PJ × PF, tipo de contratação, ferramentas que utiliza' },
            { t:'De onde vêm os clientes hoje' },
            { t:'Posicionamento intencional ou não' },
            { t:'Clareza do cliente ideal' }
          ]
        },
        {
          titulo:'Modelos de negócio',
          itens:[
            { t:'Recorrência × Venda/serviço pontual → orienta a escolher recorrência sempre que possível' },
            { t:'One person business × Construir time' },
            { t:'Produtos/serviços escalável ou escalonável × personalizado' },
            { t:'Nicho: necessidade imediata ou não?' }
          ]
        },
        {
          titulo:'Princípios e provocações',
          itens:[
            { t:'Distração é tudo o que dá dinheiro rápido agora, mas não te aproxima da visão de longo prazo' },
            { t:'Termômetro da felicidade' },
            { t:'Não coloque todos os ovos numa cesta só — mas também não centralize tudo em si. Precisa escolher com clareza' },
            { t:'Definir os valores inegociáveis do negócio e como isso afeta as decisões do dia a dia' },
            { t:'Definir visão e valores do negócio de forma consciente e intencional' }
          ]
        }
      ]
    }
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
      'Validado em 27 mentorias de posicionamento',
      'Linha de bio do Instagram já comunica ("De comparado a escolhido")'
    ],
    o_que_falta:[
      'Passo-a-passo de como a Rafa conduz o cliente entre cadeiras',
      'Critérios objetivos de diagnóstico (em qual cadeira o cliente está hoje)',
      'Instrumentos (mapa de atributos, matriz de diferenciação)',
      'Roteiro de transição (gatilhos de movimento entre cadeiras)'
    ],
    fonte_primaria:'Gravações de mentoria existentes (a confirmar com Rafa) OU entrevista 1h',
    fonte_secundaria:'Anteprojeto Bellz House + 27 mentorias de posicionamento',
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
    quando_acionar:[
      "Aluno traz PDF/apresentação comercial parecendo um cardápio de serviços (slide final tipo 'nossos serviços')",
      "Reunião de venda termina em 'vou pensar' sem o aluno saber porquê — sintoma de PDF que não conduz à decisão",
      "Aluno está montando apresentação comercial do zero para um serviço novo ou pacote novo",
      "Aluno está fragmentando proposta (vendendo etapas separadas) e somando preços — perdendo a venda do todo",
      "Taxa de conversão da reunião está abaixo de 60% — o problema costuma estar no PDF, não no script",
      "Aluno repete objeções recorrentes na reunião que poderiam ser contornadas dentro do material",
      "Aluno vai entrar em nicho de ticket maior e precisa migrar de 'orçamento solto' para apresentação consultiva"
    ],
    teses_metodologias:{
      base_externa:'Mapa da Empatia (Strategyzer / Design Thinking) — adaptado pela Rafa com regra autoral: preencher com FRASES REAIS do cliente, não com interpretação do aluno. SPIN Selling é citado lateralmente (a pergunta de "implicação" do SPIN entra como bloco do PDF), mas o método central é autoral.',
      teses_rafa:[
        '"O PDF não é um menu de opções. É uma ferramenta estratégica de conversão."',
        '"Mente confusa não toma decisão." (regra-mãe que justifica não dar várias opções)',
        '"PDF é a formalização da solução proposta, não um mix pro cliente comparar."',
        '"O cliente não escolhe o serviço, ele confia na sua recomendação. Quem propõe a solução é o especialista."',
        '"Etapa não é produto — então não vai entrar no PDF como item separado."',
        '"Construir valor antes do preço. Sempre."',
        '"As pessoas amam comprar, mas odeiam que vendam para elas" — verbos vender/comprar/negociar são proibidos na capa.',
        '"Você vende transformação, não técnica. A técnica é o que você usa."',
        '"Qualidade não é diferencial, é obrigação."',
        '"O Mapa da Empatia tem que ser preenchido com FRASES REAIS do cliente, não com a sua interpretação dele."',
        '"A pessoa que paga a prazo só pensa se a parcela cabe no bolso" — preço aparece parcelado primeiro, à vista vira recompensa.',
        '"Bônus é o que aumenta valor percebido sem aumentar seu esforço de entrega — desconto e tempo extra NÃO são bônus."'
      ]
    },
    passo_a_passo:[
      { etapa:1, titulo:'PREENCHER MAPA DA EMPATIA COM FRASES REAIS', desc:'Antes de abrir o Canva: capturar em frases literais o que o cliente fala/pensa/sente/faz sobre a dor. Sem interpretação do aluno — frase real do cliente alimenta a copy do PDF.', condicional:null },
      { etapa:2, titulo:'RESPONDER AS 7 PERGUNTAS-CHAVE DE BRIEFING', desc:'Qual dor resolve · Por que esse serviço resolve · O que ele perde se não resolver agora · Por que VOCÊ é a melhor solução (diferenciais) · Quais provas reais pode apresentar · Que ROI esperar (financeiro ou emocional) · Quais objeções listar antes.', condicional:null },
      { etapa:3, titulo:"CAPA COM PROMESSA (NÃO 'PROPOSTA COMERCIAL')", desc:'Nome do pacote/serviço voltado à transformação — nunca "proposta comercial", "apresentação", "orçamento". Verbos vender/comprar/negociar são proibidos. Logotipo só na capa e fechamento.', condicional:null },
      { etapa:4, titulo:'APRESENTAÇÃO PESSOAL/EMPRESA EM TÓPICOS', desc:'Quem você é e por que sua empresa é confiável — em tópicos curtos, com dados concretos (nº de clientes, tempo de mercado, conquistas). Prêmios e marcas relevantes ganham página própria.', condicional:null },
      { etapa:5, titulo:'PROVAS SOCIAIS (DEPOIMENTOS, NÃO ELOGIOS)', desc:'Prints reais + destaque marca-texto na frase mais importante + transformações com antes/depois (foto, nome quando autorizado, nicho, números). Avaliações Google Meu Negócio para negócios locais. Empresas/celebridades atendidas ganham slide. Nunca poluir — 1-2 por slide.', condicional:'Se nicho aceita: prova social ANTES dos diferenciais. Se nicho mais analítico/técnico: prova junto da transformação.' },
      { etapa:6, titulo:'DIFERENCIAIS (POR QUE ESCOLHER VOCÊ)', desc:'Atributos verificáveis, nunca "qualidade/atendimento/compromisso". Conecta com a próxima seção (dor/desejo). Pode aparecer como slide próprio OU diluído em falas ao longo dos entregáveis — depende do nicho.', condicional:'Ordem ajustável: para projetos high-ticket, diferenciais costumam vir após entregáveis.' },
      { etapa:7, titulo:'DOR + DESEJO + COMO VOCÊ RESOLVE (OFERTA)', desc:'Tópicos da dor/desejo da pessoa (linguagem dela, do Mapa da Empatia) → conectar à oferta → entregáveis em ordem clara, com ícones e caixas. Cuidado com excesso de etapas técnicas — contrato fala depois. Objeções principais já são contornadas no meio dos slides (antecipando, não argumentando).', condicional:null },
      { etapa:8, titulo:'CLAREZA DE ROI + TANGIBILIZAÇÃO', desc:'Mostrar com cálculo prático que NÃO contratar custa mais caro que contratar. Comparar parcela com ticket médio do cliente, calcular horas economizadas × valor da hora, citar caso real similar. Conta na cabeça da pessoa em tempo real.', condicional:null },
      { etapa:9, titulo:'BÔNUS + BÔNUS DE FECHAMENTO IMEDIATO (BFI)', desc:'Bônus regulares ficam disponíveis até data de validade da proposta. BFI é só para quem fecha na reunião — não estende NUNCA. Cada bônus precisa de preço real ancorado (não inventar). Bônus não pode aumentar muito o esforço de entrega. Tempo extra e desconto NÃO são bônus.', condicional:'Se nicho fecha de imediato (ex: arquitetura high-ticket): bônus mais atrativo vai pra BFI. Se nicho não costuma fechar na hora (ultra high-ticket >1M): bônus mais atrativo vai pra bônus regular, para a pessoa não sentir que perdeu muito ao adiar.' },
      { etapa:10, titulo:'RECAPITULAÇÃO + PREÇO + GARANTIA + FECHAMENTO', desc:'Checklist visual com tudo incluso + bônus. Preço SEMPRE parcelado primeiro ("12x de R$497"), à vista vira preço com desconto. Nunca exibir total parcelado. Garantia real só se fizer sentido — cuidado com "CDC 7 dias" em serviço (artigo 49 não se aplica). Fecha com pergunta de impacto ("quanto você perde mantendo esse problema?") + sugestão de forma de pagamento, não "o que você achou".', condicional:'Se cliente analítico pediu o PDF para levar: inserir data de validade. NUNCA enviar antes do pedido explícito.' }
    ],
    o_que_temos:[
      'Rafa revisa PDF em 1 a cada 4 mentorias (32 ocorrências no histórico de 10 meses)',
      'Hot seat #65 (Maria Luiza), #66 (Priscilla), #115 (Lorena Diniz) — casos reais para análise'
    ],
    o_que_falta:[
      'A lógica que a Rafa usa "na cabeça" para revisar PDF — explicitar como ela diagnostica o que está faltando',
      'Estrutura modular padronizada (lista de elementos × função de cada um)',
      'Adaptações por nicho (advocacia, arquitetura, saúde, consultoria)',
      'Skill/IA que aplica essa estrutura'
    ],
    fonte_primaria:'Gravação de 3 mentorias de revisão de PDF (zero esforço para a Rafa)',
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
    quando_acionar:[
      "Aluno faz duas reuniões (uma para diagnosticar, outra para apresentar) — e a segunda não acontece",
      "Cliente pede preço por WhatsApp antes de qualquer conversa estruturada",
      "Aluno sente que 'gasta tempo' em reuniões com lead não-qualificado",
      "Taxa de conversão das reuniões abaixo de 60% (mercado: 40%)",
      "Aluno cria orçamento personalizado do zero a cada cliente (não tem material padronizado)",
      "Cliente trava no 'vou pensar' e some — sem ancoragem de urgência ou BFI",
      "Aluno está migrando de venda transacional (balcão/WhatsApp) para venda consultiva de ticket maior"
    ],
    teses_metodologias:{
      base_externa:'SPIN Selling (Rackham) — citado pela Rafa como referência, principalmente o componente Implicação (a pergunta "o que ele perde se não resolver agora?"). Mas a estrutura da reunião única + BFI é autoral, contrasta deliberadamente com Sandler (que prevê múltiplos encontros).',
      teses_rafa:[
        '"Reunião é inegociável. Quem aceita reunião personalizada é cliente; quem só aceita PDF no WhatsApp não é cliente."',
        '"Duas reuniões não é uma boa ideia — ninguém quer agendar duas vezes."',
        '"Não chame de reunião — é um bate-papo, é um diagnóstico." (eufemismo intencional para reduzir resistência do lead)',
        '"Pergunta não é argumentando." (regra-mãe da venda consultiva — quem tenta convencer não convence; faz pergunta)',
        '"Quem aprende a oferta padronizada vende em escala. Quem reinventa cada proposta nunca chega na previsibilidade."',
        '"No diagnóstico você mostra alguns O QUÊS, não o COMO — o como é o que você vende."',
        '"Cave o não ou o sim o mais rápido."',
        '"Proibido perder venda por saber que o cliente está mentindo e fingir que acreditou."',
        '"A reunião já é pra você gerar valor pra esse cliente, não pra coletar informações (isso o formulário faz)."'
      ]
    },
    passo_a_passo:[
      { etapa:1, titulo:'PRÉ-QUALIFICAÇÃO POR FORMULÁRIO (PROGRESSIVO)', desc:'Link enviado com a frase "preciso entender mais a fundo sua necessidade para te apresentar a melhor oferta". Formulário curto (2-3 min) com perguntas qualificatórias do nicho (faturamento mínimo, regime tributário, conhecimento técnico). Pode ser progressivo: primeiro só nome/email/Instagram, depois formulário completo. Filtra antes de gastar tempo.', condicional:'Se lead veio por indicação forte (BNI/parceiro): aplicar "Regra do Link, não Telefone" — quem indica entrega o link, não o telefone.' },
      { etapa:2, titulo:'TRIAGEM DO FORMULÁRIO', desc:'Olhar respostas: se não é perfil, comunicar de forma respeitosa que não faz sentido seguir. Se é perfil, dar feedback rápido e agendar bate-papo de ~30min. Pode-se ancorar um benefício na agenda (ex: "diagnóstico gratuito" como presente).', condicional:'Se respostas incompletas: enviar "só mais 2 perguntinhas" antes de agendar — não pular o filtro.' },
      { etapa:3, titulo:'ABERTURA + AUTORIZAÇÃO PARA GRAVAR', desc:'Abre o bate-papo pedindo autorização para gravar ("política interna, para você também poder consultar depois"). Protege juridicamente em caso de cliente que tenta usar artigo 49 do CDC indevidamente em serviço.', condicional:null },
      { etapa:4, titulo:'DIAGNÓSTICO — PERGUNTAS ABERTAS + VALOR NA HORA', desc:'Perguntas reflexivas que o cliente responde sozinho ("quanto você vende hoje? · qual sua taxa de conversão? · quanto vale sua hora? · em vez de [hipótese], me conta o que o cliente realmente disse?"). Mostra alguns O QUÊS (o que ele está errando), nunca o COMO. Gera "nossa, é verdade" — não "você precisa de X" (gera rejeição).', condicional:null },
      { etapa:5, titulo:'IMPACTO + TANGIBILIZAÇÃO DO CUSTO DE NÃO-DECIDIR', desc:'Conecta o diagnóstico ao prejuízo concreto: "se você seguir assim por mais 3 meses, quanto deixa de faturar?". Usa cálculos práticos com o ticket médio dele. Cria a "clareza de ROI" antes de chegar no preço.', condicional:null },
      { etapa:6, titulo:'APRESENTAÇÃO DA OFERTA PADRONIZADA', desc:'Abre o PDF padrão do pacote que faz sentido pro perfil (já tem 3-5 PDFs montados por tamanho/perfil/ticket). Não inventa proposta nova — só puxa a tela de preço correta no Canva e abre a apresentação. Conduz da Capa → Provas → Diferenciais → Dor/Desejo → Oferta → ROI → Bônus → BFI → Preço.', condicional:'Se durante o diagnóstico apareceu objeção forte de preço/escopo: pode "dar um céu" (retirar bloco condicional do pacote) — desde que não comprometa a entrega da promessa.' },
      { etapa:7, titulo:'QUEBRA DE OBJEÇÕES COM PERGUNTAS (5 MOVIMENTOS)', desc:'ANTECIPAR (objeções já contornadas no PDF) → ELIMINAR (a antecipação preveniu) → ENCONTRAR a objeção real (perguntar SEM "mas") → NÃO HESITAR em ser sincero → FECHAR (vira sugestão de forma de pagamento). Aplicar "as 3 únicas dúvidas reais atrás do vou pensar": produto, preço/pagamento, confiança.', condicional:null },
      { etapa:8, titulo:'FECHAMENTO NA MESMA REUNIÃO + BFI', desc:'Fechamento vira "qual forma de pagamento prefere?", não "o que você achou?". Bônus de Fechamento Imediato (BFI) só vale para quem fecha na reunião — nunca estender, mesmo que o lead "pareça ser de confiança". Se realmente abrir exceção (cônjuge precisa decidir), define janela rígida de 24h e nomeia que é exceção da exceção.', condicional:'Se nicho ultra high-ticket (>R$1M) onde decisão imediata é incompatível: deslocar o bônus mais atrativo para fora do BFI, manter follow-up estruturado com data de validade.' }
    ],
    o_que_temos:[
      'Estrutura geral capturada na transcrição da Consultoria Presencial (26/05): pré-qualificação por formulário → reunião → diagnóstico mostrando o "o quê" (não o "como") → impacto → apresenta proposta na mesma reunião → bônus + BFI',
      '38 mentorias com perguntas sobre fechamento (32% do dataset)',
      'Taxa de conversão de alunos: 60-70% (mercado: 40%) — prova de aplicação',
      'Princípio fixado: "Reunião é inegociável. Quem aceita reunião personalizada é cliente; quem só aceita PDF no WhatsApp não é cliente."'
    ],
    o_que_falta:[
      'Passo-a-passo de cada momento da reunião (abertura, dor, valor, preço, fechamento)',
      'Frases-chave por momento (palavras proibidas: "posso te apresentar meu trabalho", "o que você achou")',
      'Roteiro de quebra de objeções ao vivo',
      'Adaptação por nicho (B2C vs B2B onde fechamento imediato não funciona)'
    ],
    fonte_primaria:'Transcrição Consultoria Presencial (26/05) + gravação de 4 mentorias',
    fonte_secundaria:'38 mentorias do dataset',
    sessao:'S1 · Comercial · TEMA ÂNCORA',
    duracao_rafa:'0h (já gravado) + 4 mentorias',
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
    quando_acionar:[
      "Aluno chega com 'lista de coisas para fazer' confusa, sem priorização",
      "Aluno justifica não-execução com 'não tive tempo' — sintoma de falta de hierarquia de ações",
      "Aluno está em sobrecarga e quer ajuda para decidir o que cortar",
      "Aluno repete sabotador (ex: mandar PDF no WhatsApp em vez de marcar reunião) e não percebe",
      "Início de qualquer trilha do método — classificar ações da trilha em inegociável/importante/sabotador",
      "Acompanhamento da Consultora de Progresso (semanal): revisar se inegociáveis foram cumpridos",
      "Lead/cliente está em zona cinzenta — 'cavar o não ou o sim o mais rápido'"
    ],
    teses_metodologias:{
      base_externa:'Tem parentesco lateral com a Matriz de Eisenhower (urgente × importante) e com os Hábitos 3 (primeiro o mais importante) e 1 (ser proativo) de Stephen Covey — mas a Rafa NÃO usa esses frameworks como base. A categorização "Inegociável × Importante × Sabotador" é autoral, e o adicional "sabotador" é genuinamente diferente da matriz Eisenhower (sabotador não é "não-importante" — é ativamente destrutivo).',
      teses_rafa:[
        '"Cave o não ou o sim o mais rápido." (frase-âncora, vale para venda, lead, decisão pessoal, ação do dia)',
        '"Não fez o inegociável → não tem próximo encontro." (consequência dura — sem isso o framework vira sugestão)',
        '"Reunião é inegociável. CRM é importante (pode ser planilha). Mandar PDF no WhatsApp é sabotador."',
        '"Cuidado com os sabotadores — parem de chorar pelos clientes as dores que eles nem precisam ter e vocês acreditam."',
        '"Aprender a descansar, não a desistir." (sabotador comum: confundir descanso necessário com desistência)',
        '"Sem permitir os sabotadores te freando."'
      ]
    },
    passo_a_passo:[
      { etapa:1, titulo:'LISTAR TODAS AS AÇÕES PENDENTES NO ESCOPO', desc:'Aluno traz tudo que tá rodando na cabeça/agenda no escopo trabalhado (ex: trilha Comercial: marcar reuniões, montar CRM, fazer follow-up, mandar PDF avulso, responder leads, etc). Sem filtrar nessa etapa — só listar.', condicional:null },
      { etapa:2, titulo:'CLASSIFICAR EM 3 COLUNAS', desc:'Inegociável (sem isso, fora — sem reunião, sem fechamento; sem mapa da empatia real, sem PDF). Importante (com flexibilidade — CRM pode ser planilha; horário pode ajustar). Sabotador (está roubando energia/resultado — mandar PDF no WhatsApp, fazer 2 reuniões, criar serviço-etapa, atender quem não é ICP).', condicional:null },
      { etapa:3, titulo:'APLICAR CONSEQUÊNCIA AO INEGOCIÁVEL', desc:'Tornar visível: "se o inegociável não acontece, há consequência". Na mentoria da Rafa: não fez inegociável → não tem próximo encontro. No próprio negócio do aluno: definir consequência específica (ex: cliente que não preencheu formulário não vira reunião).', condicional:null },
      { etapa:4, titulo:'CORTAR/ENCERRAR SABOTADOR IMEDIATAMENTE', desc:'Sabotador não é "menos importante" — é destrutivo. Tem que parar HOJE. Aplicar a frase: "Cave o não ou o sim o mais rápido" (decidir cortar e decidir agora; não deixar morrendo de inanição).', condicional:'Se sabotador for hábito antigo (ex: aluno que historicamente manda PDF por WhatsApp): criar substituto explícito ANTES de cortar — senão volta no automático.' },
      { etapa:5, titulo:'APLICAR COMO FILTRO MENTAL COTIDIANO', desc:'Não é só ferramenta de planejamento — vira filtro de decisão no dia a dia. A Rafa aplica em conversas casuais do WhatsApp: "isso é inegociável, importante ou sabotador para você agora?". A Consultora de Progresso usa esse filtro no acompanhamento.', condicional:null }
    ],
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
      '32 mentorias com revisões reais da Rafa (último 10 meses)',
      'Antes/depois de alunos documentado (link existe)'
    ],
    o_que_falta:[
      'Renomear (o nome "PDF" não comunica)',
      'Template Canva / PowerPoint editável por nicho',
      'Lógica de antecipação de objeção (como ler o formulário e converter em slide)',
      'Skill criadora de apresentação comercial (IA)'
    ],
    fonte_primaria:'Transcrição Consultoria Presencial (26/05) + revisões reais em mentorias',
    fonte_secundaria:'Hot seats #65 (Maria Luiza), #66 (Priscilla), #115 (Lorena)',
    sessao:'S1 · Oferta · sub-sessão dedicada (Clínica de Oferta)',
    duracao_rafa:'1h entrevista + análise de 3 PDFs reais',
    vira_conteudo:[
      'Aula T2.2 "A apresentação comercial que comunica valor"',
      'Skill criadora de apresentação comercial',
      'Template Canva multi-nicho',
      'Biblioteca de modelos por nicho',
      '🆕 Clínica de Oferta (separada do Mentoria)'
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
    tecnico:'Sistema de pré-qualificação com formulário em 2 camadas + rating 1-5 estrelas + integração CRM',
    trilhas:['comercial'],
    status:'parcial',
    o_que_e:'Sistema de pré-qualificação de leads com formulário em 2 camadas (popup básico + formulário avançado) integrado ao CRM, com critérios objetivos por nicho, rating 1-5 estrelas e playbook fixado em anotação que orienta SDR e closer antes da reunião.',
    o_que_temos:[
      'Formulário em 2 camadas (popup só com nome/email/telefone/@Instagram → formulário avançado completo) — Hot Seat 18/03 ~l.241-247, 286, 313-332',
      'Perguntas-chave do formulário avançado mapeadas: tipo de negócio, profissão, serviços, faturamento, desafios, meta, decisor (Hot Seat 18/03 ~l.547-568)',
      'Rating 1-5 estrelas obrigatório no card (Hot Seat 18/03 ~l.739-748). Regra: 3⭐+ agenda; ≤2⭐ vira perda',
      'Critérios objetivos por dado: "ainda não tá faturando" = 1⭐ = não serve (Hot Seat 18/03 ~l.766-772)',
      'Integração técnica documentada: Pluga + página + RD Station CRM; email como chave única de deduplicação',
      'Funil pré-vendas com 4 etapas: Captação → Coleta → Qualificação → Agendamento',
      'Playbook fixado dentro do CRM por etapa — autoexplicativo, treina o SDR (Hot Seat 18/03 ~l.722-735)',
      'Disclaimer obrigatório no formulário: "Nos reservamos ao direito de não realizarmos a sessão caso julguemos que está fora do perfil" (~l.604-612)',
      'Anotação fixada obrigatória pós-qualificação — passa contexto pro closer; em RD duplica manual (~l.793-799, 882-889)',
      'Distinção SDR (mais barato, qualifica) × Closer (recebe pronto, só fecha) (~l.640-647)'
    ],
    o_que_falta:[
      'Template de formulário genérico adaptável por nicho — hoje só existe o da Rafa, falta biblioteca por categoria',
      'Tabela completa de critérios de rating 1-5 estrelas por dimensão (decisor, urgência, fit, capacidade)',
      'Camada de IA pré-qualificadora antes do humano ler o formulário — mencionado mas sem implementação visível',
      'Scripts de abordagem do SDR para lead que parou no popup (Captação → Coleta)',
      'SLA exato de tempo máximo de resposta ao lead',
      'Adaptação para vendas sem formulário digital (WhatsApp puro)'
    ],
    quando_acionar:[
      "Aluno fala 'eu gasto 2h por dia respondendo lead no Direct e quase ninguém fecha'",
      "Aluno tem ticket abaixo do que poderia porque atende todo mundo sem filtro",
      "Aluno marca reunião com qualquer um e descobre dentro da sessão que não tem perfil — desperdiça 1h",
      "Aluno tá escalando time (contratando SDR/closer) e precisa critério fora da cabeça dele",
      "Aluno reclama que 'não tem tempo de estudar/produzir conteúdo' — diagnóstico: faz qualificação na unha",
      "Aluno configurou formulário gigante e taxa de preenchimento é baixíssima",
      "Aluno fechou venda mas cliente sumiu/cancelou — entrou no funil sem ser qualificado"
    ],
    teses_metodologias:{
      base_externa:null,
      teses_rafa:[
        '"Se você já coloca um formulário enorme, cheio de dados, a pessoa já pode desistir ali, você não pega o básico que você precisa."',
        '"O e-mail é o que é mais difícil da pessoa escrever errado. É o que conecta pro meu CRM saber que é a mesma pessoa."',
        '"Cada etapa tem um objetivo." (não se move o lead de etapa só porque sim)',
        '"Se não é perfil de cliente ideal, tem que ficar claro que você não vai apresentar a proposta. Você não é obrigada a apresentar para todo mundo."',
        '"Menos que duas estrelas, a gente não agenda. Ou perda com uma ou duas estrelas."',
        '"O playbook dentro do CRM é autoexplicativo. Eu criei critérios. Eu preciso ficar dando treinamento eternamente? Não."',
        '"Você tá perdendo gente porque você tá demorando a responder."',
        '"Vender e perder é tarefa dentro da etapa, não é etapa."'
      ]
    },
    passo_a_passo:[
      { etapa:1, titulo:'MAPEAR ICP E CRITÉRIOS DE FIT', desc:'Antes do formulário, definir quem é o perfil ideal e quais dimensões qualificam/desqualificam (faturamento mínimo, profissão, presença de decisor, urgência, capacidade financeira). Esses critérios viram perguntas + régua de estrelas.', condicional:null },
      { etapa:2, titulo:'MONTAR FORMULÁRIO EM 2 CAMADAS', desc:'Camada 1 (popup): nome, e-mail, telefone, @Instagram — só o básico para capturar contato. Camada 2 (formulário avançado): perguntas de qualificação (tipo de negócio, faturamento, meta, desafio, decisor). Pedir e-mail de novo no avançado para match no CRM.', condicional:null },
      { etapa:3, titulo:'INTEGRAR PÁGINA + FORMULÁRIO + CRM', desc:'Conectar via Pluga: página → formulário → CRM. Gatilho: popup sem formulário → "Coleta de Dados"; preenche tudo → pula pra "Qualificação".', condicional:'Se o nicho não permite formulário digital (venda 1:1 por WhatsApp), substituir por roteiro de 3-4 perguntas aplicadas em conversa.' },
      { etapa:4, titulo:'CONFIGURAR PLAYBOOK FIXADO POR ETAPA', desc:'Em cada etapa do funil escrever: objetivo, ações esperadas do SDR, critério de avanço, prazo da tarefa. Playbook treina o time sem o expert repetir.', condicional:null },
      { etapa:5, titulo:'AVALIAR FORMULÁRIO E DAR NOTA 1-5⭐', desc:'SDR abre o card quando vira tarefa atrasada, lê respostas, aplica critérios e atribui estrelas. Se falta dado, faz contato adicional antes de pontuar.', condicional:'Se 3⭐+ → seguir pra etapa 6 (agendar). Se 1-2⭐ → marcar perda com motivo, NÃO agendar.' },
      { etapa:6, titulo:'ESCREVER E FIXAR ANOTAÇÃO DE QUALIFICAÇÃO', desc:'Registrar no card: contexto da conversa, urgência, decisor presente ou ausente, alertas. Fixar a anotação para o closer ver antes da sessão. Se "depende de alguém pra decidir?" = sim, registrar pra trazer decisor.', condicional:null },
      { etapa:7, titulo:'MOVER PARA AGENDAMENTO E CONFIRMAR', desc:'Lead qualificado vai pra Agendamento. Script de confirmação assertivo ("tô passando o link, a Rafa já tá animada", não "quer confirmar?"). Confirmado = objetivo do pré-vendas cumprido.', condicional:null },
      { etapa:8, titulo:'DUPLICAR CARD PARA FUNIL DE VENDAS', desc:'Confirmação dispara duplicação do card pro funil Vendas (Realização → Apresentação → Followup → Assinatura). Como RD não duplica anotação, SDR copia/cola manualmente antes de entregar.', condicional:'Se o expert opera solo (SDR=closer=expert), pular a entrega mas manter o ritual da anotação fixada — garante entrar preparado, não "na curiosidade".' }
    ],
    fonte_primaria:'Transcrição Hot Seat NS - 18_03_26 linhas ~238-1222',
    fonte_secundaria:'Planejamentos em Grupo NS linhas ~727-736',
    sessao:'S2 · Comercial',
    duracao_rafa:'0h (Inception extraiu)',
    vira_conteudo:['Tabela de qualificação','Formulário de briefing','IA Construtora de Formulário','Playbook por nicho']
  },
  {
    id:'leitura-indicadores',
    nome:'Leitura de Indicadores Comerciais',
    tecnico:'Sistema de leitura de indicadores (conversão, ticket, capacidade) baseado em matemática > crença',
    trilhas:['comercial'],
    status:'parcial',
    o_que_e:'Sistema de leitura de indicadores comerciais (taxa de conversão, ticket médio, número de propostas/vendas, faturamento por hora) que força decisão baseada em matemática — não em crença, intuição ou desespero. Premissa: antes de qualquer ajuste de oferta, equipe ou expansão, a conta tem que fechar.',
    o_que_temos:[
      'Lógica do trade-off ticket vs volume — "Se aumenta o ticket, diminui a quantidade de venda para fazer o mesmo valor" (Hot Seat NS 18/03, l.2035-2038)',
      'Taxa de conversão por etapa do funil — leitura: "se entra 300 na captação e só sai 30 na assinatura, mas se entra 60 e sai 30 (50%), não é muito melhor?" (l.1189-1195)',
      'Indicador de rendimento por lead ("suco da laranja") — "Se antes conversava com 30 pra fechar 3, hoje conversa com 10 e fecha 3" (l.82-86)',
      'Indicadores básicos do CRM rastreados: número de propostas, número de vendas, taxa de conversão (Hot Seats NS, l.321-322)',
      'Indicador capacidade × ticket (faturamento-teto) — exemplo Iara: 4 clientes × R$4k = R$16k; sobe ticket pra R$6k = R$24k; 3 clientes × R$6k = R$18k (l.2036-2070)',
      'Tese "matemática > crença" — "Para mim não tem crença que justifica matemática" (l.888) e "Acima de tudo, desde o primeiro dia, matemática. A conta precisa fechar" (l.1871-1876)',
      'Indicador de qualidade de oferta (ofertados × fechados) — caso Fran: ofereceu personal a alunas com contrato vencendo, fechou 5 → "você ofereceu errado, você não espremeu" (l.1294-1300, 1888-1891)',
      'Hierarquia de leitura: ticket mínimo viável antes de saltos grandes — "Sai pra ticket mínimo viável pra depois aumentar pro próximo" (l.2093). Salto R$900 → R$9.000 é irresponsável',
      'Indicador de coerência ticket × posicionamento — "Qual ticket é viável? Qual é coerente? A especialista tem que cobrar mais" (l.2117-2122)',
      'Indicador de caixa antes de cortar custo — Lise: perdeu cliente de R$6.500, demitiu social mídia de R$600 = não fechou conta (l.2101-2115)'
    ],
    o_que_falta:[
      'CAC (Custo de Aquisição) — não aparece nas transcrições; Rafa precisa definir se rastreia, como mede, benchmark por nicho',
      'LTV (Lifetime Value) — não aparece; Rafa precisa definir cálculo (ticket × meses de retenção?) e ratio LTV/CAC alvo',
      'Métrica por canal (orgânico vs ads vs indicação vs networking) — Rafa cita os canais mas não detalha desempenho relativo',
      'Benchmark de taxa de conversão por nicho/etapa — qual % é bom/aceitável/ruim em captação→qualificação, qualificação→reunião, reunião→assinatura',
      'Lista dos 5 indicadores não-negociáveis que TODO aluno rastreia toda semana + cadência de leitura',
      'Indicador de retenção/renovação — Rafa fala em "quem tá vencendo contrato" mas sem fórmula de churn',
      'Indicador de margem (preço × custo direto × custo fixo) — implícito mas sem fórmula explícita',
      'Indicador de propostas-padrão por ticket (quantas propostas ativas pra bater meta) — Rafa exige a conta da Fran ("precisa de mais 15") mas não formaliza regra geral'
    ],
    quando_acionar:[
      "Aluno tomou decisão estrutural (encerrar turmas, mudar formato, demitir, contratar) SEM fazer a conta antes",
      "Aluno diz 'quero ganhar mais e trabalhar menos' — acionar cálculo capacidade × ticket pra mostrar que só ticket não resolve",
      "Aluno reclama 'só fechei 5' — abrir o funil: quantos ofertados, como ofertou, qual etapa quebrou",
      "Aluno quer aumentar ticket — antes de subir, calcular se perde volume e qual ticket mínimo viável é o próximo passo",
      "Aluno quer cortar custo no desespero (demitir time, cortar ferramenta) — checar se o corte fecha a conta ou só posterga (caso Lise)",
      "Aluno entra com 'preciso de mais cliente / mais venda' — antes de captar mais, ler taxa de conversão atual: problema é entrada ou suco da laranja?",
      "Reunião de planejamento mensal/trimestral — leitura obrigatória de propostas, vendas, conversão, ticket médio"
    ],
    teses_metodologias:{
      base_externa:'Conceitos clássicos de marketing/gestão (taxa de conversão, ticket médio, funil, faturamento, capacidade produtiva). A Rafa pega o vocabulário de mercado e injeta hierarquia própria: matemática > crença, ticket mínimo viável como passo, leitura por etapa ("espremer suco da laranja"). CAC e LTV NÃO aparecem nas transcrições.',
      teses_rafa:[
        '"Se você aumenta o ticket, você diminui a quantidade de venda para fazer o mesmo valor. Se aumenta o ticket e mantém a quantidade, você vende mais ainda."',
        '"Crença versus matemática. Para mim não tem crença que justifica matemática."',
        '"Acima de tudo, desde o primeiro dia, matemática. A conta precisa fechar."',
        '"Você sai pra um ticket mínimo viável pra depois aumentar pro próximo."',
        '"Você ofereceu errado. Você vendeu errado. Você não espremeu."',
        '"Se entra 300 na captação e só sai 30 na assinatura, mas se entra 60 e sai 30 (50%), não é muito melhor pra vocês? O método ensina isso."',
        '"Qual é o ticket que é viável? Qual é o ticket que é coerente? A especialista tem que cobrar mais."',
        '"Se você tiver caixa, você não precisa demitir [time] só porque saíram dois clientes."'
      ]
    },
    passo_a_passo:[
      { etapa:1, titulo:'LEVANTAR OS NÚMEROS CRUS DO CRM', desc:'Antes de qualquer decisão, anotar: (a) número de leads no período, (b) propostas enviadas, (c) vendas fechadas, (d) ticket médio, (e) faturamento total. Sem esses 5 números a leitura não começa.', condicional:null },
      { etapa:2, titulo:'CALCULAR TAXA DE CONVERSÃO POR ETAPA', desc:'Quebrar o funil em etapas (captação → qualificação → reunião → fechamento) e calcular o % de passagem entre cada. A leitura é "onde quebra o suco da laranja" — qual etapa está perdendo gente. Identifica se o problema é entrada ou conversão.', condicional:null },
      { etapa:3, titulo:'APLICAR EQUAÇÃO TICKET × VOLUME × CAPACIDADE', desc:'Calcular teto atual (capacidade × ticket) e simular 3 cenários: (a) subir ticket mantendo volume, (b) subir ticket reduzindo volume, (c) manter ticket e aumentar volume via conversão. A conta decide o caminho — não o desejo do aluno.', condicional:null },
      { etapa:4, titulo:'CRUZAR COM POSICIONAMENTO E TICKET MÍNIMO VIÁVEL', desc:'O ticket calculado precisa ser COERENTE com o posicionamento (especialista cobra mais) E respeitar o salto viável: não pular R$900 → R$9.000 num passo. Definir "próximo ticket" e justificativa de mercado. Se ticket alvo não está coerente, a oferta vai travar.', condicional:'Acionar antes de qualquer reposicionamento de preço ou mudança de oferta.' },
      { etapa:5, titulo:'DECIDIR BASEADO EM MATEMÁTICA, NÃO EM CRENÇA', desc:'Com os 3 cenários, escolher o que fecha a conta de necessidade real (dívidas, custo fixo, meta de lucro). Se depende de aumento de volume, voltar pra etapa 2 e atacar a etapa do funil que mais converte. Se depende de ticket, voltar pra construção de oferta. Nunca decidir por "achismo".', condicional:null },
      { etapa:6, titulo:'⚠ COMPLETAR COM RAFA — PAINEL-PADRÃO E CADÊNCIA', desc:'GAP: Rafa precisa definir (a) os 5 indicadores não-negociáveis que TODO aluno rastreia toda semana, (b) cadência de leitura (semanal? quinzenal? mensal?), (c) se CAC e LTV entram no método, (d) como medir desempenho por canal, (e) benchmarks por nicho. Material atual cobre a LÓGICA mas não o painel-padrão.', condicional:null }
    ],
    fonte_primaria:'Transcrição Hot Seat NS - 18_03_26 linhas ~76, 1042-2038',
    fonte_secundaria:'TRANSCRIÇÕES HOT SEATS NEGÓCIO SOBERANO linhas ~117-2345',
    sessao:'S2 · Comercial + sessão dirigida Rafa (15-30min) pra definir painel-padrão',
    duracao_rafa:'15-30min (definir 5 indicadores não-negociáveis + cadência)',
    vira_conteudo:['Aula T1.5 "Decidindo com números"','Playbook de leitura de indicadores','Dashboard padrão Bellz']
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
      '19 mentorias de precificação no dataset (16,1%)',
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
    quando_acionar:[
      "Aluno entrega serviços pontuais e não fecha o mês — falta receita recorrente",
      "Aluno está fragmentando proposta (vendendo prévia, visita, planejamento separadamente)",
      "Cliente pede 'as duas opções de orçamento' — sinal de que o aluno está se transformando em downsell de si mesmo",
      "Aluno tem 5+ serviços no portfólio sem critério claro de qual vai pra esteira × qual descontinuar",
      "Aluno não sabe quanto vale a hora dele em cada serviço — está mantendo serviço deficitário sem perceber",
      "Aluno está delegando errado (entregando hora de R$100 que poderia gerar R$300)",
      "Cliente novo entra na esteira sem rota clara para upsell (recorrência ou ticket maior)"
    ],
    teses_metodologias:{
      base_externa:'Conceito de esteira de produtos (ascending offers · downsell · upsell) tem origem em marketing de resposta direta (Russell Brunson, Jay Abraham, Dan Kennedy). A Rafa subverte a lógica clássica: a tese-bandeira "meu downsell é meu concorrente" INVERTE o padrão do mercado (que vende downsell como retenção).',
      teses_rafa:[
        '"O meu downsell é o meu concorrente." (tese-bandeira — você entrega solução completa, não pedaços; quem quer pedaço vai pro concorrente)',
        '"Etapa não é produto, então não vai entrar na sua esteira." (regra-mãe — prévia, visita, planejamento são etapas; produto é o resultado completo)',
        '"Vender pedaços = você vira commodity."',
        '"Você só consegue definir a esteira ideal pro público ideal — esteira vem DEPOIS do ICP, nunca antes."',
        '"Mente confusa não toma decisão — cliente não pode escolher entre 5 serviços."',
        '"O mais conhecido supera o melhor — então a esteira tem que sustentar o posicionamento, não diluir."',
        '"É muito melhor você ser especialista em algo, melhor naquilo, e vender só aquilo, do que ter 500 serviços e virar Frankenstein."',
        '"Cirurgião especialista em quê? — defina o que você é O MELHOR em fazer, e a esteira gravita em torno disso."'
      ]
    },
    passo_a_passo:[
      { etapa:1, titulo:'PRÉ-REQUISITO: ICP + MAPA DA EMPATIA + POSICIONAMENTO', desc:'Esteira não se monta antes do ICP. Sem ICP claro, sem mapa da empatia real, sem posicionamento, qualquer esteira vira coleção de serviços soltos. A Rafa recusa montar esteira de aluno que pulou essas etapas.', condicional:null },
      { etapa:2, titulo:'LISTAR TODOS OS SERVIÇOS/PRODUTOS ATIVOS', desc:'Pegar tudo que o aluno está vendendo hoje: pacotes principais, avulsos, "sob demanda", complementos. Não filtrar — só listar com nome real, preço atual, ticket médio.', condicional:null },
      { etapa:3, titulo:'CALCULAR RENTABILIDADE POR HORA DE CADA SERVIÇO', desc:'Para cada serviço: somar TODAS as horas reais consumidas (execução + reunião + revisão + follow-up + conferência + atendimento pós) → dividir o preço por essas horas. Resultado: rentabilidade real por hora. Exemplo: serviço A R$294/h × serviço B R$214/h.', condicional:null },
      { etapa:4, titulo:"APLICAR FILTRO 'ETAPA NÃO É PRODUTO'", desc:'Marcar quais itens da lista são ETAPAS disfarçadas de produto (prévia da maquiadora, visita do arquiteto, planejamento isolado, diagnóstico solto). Etapa não fica na esteira como produto — ou some, ou é embutida no pacote completo.', condicional:'Se aluno tem caso de cliente que SÓ quer a etapa: aprender a dizer não (caso Duda — 7 NÃOs em 2024). Não criar "produto-etapa" para acomodar.' },
      { etapa:5, titulo:'DESCONTINUAR O MENOS RENTÁVEL', desc:'Cortar o serviço com menor rentabilidade/hora (desde que não seja porta de entrada estratégica para o produto principal). Princípio: o que sai libera capacidade pro que sustenta.', condicional:'Se o serviço menos rentável for o atual gerador de volume e o aluno não tem caixa pra transição: planejar descontinuação faseada (não abandonar do dia pra noite) — mas marcar como saída.' },
      { etapa:6, titulo:'DEFINIR PRODUTO PRINCIPAL (CIRURGIA, NÃO TERAPIA)', desc:'Qual é o produto que entrega a TRANSFORMAÇÃO completa? Esse é o produto principal — geralmente recorrente, personalizado, com início-meio-fim. Outros itens só existem como reforço a ele.', condicional:'Se aluno tem modelo recorrente: produto principal é a mensalidade/contrato. Se modelo é por entrega: produto principal é o pacote completo (início ao fim).' },
      { etapa:7, titulo:'MAPEAR PRÓXIMO NÍVEL (UPSELL COERENTE)', desc:'Definir o que vem DEPOIS do produto principal — outro nível mais aprofundado, mastermind, consultoria avançada. Não é mais do mesmo, é evolução clara da entrega. Tem critério de entrada (não é só pagar — tem que ter chegado ao ponto certo).', condicional:'Se aluno ainda não tem clientes maduros no produto principal: pular essa etapa por ora — não criar upsell vazio.' }
    ],
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
    status:'parcial',
    o_que_e:'Cálculo de quanto vale a hora trabalhada do empresário em cada serviço/produto, base para decisões de precificação, esteira, delegação e foco. É a régua que mostra se o empresário está "trocando cebola" ou de fato lucrando.',
    o_que_temos:[
      'Tabela interativa (Serviço/Produto | Preço médio | Tempo de execução em horas | Valor da hora) — fórmula: preço médio ÷ horas (Planejamentos NS, ~l.386-406)',
      'Exemplo prático: projeto arquitetura R$5.000 ÷ 17h = R$294/h; consultoria R$15.000 ÷ 70h = R$214/h — mostra que ticket alto pode ter hora pior (l.394-423)',
      'Cálculo de média do valor da hora entre serviços (l.429-434)',
      'Calculadora de faturamento mensal: valor da hora × horas trabalhadas (200-220h, não 160h CLT — l.480-487)',
      'Simulador de delegação: 80h → 50h pagando R$2.000/mês = hora pula de R$187 pra R$300 (l.469-525)',
      'Decisão de delegabilidade por etapa: "o mais valioso da minha entrega não delego (ser a Rafa); agendamento, operacional, eu delego" (l.451-466)',
      'Quote autoral: "o operacional é barato, o restante não. E aí você fica só trocando hora, trocando hora, trocando hora" (Processo de Vendas, l.985-991)',
      'Aplicação em escala: aula 1:1 maquiagem R$400/1,5h = R$266/h → R$400/h com 4 alunas na turma (l.1067-1090)'
    ],
    o_que_falta:[
      'Benchmark de valor de hora por nicho/maturidade (quanto é "pouco" e quanto é "muito" por área)',
      'Regra explícita de quando descartar produto pelo valor da hora vs mantê-lo por estratégia (porta de entrada, ticket médio agregado)',
      'Critério numérico para a regra dos 20% — quando o serviço delegado se paga e a hora sobe (faturamento mínimo do produto pra sustentar contratação)',
      'Tabela de referência de custos de delegação por função (estagiário, vendedor, social media, gestor de tráfego) que a Rafa usa de cabeça'
    ],
    quando_acionar:[
      "Aluno diz 'tô fazendo tudo sozinha e não consigo crescer' / 'não tenho tempo'",
      "Aluno está prestes a contratar alguém mas não sabe se 'cabe no orçamento'",
      "Aluno quer abrir novo produto/serviço sem ter validado o atual ('vou começar a vender X também')",
      "Aluno tem esteira inflada com 5+ produtos/serviços e não sabe qual cortar",
      "Aluno cobra preço por intuição/comparação com concorrente, sem saber o custo real do tempo",
      "Aluno fatura razoavelmente bem mas se sente exausto e sem lucro real (sinal de 'trocando cebola')",
      "Aluno quer definir meta de faturamento mensal e precisa saber se é matematicamente possível dentro das horas disponíveis"
    ],
    teses_metodologias:{
      base_externa:null,
      teses_rafa:[
        '"Porque o operacional é barato, o restante não. E aí você fica só trocando hora, trocando hora, trocando hora."',
        '"O dia só tem 24 horas, entendeu? Você precisa entender isso daqui."',
        '"Empresário trabalha mais que CLT, tá gente? Aprendam isso."',
        '"Quando você, como dono de negócio, fica preso no operacional, por isso que você não cresce — porque você não tem tempo para ficar pensando no que vai te fazer crescer."',
        '"Toda decisão é baseada em dado."',
        '"Mente confusa não toma decisão."',
        '"Eu não consigo fazer a pessoa ser a Rafa. E aí isso daqui eu não delego."'
      ]
    },
    passo_a_passo:[
      { etapa:1, titulo:'LISTAR ESTEIRA REAL', desc:'Listar todos os serviços e produtos que o empresário vende hoje. Quem vende produto, listar também as tarefas operacionais (compras, qualidade, fotografia, conteúdo, expedição) — é onde o tempo vaza.', condicional:null },
      { etapa:2, titulo:'PREENCHER PREÇO MÉDIO E HORAS', desc:'Para cada item: preço médio cobrado (R$) e tempo total de execução em horas (incluindo reuniões, deslocamento, retrabalho, atendimento — tudo que consome tempo do empresário até a entrega final).', condicional:null },
      { etapa:3, titulo:'CALCULAR VALOR DA HORA POR ITEM', desc:'Fórmula: Preço Médio ÷ Horas = Valor da Hora. Ordenar a esteira do maior valor/hora para o menor. Aqui aparece a verdade: muitas vezes o serviço mais caro tem a pior hora.', condicional:null },
      { etapa:4, titulo:'CALCULAR VALOR MÉDIO DA HORA', desc:'Média entre os valores de hora dos serviços ativos. Essa é a régua do empresário hoje — entra na calculadora de faturamento mensal.', condicional:null },
      { etapa:5, titulo:'SIMULAR FATURAMENTO MENSAL POSSÍVEL', desc:'Valor médio da hora × horas trabalháveis no mês (referência: 200-220h, empresário não é CLT). Esse é o teto matemático sem mudar nada. Compara com a meta. Se a meta não cabe nas horas, ou aumenta valor da hora ou delega — não tem terceira opção.', condicional:'Se o teto já cobre a meta: problema não é hora, é foco/posicionamento. Se não cobre: segue pra etapa 6.' },
      { etapa:6, titulo:'MAPEAR ETAPAS DELEGÁVEIS × INDELEGÁVEIS', desc:'Dentro de cada serviço, separar o que SÓ o empresário pode fazer (entrega-núcleo, ser "a Rafa") do que é operacional/replicável (agendamento, edição, atendimento inicial, execução repetitiva). O indelegável sustenta o preço; o resto sai.', condicional:null },
      { etapa:7, titulo:'SIMULAR DELEGAÇÃO E NOVO VALOR DA HORA', desc:'Subtrair as horas delegáveis e somar o custo da pessoa contratada como custo do serviço. Recalcular o valor da hora. Exemplo: 80h → 50h pagando R$2k/mês faz a hora pular R$187 → R$300 — mesmo faturamento, 30h livres pra vender/pensar/escalar.', condicional:'Se a delegação faz a hora subir e sobra dinheiro pra pagar a pessoa: contrata. Se derruba a margem ou exige faturamento maior que o atual: primeiro aumenta venda do produto delegável até ele se sustentar.' },
      { etapa:8, titulo:'DECIDIR ESTEIRA: MANTER, ESCALAR OU DESCARTAR', desc:'Olhando o valor da hora ordenado: manter os de melhor hora, descartar os que viram "trocar cebola", escalar os que podem virar 1-pra-muitos (turma, grupo, infoproduto). Cruzar com "em que você quer ser reconhecida?" — não basta ser rentável, tem que sustentar o posicionamento.', condicional:'Se o serviço de pior hora é porta de entrada estratégica (gera o de melhor hora): mantém com preço ajustado. Se é só inércia ou apego: descarta.' }
    ],
    fonte_primaria:'Planejamentos em Grupo NS linhas ~384-722, ~1035-1090',
    fonte_secundaria:'aula Método Mazzei - Processo de Vendas linhas ~985-991',
    sessao:'S1 · Oferta',
    duracao_rafa:'0h (Inception extraiu)',
    vira_conteudo:['Calculadora de valor do tempo','Playbook de decisão de delegação','IA Simulador de Delegação']
  },
  {
    id:'pf-pj',
    nome:'Análise PF/PJ',
    tecnico:'Separação financeira e de identidade entre pessoa física e jurídica',
    trilhas:['gestao'],
    status:'parcial',
    o_que_e:'Separação operacional, financeira e de identidade entre PF (CPF, dona) e PJ (CNPJ, empresa). A PJ age pelo que a empresa precisa para ser saudável; a PF vive do pró-labore e da distribuição de lucros — não do bolso da empresa nem decidindo no impulso emocional.',
    o_que_temos:[
      'Tese central: "Vocês não sabem ser empresários. Vocês não sabem separar pessoa física de jurídica. E a pessoa jurídica, ela precisa agir de acordo com o que a empresa precisa para ser saudável" (Hot Seats MAZZEI$TRIA, l.7806-7809)',
      'Analogia da filha/comida: "Se você tem uma filha e precisa dar uma quantidade de comida para ela ser saudável... A empresa é a mesma coisa. Empresa vive de lucro e de força de trabalho" (l.7810-7812)',
      'Regra CNPJ × CPF: "Não sou eu, Rafa, pessoa física, que tem o dó. Aqui é CNPJ Treinamentos, que tem um contrato porque é profissional" (l.7840-7843)',
      'Limite emocional do CPF: "Pessoa física é uma coisa, jurídica é outra. Nós somos pessoas que se a gente for no nosso coração, no nosso CPF, a gente já tá falida" (Planejamentos Individuais, l.3426-3427)',
      'Cliente interno × externo: "a gente tem cliente externo e cliente interno. O funcionário é cliente interno, tem que saber lidar com ele dessa maneira" (l.7847-7849)',
      'Mecânica pró-labore + distribuição: "era pra ter feito distribuição de lucros pros próximos 6 meses com essa inadimplência. Eu estaria com 2 meses de finanças pessoais sobrando — vou viver janeiro/fevereiro com esse dinheiro" (Planejamentos Individuais, l.3885-3895)',
      'Virada do CPF disciplinado: "Chegou R$12.000 aqui, mas eu vou viver com 7. 5.000 vai pro meu investimento" (l.3902-3904)',
      'Operação WhatsApp: "meu telefone pessoal é WhatsApp pessoal. Business tem que ser o da empresa" (Planejamento NS, l.3032-3034)',
      'Operação recebimento: cartão sempre PJ; PIX/espécie >R$5k entram com nota na PJ. "Você recebe esse dinheiro em PF? Não. No CNPJ" (Planejamentos Individuais, l.7516-7518)',
      'Risco da mistura: "se der ruim na PJ, não dá na pessoa física — desde que estejam separadas" (Planejamento NS, l.3034-3036)'
    ],
    o_que_falta:[
      'Critério numérico para definir valor do pró-labore (% da receita? piso fixo? múltiplo do custo de vida?) — ⚠ a extrair em sessão dirigida',
      'Tabela de gatilhos para distribuição de lucros (quando libera, quanto retém em caixa antes) — ⚠ a extrair',
      'Procedimento de auditoria: como o empresário descobre que está misturando PF/PJ hoje (sintomas + diagnóstico) — ⚠ a extrair',
      'Tratamento de cartão pessoal vs empresarial e cartão de crédito da empresa — ⚠ a extrair',
      'Protocolo de transição quando o empresário descobre que está retirando errado há meses — ⚠ a extrair'
    ],
    quando_acionar:[
      "Empresário fala em primeira pessoa sobre dinheiro da empresa ('tirei do meu', 'paguei do meu bolso', 'minha empresa me deve')",
      "Decisão de contratação/demissão sendo tomada por dó, amizade ou maternidade — em vez da saúde do CNPJ",
      "Inadimplência tolerada em cliente porque 'é uma pessoa de bem' / 'eu confio' / 'fui amiga'",
      "Faturamento até razoável mas o dono não consegue pró-labore consistente ou vive 'apertado'",
      "Empresário misturando WhatsApp pessoal e da empresa, cartão pessoal e da empresa, conta PF e PJ",
      "Recebimento caindo em conta PF (PIX no CPF) em vez do CNPJ — sonega nota e suja o caixa",
      "Sócio/empresário pegando 'empréstimo' da empresa sem contrato, sem juros, sem prazo",
      "Frase de alerta: 'mas eu sou a dona, posso usar' / 'depois eu reponho' / 'é tudo meu mesmo'"
    ],
    teses_metodologias:{
      base_externa:null,
      teses_rafa:[
        '"Vocês não sabem ser empresários. Vocês não sabem separar pessoa física de jurídica."',
        '"A pessoa jurídica precisa agir de acordo com o que a empresa precisa para ser saudável."',
        '"Empresa vive de lucro e de trabalho e de força de trabalho."',
        '"Pessoa física é uma coisa, jurídica é outra. Se a gente for no nosso coração, no nosso CPF, a gente já tá falida."',
        '"Não sou eu, Rafa, pessoa física, que tem o dó. Aqui é CNPJ."',
        '"O que serve para um precisa servir para 1000. Precisa ser escalável."',
        '"Se der ruim na PJ, não dá na pessoa física — desde que estejam separadas."'
      ]
    },
    passo_a_passo:[
      { etapa:1, titulo:'DIAGNÓSTICO DA MISTURA', desc:'Mapear todos os pontos onde PF e PJ se cruzam hoje: conta bancária, cartão, WhatsApp, contratos no CPF, PIX pessoal, cartão da empresa pagando coisa pessoal, dono pegando dinheiro do caixa sem registro. Listar cada vazamento.', condicional:null },
      { etapa:2, titulo:'SEPARAR AS ESTRUTURAS OPERACIONAIS', desc:'CNPJ ativo + conta PJ + cartão PJ + WhatsApp Business + sistema de cobrança no CNPJ (cartão sempre PJ, PIX/espécie >R$5k com nota na PJ). WhatsApp e telefone pessoal ficam fora da empresa.', condicional:'Se ainda não tem CNPJ: abrir antes de qualquer outra etapa.' },
      { etapa:3, titulo:'DEFINIR PRÓ-LABORE FIXO DA PF', desc:'Estabelecer um valor fixo mensal que a empresa paga ao dono, separado de qualquer outra retirada. Esse é o salário da PF — vive com isso, não saca a mais do caixa. Calibrar pelo que cobre as despesas pessoais essenciais, não pelo desejo.', condicional:null },
      { etapa:4, titulo:'DEFINIR POLÍTICA DE DISTRIBUIÇÃO DE LUCROS', desc:'Distribuição é evento separado do pró-labore, condicionada à saúde da empresa (caixa, inadimplência, próximos 6 meses planejados). Se a empresa não pode pagar sem se machucar, não distribui — mesmo que o dono "mereça".', condicional:'Se houver inadimplência alta ou caixa apertado: suspende distribuição e a PF vive do pró-labore + reserva pessoal acumulada.' },
      { etapa:5, titulo:'DECIDIR COMO CNPJ, NÃO COMO DONA', desc:'Em toda decisão (contratar, demitir, dar licença, parcelar cliente, perdoar inadimplência), perguntar: "Isso é decisão de CNPJ ou de CPF?" Empresário decide pela saúde da empresa, dentro da lei. Coração e dó ficam no CPF, fora da decisão empresarial.', condicional:'Se a decisão é humanitária genuína (maternidade, doença grave): formaliza como exceção contratual, mas honra o caixa primeiro.' },
      { etapa:6, titulo:'COBRAR SEM CULPA — CNPJ CONTRA CNPJ', desc:'Inadimplência se cobra como empresa: contrato, multa, encerramento, protesto. A PF não entra na cobrança ("a Rafa pessoa pode achar pena, a empresa não"). Mesmo amigo, mesmo cliente antigo: o contrato fala primeiro.', condicional:null },
      { etapa:7, titulo:'PF DISCIPLINADA COM O QUE RECEBE', desc:'Quando pró-labore/distribuição caem na PF: viver com menos do que recebeu (cai 12k, vive com 7k, 5k vai pra investimento pessoal). Construir reserva pessoal que blinda a PF de qualquer chacoalhão da PJ.', condicional:null },
      { etapa:8, titulo:'AUDITAR MENSALMENTE OS DOIS LADOS', desc:'Todo mês, revisar: (a) caixa, DRE e margem da PJ, (b) extrato pessoal, investimentos e reserva da PF. Qualquer cruzamento novo entra em registro e vira lição pra regra ficar mais rígida.', condicional:null }
    ],
    fonte_primaria:'TRANSCRIÇÕES HOT SEATS MAZZEI$TRIA linhas ~7805-7878',
    fonte_secundaria:'Planejamentos Individuais MAZZEI$TRIA ~l.3426, 3885-3904; Planejamento NS ~l.3032-3036',
    sessao:'S3 · Gestão',
    duracao_rafa:'30min (definir critério de pró-labore + política de distribuição)',
    vira_conteudo:['Aula T3.1','Planilha PF/PJ','IA Auditora de Mistura PF/PJ','Calculadora de pró-labore mínimo']
  },
  {
    id:'fluxo-caixa',
    nome:'Leitura de Fluxo de Caixa',
    tecnico:'Diagnóstico empresarial via planilha viva — regime de caixa × regime de competência',
    trilhas:['gestao'],
    status:'parcial',
    o_que_e:'Método prático da Rafa pra enxergar a saúde real do mês olhando a planilha de Fluxo de Caixa/DRE: separar regime de caixa (recebimento) de regime de competência (faturamento), comparar o que entrou vs o que foi vendido, e usar essa leitura pra descobrir processos falhos antes que o mês "feche no vermelho".',
    o_que_temos:[
      'Planilha autoral em 5 versões evoluídas (v1.0 a v5.0) — Fluxo de Caixa_DRE com dashboards integradas e botão ATUALIZAR DASHBOARDS (WhatsApp Mazzei$tria, l.1238, 1538, 1721, 5258)',
      'Estrutura de papéis: caixa lança saldo + faturamento + recebimento; administrativo lança pagamentos/despesas; gerente comercial lança entrada/conversão (WhatsApp, l.1595-1598)',
      'Princípio diagnóstico: "descobrindo processos falhos, através da sua planilha de fluxo de caixa" (WhatsApp, l.2608)',
      'Tese regime caixa × competência: "venda É sobre o que vendeu, não é sobre o que tá recebendo… o recebimento vai ser mediante ao recebimento do mês" (Planejamentos Individuais, ~l.2785-2836)',
      'Rotina de envio mensal da planilha pra análise da Rafa, com reconhecimento público (WhatsApp, l.4516, 4542, 1723)',
      'Vídeo do Marco Muniz na plataforma sobre OPERAR a planilha (WhatsApp, l.1580, 5817) — mas não sobre LEITURA estratégica'
    ],
    o_que_falta:[
      '⚠ LIÇÃO GRAVADA DE LEITURA — não existe screencast da Rafa abrindo planilha real e narrando como ela LÊ (o que olha primeiro, o que ignora, o que dispara alarme). Material existente é só vídeo de OPERAÇÃO',
      'Critério explícito de "mês fechou no azul/vermelho" — Rafa usa intuitivamente mas não tem regra escrita',
      'Lista de KPIs prioritários da dashboard (planilha tem várias abas — qual ela olha primeiro?)',
      'Sinais de alerta padronizados — diferença aceitável vs crítica entre faturamento e recebimento, % de antecipação, % de inadimplência',
      'Roteiro de pergunta-resposta que ela usa ao analisar planilha (cadê saldo inicial? quanto antecipou? % à vista?)',
      'Versão simplificada da planilha pra mentorados de Negócio Soberano (perfil mais inicial)'
    ],
    quando_acionar:[
      "Mentorada diz que 'não tem dinheiro pra pagar' mas não sabe quanto faturou vs quanto recebeu no mês",
      "Mentorada confunde meta de vendas com meta de recebimento",
      "Mentorada está antecipando recebíveis e não consegue identificar que isso está matando o lucro",
      "Mês fecha e mentorada não sabe se foi azul ou vermelho — 'acha' que vendeu bem mas o caixa está apertado",
      "Antes de qualquer decisão de contratação, reajuste de preço ou expansão",
      "Primeiro mês de mentoria — preencher planilha é pré-requisito pra entrar em planejamentos individuais e hot seats",
      "Toda virada de mês — Rafa pede planilha pra ranking de reconhecimento"
    ],
    teses_metodologias:{
      base_externa:'Conceitos contábeis clássicos de Regime de Caixa vs Regime de Competência e estrutura básica de DRE (Demonstrativo de Resultado do Exercício) — mas a Rafa aplica de forma simplificada e operacional, não acadêmica. Não há citação direta a autor/livro nas transcrições.',
      teses_rafa:[
        '"É um trabalho super satisfatório de reversão de alguns erros, porque estamos descobrindo processos falhos, através da sua planilha de fluxo de caixa."',
        '"Venda É sobre o que vendeu, não é sobre o que tá recebendo."',
        '"Antecipação é o maior, o maior suicídio de uma empresa."',
        '"Você nunca vai falar que se antecipa."',
        '"Muitas vezes a pessoa pensa \'Tô rica porque tem muito dinheiro pra entrar ali\'… mas ela não se preocupa em vender."',
        '"É importante a gente ter esse paralelo… pra entender se a sua forma de recebimento tá legal, se não tá, se isso tá prejudicando o seu fluxo de caixa."'
      ]
    },
    passo_a_passo:[
      { etapa:1, titulo:'ALIMENTAR A PLANILHA DIARIAMENTE COM DIVISÃO DE PAPÉIS', desc:'Caixa lança saldo inicial, faturamento e recebimento. Administrativo lança pagamentos e despesas. Gerente comercial lança entrada/conversão de clientes. Cada papel tem dado próprio — não pode acumular numa pessoa só.', condicional:null },
      { etapa:2, titulo:'ATUALIZAR DASHBOARDS APÓS CADA LANÇAMENTO', desc:'Clicar no botão ATUALIZAR DASHBOARDS sempre que adicionar dado. Sem esse passo as visualizações ficam defasadas e a leitura fica errada.', condicional:null },
      { etapa:3, titulo:'SEPARAR FATURAMENTO (COMPETÊNCIA) DE RECEBIMENTO (CAIXA)', desc:'O que vendeu no mês ≠ o que entrou no mês. Olhar as duas abas em paralelo. Comissão de vendedor é sobre o que VENDEU. Capacidade de pagar conta é sobre o que RECEBEU.', condicional:null },
      { etapa:4, titulo:'DIAGNOSTICAR PROCESSOS FALHOS A PARTIR DAS DIFERENÇAS', desc:'Diferença grande entre vendido e recebido = problema de forma de pagamento (muito boleto longo, parcelado demais). Recebimento alto e faturamento baixo = vendendo bem no passado, ruim no presente. Antecipação alta = empresa com corda no pescoço.', condicional:null },
      { etapa:5, titulo:'LEVAR PLANILHA ANALISADA PRO HOT SEAT', desc:'A Rafa pede a planilha mensalmente, faz análise comparativa entre meses e devolve plano de ação. Mentorada não decide preço, contratação ou meta sem mostrar a planilha primeiro.', condicional:'Quando a mentorada tem dúvida sobre fechamento do mês, antes de tomar decisão financeira.' },
      { etapa:6, titulo:'⚠ COMPLETAR COM RAFA — SCREENCAST DE LEITURA', desc:'Rafa grava 15-30min explicando como lê uma planilha real de fluxo — o que olha primeiro, o que ignora, o que dispara alarme. Sugestão: pegar 1 planilha de mentorada (anonimizada) e narrar a leitura como faz no hot seat. Esse é o ativo que falta pra fechar o framework.', condicional:null }
    ],
    fonte_primaria:'transcrição Whats Mazzeistria linhas ~1238, 1538, 1721, 2608, 4516, 5258',
    fonte_secundaria:'Planejamentos Individuais MAZZEI$TRIA ~l.2785-2836, 3558',
    sessao:'S3 · Gestão + sessão dirigida Rafa (15-30min screencast)',
    duracao_rafa:'15-30min (screencast lendo planilha real)',
    vira_conteudo:['Aula T3.2 "Leitura de fluxo"','Screencast da Rafa lendo planilha','Planilha v6 simplificada (NS)','IA Leitora de Caixa']
  },
  {
    id:'custos-margem',
    nome:'Mapa de Custos e Margem',
    tecnico:'Equação receita − despesas = margem; defesa antes de ataque; engrenagem antes de venda',
    trilhas:['gestao'],
    status:'parcial',
    o_que_e:'Mapa da equação financeira do negócio: receita menos despesas (fixas e variáveis) é a margem. Saber a margem ANTES de decidir preço, contratação, investimento ou retirada — e identificar onde o faturamento vaza antes de tentar vender mais.',
    o_que_temos:[
      'Definição operacional: "Que que é margem de lucro? É o valor que você recebe menos o valor que você tem de despesas, né?" (Hot Seats NS, l.665-667)',
      'Lógica do tipo de negócio: "Serviço é a maior margem que existe" (l.673)',
      'Duas alavancas: "Aumentar a margem é você vender mais caro mantendo o custo OU diminuir custo" (l.675-676)',
      'Timing das alavancas: "Quando você aumenta o preço? Quando aumentou o valor, quando já tá conhecida, quando gerou posicionamento" (l.677)',
      'Defesa antes de ataque: "Como aumentar a margem, você não tá na hora de pensar nisso. O que faz sentido é observar e ficar atenta à margem que você tem pra não ter prejuízo" (l.678-679)',
      'Realidade sem mapa: "Qual é sua margem? Se bobear, você nem sabe. Se bobear, começou a calcular porque o briefing mandou" (l.680)',
      'Custo varia com estrutura: "Se você hoje trabalha de casa, a despesa é mais baixa, sua margem é maior. A visão tem que ser de médio e longo prazo" (l.667-669)',
      'Análise como conserto de engrenagem: "Eu preciso olhar pra sua DRE, pros seus custos, pros fixos… tem ralo aqui, situação aqui que não tá legal, forma de recebimento aqui que não tá alinhada" (Hot Seats MAZZEI$TRIA, l.8114-8117)',
      'Vazamento real: faturamento subiu de 27k pra 35k+ sem aumentar vendas, só corrigindo forma de recebimento — "tive uma eficiência maior na empresa, na recebimento" (Hot Seats MAZZEI$TRIA, l.8143-8149)',
      'Ticket médio = faturamento ÷ nº de vendas, calcular mês a mês 12 meses pra enxergar oscilação real (Planejamentos Individuais, l.7536-7539)'
    ],
    o_que_falta:[
      'Estrutura de DRE simplificada que a Rafa usa com os mentorados (categorias de custo fixo, variável, CAC) — ⚠ a extrair em sessão dirigida',
      'Cálculo de ponto de equilíbrio: fórmula prática que ela ensina, com exemplo numérico — ⚠ a extrair',
      'Faixas de margem saudável por tipo de negócio (serviço, produto, mentoria, indústria) — ⚠ a extrair',
      'Critério de quando cortar custo vs quando aumentar preço vs quando investir mais — ⚠ a extrair',
      'Lista canônica dos "ralos" mais comuns que ela encontra ao auditar custos — ⚠ a extrair',
      'Como ela ensina a separar custo fixo, custo variável e custo de aquisição (CAC) — ⚠ a extrair'
    ],
    quando_acionar:[
      "Empresário pergunta 'devo aumentar preço?' sem saber a margem atual",
      "Empresário fala 'tô faturando bem mas não sobra dinheiro' — clássico vazamento entre receita e margem",
      "Antes de qualquer decisão de contratação, expansão de estrutura física, investimento em tráfego ou ampliação de equipe",
      "Quando o dono quer começar a se pagar pró-labore mais alto ou distribuir lucros (precisa saber se a margem aguenta)",
      "Faturamento estagnado: descobrir se o problema é venda (volume) ou recebimento/vazamento (eficiência)",
      "Mentorado fala em 'desconto' sem saber se a margem do produto comporta — ou se já está vendendo no prejuízo",
      "Aluno quer copiar preço do concorrente sem saber se a estrutura de custo dele é parecida"
    ],
    teses_metodologias:{
      base_externa:'Contabilidade gerencial clássica (DRE, ponto de equilíbrio, margem de contribuição) — a Rafa não cita autor, traduz para linguagem do empresário pequeno/médio. Parceria operacional com a Tânia (financeira do método) nos diagnósticos.',
      teses_rafa:[
        '"Margem é simplesmente você olhar pro valor que é vendido, menos a despesa que você tem."',
        '"Serviço é a maior margem que existe."',
        '"Aumentar a margem é você vender mais caro mantendo o custo ou diminuir custo."',
        '"Como aumentar a margem, você não tá na hora de pensar nisso. O que faz sentido é observar e ficar atenta à margem que você tem pra não ter prejuízo."',
        '"Qual é sua margem? Se bobear, você nem sabe."',
        '"Quando você aumenta o preço? Quando aumentou o valor, quando já tá conhecida, quando gerou posicionamento."',
        '"Às vezes não é só vender mais — é igual uma engrenagem, tem outras coisas que a gente precisa mexer também."'
      ]
    },
    passo_a_passo:[
      { etapa:1, titulo:'LEVANTAR RECEITA REAL — 12 MESES', desc:'Listar faturamento mês a mês dos últimos 12 meses (mês/ano + valor). Calcular ticket médio de cada mês (faturamento ÷ nº de vendas). Identificar oscilação e sazonalidade.', condicional:null },
      { etapa:2, titulo:'MAPEAR DESPESAS FIXAS', desc:'Listar tudo que sai todo mês independente de vender ou não: aluguel, folha, pró-labore, software, contabilidade, internet, prestação fixa, plano de saúde da empresa. Soma mensal = custo fixo.', condicional:'Se trabalha de casa: custo fixo é menor e a margem cresce — mas precisa projetar como fica quando crescer e precisar de estrutura física.' },
      { etapa:3, titulo:'MAPEAR DESPESAS VARIÁVEIS E CUSTO POR VENDA', desc:'O que sai proporcional à venda: taxa de cartão (~6,4% no Infinity Pay 4x), imposto (~8-10%), comissão, material consumível, custo de entrega. Calcular o custo médio por venda — quanto sobra de cada R$ vendido antes de pagar o fixo.', condicional:null },
      { etapa:4, titulo:'CALCULAR MARGEM REAL', desc:'Receita − (despesa variável + despesa fixa) = margem do mês. Fazer mês a mês pra ver tendência. Comparar margem entre serviços/produtos diferentes da esteira — descobrir qual carrega o negócio e qual está dando prejuízo disfarçado.', condicional:null },
      { etapa:5, titulo:'CAÇAR OS RALOS ANTES DE MEXER NO PREÇO', desc:'Auditar pontos típicos de vazamento: forma de recebimento errada (parcelamento ruim, taxa alta), inadimplência não cobrada, cliente em desconto que não devia, serviço vendido abaixo do custo, retirada sem registro, gasto pessoal pago pela PJ. Corrigir ralo antes de tentar vender mais.', condicional:'Se faturamento parece bom mas não sobra: o problema quase sempre é ralo, não volume. Eficiência primeiro.' },
      { etapa:6, titulo:'DECIDIR ALAVANCA: CORTAR, SUBIR OU AUMENTAR VOLUME', desc:'Com a margem na mão, escolher: (a) cortar custo se há gordura óbvia, (b) subir preço se posicionamento e valor entregue já justificam, (c) aumentar volume se margem unitária é saudável e o gargalo é capacidade. Não tentar as três ao mesmo tempo.', condicional:'Subir preço só com posicionamento construído (autoridade, prova, valor percebido). Sem isso, é só perder cliente.' },
      { etapa:7, titulo:'DEFENDER A MARGEM ANTES DE PENSAR EM AUMENTAR', desc:'Foco inicial não é maximizar — é não ter prejuízo. Acompanhamento mensal vira hábito: revisar DRE, recebimentos, inadimplência, custos novos. Qualquer nova despesa passa pelo teste "isso cabe na minha margem?"', condicional:null },
      { etapa:8, titulo:'PROJETAR MARGEM DA PRÓXIMA FASE', desc:'Antes de contratar, abrir escritório físico, investir em tráfego ou expandir equipe: simular como a margem fica com o novo custo fixo. Definir quanto precisa vender a mais pra o investimento não machucar o caixa. Só então executar.', condicional:'Se a simulação mostra margem negativa nos primeiros meses: ou tem reserva pra bancar a transição, ou adia.' }
    ],
    fonte_primaria:'TRANSCRIÇÕES HOT SEATS NEGÓCIO SOBERANO linhas ~664-727',
    fonte_secundaria:'TRANSCRIÇÕES HOT SEATS MAZZEI$TRIA ~l.8114-8149; Planejamentos Individuais MAZZEI$TRIA',
    sessao:'S3 · Gestão + sessão dirigida Rafa (30min)',
    duracao_rafa:'30min (estrutura DRE simplificada + fórmula ponto de equilíbrio + ralos comuns)',
    vira_conteudo:['Aula T3.3 "Mapa de custos"','Calculadora de margem','IA Auditora de Ralos','Template DRE simplificado']
  },
  {
    id:'contratacao-apoio',
    nome:'Critérios de Contratação de Apoio',
    tecnico:'Quando e quem contratar — caixa primeiro, fase do negócio depois, gosto nunca',
    trilhas:['gestao'],
    status:'parcial',
    o_que_e:'Critérios pra decidir QUANDO e QUEM contratar como apoio (contador, BPO, estagiário, secretária, terceirizado, associado). Tese: contratação não é decisão de gosto nem de boa vontade — é decisão empresarial baseada em caixa, fase do negócio e capacidade de delegar processo.',
    o_que_temos:[
      'Tese explícita BPO: "não é hora de você ter BPO, não é custo que você precisa ter. Pode cancelar isso que aí você vai olhar para os seus custos" (Hot Seat NS 18/03, l.2152-2155)',
      'Definição de BPO: "BPO é uma empresa que já tá prosperando… você vai comprar um serviço que você não precisa" (Hot Seats NS, l.1283-1284)',
      'Tese quantidade mínima: "quem tem um não tem ninguém. Ou vocês crescem e vão ter dois, três, quatro, porque na hora que um faltar, a distribuição de trabalho vai pra dois ou três" (Hot Seats MAZZEI$TRIA, l.7813-7814)',
      'Princípio escalabilidade: "O que serve para um precisa servir para 1000" (Hot Seats MAZZEI$TRIA, l.7857)',
      'Critério delegação por sobrecarga: "a sua hora começa a ficar mais cara, você começa a ter mais demanda, seu horário começa a ficar sobrecarregado e você precisa tomar decisões de liberar o horário seu" (Hot Seats NS, l.1899-1903)',
      'Método prático: "lista tudo que você faz… o que pode ser delegado. A maioria pode ser delegada… só que você vai ter que saber quanto pagar pra cada pessoa de acordo com o que espera de resultado" (Hot Seats NS, l.1904-1907)',
      'Coerência preço-perfil: "Hoje você entrega um serviço premium pra um cliente ultra premium. Contratar profissional barato não é compatível com o seu negócio" (Hot Seats NS, l.1907-1909)',
      'Princípio PF/PJ aplicado: "vocês não sabem ser empresários. Não sabem separar pessoa física de jurídica" — vale também na decisão de contratar/demitir (Hot Seats MAZZEI$TRIA, l.7806-7807)'
    ],
    o_que_falta:[
      'Tabela "fase do negócio × contratações apropriadas" (Rafa tem na cabeça mas não documentado) — ⚠ a extrair em sessão dirigida',
      'Critério numérico de "caixa mínimo" pra cada tipo de contratação (qual o ponto de corte?) — ⚠ a extrair',
      'Ordem de prioridade quando há múltiplas dores (contratar primeiro contador, depois secretária, depois operacional?) — ⚠ a extrair',
      'Roteiro de avaliação do candidato (Rafa fala "profissional de fora que você possa confiar" — como avalia?) — ⚠ a extrair',
      'Diferenciação prática entre tipos de apoio (CLT vs PJ vs estagiário vs terceirizado vs associado) com prós/contras por fase — ⚠ a extrair'
    ],
    quando_acionar:[
      "Mentorada com agenda lotada, trabalhando 'de domingo a domingo, se matando', pensando em DEMITIR ao invés de contratar (caso Lice — Hot Seats NS, l.1922-1923)",
      "Mentorada considerando fechar BPO sem ter caixa estabilizado nem necessidade real de emissão de nota complexa",
      "Mentorada com Simples Nacional inadimplente ou desenquadrada, ainda pagando serviços não essenciais (Hot Seat NS 18/03, l.2146-2152)",
      "Funcionária engravidou / saiu de licença e mentorada precisa decidir entre pagar extra pra quem ficou ou contratar outro (caso Pri — Hot Seats MAZZEI$TRIA, l.7805-7878)",
      "Mentorada começou a recusar clientes porque não dá conta sozinha — sinal de que faltou contratar antes",
      "Mentorada pergunta 'devo contratar isso?' sem ter feito a análise de caixa pela planilha de fluxo (acionar fluxo-caixa primeiro)",
      "Mentorada quer terceirizar tarefa estratégica (vendas, planejamento, atendimento premium) por preço baixo — incompatibilidade preço-resultado"
    ],
    teses_metodologias:{
      base_externa:null,
      teses_rafa:[
        '"Não é hora de você ter BPO, não é custo que você precisa ter."',
        '"BPO é uma empresa que já tá prosperando… você vai comprar um serviço que você não precisa."',
        '"Quem tem um não tem ninguém. Ou vocês crescem e vão ter dois, três, quatro, porque na hora que um faltar, a distribuição de trabalho vai pra dois ou três."',
        '"O que serve para um precisa servir para 1000."',
        '"Vocês não sabem ser empresários. Não sabem separar pessoa física de jurídica."',
        '"A sua hora começa a ficar mais cara, você começa a ter mais demanda, seu horário começa a ficar sobrecarregado e você precisa tomar decisões de liberar o horário seu."',
        '"Contratar profissional barato não é compatível com o seu negócio."',
        '"Se ainda pagar um extra, a sua empresa tem caixa para isso?"'
      ]
    },
    passo_a_passo:[
      { etapa:1, titulo:'DIAGNÓSTICO DO CAIXA (ACIONAR FLUXO-CAIXA ANTES)', desc:'Antes de qualquer decisão, abrir a planilha de fluxo. Tem caixa pra absorver mais um custo fixo? Tem regularidade de recebimento? Qual o lucro real do mês? Sem essa resposta, não decide.', condicional:null },
      { etapa:2, titulo:'LISTAR TUDO QUE A MENTORADA FAZ HOJE', desc:'Inventário das atividades: o que é operacional repetível, o que é estratégico (só ela faz), o que está consumindo hora cara dela. Marcar o que PODE ser delegado.', condicional:null },
      { etapa:3, titulo:'CLASSIFICAR FASE DO NEGÓCIO', desc:'Empresa engatinhando (sem caixa estável): só contador básico. Empresa estabilizando (caixa positivo recorrente): estagiário/secretária pra liberar hora cara. Empresa prosperando (lucro consistente): BPO, contador especialista, associado, terceirizado premium.', condicional:null },
      { etapa:4, titulo:'AVALIAR COERÊNCIA PREÇO-PERFIL DO CANDIDATO', desc:'Entrega premium pra cliente premium → contratar profissional barato quebra a coerência. Empresa pequena → contratar profissional caríssimo afoga o caixa. O nível do contratado tem que casar com o nível da entrega E com a capacidade do caixa.', condicional:null },
      { etapa:5, titulo:'APLICAR O TESTE DA ESCALABILIDADE', desc:'Antes de fechar contratação ou combinado (ex: "pagar extra pra funcionária"): se eu fizer esse acordo com essa pessoa, faz sentido fazer com as próximas 10? 100? 1000? Se a resposta é não, é decisão de PF, não de empresário — refazer.', condicional:'Toda vez que estiver criando exceção emocional ("coitadinha", "é amiga", "sempre foi assim").' },
      { etapa:6, titulo:'SEPARAR PF DE PJ NA DECISÃO', desc:'Não decidir contratação/demissão por dó, gratidão ou raiva. Empresa vive de lucro e força de trabalho. Se a lei pede, cumpre. Se o contrato pede, cumpre. Acerto humano fica em paralelo — não pode contaminar a regra empresarial.', condicional:null },
      { etapa:7, titulo:'NEGOCIAR ANTES DE CORTAR ESSENCIAL', desc:'Se está apertado e o serviço é essencial (contador, gestão financeira mínima): "tem que pagar, só que tem que negociar". Cortar é pra o que não é hora (ex: BPO em empresa que ainda nem estabilizou), não pra o que sustenta a operação.', condicional:'Quando o caixa aperta e a tentação é cortar tudo.' },
      { etapa:8, titulo:'EXECUTAR CONTRATAÇÃO/CANCELAMENTO COM DATA E CRITÉRIO', desc:'Decidida a contratação: definir papel, valor fixo + variável (se vendedor/associado), o que se espera de resultado, prazo de avaliação. Decidido o cancelamento (ex: BPO precoce): cancelar, redirecionar o valor pra dívida ou acelerar caixa.', condicional:null }
    ],
    fonte_primaria:'TRANSCRIÇÕES HOT SEATS MAZZEI$TRIA linhas ~7805-7879',
    fonte_secundaria:'Hot Seat NS 18/03 ~l.1899-1923, 2146-2155; Hot Seats NS ~l.1280-1290',
    sessao:'S3 · Gestão',
    duracao_rafa:'30min (definir tabela fase × contratação + ordem de prioridade + roteiro de avaliação)',
    vira_conteudo:['Aula T3.6','Checklist de contratação por fase','IA Conselheira de Contratação']
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
    tecnico:'Sistema ativo de geração de receita por terceiros — parceria + comissão + NPS + treinar rede',
    trilhas:['tracao'],
    status:'parcial',
    o_que_e:'Sair da indicação passiva (boca a boca espontâneo) para sistema ATIVO de geração de receita por terceiros: rede de parceiros especialistas + comissão formal + pedido estruturado de indicação + NPS como gatilho. Quem indica entende que está prestando um serviço ao cliente, não pedindo favor.',
    o_que_temos:[
      'Princípio central: "Se a pessoa te procura e você tem um parceiro, essa pessoa não fecharia esse negócio se você não tivesse indicado" (Processo de Vendas, ~l.649-655) — fundamenta o direito à comissão',
      'Parceria mão-dupla com nicho complementar: cliente fora do nicho vai pro parceiro, recebe comissão; parceiro faz o mesmo (~l.655-673)',
      'Tese da especialização que gera lembrança: "Quanto mais especialista, mais a pessoa consegue te ajudar... se você fala qual sua especialidade, ela vai lembrar de três pessoas com esse problema" (~l.670-694)',
      'Programa de referido + pedido estruturado: "parceria, programa de referido, pedir indicação da forma certa = não vende menos que 20-30k de contrato todo mês" (Planejamentos NS, ~l.2743-2745)',
      'NPS como gatilho — pergunta dentro de formulário privado; identifica promotores que viram referenciadores (Hot Seats MAZZEI$TRIA, ~l.2400-2405)',
      'Caso Tânia/Rafa como prova: relacionamento construído por SERVIR primeiro (palco) sem cobrar reciprocidade → 3-4 fechamentos pra Tânia (~l.7672-7693)',
      'Anti-padrão: abordagem "interesseira" não converte; certa: "quero entender como você funciona porque tenho muitas pessoas interessadas no que você faz" (~l.7637-7654)',
      'Transferência de confiança: "todo mundo que você referencia, eu sei que é de qualidade" — só acontece se Rafa conhece e valida o parceiro ANTES (~l.7689-7693, ~l.7735-7744)',
      'Comissão como prática normal: "vi um cara que só de comissão por mês recebia R$100k" — quebra crença de antiético (~l.7662-7666)',
      'Caso BNI Priscila: cadeira de propriedade intelectual única na sala — vira ímã natural de indicação (~l.2798-2807)',
      'Proteção do nome: "Você indicar uma pessoa, é o seu nome que vai junto. Se a pessoa faz uma cagada..." (~l.7737-7744)'
    ],
    o_que_falta:[
      'Critérios objetivos de seleção de parceiro (checklist de qualificação antes de virar referenciado)',
      'Tabela de comissões por tipo de serviço/ticket — Rafa cita mas não há range padronizado',
      'Script literal do pedido de indicação "da forma certa" (Rafa cita forma certa vs errada mas script completo não consolidado)',
      'Cadência operacional: em qual momento da jornada pedir indicação (logo após NPS? após X meses? após resultado?) — SLA',
      'Estrutura jurídica/contratual da parceria (contrato, NF, fluxo financeiro)',
      'Mecanismo de tracking: como medir indicações recebidas, taxa de conversão de indicações vs leads frios'
    ],
    quando_acionar:[
      "Chega lead fora do seu nicho/especialidade mas dentro de área correlata (ex: nutrição esportiva chega cliente de SOP — direciona pro especialista parceiro)",
      "Cliente atual respondeu NPS 9-10 (promotor) — ativar pedido estruturado de indicação porque a satisfação está fresca",
      "Rafa entra em novo grupo/comunidade (BNI, mentoria, evento) — primeiro passo é mapear quem ali pode virar parceiro, não vender direto",
      "90%+ dos contratos estão fechando por indicação espontânea — formalizar essa rede antes que ela se dissolva",
      "Expert quer escalar receita sem aumentar carga de conteúdo — indicação ativa converte mais por menos esforço",
      "Cliente fecha contrato — agendar pedido de indicação no onboarding/pós-venda (não na hora da venda)",
      "Expert identifica especialista de nicho complementar de qualidade comprovada — abrir conversa oferecendo PRIMEIRO"
    ],
    teses_metodologias:{
      base_externa:'NPS (Net Promoter Score) — usado como gatilho de identificação de promotores. Rafa também menciona BNI (Business Network International) como modelo de rede, mas critica o fato do BNI não pagar comissão e por isso construiu modelo próprio.',
      teses_rafa:[
        '"Se a pessoa te procura e você tem um parceiro, essa pessoa não fecharia esse negócio se você não tivesse indicado."',
        '"Quanto mais especialista, mais a pessoa consegue te ajudar. E a minha especialidade é essa daqui. A pessoa vai se encantar porque você tá dizendo isso para ela."',
        '"Quem precisa de tudo? Todo mundo. De quem você lembra? De ninguém. Quem precisa de algo específico? Você vai lembrar dessa pessoa."',
        '"Você não vai vender menos que 20, 30 mil de contrato todo mês — parceria, programa de referido, pedir indicação da forma certa."',
        '"Você indicar uma pessoa, é o seu nome que vai junto. Se a pessoa faz uma cagada..."',
        '"Faça com a melhor das intenções. O que acharem, se não for, você tá plantando. A colheita é certa."',
        '"Olha essa transferência de confiança... todo mundo que você referencia, eu sei que é de qualidade, é confiável."'
      ]
    },
    passo_a_passo:[
      { etapa:1, titulo:'NICHAR ANTES DE INDICAR', desc:'Definir publicamente UMA especialidade clara. Sem nicho, ninguém lembra de você quando alguém pergunta "conhece um bom X?". A indicação ativa pressupõe que o mercado consiga te associar a um problema específico.', condicional:'Se expert atende múltiplas áreas: escolher a principal para comunicação pública e usar as outras como serviços internos (não comunica externamente).' },
      { etapa:2, titulo:'MAPEAR REDE DE PARCEIROS COMPLEMENTARES', desc:'Listar especialistas de nichos adjacentes (que recebem clientes que poderiam ser seus, e vice-versa). Validar qualidade do atendimento ANTES de virar parceiro — pedir pra conhecer o processo, tomar café, observar.', condicional:'Se não conhece o atendimento do parceiro, NÃO indica ainda — primeiro investiga, porque "é o seu nome que vai junto".' },
      { etapa:3, titulo:'ABRIR CONVERSA DE PARCERIA SERVINDO PRIMEIRO', desc:'Mensagem inicial nunca é "vamos fazer parceria pra eu ganhar comissão". É "tenho muitas pessoas interessadas no que você faz, quero entender melhor pra poder te indicar com segurança". Gera relacionamento antes de pedir reciprocidade.', condicional:'Se o parceiro responder com interesse → marca conversa presencial/café pra mergulhar no processo. Se não responder após 2-3 tentativas espaçadas → segue, planta semente.' },
      { etapa:4, titulo:'FORMALIZAR COMISSÃO E FLUXO', desc:'Estabelecer percentual de comissão por indicação fechada (mão-dupla) e definir como cada parceiro recebe leads do outro (link de pré-qualificação? apresentação direta? formulário?). Comissão é norma de mercado — não constrange, profissionaliza.', condicional:'Se o parceiro não quer pagar comissão: "começa a pagar pra ver se não quer" (Rafa). Pode manter sem comissão se mão-dupla equivalente em volume.' },
      { etapa:5, titulo:'RODAR NPS ESTRUTURADO EM PÓS-VENDA', desc:'Formulário privado com pergunta NPS clássica (0-10 "o quanto você indicaria..."). Identificar promotores (9-10). Esse é o gatilho de pedido de indicação ativa.', condicional:'Se cliente é detrator (0-6): não pede indicação, escuta o que deu errado. Se passivo (7-8): entende objeções. Se promotor (9-10): entra no passo 6.' },
      { etapa:6, titulo:'PEDIR INDICAÇÃO DA FORMA CERTA', desc:'Não é "me indica alguém". É contextual: "Eu trabalho com [especialidade X] para [perfil Y]. Você conhece alguém com esse problema específico?" — quanto mais nichada a pergunta, mais o cérebro lembra de gente concreta.', condicional:'Se cliente cita nome → pedir permissão pra fazer contato direto OU pedir que ele faça a ponte. Se não cita → deixar "antena ligada" explicitada e voltar em outro momento.' },
      { etapa:7, titulo:'DIRECIONAR LEADS FORA DO NICHO PRA PARCEIROS', desc:'Quando entra lead que não é seu ICP mas é ICP de um parceiro: faz a ponte com calor, posiciona o parceiro como especialista, recebe comissão. "A pessoa não fecharia se você não tivesse indicado" — receita justa.', condicional:'Se o parceiro tem CRM/formulário próprio: encaminha o link, não o telefone. Mantém rastreabilidade.' },
      { etapa:8, titulo:'ACOMPANHAR RESULTADO E FECHAR O LOOP', desc:'Pós-fechamento: agradecer quem indicou, comunicar quando uma indicação fechou, manter o relacionamento vivo. "A colheita é certa" só se você cuida do relacionamento de longo prazo.', condicional:'Se a indicação não converteu: retornar pro indicador com transparência ("a pessoa não era perfil porque X"), reforça o critério e gera mais indicações alinhadas.' }
    ],
    fonte_primaria:'aula Método Mazzei - Processo de Vendas linhas ~649-694',
    fonte_secundaria:'Planejamentos NS ~l.2743-2752; Hot Seats MAZZEI$TRIA ~l.2392-2843, ~l.7637-7744',
    sessao:'S2 · Comercial + Tração',
    duracao_rafa:'30min (definir comissões + script "forma certa" + cadência)',
    vira_conteudo:['Aula T5.2','Sistema de indicação','Script pedido de indicação','Contrato de parceria padrão']
  },
  {
    id:'escala-funis',
    nome:'Escala de Funis de Aquisição',
    tecnico:'Sistema de 3 funis em paralelo (pré-venda/venda/pós-venda) com objetivo único por etapa',
    trilhas:['tracao','comercial'],
    status:'parcial',
    o_que_e:'Sistema de 3 funis em paralelo (pré-venda, venda, pós-venda) no CRM, onde cada etapa tem UM objetivo único e mensurável. A escala não vem de "mais clientes" — vem de "espremer a laranja" de cada etapa: pequenas otimizações cumulativas. Separa rigorosamente etapa (objetivo) de tarefa (execução dentro da etapa).',
    o_que_temos:[
      'Frase-âncora: "Cada etapa ela tem um objetivo. Quando você cumpre esse objetivo, você pula pra próxima etapa" (Hot Seat NS 18/03, ~l.199-205)',
      'Distinção crítica: "Tem gente que confunde etapa de funil com tarefa. Tarefa não é etapa. Tarefa tá dentro da etapa. Mas a etapa ela é algo que tem um objetivo único" (~l.208-214)',
      'Metáfora "espremer a laranja": "É espremer melhor a laranja de cada etapa do funil para você não perder de forma nenhuma" (~l.97-106)',
      'Estrutura macro: 3 funis paralelos no CRM (RD Station) — pré-vendas, vendas, pós-venda — conectados entre si (~l.193-199)',
      'Topo do pré-vendas: popup minimalista (nome, email, telefone, @Instagram) antes do formulário longo (~l.220-241)',
      'Lógica do popup duplo: email como chave única de deduplicação no CRM (~l.274-283)',
      'Diagnóstico de gargalo: "Às vezes seu problema não tá no fundo do funil. Importante olhar pro script? Sim, mas seu problema tá onde? No topo" (Processo de Vendas, ~l.469-485)',
      'Qualificação na medida certa: caso do aluno de marketing pra cortinas — "achou que tava qualificando demais, mas tava qualificando de menos" (Processo de Vendas, ~l.751-797)',
      'Níveis de consciência aplicados ao funil: inconsciente → consciente do problema → consciente da solução → consciente da oferta → decisão (~l.439-454) — alinhada com Schwartz',
      'Inversão proposital do método: "pode ser que em alguns negócios vai ter que inverter da maneira padrão do mercado" (~l.859-874)',
      'Formulário como ETAPA, não como tarefa: "serve pra qualificar, pra olhar as perguntas e entender se essa pessoa tá qualificada ou não" (Hot Seat NS, ~l.2980-2995)',
      'Princípio de não-gastar-tempo-fora-da-etapa: "Se você ainda nem tá agendando, pra que quer saber isso? Tá gastando tempo à toa" (~l.3748-3754)',
      'Pluga + RD Station + página + WhatsApp integrados via automação (~l.376-384)',
      'Caso Iara em tempo real: popup → formulário → card → qualificação → agendamento (~l.300-360)'
    ],
    o_que_falta:[
      'Lista canônica e numerada das etapas exatas dentro de cada um dos 3 funis (pré/venda/pós) — Rafa cita várias mas não consolida',
      'SLA por etapa (em quanto tempo um lead deve sair de uma etapa pra próxima antes de parado)',
      'Critérios objetivos de qualificação por etapa — quais respostas no formulário disparam upgrade ou descarte',
      'Métricas-meta por etapa: % saudável de conversão topo→meio, meio→fundo, fundo→fechado (Rafa cita 60-80% sem segmentação)',
      'Detalhamento do funil de PÓS-VENDA — material foca quase todo em pré-venda e venda. ⚠ a extrair em sessão dirigida',
      'Catálogo de tarefas por etapa (distinção etapa × tarefa é clara conceitual mas falta tabela)',
      'Critério de "troca de funil": quando lead que entrou no pré-venda volta pro pós-venda (re-engajamento)?'
    ],
    quando_acionar:[
      "Expert sente 'tô fazendo muita coisa mas não fecha venda' — sinal de funil sem etapas claras (tudo virou tarefa solta)",
      "Volume razoável de leads MAS taxa de conversão final é baixa — diagnosticar em qual etapa específica está vazando",
      "Expert vai investir em tráfego pago — precisa do funil estruturado ANTES pra não 'pagar à toa sem qualificar'",
      "Leads vindo de múltiplas fontes (Instagram, BNI, indicação, site) e está perdendo controle",
      "Expert tá fazendo perguntas da etapa 3 ainda na etapa 1 (perdendo tempo, queimando lead) — mistura etapa × tarefa",
      "Proposta enviada e lead 'sumiu há 20 dias' — em vez de buscar script mágico, voltar ao topo",
      "Expert vai contratar comercial/vendedor — sem funil documentado, vendedor faz do jeito dele e não escala"
    ],
    teses_metodologias:{
      base_externa:'Funil de vendas clássico (AIDA / topo-meio-fundo) e Níveis de Consciência de Eugene Schwartz são a base externa reconhecível. Stack tecnológico: RD Station (CRM Kanban) + Pluga (integração). Rafa explicitamente diz que "inverte" a ordem padrão do mercado em algumas etapas.',
      teses_rafa:[
        '"Cada etapa ela tem um objetivo. Quando você cumpre esse objetivo, você pula pra próxima etapa."',
        '"Tem gente que confunde etapa de funil com tarefa. Tarefa não é etapa. Tarefa tá dentro da etapa."',
        '"É espremer melhor a laranja de cada etapa do funil pra você não perder de forma nenhuma."',
        '"Eu tenho três funis: pré-vendas, vendas e pós-venda. Eles se conectam, cada um deles tem suas etapas."',
        '"Quem dera eu tivesse a mágica que fizesse o script perfeito e recuperasse todo mundo... não existe. Por isso que é funil."',
        '"Tudo que você tentar pular a etapa, depois vai complicar a vida, não vai funcionar."',
        '"Se você ainda nem tá agendando, pra que quer saber isso? Tá gastando tempo à toa."',
        '"Você diminui a chance de entrar o resto. Senão de mais de 250 entraram 10 que fatura a partir de 40... O resto você pagou à toa pra rodar tráfego sem qualificar."'
      ]
    },
    passo_a_passo:[
      { etapa:1, titulo:'DESENHAR OS 3 FUNIS EM PARALELO NO CRM', desc:'Criar três pipelines distintos: Pré-venda (captação e qualificação), Venda (apresentação, negociação, fechamento) e Pós-venda (onboarding, sucesso, indicação, recompra). Conectados — quem fecha em Venda vai pro topo do Pós-venda.', condicional:'Se ainda não tem CRM: começar pelo Kanban simples (RD Station, Trello, Notion). Se tem CRM com 1 funil só: reestruturar antes de otimizar conversão.' },
      { etapa:2, titulo:'DEFINIR OBJETIVO ÚNICO DE CADA ETAPA', desc:'Pra cada etapa dos 3 funis, escrever em UMA frase qual é o objetivo: "captar nome+email+telefone+@", "qualificar via formulário", "agendar reunião", "apresentar oferta", "fechar contrato", "gerar NPS". Se etapa tem +1 objetivo, é DUAS etapas disfarçadas — separar.', condicional:'Se etapa atual tem 2+ objetivos misturados: desmembrar. Se há objetivo que não cabe em nenhuma etapa atual: criar etapa nova.' },
      { etapa:3, titulo:'SEPARAR ETAPA × TAREFA EXPLICITAMENTE', desc:'Pra cada etapa, listar quais TAREFAS são executadas dentro dela (ex: "qualificação" tem "enviar link do formulário", "ler respostas", "agendar ligação", "mover card"). Tarefa é o COMO; etapa é o O QUÊ. Não promover tarefa a etapa.', condicional:'Se uma tarefa aparece em múltiplas etapas: revisar se é a mesma ou tarefas diferentes com mesmo nome. Padronizar nomenclatura.' },
      { etapa:4, titulo:'CONSTRUIR TOPO COM FILTRO NA COMUNICAÇÃO', desc:'Antes da ferramenta, a COMUNICAÇÃO (Instagram, tráfego, isca) precisa qualificar quem entra. Nichada por faturamento mínimo, perfil específico. Quem critica posicionamento não compra mesmo — qualifica na entrada, não desperdiça mídia.', condicional:'Se entra muita gente desqualificada: problema é na comunicação de topo, não no script de fundo. Se entra pouca gente qualificada: problema é volume, não conversão.' },
      { etapa:5, titulo:'IMPLEMENTAR POPUP CURTO ANTES DE FORMULÁRIO LONGO', desc:'Página de vendas abre primeiro um popup com 4 campos (nome, email, telefone, @Instagram) — ativo mínimo do lead. Só depois cai no formulário longo. Se desistir no formulário, você ainda tem dados básicos pra recuperar.', condicional:'Se popup pede +4-5 campos: cortar. Se página não tem popup: instalar via Pluga + integração CRM.' },
      { etapa:6, titulo:'USAR FORMULÁRIO COMO ETAPA DE QUALIFICAÇÃO', desc:'Cada pergunta tem um POR QUÊ: ou qualifica (faturamento, problema, urgência), ou desqualifica (outros profissionais consultados, expectativa de preço incompatível), ou personaliza. Pergunta sem objetivo claro = retirar.', condicional:'Se pergunta é "agressiva" (ex: "quanto você ganha?"): reformular com contexto. Se pergunta de etapa futura (garantia, prazo) entra no formulário: tirar.' },
      { etapa:7, titulo:'DIAGNOSTICAR GARGALOS POR TAXA DE CONVERSÃO', desc:'Medir mensalmente: de quantos entraram em cada etapa, quantos avançaram pra próxima. Gargalo é a etapa com pior conversão relativa. Otimizar UMA etapa por vez — "espremer a laranja" — não tudo junto.', condicional:'Se conversão topo→meio cai muito: revisar comunicação e qualificação. Se fundo→fechado cai: revisar oferta e script. Se pós-venda→indicação cai: revisar experiência e pedido de indicação.' },
      { etapa:8, titulo:'FECHAR O LOOP PRÉ-VENDA → VENDA → PÓS-VENDA', desc:'Quando lead fecha em Venda, automação cria card em Pós-venda no "onboarding". Pós-venda tem etapas próprias até "promotor NPS" que volta como referenciador no Pré-venda. Os 3 funis viram ciclo, não 3 silos.', condicional:'Se cliente vira detrator no NPS: não pula pra etapa de indicação, entra em fluxo de recuperação. Se é promotor e indica: indicação entra no Pré-venda já marcada como "origem: indicação" (conversão maior, qualificação mais leve).' }
    ],
    fonte_primaria:'Hot Seat NS - 18_03_26 linhas ~97-1240, ~199-214, ~2989, ~3751-4582',
    fonte_secundaria:'aula Método Mazzei - Processo de Vendas ~l.70, ~430-590, ~742-854',
    sessao:'S2 · Comercial + Tração',
    duracao_rafa:'30min (detalhar funil de pós-venda + SLA por etapa)',
    vira_conteudo:['Aula T5.9','Playbook de escala','Template CRM Kanban 3-funis','Tabela etapa × tarefa']
  },
  {
    id:'timing-contratacao',
    nome:'Critérios de Timing de Contratação',
    tecnico:'Contratar pra crescer × crescer pra contratar — matemática de horas liberadas × ticket',
    trilhas:['lideranca'],
    status:'parcial',
    o_que_e:'Framework de decisão sobre QUANDO contratar a primeira pessoa (ou a próxima) — invertendo a lógica de \'crescer pra contratar\' para \'contratar pra crescer\', baseado em matemática de horas liberadas × ticket × capacidade de venda.',
    o_que_temos:[
      'Tese central: \'Às vezes você acha que tem que crescer pra contratar, mas às vezes é contratar pra crescer. Depois que você aprender a vender, você contrata pra crescer, porque os 1.500 dessa pessoa libera quantas horas que você vende\' (Planejamentos NS, l.3381-3388)',
      'Lógica matemática: \'A hora que você tiver ganhando 12, você investe dois, três. A hora que tiver ganhando 10, porque se você vive hoje com cinco\' — proporção de prolabore × custo da contratação (Planejamentos NS, ~l.3363-3370)',
      'Pré-condição de venda: \'Depois que você aprender a vender\' — a contratação só funciona se o expert já dominou o processo comercial',
      'Cálculo de capacidade liberada (Dani): \'110h/mês × R$275 = R$30.250. MAS desconta 80h de venda/estudo/estruturação, sobra 22h reais — não precisa esperar chegar a 22h pra contratar pessoa pra casa\' (Planejamentos NS, ~l.3433-3445)',
      'Risco timing errado: \'Se começa a ganhar mais, começa a gastar mais e não separa tempo pra treinar, pra colocar o processo, pra trazer a pessoa e não tem coragem de tirar o dinheiro pra investir nessa pessoa antes de ver o dinheiro entrando\' (~l.3360)',
      'Risco oposto: \'Ele dá conta ou não se programa pra crescer, contratar pra crescer e nem sabe se é o que ele quer. Se cresce muito rápido, um cliente indica e ele não tinha condição de atender\' (Consultoria Presencial, ~l.535)',
      'Caminho de escala: \'A coisa mais inteligente a se fazer é começar a colocar pessoas pra depois poder te desocupar\' (~l.3375)'
    ],
    o_que_falta:[
      '⚠ Critérios objetivos de volume de demanda (quantos leads/atendimentos/mês justificam a primeira contratação)',
      '⚠ Tabela de ROI esperado do salário do primeiro funcionário (em quanto tempo o investimento deve se pagar)',
      '⚠ Perfil ideal do PRIMEIRO funcionário por tipo de negócio (SDR? secretária? closer? operacional?) — Rafa cita casos isolados, falta a regra',
      '⚠ Sequência de contratações ideal (1ª pessoa libera o quê → 2ª → 3ª)'
    ],
    quando_acionar:[
      'Expert trabalha mais de 8h/dia e ainda não dá conta da demanda operacional',
      'Expert está fazendo tarefas que custam menos que o valor da hora dele (empacotamento, follow-up, agendamento, atendimento básico)',
      'Faturamento mensal estabilizou em patamar onde sobra margem pra absorver salário + encargos sem comprometer prolabore',
      'Expert já dominou o processo de venda (vende com previsibilidade, não depende de sorte)',
      'Demanda chegando ultrapassa capacidade individual e cliente começa a ficar mal-atendido ou recusado',
      'Expert quer escalar mas reconhece que sozinho bateu o teto de horas disponíveis',
      'Aparece indicação ou oportunidade que exigiria capacidade extra — risco de perder cliente por falta de braço'
    ],
    teses_metodologias:{
      base_externa:null,
      teses_rafa:[
        '\'Eu preciso ganhar mais pra contratar uma pessoa. Às vezes você acha que tem que crescer pra contratar, mas às vezes é contratar pra crescer.\'',
        '\'Os 1.500 dessa pessoa libera quantas horas que você vende, quanto e faz quanto. Você aumenta 10, 20.000, 15.000.\'',
        '\'A coisa mais inteligente a se fazer é começar a colocar pessoas pra você poder te desocupar.\'',
        '\'A hora que você tiver ganhando 12, você investe dois, três.\'',
        '\'Não tem coragem de tirar o dinheiro pra investir nessa pessoa antes de ver o dinheiro entrando — esse é o erro.\''
      ]
    },
    passo_a_passo:[
      { etapa:1, titulo:'VALIDAR PRÉ-CONDIÇÃO: O EXPERT SABE VENDER?', desc:'Antes de qualquer contratação, confirmar que o expert tem processo de venda funcionando. Se não vende com previsibilidade, contratar é antecipar problema — não há quem treinar nem com o quê pagar.', condicional:'Se NÃO sabe vender → volta pra Engenharia de Vendas antes de contratar.' },
      { etapa:2, titulo:'MAPEAR HORAS OPERACIONAIS \'ROUBADAS\'', desc:'Listar todas as tarefas que o expert faz hoje cujo valor/hora é MENOR que o valor/hora da especialidade dele (empacotamento, agendamento, follow-up, atendimento básico). Soma de horas/semana = capacidade a ser liberada.', condicional:null },
      { etapa:3, titulo:'FAZER A CONTA INVERSA: CUSTO × RECEITA LIBERADA', desc:'Calcular: \'Se eu pago R$X, libero Y horas/semana. Com essas Y horas vendendo no meu ticket, faço R$Z.\' Se Z > X com margem confortável, contratar PAGA pra crescer. Aplicar regra: ganhando 10, investir 2-3.', condicional:'Se Z não cobre X com folga: ajustar ticket/esteira antes de contratar.' },
      { etapa:4, titulo:'RESERVAR TEMPO + DINHEIRO PRA TREINAR ANTES DO RETORNO', desc:'Provisionar: (a) tempo na agenda pra treinar a pessoa nas primeiras semanas, (b) caixa pra 2-3 meses de salário ANTES da receita extra aparecer, (c) processo documentado mínimo. Sem isso, contratação queima dinheiro.', condicional:null },
      { etapa:5, titulo:'⚠ COMPLETAR COM RAFA — CRITÉRIOS OBJETIVOS DE GATILHO', desc:'Pedir à Rafa: \'Quais 3-4 indicadores concretos que, quando todos batem ao mesmo tempo, você diz pro mentorado: agora é hora?\' Hipóteses: volume de leads/mês, taxa de recusa por falta de tempo, horas em tarefa operacional, % do faturamento sobrando após custos fixos.', condicional:null },
      { etapa:6, titulo:'⚠ COMPLETAR COM RAFA — PERFIL DO 1º FUNCIONÁRIO POR ARQUÉTIPO', desc:'Extrair: \'Pro expert de serviço B2C presencial, o 1º é X. Pro infoprodutor, é Y. Pro consultor, é Z.\' Hoje só temos casos isolados; falta a regra geral.', condicional:null }
    ],
    fonte_primaria:'Planejamentos em Grupo NS linhas ~3360-3445',
    fonte_secundaria:'Consultoria Presencial.md ~l.535',
    sessao:'S4 · Liderança',
    duracao_rafa:'20min (3 indicadores de gatilho + tabela perfil × arquétipo de negócio)',
    vira_conteudo:[
      'Aula T6.2 \'A hora certa de contratar\'',
      'Calculadora ROI da contratação',
      'Checklist de prontidão'
    ]
  },
  {
    id:'time-comercial',
    nome:'Estrutura de Time Comercial',
    tecnico:'Estrutura de papéis (SDR/Closer/Social Seller) com casamento DISC + playbook validado pelo empresário',
    trilhas:['lideranca'],
    status:'parcial',
    o_que_e:'Estrutura de papéis dentro do time de vendas (SDR, Closer, Social Seller) e como casar cada função com perfil comportamental adequado (DISC). Define que o empresário valida o processo PRIMEIRO como vendedor e só depois delega para um time treinado pelo próprio playbook.',
    o_que_temos:[
      'Definição dos 3 papéis: \'Hoje em dia se diferencia SDR de closer... é o cara que qualifica a venda, faz a conexão. O social selling é o cara que faz a prospecção. O Executor é o cara para fechar a venda, closer\' (Aulas Método Mazzei, ~l.4688-4696)',
      'Papéis ampliados: \'A hora que você quiser colocar um vendedor — social seller, setter, SDR, closer — constrói processo\' (Processo de Vendas, ~l.1714)',
      'Casamento perfil × função (DISC traduzido): Comunicador (I) abre conexão/prospecção; Executor (D) fecha; Planejador/Analista não são naturais para venda direta (Aulas, ~l.4677-4696)',
      'Regra de contratação por perfil: \'Você vai contratar um vendedor que não tem perfil Executor e comunicador — pra quê? Pra passar raiva com o cara? Não faz sentido\' (Aulas, ~l.4716-4720)',
      'Validação antes de delegar: \'O melhor vendedor da sua empresa é você, empresário. É você que vai saber e validar o melhor processo e depois delega pro time\' (Aulas, ~l.2542-2546)',
      'Sem playbook não há time: \'Não existe vendedor com experiência — ele não vai ter como adivinhar seu processo\' / \'Quem tem que criar os scripts pro seu closer? Você\' (Aulas, ~l.2516-2517, 3948-3956)',
      'Equilíbrio do empresário: \'O empresário precisa saber vender, o resto quando dinheiro encaixa ele paga pra fazer\' (Aulas, ~l.4706-4715)',
      'Alerta sobre terceirizar: \'Vender qualquer produto não serve pra mim porque vai contra os meus princípios\' — time tem que vender SEU produto (Aulas, ~l.2915-2935)'
    ],
    o_que_falta:[
      '⚠ Critérios objetivos de quando contratar 1º vendedor (faturamento mínimo? horas vendendo? taxa de conversão?)',
      '⚠ Modelo de remuneração (fixo + comissão? % sobre faturamento? piso?)',
      '⚠ Estrutura de meta individual por papel (SDR × closer × social seller)',
      '⚠ Quando entra gerente comercial / coordenador (qual o tamanho do time que justifica?)',
      '⚠ Processo de seleção: aplicar DISC pago × gratuito, role-play, prazo de experiência',
      '⚠ Onboarding do novo vendedor — rampa de geração + como medir',
      '⚠ Protocolo PIP — como lidar com vendedor que não bate meta'
    ],
    quando_acionar:[
      'Empresário sozinho vendendo, processo já mapeado/validado, agenda lotando — gatilho pra contratar 1º vendedor',
      'Já tem um vendedor mas as vendas dependem do empresário entrar na reunião final — falta closer ou empresário não delegou bem',
      'Cliente fala \'não acho gente boa no mercado, mão de obra ruim\' — diagnóstico real é falta de playbook/processo padronizado',
      'Aluno quer terceirizar com agência de closers vendendo \'qualquer produto\' — Rafa recusa e ensina o porquê',
      'Time vendendo cada um do seu jeito, sem padrão — gatilho pra padronizar antes de contratar o próximo',
      'Empresário com perfil planejador/analista querendo vender sozinho pra sempre — montar time complementar ao perfil',
      'Cliente pergunta \'que perfil de vendedor contrato?\' — entra DISC + papel comercial alvo'
    ],
    teses_metodologias:{
      base_externa:'Papéis SDR/Closer/Social Seller vêm da escola de inside sales americana — referência implícita a Aaron Ross (\'Predictable Revenue\', 2011). Rafa adapta cruzando com DISC (William Moulton Marston, 1928) e renomeia perfis para Executor/Comunicador/Planejador/Analista. Não cita os autores nominalmente.',
      teses_rafa:[
        '\'SDR é o cara que qualifica a venda, faz a conexão. Social selling é o comunicador. Executor é o cara pra fechar.\'',
        '\'Não existe vendedor com experiência — ele não vai ter como adivinhar seu processo.\'',
        '\'O melhor vendedor da sua empresa é você, empresário.\'',
        '\'Você vai contratar um vendedor que não tem perfil Executor e comunicador — pra quê? Pra passar raiva com o cara? Não faz sentido.\'',
        '\'O empresário precisa saber vender. O resto, quando dinheiro encaixa, ele paga pra fazer.\'',
        '\'Quem tem que criar os scripts pro seu closer, pro seu vendedor? Você.\''
      ]
    },
    passo_a_passo:[
      { etapa:1, titulo:'VOCÊ VENDE PRIMEIRO E VALIDA O PROCESSO', desc:'Antes de qualquer contratação, o empresário vende sozinho até ter clareza de cada etapa do funil, scripts, taxas de conversão e objeções reais. Sem processo validado, contratar é jogar dinheiro fora.', condicional:null },
      { etapa:2, titulo:'MAPEIE O PLAYBOOK COMPLETO', desc:'Documente em mapa mental (Miro/MindMaster) todas as etapas, scripts, contornos de objeção e regras (palavras proibidas, padrão de comunicação). É o ativo que treina qualquer pessoa do time.', condicional:null },
      { etapa:3, titulo:'DECIDA QUAL PAPEL PRECISA PRIMEIRO', desc:'Olhe o gargalo: falta lead → social seller/SDR. Sobra reunião sem fechar → Closer. Não tente contratar \'faz-tudo\' antes de saber qual etapa do funil dói mais.', condicional:'Se gargalo em prospecção → social seller/SDR. Se em fechamento → closer.' },
      { etapa:4, titulo:'DEFINA O PERFIL DISC ALVO', desc:'SDR/social seller: dominante Comunicador (I). Closer: dominante Executor (D). Não contrate Planejador ou Analista puro pra função comercial de ponta — vai dar desgaste.', condicional:'Se venda for técnica/consultiva alta complexidade: tolerar Analista no closer, mas com Executor secundário forte.' },
      { etapa:5, titulo:'RECRUTE COM DISC NA SELEÇÃO', desc:'Aplique teste DISC ANTES da entrevista. Pessoas com perfil oposto ao alvo entram com viés contra. Confira na área de talentos do relatório se \'vendedor\' aparece alto.', condicional:null },
      { etapa:6, titulo:'TREINE PELO SEU PLAYBOOK', desc:'Não existe vendedor formado pelo seu método. Quem treina é você. Use o mapa mental como roteiro: \'se cliente fala isso, respondo isso\'. O vendedor lê, executa, ajusta com você, depois opera.', condicional:null },
      { etapa:7, titulo:'DELEGUE COM ACOMPANHAMENTO ATIVO', desc:'Delegar não é entregar e sumir. Passar o processo, acompanhar reunião por reunião nos primeiros dias, ouvir gravações, corrigir o script conforme aparecem situações novas. O playbook é organismo vivo.', condicional:null },
      { etapa:8, titulo:'ESCALE O TIME RESPEITANDO OS PAPÉIS', desc:'Quando o 1º vendedor já gera resultado, abrir o próximo papel do funil. Time completo = social seller + SDR + closer + você como líder/treinador.', condicional:'Se empresa ultrapassa 3-5 vendedores: considerar gerente comercial (⚠ Rafa não definiu corte exato — validar).' }
    ],
    fonte_primaria:'Aulas Método Mazzei ~l.4500-4750',
    fonte_secundaria:'aula Processo de Vendas ~l.1714-1757, 2516-2546',
    sessao:'S4 · Liderança',
    duracao_rafa:'30min (remuneração + meta por papel + corte de gerente)',
    vira_conteudo:[
      'Aula T6.4 \'Formando o time comercial\'',
      'Template DISC × papel',
      'Playbook de treinamento de vendedor'
    ]
  },
  {
    id:'lideranca-delegacao',
    nome:'Liderança e Delegação',
    tecnico:'Liderança = desenhar + acompanhar + ajustar; delegar nunca é entregar e sumir',
    trilhas:['lideranca'],
    status:'parcial',
    o_que_e:'Princípios de como o empresário deixa de SER o processo e passa a LIDERAR pessoas que executam o processo. Liderança e delegação caminham juntas: só lidera quem antes desenhou, validou e padronizou; e só delega quem está disposto a \'pegar no chifre do boi\' — desenhar, acompanhar, ajustar.',
    o_que_temos:[
      'Tese central: \'Você só é capaz de delegar se você antes desenhar — e dá trabalho para caramba. É chato, é trabalhoso, mas o que separa os homens dos meninos e as mulheres das meninas é realmente pegar no chifre do boi, fazer, acompanhar, ajustar — e aí sim você passa a ser um empresário\' (Processo de Vendas, ~l.1745-1753)',
      'Sem processo, o processo é você: \'Se você não tem um processo, o processo é você. E você tá sempre igual o louco, correndo igual a corrida de ratos\' — atribuída a Conrado Adolfo (Processo de Vendas, ~l.115-120)',
      'Liderança ≠ processo: \'Rafa, minha equipe não lê, não faz. Aí é liderança, é outra questão. Como foi combinado isso? O que acontece se a pessoa não lê? A responsabilidade do funcionário que não lê é de liderança, não é do processo\' (Processo de Vendas, ~l.193-205)',
      'Liderança implica clareza de consequência: \'Quando não é cumprido algo, o que acontece na operação? As pessoas não são robôs — precisam entender esses porquês\' (Processo de Vendas, ~l.207-220)',
      'Não passar a mão na cabeça: \'Eu também não quero ser aquela líder que fica passando a mão na cabeça. Ai tadinha, não vendeu. Tá bom minha filha, vamos chorar junto. Eu não acho que isso vai fazer a pessoa chegar onde precisa\' (Aulas, ~l.6624-6629)',
      'Liderança é treinar pra outro substituir: \'Ela treina pessoas pra fazer aquilo que não vai ser boa fazendo. Num determinado momento ela delega, treina, capacita, forma uma líder pra treinar os próximos e sai fora\' (Aulas, ~l.6644-6650)',
      'Líder não recebe choro no último dia: \'Se você tem time de vendas, pelo amor de Deus, não deixa o seu vendedor pedir ajuda no último dia\' (Aulas, ~l.3536-3541)',
      'Contratar pra crescer, não crescer pra contratar: \'Às vezes é contratar pra crescer. Os 1.500 dessa pessoa libera quantas horas que você vende\' (Planejamentos NS, ~l.3385-3389)',
      'Rafa se reconhece líder nata pelo DISC: perfil Dominante-Influente, \'área comercial ou gerência\', \'líder nata Rafaela inspira os outros\' (Aulas, ~l.6237-6245)'
    ],
    o_que_falta:[
      '⚠ Ritmo de acompanhamento do time (1:1 semanal? daily? reunião comercial semanal?) — sem cadência definida',
      '⚠ Indicadores que líder acompanha do time (KPI comercial: nº reuniões, conversão por etapa, ticket médio, ciclo de venda)',
      '⚠ Como dar feedback corretivo (modelo SCI? feedback sanduíche?) — Rafa age por intuição',
      '⚠ Quando demitir (critérios objetivos pra encerrar contrato) — sem protocolo formal',
      '⚠ Como construir cultura no time (rituais, valores escritos, código de conduta)',
      '⚠ Diferenciação entre liderar VENDEDOR (operação) × liderar GERENTE (L2)',
      '⚠ Plano de carreira / progressão dentro do time'
    ],
    quando_acionar:[
      'Empresário diz \'tô preso no operacional\' — diagnóstico: ainda é o processo, não desenhou pra delegar',
      'Empresário contratou e reclama \'minha equipe não lê, não faz\' — distinguir falha de processo × falha de liderança',
      'Vendedor manda mensagem no último dia do mês pedindo ajuda emocional pra bater meta — sinal de liderança permissiva',
      'Empresário com perfil Comunicador/Influente que tende a \'passar a mão na cabeça\' do time',
      'Empresário trava na contratação dizendo \'quando eu faturar X eu contrato\' — Rafa inverte (1.500 libera 20h que viram 15-20k)',
      'Cliente delega tarefa e some — ensinar que delegar é desenhar + acompanhar + ajustar',
      'Aluna que já tem time mas continua sendo gargalo (todo cliente quer falar com ela)'
    ],
    teses_metodologias:{
      base_externa:'Cita Conrado Adolfo como autoridade na frase \'se você não tem processo, o processo é você\'. Conceito de \'dono de negócio × empresário\' tem afinidade com Michael Gerber (\'The E-Myth\', 1986), mas Rafa não cita o autor.',
      teses_rafa:[
        '\'Você só é capaz de delegar se você antes desenhar e dá trabalho para caramba. O que separa os homens dos meninos é pegar no chifre do boi, fazer. Acompanhar, ajustar — e aí sim você passa a ser um empresário.\'',
        '\'Se você não tem um processo, o processo é você.\' (Conrado Adolfo)',
        '\'A responsabilidade do funcionário que não lê é de liderança, não é do processo.\'',
        '\'Eu não quero ser aquela líder que fica passando a mão na cabeça. Não acho que isso vai fazer a pessoa chegar onde precisa.\'',
        '\'Se você tem time de vendas, pelo amor de Deus, não deixa o seu vendedor pedir ajuda no último dia.\'',
        '\'Às vezes é contratar pra crescer. Os 1.500 dessa pessoa libera quantas horas que você vende.\'',
        '\'Quando não é cumprido algo, o que acontece? As pessoas não são robôs — precisam entender esses porquês.\''
      ]
    },
    passo_a_passo:[
      { etapa:1, titulo:'DESENHE ANTES DE QUERER DELEGAR', desc:'Toda delegação começa com o empresário mapeando o processo em mapa mental: cada etapa, script, decisão. Sem desenho, delegação vira terceirização de bagunça.', condicional:null },
      { etapa:2, titulo:'VALIDE VOCÊ MESMO ANTES DE PASSAR', desc:'O empresário roda o processo na ponta, gera resultado, ajusta. Só depois de saber que entrega resultado é que faz sentido colocar outra pessoa. Delegar processo não validado é entregar fracasso a outra pessoa.', condicional:null },
      { etapa:3, titulo:'CONTRATE PRA LIBERAR HORAS DE ALTO VALOR', desc:'Não espere ter dinheiro sobrando — calcule: a hora que essa pessoa libera, quanto você fatura vendendo nela? Se R$1.500 libera 20h que viram R$15-20k, contrata. Contrate pra crescer, não cresça pra contratar.', condicional:'Se margem apertada e processo ainda não validado: adiar; primeiro ajustar processo e ticket.' },
      { etapa:4, titulo:'PASSE O PLAYBOOK E TREINE NA PRÁTICA', desc:'Entregue mapa mental + scripts + regras. Acompanhe execução real (ouça áudio, leia conversa do vendedor com cliente). Ajuste o playbook quando aparecer situação nova.', condicional:null },
      { etapa:5, titulo:'DEIXE CLARO O \'POR QUÊ\' DE CADA REGRA', desc:'Não basta dar a ordem. Explique o impacto no cliente, qual sensação se a ordem for invertida. Pessoas não são robôs — quando entendem o porquê, executam com qualidade mesmo em situação imprevista.', condicional:null },
      { etapa:6, titulo:'COMBINE A CONSEQUÊNCIA ANTES, NÃO DEPOIS', desc:'Defina e comunique o que acontece se a regra não for cumprida (advertência, repactuação, encerramento). Sem clareza de consequência, cobrança vira surpresa. Líder cobra o que combinou.', condicional:null },
      { etapa:7, titulo:'ACOMPANHE, NÃO ABANDONE — MAS NÃO PASSE A MÃO', desc:'Cadência regular de acompanhamento. Cobre resultado com firmeza, sem vitimismo recíproco. Quando o vendedor traz drama no último dia, líder não chora junto — relembra que meta é responsabilidade dele.', condicional:'Se vendedor entra em vitimismo recorrente: conversa direta 1:1 sobre escolha de identidade (vencedor × vítima); se persiste, encerrar.' },
      { etapa:8, titulo:'FORME LÍDERES QUE FORMEM OS PRÓXIMOS (L2)', desc:'Última etapa: você treina alguém que treina os próximos vendedores. Aí você se libera pra estratégia. É o ponto em que você deixa de ser dono de negócio e vira empresário.', condicional:'Se time chega a 3-5 pessoas e empresário ainda treina cada novo entrante: gatilho pra formar um L2 (⚠ corte exato a validar com Rafa).' }
    ],
    fonte_primaria:'aula Método Mazzei - Processo de Vendas ~l.115-220, 1745-1753',
    fonte_secundaria:'Aulas Método Mazzei ~l.2516-2546, 3536-3541, 6624-6650',
    sessao:'S4 · Liderança',
    duracao_rafa:'30min (cadência de acompanhamento + protocolo de feedback + critério de demissão)',
    vira_conteudo:[
      'Aula T6.5 \'Liderando para o time entregar\'',
      'Playbook de liderança',
      'Modelo de avaliação trimestral'
    ]
  },
  {
    id:'roteiro-desligamento',
    nome:'Roteiro de Desligamento',
    tecnico:'Protocolo de saída — decisão sem drama, comunicação, documentação, pós-desligamento',
    trilhas:['lideranca'],
    status:'parcial',
    o_que_e:'Protocolo de como conduzir a saída de cliente/aluno/funcionário tóxico ou inadimplente — incluindo decisão de desligar, comunicação, documentação e tratamento do pós. PRIORIDADE DE EXTRAÇÃO: framework mais deficiente em transcrição; depende de sessão dirigida com a Rafa.',
    o_que_temos:[
      'Tese central da decisão: \'Não, fulano, a partir de agora eu vou encerrar contrato mesmo, eu vou tirar duas pessoas do grupo hoje que estão cagando na minha cabeça e eu tô entregando. Não me paga daqui pra frente, tá sem me pagar 5 meses. Vai sair do grupo\' (Planejamentos Individuais MAZZEI$TRIA, l.3911-3914)',
      'Padrão de gatilho real: inadimplência prolongada (5 meses) + atitude predatória (usar acesso \'na cara de pau\' enquanto não paga) = desligar',
      'Limite firme — não justificar publicamente: \'Se alguém vier falar na minha cabeça: pergunta pra fulana porque que ela foi retirada do grupo. Será que ela vai te falar a verdade?\' Rafa transfere o ônus pra própria pessoa desligada (~l.3916-3919)',
      'Conexão com mentalidade: \'Esse falar não é uma virada pra você\' — desligamento vinculado a Limites e Postura de Empresário (~l.3923)',
      'Reconhecimento do papel: \'Um empresário que precisa contratar e demitir, como é?\' (Hot Seats MAZZEI$TRIA, l.6035)',
      'Caso secundário: \'Só demitir a faxineira\' — corte de custo doméstico tratado como decisão racional sem drama (Planejamentos Individuais, ~l.5964)'
    ],
    o_que_falta:[
      '⚠ PRIORIDADE MÁXIMA — passo-a-passo da reunião de desligamento (abertura, comunicação, espaço pra reação, fechamento)',
      '⚠ Script literal — quais frases usar e quais EVITAR (ex: \'a partir de hoje encerro o contrato\' funciona? \'infelizmente preciso comunicar\' funciona?)',
      '⚠ Documentação legal mínima (distrato, termo de quitação/cobrança, comunicação por escrito × verbal, prazo de aviso)',
      '⚠ Tratamento pós-desligamento (a pessoa volta a falar? entra grupo de ex-aluno? perde acesso a material? como tratar se reaparecer?)',
      '⚠ Como blindar o expert emocionalmente — Rafa entrega como decisão fria, mas é evidente que dói. Falta a Rafa explicar como se prepara',
      '⚠ PEDIR ÁUDIO DE 15-20MIN DA RAFA descrevendo o último desligamento real — passo a passo, falas, sensações, resultado'
    ],
    quando_acionar:[
      'Cliente/aluno em inadimplência prolongada (3+ meses) sem renegociação aceita',
      'Cliente \'cagando na cabeça\' do expert — descumprindo combinados, desrespeitando, atrapalhando o grupo, drenando energia',
      'Funcionário que não entrega o combinado e nem corrige após feedback',
      'Aluno que usa o acesso de forma predatória (extrai valor sem pagar, cria atrito)',
      'Cliente cujo perfil não condiz com o reposicionamento — está fora do novo ICP e segurar custa caro',
      'Sócia/parceria onde o contrato não protege o expert e a continuidade gera risco maior que o ganho',
      'Equipe doméstica/operacional cujo custo deixou de fazer sentido no momento do negócio'
    ],
    teses_metodologias:{
      base_externa:null,
      teses_rafa:[
        '\'A partir de agora eu vou encerrar contrato mesmo, eu vou tirar duas pessoas do grupo hoje que estão cagando na minha cabeça e eu tô entregando.\'',
        '\'Esse falar não é uma virada pra você.\' (sobre desligar = competência empresarial)',
        '\'Pergunta pra fulana porque que ela foi retirada do grupo. Será que ela vai te falar a verdade?\' (sobre não justificar publicamente)',
        '\'Um empresário que precisa contratar e demitir, como é?\' — desligar é parte do papel'
      ]
    },
    passo_a_passo:[
      { etapa:1, titulo:'DIAGNÓSTICO: CRISE PONTUAL × PADRÃO', desc:'Antes de desligar, validar se é problema momentâneo (vale negociar) ou padrão (custa mais segurar do que cortar). Critérios: tempo de inadimplência, número de combinados quebrados, impacto em outros clientes/grupo, energia drenada do expert.', condicional:'Se crise pontual recuperável → renegociar antes de desligar.' },
      { etapa:2, titulo:'DECISÃO SEM DRAMA — ATO EMPRESARIAL, NÃO PESSOAL', desc:'Rafa trata o desligamento como decisão racional. Não cabe culpa nem justificativa elaborada. É proteção do negócio e dos outros clientes que cumprem o combinado.', condicional:null },
      { etapa:3, titulo:'⚠ COMPLETAR COM RAFA — SCRIPT LITERAL DA REUNIÃO', desc:'PEDIR ÁUDIO 15-20MIN: Rafa descreve passo a passo o ÚLTIMO desligamento que fez. Como começou a reunião? Que frases usou? Como tratou a reação? Como fechou? Esse áudio é a fonte primária pra construir o script.', condicional:null },
      { etapa:4, titulo:'⚠ COMPLETAR COM RAFA — DOCUMENTAÇÃO LEGAL MÍNIMA', desc:'Levantar com a Rafa (e contadora/advogada): qual documento sai da reunião? Distrato? Termo de quitação? Comunicação por escrito? Prazo de aviso? Cláusula contratual que ampara a saída?', condicional:null },
      { etapa:5, titulo:'⚠ COMPLETAR COM RAFA — TRATAMENTO PÓS-DESLIGAMENTO', desc:'Como Rafa lida com: (a) a pessoa pedindo pra voltar depois, (b) perguntas de outros clientes, (c) badmouthing nas redes, (d) o material/acesso já consumido, (e) o emocional dela mesma após desligar.', condicional:null },
      { etapa:6, titulo:'⚠ COMPLETAR COM RAFA — BLINDAGEM DA REPUTAÇÃO', desc:'Rafa não justifica publicamente. Mas como isso se sustenta se a pessoa desligada falar mal? Que princípio guia a comunicação pública pós-desligamento?', condicional:null }
    ],
    fonte_primaria:'Planejamentos Individuais MAZZEI$TRIA linhas ~3911-3923',
    fonte_secundaria:'Hot Seats MAZZEI$TRIA ~l.6035',
    sessao:'S4 · Liderança — PRIORIDADE de sessão dirigida com Rafa',
    duracao_rafa:'15-20min áudio (último desligamento real, passo a passo)',
    vira_conteudo:[
      'Aula T6.6 \'Quando e como desligar\'',
      'Roteiro de reunião de desligamento',
      'Templates de distrato'
    ]
  },
  {
    id:'transicao-identidade',
    nome:'Transição de Identidade',
    tecnico:'Permissão e condução de virada profissional radical — pode ser sub-bloco de Crenças',
    trilhas:['mentalidade'],
    status:'parcial',
    o_que_e:'Framework de permissão e condução de virada profissional radical — quando o expert (ou mentorado) precisa mudar de área, público, marca ou modelo sem que isso seja vivido como traição da própria história. ATENÇÃO: pode ser sub-bloco de Crenças/Mentalidade — Rafa precisa decidir se isola.',
    o_que_temos:[
      'Tese central como autorização: \'Não tem nada de ruim em mudar o posicionamento. Eu bem sei, eu saí de odonto para trabalhar com moda. Imagina que loucura\' (Hot Seats MAZZEI$TRIA, l.6880-6881)',
      'Princípio do não-arrependimento: \'Se eu for olhar pra minha trajetória, tem muitas coisas que hoje, com o conhecimento que tenho, eu não teria feito da mesma maneira. Só que era o conhecimento que eu tinha... Eu não posso me culpar pelas escolhas que fiz lá atrás\' (~l.3265-3275)',
      'Aplicação à mudança de público: \'Você trocar esse posicionamento e explicar o porquê, você pode trazer voltado pro que você já sentia sobre atender mulheres\' (caso Amanda, ~l.6870)',
      'Bônus do reposicionamento: \'O reposicionamento, se bem feito, traz junto novos momentos, novos clientes. Muda a imagem junto\' (~l.3295)',
      'Princípio do \'doa o que doer\': \'Tem coisa se amanhã você vai ter que mexer, você pode mexer hoje. Doa o que doer, mas que bom descobrir o erro, ajusto\' (~l.3293)',
      'Limite — caso Fran (turma de academia → personal): a transição precisa seguir método, não pode ser feita no impulso, e a comunicação errada destrói a venda (\'Essa maneira que você tentou me convencer agora não vende\' — Hot Seat NS 18/03, ~l.1624-1750)'
    ],
    o_que_falta:[
      '⚠ DECISÃO ESTRUTURAL: este framework EXISTE ISOLADO ou é sub-bloco de Crenças/Plano de Foco/Mentalidade?',
      '⚠ Se isolado: critérios pra saber QUANDO uma transição é necessária × quando é evasão (fugir do desconforto da etapa atual)',
      '⚠ Se isolado: como Rafa narrou publicamente a transição odonto→moda — storytelling pra comunicar virada pro público',
      '⚠ Se isolado: como tratar a perda de clientes/seguidores que vieram pela identidade antiga',
      '⚠ Se isolado: prazo realista de transição (Fran tentou cortar tudo de uma vez e quebrou; qual o caminho de sobreposição correto?)'
    ],
    quando_acionar:[
      'Expert percebe que o público atual não é o que quer atender, mas trava por causa da história já construída (\'o que vão pensar?\')',
      'Mentorado já validou nova esteira/produto mas resiste a comunicar publicamente a virada',
      'Mudança de modelo de negócio (B2C → B2B, turma → personal, presencial → digital) que mexe na percepção de quem o expert É',
      'Expert sente desalinhamento entre quem ele virou e a marca/posicionamento atual',
      'Mentorado quer mudar mas se culpa pelas escolhas passadas — paralisa por arrependimento',
      'Aparece oportunidade de público de maior ticket/maior fit, mas o expert tem medo de \'abandonar\' a base atual',
      'Reposicionamento estratégico já decidido tecnicamente, mas a comunicação trava por questão emocional/identitária'
    ],
    teses_metodologias:{
      base_externa:null,
      teses_rafa:[
        '\'Não tem nada de ruim em mudar o posicionamento. Eu bem sei, eu saí de odonto para trabalhar com moda. Imagina que loucura.\'',
        '\'Eu não posso me culpar pelas escolhas que fiz lá atrás.\'',
        '\'O reposicionamento, se bem feito, traz junto novos momentos, novos clientes.\'',
        '\'Tem coisa se amanhã você vai ter que mexer, você pode mexer hoje. Doa o que doer, mas que bom descobrir o erro, ajusto.\''
      ]
    },
    passo_a_passo:[
      { etapa:1, titulo:'PERMISSÃO: PARAR DE SE JULGAR PELAS ESCOLHAS PASSADAS', desc:'O expert reconhece que cada escolha foi feita com o conhecimento que tinha. Sem isso, paralisa por culpa e não vira. Rafa usa a própria história (odonto→moda→consultoria) como prova de que mudar é legítimo.', condicional:null },
      { etapa:2, titulo:'DIAGNÓSTICO: VIRADA NECESSÁRIA OU FUGA DISFARÇADA?', desc:'Distinguir transição legítima (novo público/modelo que faz sentido estratégico) de evasão (querer mudar porque a etapa atual incomoda). Critério: se o expert ainda não dominou o método na configuração atual, mudar agora é fuga.', condicional:'Se for evasão → não muda, completa a etapa atual antes.' },
      { etapa:3, titulo:'CONECTAR A VIRADA AO PROPÓSITO REAL', desc:'A transição precisa ter narrativa coerente: \'eu sempre quis atender X, e agora vou fazer isso alinhado\'. Caso Amanda: a Rafa puxou o que a Amanda já sentia sobre atender mulheres pra dar lastro à virada.', condicional:null },
      { etapa:4, titulo:'EXECUTAR SEGUINDO MÉTODO — NÃO NO IMPULSO', desc:'Erro do caso Fran: encerrar tudo de uma vez sem ter o novo modelo vendendo. Caminho certo: SOBREPOSIÇÃO — manter o antigo até o novo estar validado. Decisão de corte baseada em número, não em ímpeto.', condicional:null },
      { etapa:5, titulo:'⚠ COMPLETAR COM RAFA — DECIDIR ISOLADO × MERGE', desc:'Forte hipótese de que \'Transição de Identidade\' é manifestação de Crenças aplicada a um caso específico (virada profissional). Pergunta à Rafa: \'Você ensina isso como ferramenta independente, ou é parte do trabalho de Crenças?\' Se merge → integrar como variação do framework de Crenças.', condicional:null },
      { etapa:6, titulo:'⚠ COMPLETAR COM RAFA — ROTEIRO DE STORYTELLING PÚBLICO', desc:'Pedir à Rafa: \'Como você narrou publicamente que saiu de odonto pra moda pra consultoria? Que pontos toca? O que evita? Qual o template de comunicação de virada que você ensina?\'', condicional:null }
    ],
    fonte_primaria:'TRANSCRIÇÕES HOT SEATS MAZZEI$TRIA linhas ~3265-3295, 6870-6881',
    fonte_secundaria:'Hot Seat NS 18/03 ~l.1624-1750 (caso Fran)',
    sessao:'S5 · Mentalidade — Rafa decide se framework existe ou faz merge',
    duracao_rafa:'15min (decidir se isolado/merge + storytelling de virada)',
    vira_conteudo:[
      'Aula T7.1 \'De profissional a empresário\'',
      'Roteiro de comunicação de virada'
    ]
  },
  {
    id:'roda-vida-empresarial',
    nome:'Roda da Vida Empresarial',
    tecnico:'Diagnóstico de equilíbrio do empresário — instrumento de partida da mentoria',
    trilhas:['mentalidade'],
    status:'parcial',
    o_que_e:'Ferramenta diagnóstica de equilíbrio do empresário em múltiplas dimensões da vida (saúde, finanças, família, propósito, lazer, espiritualidade, carreira, relacionamentos) — usada pela Rafa como instrumento de partida com mentorados pra mapear onde está o desalinhamento que afeta o negócio. ATENÇÃO: material praticamente ausente nas transcrições; depende do PDF da Rafa.',
    o_que_temos:[
      'Existência do material como PDF entregável: \'Roda de vida - Rafa.pdf • 1 página\' enviado pela Rafa (WhatsApp Mazzei$tria, l.14778, em 26/11/2024) e re-enviado pela Amanda CS (l.18720, em 11/02/2025)',
      'Sugere que é ferramenta de uso recorrente no fluxo da mentoria (Rafa entrega no início e a CS reenvia pra novos alunos)',
      'Não há nas transcrições explicação do conteúdo das dimensões nem da metodologia de preenchimento',
      'Não há nas transcrições explicação de como Rafa interpreta a roda preenchida e que decisões puxa dela'
    ],
    o_que_falta:[
      '⚠ PRIORIDADE — Rafa compartilha o PDF \'Roda de Vida - Rafa.pdf\' pra Inception extrair conteúdo (dimensões, escala, instruções)',
      '⚠ Quais dimensões compõem a roda da Rafa (genérica = 8 áreas padrão? Ou adaptou pro contexto empresarial?)',
      '⚠ Escala de avaliação (0-10? 1-5? subjetiva?) e instruções de preenchimento',
      '⚠ O que Rafa FAZ com a roda preenchida — quais perguntas puxa, que decisões orienta a partir do diagnóstico?',
      '⚠ A roda é só diagnóstico inicial ou Rafa pede reaplicação periódica? Com que cadência?',
      '⚠ Como a roda conecta com os outros frameworks (Crenças, Plano de Foco, Mentalidade)?'
    ],
    quando_acionar:[
      'Início de mentoria / primeira sessão com mentorado novo — instrumento de calibração',
      'Mentorado com resultados travados no negócio e Rafa suspeita que o gargalo está fora do operacional (saúde, família, autocuidado)',
      'Mentorado em burnout — trabalhando demais e perdendo outras áreas',
      'Mentorado em virada de patamar precisa redesenhar rotina pra suportar o novo nível',
      'Revisão periódica de progresso (trimestral/semestral?) pra checar se o crescimento não custou outras áreas',
      'Mentorado entra em crise pessoal (separação, luto, doença) e precisa recalibrar prioridades sem abandonar o negócio',
      'Antes de planejamentos estratégicos (anuais ou trimestrais) — alinhar o desejo ao desenho do plano'
    ],
    teses_metodologias:{
      base_externa:'Roda da Vida é instrumento clássico de coaching (origem atribuída a Paul J. Meyer / Success Motivation Institute). A Rafa adaptou — falta entender o quanto.',
      teses_rafa:[]
    },
    passo_a_passo:[
      { etapa:1, titulo:'⚠ COMPLETAR COM RAFA — COMPARTILHAR O PDF', desc:'PRIORIDADE: pedir à Rafa o PDF \'Roda de Vida - Rafa.pdf\' enviado em 26/11/2024 e 11/02/2025. Sem o PDF, não há base pra estruturar o framework. Com o PDF: extrair dimensões, escala, instruções de preenchimento.', condicional:null },
      { etapa:2, titulo:'⚠ COMPLETAR COM RAFA — MAPEAR A LEITURA DA RODA', desc:'PDF é só o instrumento. O método está em COMO a Rafa LÊ o resultado: que perguntas faz, que conexões puxa entre áreas baixas e gargalos do negócio, que recomendações dá. Pedir: descreve uma sessão real onde usou a Roda e o que aconteceu depois.', condicional:null },
      { etapa:3, titulo:'⚠ COMPLETAR COM RAFA — CADÊNCIA E REAPLICAÇÃO', desc:'Pedir: é instrumento de entrada (uma vez)? Reaplica trimestralmente? Pede revisão em momentos específicos (virada de patamar, crise pessoal)? Como compara a roda atual com a anterior?', condicional:null },
      { etapa:4, titulo:'⚠ COMPLETAR COM RAFA — CONEXÃO COM OUTROS FRAMEWORKS', desc:'Pedir: a Roda alimenta o Plano de Foco? Vira input pro trabalho de Crenças? Antecede ou sucede a Identificação de Sabotadores? Sem esse mapa, a Roda fica solta no método.', condicional:null }
    ],
    fonte_primaria:'PDF \'Roda de Vida - Rafa.pdf\' (a obter)',
    fonte_secundaria:'transcrição Whats Mazzeistria linhas ~14778, 18720',
    sessao:'S5 · Mentalidade — depende do PDF',
    duracao_rafa:'10min (compartilhar PDF + 10min de áudio explicando a leitura)',
    vira_conteudo:[
      'Aula T7.2 \'Roda da vida empresarial\'',
      'PDF interativo com 8 dimensões + escala'
    ]
  },
  {
    id:'crencas-limitantes',
    nome:'Mapa de Crenças Limitantes',
    tecnico:'Quebra de crença com matemática + caso real (não auto-ajuda)',
    trilhas:['mentalidade'],
    status:'parcial',
    o_que_e:'Mapa das crenças sobre dinheiro, venda, valor próprio e mercado que travam decisões do empresário — e que Rafa quebra com MATEMÁTICA e CASO REAL, não com auto-ajuda. É o filtro que separa decisão racional (lógica, conta, fato) de decisão emocional (medo, achismo, vitimismo, escassez).',
    o_que_temos:[
      'CRENÇA PRÓPRIA da Rafa sobre preço: \'Eu hoje tenho produto de 35.000 que tinha dificuldade de cobrar três no início. Eu tinha medo das pessoas não quererem, delas não pagarem\' (Hot Seats NS, l.997-998)',
      'TESE-ÂNCORA crença × matemática: \'Crença versus matemática. Pra mim não tem crença que justifica matemática. Aí você fica com a sua crença e fica com dívida\' (Hot Seats NS, l.888-889)',
      'MÉTODO DE QUEBRA: \'É só isso que quebra a crença. É impacto emocional forte, que não faz sentido. É matemática, gente\' (Hot Seats NS, l.891-892)',
      'CRENÇA DETECTADA — mercado/região (Fran/Paranal): \'Professor não pode pagar R$200 a R$300 por mês para a saúde. Desculpa, Fran, é crença sua\' (Hot Seats NS, l.1095-1096)',
      'CRENÇA — cidade pobre: \'Não existe uma cidade que só tem pobre, gente, pelo amor de Deus. A Duda ainda falou: todas as pessoas de Bananau que eu conheço tem dinheiro\' (Hot Seats NS, l.1260-1263)',
      'CRENÇA — venda de consultoria (Amanda): \'Não é fácil vender consultoria de imagem, é uma crença sua. Não é difícil. Não é produto necessário igual comida, mas não é difícil pra pessoa certa\' (Hot Seats MAZZEI$TRIA, l.6728-6730)',
      'CRENÇA — escassez × lógica: \'Você não tomou atitude porque tá pensando com crença, com crença de escassez e não pela lógica\' (Hot Seats MAZZEI$TRIA, l.5277)',
      'MENTALIDADE DA CONTA INVERSA: \'Você continua com a mesma mentalidade da conta inversa. Eu ainda tenho muitas crenças limitantes dentro de mim — pro público que eu atendo, o valor que eu sei que mereço, eu não consigo atender esse público\' (Hot Seats NS, l.861-865)',
      'FILTRO DE PÚBLICO IDEAL — antivitimismo: \'Dentro do meu público ideal tem um ponto. Eu não quero vitimismo. Eu não quero gente que pra cada solução arruma três problemas\' (Hot Seats MAZZEI$TRIA, l.3002-3003)',
      'ANTI-ACHISMO: \'Não pode ser achismo. Você tem que realmente voltar e quantificar\' (Hot Seats MAZZEI$TRIA, l.8055-8056)',
      'CRENÇA TRAVA REPOSICIONAMENTO: \'Tomar cuidado pra não tomar essa decisão baseada em crença limitante e em escolhas passadas\' (Hot Seats MAZZEI$TRIA, l.3233)',
      'CRENÇA PROLONGA SOFRIMENTO: \'A Fran tomando decisão baseado nas crenças dela hoje, vai ter dificuldade demais pra crescer no médio/longo prazo, porque cada decisão e cada mudança vai demorar muito mais\' (Hot Seats NS, l.1255-1257)'
    ],
    o_que_falta:[
      'Lista nomeada das crenças mais comuns (\'top 10 crenças do prestador de serviço\') — Rafa cita exemplos mas não consolida lista',
      'Roteiro de perguntas que Rafa usa pra fazer a pessoa VERBALIZAR a crença antes de quebrar',
      'Critério pra diferenciar crença real (que precisa quebrar) de limitação operacional concreta (capacidade, contrato, agenda)',
      'Tratamento da crença que volta depois da primeira quebra (reincidência)',
      'Como agir quando a crença está atrelada a um trauma real (perda, calote, prejuízo) — a tese \'matemática quebra crença\' pode não funcionar nesse caso',
      'Tipologia formal: Rafa mistura \'crença limitante\', \'mentalidade dominante\', \'achismo\', \'vitimismo\', \'escassez\' — falta hierarquia explícita'
    ],
    quando_acionar:[
      'Mentorada justifica preço baixo com renda da cidade/público (\'meu público não paga isso\', \'aqui em Bananau não tem dinheiro\')',
      'Empresária trava reajuste por medo de perder cliente, mesmo a conta mostrando que o modelo atual gera dívida',
      'Decisão estratégica sendo tomada por escolha passada (\'é o que sempre fiz\') em vez de lógica do momento atual',
      'Pessoa traz problema operacional disfarçado de impossibilidade (\'é impossível cobrar mais\', \'não tem como\') sem ter feito a conta',
      'Cliente da mentorada cai no perfil vitimismo — sinal de que a crença do mentorado é \'tenho que aceitar esse tipo de cliente\'',
      'Fala recheada de achismo (\'eu acho que\', \'imagino que\', \'deve ser\') sem dado quantificado',
      'Mentalidade de conta inversa: pessoa calcula \'quanto preciso ganhar\' em vez de \'quanto cabe no meu modelo\''
    ],
    teses_metodologias:{
      base_externa:null,
      teses_rafa:[
        '\'Pra mim não tem crença que justifica matemática.\'',
        '\'É só isso que quebra a crença. É impacto emocional forte, que não faz sentido. É matemática, gente.\'',
        '\'Aí você fica com a sua crença e fica com dívida.\'',
        '\'Não pode ser achismo. Você tem que realmente voltar e quantificar.\'',
        '\'Você não tomou atitude porque tá pensando com crença de escassez e não pela lógica.\'',
        '\'Eu hoje tenho produto de 35.000 que tinha dificuldade de cobrar três no início.\'',
        '\'Não existe uma cidade que só tem pobre, gente, pelo amor de Deus.\'',
        '\'Eu não quero vitimismo. Eu não quero gente que pra cada solução arruma três problemas.\''
      ]
    },
    passo_a_passo:[
      { etapa:1, titulo:'IDENTIFICAR A CRENÇA NA FALA', desc:'Escutar a justificativa pra não tomar a atitude lógica. Crença aparece como afirmação categórica (\'meu público não paga\', \'é impossível\', \'aqui é diferente\'). Anotar a frase literal — não parafrasear.', condicional:null },
      { etapa:2, titulo:'CATEGORIZAR EM 4 CAIXAS', desc:'Classificar em: (a) sobre dinheiro/preço — \'não posso cobrar tanto\'; (b) sobre venda — \'é difícil vender\'; (c) sobre valor próprio/merecimento — \'não estou pronta\'; (d) sobre mercado/região — \'na minha cidade não\'. A categoria define a munição da próxima etapa.', condicional:null },
      { etapa:3, titulo:'CONFRONTAR COM A MATEMÁTICA DO MODELO ATUAL', desc:'Fazer a conta DEPRESSA, na frente da pessoa: capacidade × ticket = faturamento teto. Comparar com custo fixo. Mostrar que o modelo atual não fecha — \'A conta não fecha. Aí você fica com sua crença e fica com dívida\'. Esse é o impacto emocional que quebra.', condicional:'Pular se a crença for sobre merecimento/valor próprio puro (sem componente de preço/capacidade) — ir direto pro passo 5.' },
      { etapa:4, titulo:'TRAZER CASO REAL (PRÓPRIO OU DE OUTRA MENTORADA)', desc:'Quebrar com prova social VIVIDA: \'Eu tinha dificuldade de cobrar R$3k, hoje cobro R$35k\'. Ou citar mentorada que estava na mesma situação e quebrou. O caso mostra que a crença é falsa porque já foi furada — não é teoria.', condicional:null },
      { etapa:5, titulo:'APRESENTAR A NOVA CRENÇA LÓGICA (SUBSTITUIÇÃO)', desc:'Não basta destruir, tem que substituir. Rafa entrega: \'Gente que tem dinheiro faz questão de pagar caro\', \'Não é difícil pra pessoa certa\', \'Você é resultado — aí é você aprender a valorizar\'. A nova crença é operacional, aponta pra ação.', condicional:null },
      { etapa:6, titulo:'DECIDIR AGORA, NA SESSÃO', desc:'Forçar a decisão concreta antes que a crença antiga volte: novo preço, novo público, novo formato, ação pra semana. Rafa registra publicamente a escolha — e marca quando a pessoa decide pela crença em vez da lógica.', condicional:null },
      { etapa:7, titulo:'FILTRAR — VITIMISMO CRÔNICO NÃO É CLIENTE', desc:'Crença que volta em loop, mesmo depois de quebrada com matemática + caso real + decisão, é vitimismo. Rafa não atende: \'Pra cada solução arruma três problemas. Eu não quero vitimismo\'. Aplica também ao cliente da mentorada.', condicional:'Acionar apenas quando houve 2+ rodadas de tentativa de quebra sem mudança de postura.' }
    ],
    fonte_primaria:'TRANSCRIÇÕES HOT SEATS NEGÓCIO SOBERANO linhas ~861-1263, 888-892, 997-998',
    fonte_secundaria:'Hot Seats MAZZEI$TRIA ~l.3002-3003, 3233, 5277, 6728-6730, 8055-8056',
    sessao:'S5 · Mentalidade',
    duracao_rafa:'30min (catálogo top-10 crenças + roteiro de extração)',
    vira_conteudo:[
      'Aula T7.3 \'Crenças que travam o negócio\'',
      'Banco de crenças × matemática que quebra',
      'IA Quebradora de Crença'
    ]
  },

  // ============================================================
  // FRAMEWORKS NOVOS · varredura de transcrições (26/05/2026)
  // Extraídos diretamente das aulas, planejamentos e mentorias
  // ============================================================
  {
    id:'cinco-regras-objecao',
    nome:'5 Regras de Contorno de Objeções',
    tecnico:'Sequência fixa de 5 movimentos para tratar objeções na sessão de venda consultiva',
    trilhas:['comercial'],
    status:'parcial',
    o_que_e:'Antecipar → Eliminar → Encontrar a real → Não discordar → Esgotar com pergunta. Estrutura fixa que a Rafa ensina nas aulas.',
    quando_acionar:[
      "Aluno relata que 'cliente pediu desconto' ou 'cliente disse que tá caro'",
      "Aluno fala 'tô com medo de perder a venda' ou 'não sei o que responder quando aparece objeção'",
      "Aluno descreve script onde a primeira reação dele à objeção começa com 'mas...'",
      "Aluno reclama de 'ficar no vácuo' depois que o cliente disse 'vou pensar'",
      "Aluno traz print de conversa onde discordou do cliente e a venda travou",
      "Empresa vai montar/treinar time de vendas e ainda não validou processo de contorno",
      "Aluno fala 'minha taxa de conversão tá baixa' sem ter mapeado as objeções que se repetem"
    ],
    teses_metodologias:{
      base_externa:null,
      teses_rafa:[
        '"Pergunta não é argumentando."',
        '"As pessoas amam comprar mas odeiam que vendam para elas."',
        '"Jamais discorde. Quando você fala \'mas\' você já vai contra a pessoa — é conjunção adversativa, a mente dela bloqueia."',
        '"Prevenir não precisa corrigir e não precisa frustrar."',
        '"De forma profissional, conversando, sendo adulto — não \'não me toque com coisinha com medo de falar\'."'
      ]
    },
    passo_a_passo:[
      { etapa:1, titulo:'ANTECIPAR', desc:'Mapear as objeções que mais aparecem no seu nicho e inserir, dentro do próprio script de apresentação, casos e provas sociais que neutralizam essas objeções ANTES delas serem ditas. Justifica de coração, com profissionalismo, por que cada etapa do processo é assim.', condicional:null },
      { etapa:2, titulo:'ELIMINAR', desc:'A própria antecipação faz mais da metade das objeções deixar de aparecer — porque já foram prevenidas na narrativa. A pessoa pensa "nossa, se resolveu isso assim, nem vou falar sobre tal coisa".', condicional:'Se mesmo antecipando a objeção ainda aparece, então ela é uma das objeções reais — siga para o passo 3.' },
      { etapa:3, titulo:'ENCONTRAR A VERDADEIRA OBJEÇÃO', desc:'Perguntar de forma aberta, educada e tranquila pra descobrir o motivo real (até então a pessoa não tava falando a verdade — tava com medo, sem dinheiro, sem forma de pagamento adequada). Só depois que aparece a verdadeira você consegue contornar.', condicional:'Se o cliente disse "vou pensar", então pergunte direto qual das 3 dúvidas reais é (produto, preço/forma de pagamento, confiança) — ver framework "tres-duvidas-vou-pensar".' },
      { etapa:4, titulo:'NÃO DISCORDAR / SER SINCERO', desc:'Primeira regra do contorno: jamais discorde. Nunca use "mas". Esgote as dúvidas perguntando, não argumentando. Reconheça a objeção ("perfeito Maria, entendi"), reforça que não tá discordando, e conduz com pergunta — não com argumento.', condicional:'Se aparecer o impulso de responder "mas é porque...", então pare: troque por uma pergunta que faça o cliente falar mais sobre a objeção real.' },
      { etapa:5, titulo:'FECHAR', desc:'Depois que esgotou perguntando, o fechamento vira sugestão de formas de pagamento (não "tentativa de venda"). Quando dá pra prevenir o "vou pensar", traz fechamento imediato com bônus + prazo de validade do bônus — assim a pessoa perde algo concreto se for embora.', condicional:'Se a pessoa ainda assim quiser pensar, então combine data específica de retorno e deixe registrado o bônus com prazo — não deixa em aberto.' }
    ],
    o_que_temos:[
      'Estrutura completa explicada na aula gravada (Transcrições Aulas do Método Mazzei ~linha 754-802)',
      'Tese central confirmada: "Pergunta não é argumentando"',
      'Aplicação prática documentada em mentorias'
    ],
    o_que_falta:[
      'Banco de objeções por nicho (advocacia, arquitetura, saúde, social mídia, consultoria)',
      'Scripts exatos das perguntas que substituem argumentação',
      'IA simuladora de objeções pra aluno treinar'
    ],
    fonte_primaria:'Transcrições Aulas do Método Mazzei (~linha 754-802) + Engenharia de Vendas PDF',
    fonte_secundaria:'Mentorias múltiplos com aplicação ao vivo',
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
    quando_acionar:[
      "Aluno fala 'preciso de mais leads' ou 'preciso de mais clientes' como primeira solução",
      "Aluno está prestes a investir (ou já investiu) em tráfego pago sem ter processo de vendas estruturado",
      "Aluno reclama de baixa conversão final mas não sabe a taxa de conversão de CADA etapa",
      "Aluno fala 'eu acho que minha conversão é...' — chuta número, não mede",
      "Empresário comparando dois funis e querendo decidir onde investir energia (atração vs eficiência)",
      "Agência de marketing entregou leads qualificados mas a empresa não tá fechando",
      "Aluno quer escalar volume antes de ter otimizado cada etapa do funil"
    ],
    teses_metodologias:{
      base_externa:'Probabilidade composta (matemática) aplicada à engenharia de vendas — cada etapa é multiplicação de taxas, não soma. Analogia com linha de montagem fabril (lean/produção industrial).',
      teses_rafa:[
        '"Funil é probabilidade composta. Cada etapa multiplica a anterior. Não é soma, é multiplicação."',
        '"Crescimento sustentável não começa na atração, começa na eficiência da engrenagem."',
        '"Atrair mais antes de vender melhor é acelerar uma máquina desregulada."',
        '"Tráfego pago compra volume. Processo de eficiência (método) aumenta margem. Só uma dessas formas aumenta o lucro real."',
        '"Volume amplifica tanto o que funciona quanto o que não funciona."',
        '"A pergunta certa não é \'como atrair mais leads\', é \'por que os leads que chegam não estão comprando?\'"'
      ]
    },
    passo_a_passo:[
      { etapa:1, titulo:'DESENHAR O FUNIL COMO LINHA DE MONTAGEM', desc:'Pensar cada etapa do processo de vendas como uma estação de uma fábrica: captação de leads → qualificação → agendamento → realização da reunião → fechamento. Cada estação tem uma "peça" que entra e outra que sai.', condicional:null },
      { etapa:2, titulo:'MEDIR A TAXA DE CONVERSÃO DE CADA ETAPA', desc:'Identificar quantas pessoas entram em cada estação e quantas passam para a próxima. Número exato — "eu acho" não conta. Ex.: 100 leads → 50 qualificados → 25 agendados → 4 fechados = 4% de eficiência total.', condicional:'Se o aluno não sabe os números de cada etapa, então o primeiro trabalho é construir o painel/CRM antes de qualquer otimização — sem medir não otimiza.' },
      { etapa:3, titulo:'DIAGNOSTICAR ONDE O FUNIL PERDE MAIS', desc:'Encontrar a etapa com a maior queda relativa (gargalo). É na qualificação? No agendamento? Dentro da reunião? Esse é o ponto de maior alavancagem — pequena melhoria ali se multiplica por todas as etapas seguintes.', condicional:'Se a queda maior é na qualificação, então o problema é matéria-prima errada (ICP) — ir para o framework "icp-estrutural".' },
      { etapa:4, titulo:'OTIMIZAR ETAPA POR ETAPA (ANTES DE ESCALAR)', desc:'Subir cada estação alguns pontos percentuais. Passar cada etapa de 50% pra 60% gera salto exponencial no resultado final, porque o ganho é multiplicativo. Só depois que cada etapa tá otimizada se acelera o volume na atração.', condicional:'Se o funil já tá funcionando bem em cada etapa, então sim — escalar volume amplifica o que funciona. Caso contrário, escalar amplifica o que não funciona.' },
      { etapa:5, titulo:'CALCULAR CUSTO REAL POR ETAPA', desc:'Cada lead descartado pós-qualificação é hora de trabalho jogada fora — custo invisível que raramente aparece na planilha. Somar CPL + tempo gasto qualificando/conversando + valor da hora do empresário. É esse cálculo que mostra se o funil dá lucro real ou só ilusão de volume.', condicional:null },
      { etapa:6, titulo:'DECIDIR: MÉTODO OU TRÁFEGO', desc:'Tráfego pago compra volume. Método aumenta margem. Só método aumenta lucro real. Antes de comprar mais volume, validar se o processo extrai a última gota do funil que já existe.', condicional:null }
    ],
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
    quando_acionar:[
      "Aluno fala 'preciso de mais leads' mas ainda não definiu com QUEM ele fala",
      "Aluno reclama de 'taxa de conversão baixa' e a real causa é que tá atendendo perfil errado",
      "Aluno está montando anúncio/comunicação e não deixa claro quem NÃO é cliente dele",
      "Aluno 'tira leite de pedra' — atende qualquer um que chega porque precisa do dinheiro",
      "Empresa investiu em tráfego pago e a maioria dos leads vai direto pro descarte",
      "Aluno gasta horas no WhatsApp qualificando 100 pessoas pra fechar 1 — sem formulário de pré-qualificação",
      "Aluno tem medo de excluir perfis ('nossa, mas aí vou excluir gente') e por isso comunica pra todo mundo"
    ],
    teses_metodologias:{
      base_externa:'ICP (Ideal Customer Profile) — conceito clássico de marketing B2B, mas a Rafa traz uma camada estrutural própria: regime tributário + faixa de faturamento + conhecimento técnico, não só persona psicográfica.',
      teses_rafa:[
        '"Sem ICP definido, você alimenta a linha com qualquer peça. A maior parte vai direto pro descarte e a cada descarte custou tempo, dinheiro e energia que não volta mais."',
        '"Qual é o seu ICP? É a matéria-prima certa, é com quem você fala."',
        '"O custo invisível: cada lead descartado pós-qualificação é uma hora de trabalho jogada fora — esse custo operacional raramente aparece na planilha."',
        '"É a mesma coisa que tentar trazer uma pessoa que paga R$500 de aluguel pra visitar uma mansão de 1 milhão. Não é perfil de cliente."',
        '"Nos seus comunicados, deixe claro: \'se você é [X], essa mensagem não é pra você\' — filtrar na entrada custa menos que descartar depois."',
        '"Taxa de conversão baixa na realidade é só falta de qualificação adequada e de definição do ICP adequado."'
      ]
    },
    passo_a_passo:[
      { etapa:1, titulo:'DEFINIR REGIME TRIBUTÁRIO DO CLIENTE', desc:'MEI, PJ Simples, Lucro Presumido, Lucro Real — cada regime indica porte, estrutura e tipo de dor. Se o cliente ideal é PJ estruturado, MEI não é cliente (e precisa estar claro na comunicação).', condicional:'Se você atende MEI também (downsell), então separe canais/comunicação para cada um — nunca misture na mesma comunicação principal.' },
      { etapa:2, titulo:'DEFINIR FAIXA DE FATURAMENTO MÍNIMO', desc:'Faturamento mínimo que torna o seu serviço viável pra ele (cabe no caixa dele) E rentável pra você (cabe no seu ticket). Sem isso, você atende quem não consegue pagar e desperdiça hora qualificando quem nunca vai fechar.', condicional:null },
      { etapa:3, titulo:'DEFINIR CONHECIMENTO TÉCNICO NECESSÁRIO', desc:'O cliente ideal precisa ter qual nível de maturidade pra entender a entrega? Se ele não tem repertório mínimo, vai gastar suas horas explicando o básico antes mesmo de você entregar valor.', condicional:null },
      { etapa:4, titulo:'COMUNICAR O ICP NA ENTRADA (DIZER QUEM NÃO É)', desc:'Nos anúncios, nas mensagens, nos posts: deixar explícito "se você é [perfil X], essa mensagem não é pra você". Excluir perfis NÃO é perder cliente — é proteger seu tempo e fechar mais com quem é perfil.', condicional:'Se o aluno resistir ("aí vou excluir gente"), então mostrar com número: quantas horas ele gasta hoje qualificando perfil errado × quanto custa essa hora dele.' },
      { etapa:5, titulo:'RODAR FORMULÁRIO DE PRÉ-QUALIFICAÇÃO', desc:'Não conversar no WhatsApp com 100 pessoas pra descobrir que 90 não servem. Formulário com perguntas de regime tributário, faturamento e necessidade faz esse papel sozinho. CRM lê a resposta, classifica como qualificado/desqualificado e só o qualificado vai pra próxima fase.', condicional:'Se o aluno fala "prefiro conversar no WhatsApp", então faça o cálculo: tempo gasto × valor da hora dele = quanto ele tá pagando pra qualificar manualmente algo que um formulário faria de graça.' },
      { etapa:6, titulo:'RECALCULAR O CUSTO INVISÍVEL E AJUSTAR', desc:'Depois de implementar, medir: hora gasta em qualificação caiu? Taxa de conversão do qualificado pra fechamento subiu? Se sim, ICP está calibrado. Senão, refinar os critérios da etapa 1-3.', condicional:null }
    ],
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
    quando_acionar:[
      "Cliente disse 'vou pensar' na reunião de fechamento",
      "Cliente disse 'preciso falar com meu marido/sócio/esposa' e quer voltar depois",
      "Aluno descreve padrão de clientes que somem depois de pedir tempo pra pensar",
      "Aluno reclama de 'ficar no vácuo' depois da reunião e virar 'o vendedor chato que fica cobrando'",
      "Cliente termina a apresentação concordando com tudo mas não fecha",
      "Vendedor da empresa tem alta taxa de 'follow-up infinito' sem fechamento",
      "Aluno aceita o 'vou pensar' por medo de parecer insistente e perde a venda sabendo que o cliente tá mentindo"
    ],
    teses_metodologias:{
      base_externa:null,
      teses_rafa:[
        '"Proibido perder venda por saber que o cliente está mentindo e você fingiu que acreditou e deixou ele ir."',
        '"Existem só três dúvidas reais que fazem o cliente ir pensar — fora isso ele não vai pensar nada, é mentira."',
        '"As três dúvidas reais são: produto/serviço, preço/forma de pagamento, e confiança."',
        '"99% das pessoas que dizem \'depois me chama\' mentem — fazem isso e nunca mais respondem. E o vendedor é quem fica como chato."',
        '"Melhor dizer de uma vez, sem ressentimentos. Cave o não ou o sim o mais rápido."',
        '"Prevenir não precisa corrigir e não precisa frustrar."'
      ]
    },
    passo_a_passo:[
      { etapa:1, titulo:"PREVENIR ANTES DE OUVIR 'VOU PENSAR'", desc:'Dentro da reunião, antes de chegar no fechamento, antecipar: trazer fechamento imediato com bônus + prazo de validade. "Esse valor/bônus fica válido até a data X." Assim a pessoa perde algo concreto se for embora — não precisa cobrar depois.', condicional:'Se o ticket ou contexto permite bônus de fechamento imediato, então use sempre. Se não permite, então pelo menos combine na hora a data específica do retorno.' },
      { etapa:2, titulo:'IDENTIFICAR A DÚVIDA REAL ENTRE AS 3', desc:'Se mesmo assim apareceu o "vou pensar", perguntar direto: "o que exatamente você precisa pensar?" — sem deixar vago. As únicas 3 possibilidades reais são: (1) produto/serviço — não entendeu, ficou com dúvida e ficou com vergonha de perguntar; (2) preço ou forma de pagamento — não cabe no caixa ou não tem como parcelar do jeito que precisa; (3) confiança — não tem certeza de você/da entrega (implícita, raramente verbalizada).', condicional:'Se cliente não cai em nenhuma das 3, então ou é medo/mentira (ver passo 4) ou ele não é o decisor (ver passo 5).' },
      { etapa:3, titulo:'CONTORNAR A DÚVIDA IDENTIFICADA', desc:'Cada uma das 3 tem um caminho: produto → reapresentar com pergunta ("o que ficou menos claro pra você?"); preço/forma de pagamento → conversar com financeiro e oferecer alternativa real; confiança → trazer prova social, caso concreto, garantia. Sempre sem "mas" — perguntando, não argumentando.', condicional:'Se a dúvida é preço/forma de pagamento, então NUNCA discorde — diga "perfeito, entendi" e ofereça alternativa concreta. Se é confiança, então traga caso real de cliente parecido.' },
      { etapa:4, titulo:'SER SINCERO SE FOR MEDO OU MENTIRA', desc:'Falar com sorriso na voz, tranquilo: "não quero bancar o vendedor chato amador. Se você me disse que vai pensar e que é pra eu entrar em contato depois, mas já sabia que não iria responder, melhor dizer de uma vez, sem ressentimentos." Quebra o ciclo de fingimento. Cave o não ou o sim — não deixe no ar.', condicional:'Se o cliente confirma que é não, então agradeça, encerre profissionalmente e libere energia pra próximo lead — não fique no vácuo cobrando.' },
      { etapa:5, titulo:'TRATAR DECISOR EXTERNO COM PROTOCOLO ESPECÍFICO', desc:'Se a pessoa diz que precisa falar com marido/sócio/cônjuge, lembrar que isso foi antecipado: "lembra que eu te falei que ia acontecer? Não tem problema nenhum, só quero fazer um combinado." Marcar data específica de retorno, com bônus de fechamento imediato válido até essa data.', condicional:'Se possível, então agendar reunião com o decisor presente (marido/sócio) na próxima janela — "você acredita que consegue passar pro seu sócio com a mesma expertise que eu te passei?". Se não for possível, então prazo + bônus.' },
      { etapa:6, titulo:'FECHAR ACORDO DE RETORNO (NÃO DEIXAR NO VÁCUO)', desc:'Combinar a data exata em que você vai voltar a chamar e a pessoa vai dizer o que decidiu. Registrar. Não ficar "cri cri cri" chamando depois — o combinado é específico, com hora e canal. Se ela não responder na data combinada, é o "não" que cavou — pode liberar.', condicional:null }
    ],
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
    quando_acionar:[
      "Aluno trata o funil como UM só (capta, qualifica e fecha tudo na mesma pessoa/etapa) sem separar pré-vendas de vendas",
      "Aluno faz reunião com lead não qualificado e desperdiça tempo",
      "Aluno tem formulário único com muitas perguntas e taxa de preenchimento baixa ('pessoa fica sem preencher')",
      "Aluno não tem clareza sobre 'sessão de diagnóstico' vs 'reunião de venda' — chama tudo de reunião",
      "Aluno vai escalar time comercial (vai contratar SDR/closer) e ainda não tem CRM/Kanban separando etapas",
      "Aluno marca reunião sem confirmar que sócio/cônjuge decisor estará presente — pessoa some na hora de fechar",
      "Aluno manda link de reunião com muita antecedência e cai em no-show"
    ],
    teses_metodologias:{
      base_externa:'Nomenclatura SDR (pré-vendas/qualificação) × Closer (fechamento) — funções tradicionais de inside sales. Rafa cita ter aprendido com Renato (Método Sim do Renner).',
      teses_rafa:[
        '"Por isso que existe funil. Quando você coletou dado, ele vai para qualificação."',
        '"Diagnóstico não é reunião — a gente só não fala essa palavra para eles."',
        '"Qualificação não é formulário. Você vai perguntando à medida que a conversa vai desenvolvendo."',
        '"A pessoa tem que saber que você vai entrar ali para vender para ela — quando você fala que se não fizer sentido você não vai vender, a realidade é que se não fizer sentido você nem vai fazer a reunião, você desqualifica."',
        '"Vocês reservam o direito de não seguirem com o agendamento caso identifiquem que o perfil não é compatível."',
        '"Confirmação não é um dia antes. Sua reunião é um presente, sendo um presente não há possibilidade de remarcação."',
        '"Quem só agenda só pode visualizar o de pré-vendas. Quem só vende, só faz reunião — não gasta tempo agendando."'
      ]
    },
    passo_a_passo:[
      { etapa:1, titulo:'CAPTAÇÃO (ENTRADA NO FUNIL DE PRÉ-VENDAS)', desc:'Capturar dados básicos via formulário progressivo: PRIMEIRA tela com nome, email, telefone, Instagram (mínimo, para não perder contato); SEGUNDA tela com perguntas pré-qualificatórias (faturamento, desafio, meta, sócio/cônjuge decisor). Última tela avisa: "reservamos o direito de não seguir caso o perfil não seja compatível".', condicional:'Se lead não preencher a 2ª tela: já tenho contato da 1ª, ligo depois para completar.' },
      { etapa:2, titulo:'QUALIFICAÇÃO POR LIGAÇÃO (NÃO POR FORMULÁRIO)', desc:'Ligar (não WhatsApp — WhatsApp arrasta). Fazer perguntas qualificatórias durante a conversa, não em formulário. Identificar perfil de comportamento (aberta/fechada, organizada/enrolada), regime tributário, número de CNPJs. Desqualificar verbalmente quem não é perfil ANTES de marcar reunião.', condicional:'Se pessoa não atender: ir pro WhatsApp com "tentei te ligar porque é mais rápido, vou poupar seu tempo" — tentar puxar de volta para ligação.' },
      { etapa:3, titulo:'AGENDAMENTO DA SESSÃO DE DIAGNÓSTICO', desc:'Explicar pelo telefone: "É uma videochamada de X minutos para diagnosticar onde a empresa pode estar rasgando dinheiro. Caso faça sentido, apresento solução; caso não, indico alguém ou continuamos amigos." Oferecer 2 opções de horário. Pré-agendar e dizer: "reservei esse horário, agora preciso confirmar 2 informações no link". Confirmar presença do decisor.', condicional:'Se houver outro decisor (sócio/cônjuge): "é muito importante que essa pessoa esteja presente, não adianta você sair daqui para explicar pra ela depois."' },
      { etapa:4, titulo:'SEQUÊNCIA ANTI-NO-SHOW', desc:'Um dia antes (se reunião de manhã, mando à tarde do dia anterior): mensagem de boas-vindas sem perguntar "tá confirmado?", dizendo "está reservado especialmente para você, sendo um presente não há remarcação". ~1h antes: envio do link como lembrete. 10 minutos antes: "daqui a 10 minutinhos já estamos te aguardando na sala" (plural — pessoa fica sem graça de desmarcar).', condicional:null },
      { etapa:5, titulo:'CARD MIGRA: PRÉ-VENDAS → VENDAS', desc:'No CRM/Kanban, quando lead agenda, card duplica/migra do funil de PRÉ-VENDAS (Captação · Qualificação · Diagnóstico-agendamento) para o funil de VENDAS (Apresentação · Objeção · Fechamento). Se já houver SDR e closer separados: SDR só vê pré-vendas; closer só vê os agendados.', condicional:'Se ainda for 1 pessoa só: tudo bem manter num funil só por enquanto, mas separar mentalmente — não tratar como mesma coisa.' },
      { etapa:6, titulo:'SESSÃO DE DIAGNÓSTICO (ENTRADA DO FUNIL DE VENDAS)', desc:'Reunião consultiva no Zoom. Perguntas ABERTAS para entender real necessidade. Gerar valor IMEDIATO na própria reunião ("Uau do Cliente"). Já chegar com prévia de proposta baseada nas respostas do formulário e ligação.', condicional:null },
      { etapa:7, titulo:'APRESENTAÇÃO · OBJEÇÃO · FECHAMENTO', desc:'Apresentar oferta padronizada (PDF + preços pré-montados, só variando ticket/escopo). Tratar objeções usando o método (antecipar com provas sociais, encontrar a real, não hesitar). Fechar dentro da reunião — bônus de fechamento imediato como gatilho. Quem "vai pensar" raramente fecha.', condicional:'Se cliente pedir referência: já ter clientes pré-autorizados com telefone no PDF de oferta — antecipa a objeção de confiança.' }
    ],
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
    quando_acionar:[
      "Aluno está tentando 'convencer' o cliente com argumentos ('você precisa de constância', 'você precisa de tal coisa') e ouvindo resistência",
      "Aluno traz a venda como necessidade dele e não como solução de dor real do cliente",
      "Cliente verbalizou dor concreta (física, financeira, emocional, operacional) e o aluno ignorou e voltou pro pitch",
      "Aluno está em transição de modelo (ex: turma → personal) e a comunicação está confusa — quem precisa parece ser o profissional, não o cliente",
      "Aluno está preenchendo silêncio com argumentos e gerando rejeição automática",
      "Cliente está em objeção emocional disfarçada (cidade não comporta, não tenho tempo, vou pensar) e o aluno argumenta em vez de perguntar"
    ],
    teses_metodologias:{
      base_externa:null,
      teses_rafa:[
        '"Quem tenta convencer não convence. Faz pergunta."',
        '"Você não precisa de nada. Quem precisa sou eu." (o aluno é quem precisa vender — o cliente já está vivo do jeito dele)',
        '"A venda depende de comunicação. Se ela não é assertiva comigo, ela não é com o aluno."',
        '"Que que eu ensino? Fazer perguntas."',
        '"Aí você traz uma explicação que libera os hormônios" (depois da pergunta-âncora, entra com a explicação técnica/educativa que reforça o sim)'
      ]
    },
    passo_a_passo:[
      { etapa:1, titulo:'RECONHECER A DOR EM FATO (NÃO SUPOSIÇÃO)', desc:'Pegar exatamente o que o cliente disse — dores físicas, dores operacionais, dores financeiras — e ancorar a próxima fala nelas. Não interpretar, não generalizar. Caso Fran: cliente verbalizou "dores físicas e não tô conseguindo trabalhar" — esse é o fato. NÃO partir de "você precisa de constância" (suposição genérica).', condicional:null },
      { etapa:2, titulo:'FAZER PERGUNTA REFLEXIVA', desc:'Formato: "Com [dor específica que você descreveu], o quanto você consegue [resultado importante para ele — produzir, ganhar, atender, dormir]?" A pergunta é construída com a dor verbalizada + impacto no que importa pro cliente. Ele responde "não tô conseguindo" — e responde sozinho a necessidade dele.', condicional:'Se cliente não percebeu o impacto: encadear segunda pergunta no mesmo formato, em outro eixo (ex: dor física → produtividade; depois produtividade → ganho/dinheiro).' },
      { etapa:3, titulo:'DEIXAR O SILÊNCIO TRABALHAR', desc:'Depois da pergunta, NÃO preencher. Esperar a resposta. O silêncio é o que força o cliente a se ouvir. Errado: emendar "porque sabe, você precisa…". Certo: pausar até ele responder "é verdade", "não tô conseguindo", "nunca tinha pensado nisso".', condicional:null },
      { etapa:4, titulo:'ENTRAR COM A EXPLICAÇÃO TÉCNICA (LIBERA HORMÔNIO DO SIM)', desc:'Depois que ele admitiu a dor sozinho, AÍ sim entra a explicação do método/produto, sempre conectando à dor que ele acabou de validar. Ex Rafa: "as pessoas que conseguem colocam na agenda e largam tudo — porque voltam mais produtivas, hormônios X e Y, uma hora na academia te devolve mais que uma hora no celular." Educar para reforçar o sim que ele já deu.', condicional:null },
      { etapa:5, titulo:'ANCORAR COM ANALOGIA DE COMPROMISSO ASSIMÉTRICO', desc:'Fechar mostrando por que o formato novo (ex: personal 1:1) garante o resultado que o coletivo não garante. Frase-âncora: "se for algo que só acontece se você for, você se compromete mais — igual consulta médica, o médico tá lá te esperando, você não falta." Cria contrato emocional.', condicional:null }
    ],
    o_que_temos:[
      'Caso aplicado documentado (Fran personal · Mentoria NS 18/03 ~linha 1648-1690)',
      'Tese central: "Quem tenta convencer não convence. Faz pergunta."',
      'Comparação errado vs certo com exemplos'
    ],
    o_que_falta:[
      'Banco de "pergunta empática" por dor de cliente',
      'IA Treinadora de Pergunta'
    ],
    fonte_primaria:'Mentoria NS 18/03 (~linha 1648-1690)',
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
    quando_acionar:[
      "Aluno traz na esteira um item que é PARTE de um serviço maior (prévia de maquiagem solta, viabilidade de marca solta, planejamento financeiro solto, visita técnica cobrada)",
      "Aluno está perdendo dinheiro/tempo entregando 'amostra grátis' paga — pessoa contrata só a etapa e some sem fechar o pacote",
      "Aluno fragmentou a oferta para 'não perder venda' e está acumulando dor de cabeça",
      "Cliente pede o pedacinho ('só quero a prévia', 'só quero o planejamento', 'só a visita pra ver') e o aluno aceita por medo de perder",
      "Aluno entrega o COMO antes do contrato fechado (arquiteta dando layout, contadora resolvendo CNPJ em reunião gratuita) e o cliente vai embora",
      "Aluno está construindo nova esteira e não consegue distinguir o que é produto completo do que é etapa interna do método"
    ],
    teses_metodologias:{
      base_externa:null,
      teses_rafa:[
        '"Etapa não é produto, então não vai entrar na sua esteira de produto."',
        '"Eu não posso chamar de produto o que é etapa."',
        '"Eu não posso comprar só a pele e a Duda vai embora — a maquiagem é completa."',
        '"Você que tá dando a possibilidade dela agir fora da lei, você que tá abrindo esse precedente. Ou eu vendo tudo ou eu não vendo nada — não existe a metade."',
        '"Dentro da reunião de venda vocês não entregam COMO, vocês entregam o QUÊ."',
        '"Você tá perdendo o quê? Você tá perdendo dor de cabeça e prejuízo." (sobre dizer não pra venda fragmentada)'
      ]
    },
    passo_a_passo:[
      { etapa:1, titulo:'APLICAR A PERGUNTA-ÂNCORA', desc:'Quando o aluno traz proposta fragmentada, Rafa faz a pergunta direta: "isso é etapa ou é produto?". Critério: se sozinho NÃO resolve o problema do cliente (entrega resultado parcial, exige contratação posterior pra completar), é ETAPA. Se sozinho entrega a transformação prometida, é PRODUTO.', condicional:null },
      { etapa:2, titulo:'USAR ANALOGIA DA MAQUIAGEM (OU DO UNIVERSO DO ALUNO)', desc:'Rafa ensina via analogia: maquiagem tem caminho — corretivo, base, pó, contorno, blush, iluminador, sombra, rímel, batom. "Eu não compro só pele e a Duda vai embora". Buscar analogia do universo do cliente do aluno. Rafa: "analogia é sempre o melhor caminho de aprender".', condicional:null },
      { etapa:3, titulo:'RECUSAR A FRAGMENTAÇÃO — VENDER SÓ O COMPLETO', desc:'Decisão de oferta: tirar a etapa da esteira como produto avulso. Se cliente quer só a etapa, dizer NÃO. Caso Duda: "esse início do ano decidi que não vou mais fazer noiva Frankenstein, só vendo o serviço completo — disse uns 7 nãos e a margem subiu". Caso Mari: viabilidade não é produto, é parte da contratação de registro.', condicional:'Se a "etapa" for necessária para o aluno conseguir precificar/entender o caso (ex: visita técnica de arquiteta), então incorporar dentro do contrato fechado, não cobrar à parte.' },
      { etapa:4, titulo:'REPOSICIONAR PRO CLIENTE DENTRO DA REUNIÃO', desc:'Em vez de aceitar o pedido fragmentado, o aluno aprende a trazer o cliente para o completo: descrever o método, mostrar por que a etapa sozinha não entrega o resultado, e usar "cases que deram errado" no PDF de Oferta Irresistível. "O que a concorrência faz que você já vai deixar claro pro seu cliente? E por que você NÃO faz isso?"', condicional:null },
      { etapa:5, titulo:'FILTRAR PERFIL ANTES DA REUNIÃO', desc:'Se a pessoa só quer a etapa avulsa e não tem perfil pra contratação completa, NEM marcar reunião. Caso Adriana: cliente pergunta brigadeiro de 50 centavos, dela é 2,50 — já sabe que não é perfil, não leva pra reunião. Identificar isso na qualificação.', condicional:null },
      { etapa:6, titulo:"NÃO ENTREGAR O 'COMO' ANTES DO CONTRATO", desc:'Princípio aplicado: dentro da reunião de venda, entrega-se o QUÊ (diagnóstico, possibilidades, estratégia) — nunca o COMO (passo a passo executável, layout específico, plano detalhado). Caso Jéssica (contadora): 2h dando solução completa em reunião gratuita, cliente foi embora "agradecendo a indicação" e seguiu sem contratar.', condicional:null }
    ],
    o_que_temos:[
      'Caso Duda (maquiadora de noivas) — vendia prévia separada, mudou e disse 7 NÃOs em 2024 (Mentorias NS ~linha 610-633)',
      'Caso Mari (consultoria) — entregava só planejamento, virou caso de virada',
      'Tese explícita: "Etapa não é produto, então não vai entrar na sua esteira"'
    ],
    o_que_falta:[
      'Critério objetivo de etapa vs produto',
      'IA Diagnosticadora de Esteira'
    ],
    fonte_primaria:'Mentorias NEGÓCIO SOBERANO (~linha 610-633)',
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
    quando_acionar:[
      "Aluno está cortando caminho em algo invisível ao cliente (não registra marca, não emite nota, não declara imposto, vende 'viabilidade' e some) — Rafa detecta na revisão de oferta",
      "Aluno se justifica com 'todo mundo faz', 'o mercado é assim', 'ninguém vai ver'",
      "Aluno expõe cliente a risco futuro para fechar venda agora (cliente confia, paga, e descobre lá na frente que ficou sem proteção legal)",
      "Aluno tem conduta diferente quando está sendo observado (Rafa olhando o WhatsApp do grupo) versus quando está sozinho com o cliente",
      "Aluno usa material/marca/conteúdo de terceiros sem autorização e racionaliza ('é só uma vez', 'ninguém vai saber')",
      "Decisão envolve palavra dada vs. dinheiro a ganhar (manter ou quebrar regra de bônus de fechamento imediato)"
    ],
    teses_metodologias:{
      base_externa:null,
      teses_rafa:[
        '"Ética é o que você faz quando as pessoas estão olhando. Caráter é o que você faz quando ninguém tá vendo."',
        '"Você é o nível de pessoa que só age dentro da lei quando alguém tá vendo, porque tem uma câmera lá filmando?"',
        '"Você tá vendo a pessoa fazendo algo errado na sua frente e você tá tranquilo — você tá compactuando."',
        '"Para mim, isso é falta de caráter." (vender viabilidade sem vender o registro)',
        '"Vender assim gera tira-leite — cliente lesado que cancela."',
        '"Minha palavra vale mais que o dinheiro." (caso Ébert sobre bônus de fechamento imediato)',
        '"Ou eu vendo tudo ou eu não vendo nada — não existe a metade."'
      ]
    },
    passo_a_passo:[
      { etapa:1, titulo:'IDENTIFICAR A BRECHA INVISÍVEL', desc:'Olhar a oferta e o processo do aluno procurando onde ele "corta o canto" em coisas que o cliente não vai notar agora mas vão estourar depois: não registra marca por economia, vende só viabilidade, não exige documentação, deixa cliente em situação irregular, usa marca/conteúdo de terceiros, não cumpre prazos quando ninguém cobra.', condicional:null },
      { etapa:2, titulo:'APLICAR A FRASE-DIVISOR', desc:'Trazer a definição operacional. Ética = cumprir a regra quando estão olhando (regulação, fiscalização, cliente conferindo). Caráter = cumprir a regra quando ninguém vê (a marca expira em 10 anos, o problema fiscal aparece em 5, a confiança do cliente fura quando ele descobre). Pergunta-âncora: "você é o tipo de pessoa que freia só quando vê radar, ou que respeita o limite mesmo sem radar?"', condicional:null },
      { etapa:3, titulo:"USAR ANALOGIA 'RADAR/MULTA'", desc:'Rafa usa: dirigir a 100km/h numa via de 60. Tem radar → freia. Sem radar → mantém velocidade? Quem só age certo com câmera tem ÉTICA mas não tem caráter. Trazer analogia equivalente do universo do cliente do aluno (sonegação fiscal, copiar prova, usar foto sem crédito). Objetivo: deslocar a conversa de "estratégia comercial" para "identidade".', condicional:null },
      { etapa:4, titulo:"MOSTRAR O 'TIRA-LEITE' (CONSEQUÊNCIA COMERCIAL)", desc:'Conectar caráter a métrica. Cliente lesado cancela, vira detrator, derruba LTV, gera processo, queima nome no mercado. Caso Mari: cliente cuja marca não foi registrada descobre lá na frente que perdeu o nome, vai cobrar a advogada. Comercialmente, falta de caráter custa caro.', condicional:null },
      { etapa:5, titulo:"REPOSICIONAR OFERTA COM INTEGRIDADE ('OU TUDO OU NADA')", desc:'Reescrever a oferta para vender só o completo, com o que é necessário pro cliente ficar protegido. Caso Mari: "a viabilidade não é produto, é parte do registro — você compra o registro completo (com pesquisa de até 3 marcas inclusas)". Avisar o cliente ANTES, na própria explicação de venda: "você vai encontrar quem vende só a viabilidade e não cobra — eu te conto o que pode acontecer."', condicional:null },
      { etapa:6, titulo:'HONRAR A PALAVRA COMO ATO VISÍVEL DE CARÁTER', desc:'Caso Ébert (bônus de fechamento imediato): cliente perdeu o bônus por ter saído pra pensar. Voltou pedindo que Rafa mantivesse o bônus. Rafa recusou — "minha palavra vale mais que o dinheiro, eu vou honrar quem fechou comigo no dia". O cliente fechou na hora ao reconhecer o caráter. Princípio: condições combinadas se honra, mesmo quando dinheiro entra na conta cumprir a regra.', condicional:null }
    ],
    o_que_temos:[
      'Caso Mari (registro de marca) documentado (Mentorias NS ~linha 440-489)',
      'Frase autoral consolidada',
      'Aplicação prática em conduta comercial'
    ],
    o_que_falta:[
      'Checklist de conduta empresarial',
      'Casos comparativos'
    ],
    fonte_primaria:'Mentorias NEGÓCIO SOBERANO (~linha 440-489)',
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
    quando_acionar:[
      "Aluno tem ticket alto/médio-alto mas o cenário visual (escritório, fundo de stories, atelier, sala de atendimento) não comunica autoridade compatível",
      "Aluno está no mesmo cenário/setup há 2 anos ou mais sem refresh visual",
      "Aluno questiona se 'vale a pena' investir em ambiente físico/visual antes de cortar custos pessoais",
      "Aluno acabou de ter aumento de faturamento e pergunta 'agora aumento meu padrão de vida?'",
      "Cliente do aluno é exigente/sofisticado (médico, arquiteto, alto ticket) e fecha pelo visual desde o Instagram",
      "Aluno tem dúvida se deve subir preço — antes de mexer no preço, mexer no que sustenta o preço",
      "Aluno trabalha com presencial ou videochamada e o cenário aparece em todas as reuniões/stories"
    ],
    teses_metodologias:{
      base_externa:null,
      teses_rafa:[
        '"Que que você tem que aumentar primeiro? Investimento no seu negócio."',
        '"Você vai investir no seu cenário, você vai investir no seu posicionamento, que a pessoa não vai esperar nada barato, ela não vai questionar seu preço, seu valor."',
        '"Você não pode ser arquiteta e abrir uma reunião que deixa em dúvida se o seu escritório é extraordinário de arquitetura."',
        '"Imagina há quanto tempo você vem no mesmo cenário ali, você imagina fazer uma reforma ali, você acha que não dá um impacto gigante?"',
        '"Às vezes você nem gasta tanto, mas você reformou, você atualizou — é um investimento que retorna rápido para você."',
        '"O escritório deve comunicar EXTRAORDINÁRIO desde as fotos no Instagram."'
      ]
    },
    passo_a_passo:[
      { etapa:1, titulo:'DIAGNOSTICAR A DEFASAGEM', desc:'Comparar o ticket que o aluno cobra (ou quer cobrar) com o que o cenário visual dele comunica. Olhar Instagram, stories, fundo de reuniões, recepção. Se a presença visual está abaixo do ticket, a defasagem é objetiva, não estética.', condicional:null },
      { etapa:2, titulo:'PRIORIZAR INVESTIMENTO NO NEGÓCIO ANTES DO PADRÃO PESSOAL', desc:'Quando aluno teve aumento de faturamento e quer aumentar "custo de vida pessoal" (carro, viagem), Rafa intercepta: primeiro reinveste no negócio — cenário, posicionamento, marca. Padrão pessoal sobe depois, sustentado.', condicional:'Acionar especialmente quando aluno acabou de bater meta ou ter aumento expressivo de faturamento.' },
      { etapa:3, titulo:'DEFINIR O QUE REFORMAR NO CENÁRIO', desc:'Listar os pontos de contato visual com o cliente: escritório/atelier físico, fundo de reuniões online, set de stories, fotos do Instagram, recepção. Para cada um, perguntar: "isso comunica extraordinário?" Mapear o que o público-alvo (médico, arquiteta) espera ver de um profissional do nível que o aluno quer ocupar.', condicional:null },
      { etapa:4, titulo:'EXECUTAR COM CRITÉRIO ESTRATÉGICO, NÃO ESTÉTICO', desc:'Reforma não precisa ser cara — precisa atualizar e ser coerente com o nicho. Arquiteto: cenário moderno e atual da arquitetura. Confeitaria de luxo: paleta e materiais nobres. Não é gosto pessoal, é leitura do que o público-alvo decodifica como "profissional do tier acima".', condicional:null },
      { etapa:5, titulo:'ACOPLAR O REPOSICIONAMENTO À COMUNICAÇÃO', desc:'Depois do cenário pronto, levar pros stories, fotos institucionais e capa de proposta. O cenário só vira ticket de diferenciação quando entra na narrativa pública. Stories que mostram o ambiente reformado, fotos profissionais, capa de PDF de oferta com o novo cenário ao fundo.', condicional:null },
      { etapa:6, titulo:'MEDIR O RETORNO ACELERADO', desc:'Após investimento, observar: tempo de fechamento cai? Pergunta sobre preço diminui? Qualidade do lead que chega sobe? Rafa afirma que o retorno é rápido — se em 60-90 dias não houve mexida na conversão e no perfil do lead, revisar se a reforma comunicou pro público certo.', condicional:null }
    ],
    o_que_temos:[
      'Caso Evelyn (arquiteta) documentado (Mentorias MAZZEI$TRIA ~linha 532-550)',
      'Caso Gabi confirmado',
      'Princípio aplicável a stories, fundo de videocall, atelier físico'
    ],
    o_que_falta:[
      'Checklist visual por nicho',
      'Calculadora "ticket × presença atual" → gap'
    ],
    fonte_primaria:'Mentorias MAZZEI$TRIA (~linha 532-550)',
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
    quando_acionar:[
      "Aluno só tem prints de WhatsApp com 'parabéns', 'adorei', 'vocês são ótimas' — material que não vende",
      "Aluno vai montar PDF de oferta, página de vendas ou apresentação comercial e precisa de prova social estruturada",
      "Aluno está prestes a aumentar preço e ainda não tem material de prova de transformação concreta",
      "Aluno relata que o cliente concorda no elogio mas não fecha — falta evidência de resultado",
      "Aluno está partindo pra pedir depoimento dos clientes atuais ('vou pedir umas opiniões') sem roteiro de pergunta",
      "Aluno tem Google Meu Negócio com avaliações de 5 estrelas genéricas mas zero contexto de transformação",
      "Aluno vai gravar depoimentos em vídeo (filmmaker, confraternização de clientes) e não tem roteiro"
    ],
    teses_metodologias:{
      base_externa:null,
      teses_rafa:[
        '"Depoimento não é elogio. Elogio não é depoimento, porque a gente tem que saber pedir depoimento."',
        '"Depoimento é baseado em quê? Na parte de resultado. Como era antes, como ficou depois — o que mudou na operação, na prática, na sua vida, no seu sentimento?"',
        '"Senão a pessoa manda só elogio: \'as meninas são ótimas, são muito educadas\' — e aí vira elogio, não traz o depoimento de como era antes, como foi depois."',
        '"Você tem que orientar trazendo umas perguntinhas de como que a pessoa vai responder isso."',
        '"Você tem um depoimento que traz números, que traz indicadores, e não fica sendo só aquela coisa."',
        '"Você pega seu arsenal, vai pegando seu arsenal de depoimentos — depoimento de [serviço A], depoimento de [serviço B] — e usa o específico pra dor específica do cliente na reunião."'
      ]
    },
    passo_a_passo:[
      { etapa:1, titulo:'SELECIONAR OS CLIENTES CERTOS PRA PEDIR', desc:'Mapear clientes que tiveram transformação concreta e mensurável. Priorizar os que viraram a chave em resultado prático (operação, faturamento, tempo, dor resolvida) — não os que mais "gostam" do aluno. Rafa: "já até sei pra quem que eu vou pedir o depoimento".', condicional:null },
      { etapa:2, titulo:'ENVIAR AS 4 PERGUNTAS-ÂNCORA', desc:'Mandar pra cada cliente uma lista fixa de perguntas — não pedir "depoimento aberto". As 4 âncoras: (a) Como era ANTES do meu trabalho? (situação de dor, em fato); (b) O que mudou DEPOIS? (na operação/prática/vida); (c) Como você se SENTIA antes e como se sente agora? (camada emocional); (d) Qual a TRANSFORMAÇÃO CONCRETA — em números, se possível? (indicador objetivo).', condicional:null },
      { etapa:3, titulo:'ADICIONAR PERGUNTA DE RECADO PRO FUTURO CLIENTE', desc:'Fechar com: "O que você diria pra alguém que já pensou em contratar esse serviço mas ainda tem medo / dúvida?" Isso gera linha que vira contorno de objeção pronto.', condicional:null },
      { etapa:4, titulo:'DEFINIR FORMATO: ESCRITO, VÍDEO OU PRINT', desc:'Vídeo em reunião gravada com cliente é o mais forte (Rafa orienta: feche seu microfone enquanto cliente fala pra Zoom gravar só ele). Escrito pro Google Meu Negócio (vale a estrelinha) e WhatsApp pra print rápido. Idealmente coletar nos 3 formatos do mesmo cliente.', condicional:'Se for vídeo em reunião — fechar o próprio microfone e o de outros participantes pra Zoom gravar só o cliente.' },
      { etapa:5, titulo:'ORGANIZAR ARSENAL POR CATEGORIA/SERVIÇO', desc:'Não é UM banco genérico — é arsenal segmentado por dor e por serviço. Ex: depoimento de cliente da área de transporte, depoimento de registro de marca, depoimento de metodologia. Cada PDF de oferta puxa o depoimento da categoria do cliente que vai receber a proposta.', condicional:null },
      { etapa:6, titulo:'USAR EM CAMPO (REUNIÃO, PDF, PÁGINA, STORIES)', desc:'Em reunião, quando cliente cita dor X, mostrar print do depoimento de quem teve a mesma dor X e resolveu. No PDF de oferta, prova social no formato "antes/depois + número". Em stories, depoimento em vídeo com legenda do indicador. Sempre coerência: dor do prospect ↔ depoimento usado.', condicional:null },
      { etapa:7, titulo:'CAPTAR CONTINUAMENTE — VIRAR HÁBITO', desc:'Não é evento único. Rafa orienta: a cada virada de cliente, abrir microfone, pedir o depoimento na hora. Confraternização anual de clientes vira evento de captação (chamar filmmaker). Reunião de readequação de produto também — aproveita pra coletar.', condicional:null }
    ],
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
    quando_acionar:[
      "Aluno participa de BNI, grupo de networking, associação ou rede de indicação peer-to-peer",
      "Aluno recebe indicação e o indicador entrega o telefone do prospect (ou pede o telefone do aluno) — fluxo informal",
      "Aluno reclama que perde tempo em reunião com lead totalmente fora de ICP que veio por indicação",
      "Aluno tem agenda travada de reuniões 1:1 mas baixa conversão — sintoma de qualificação ausente",
      "Aluno está montando processo comercial e ainda não tem formulário de qualificação criado",
      "Aluno tem parceiro estratégico (contador, advogado, outro fornecedor) que indica clientes regularmente",
      "Aluno tenta atender indicação 'na pressa pra não perder' e está virando linha de atendimento sem filtro"
    ],
    teses_metodologias:{
      base_externa:null,
      teses_rafa:[
        '"Você não vai dar seu telefone para te entregar, você vai dar o link. Sempre que você for me indicar, você dá o link."',
        '"Como eu respeito o seu tempo e o meu tempo? Eu tenho um formato que com dois minutinhos você responde umas perguntinhas que eu vou te mandar aqui num link."',
        '"Você não fala, responde um formulário para mim — olha como é que muda."',
        '"O formulário, ele serve para qualificar. Ele é uma etapa do seu funil."',
        '"Todo mundo precisa preencher formulário, sim ou não? Sim." (inclusive lead de indicação de BNI/networking — sem exceção)',
        '"Você não vai perguntar se já conhece [seu serviço], você vai perguntar: \'Você já consultou outros profissionais anteriormente sobre o mesmo assunto?\' Aí sim você tem a informação que precisa."'
      ]
    },
    passo_a_passo:[
      { etapa:1, titulo:'CRIAR O LINK ÚNICO DE QUALIFICAÇÃO', desc:'Formulário de 2 minutos com 5-8 perguntas estratégicas: nome, contato, faixa de faturamento (se aplicável), principal desafio em pergunta ABERTA, meta/objetivo, e a pergunta de antecipação ("já consultou outros profissionais sobre o mesmo assunto?"). Respostas caem direto no CRM.', condicional:null },
      { etapa:2, titulo:'TREINAR A REDE DE INDICADORES NO SCRIPT PADRÃO', desc:'Avisar formalmente todo parceiro, colega de BNI e cliente que indica: "sempre que for me indicar, manda esse link, não dá meu telefone direto". Justificativa pública: "pra eu respeitar o tempo dele e o meu, e já entender se consigo ajudar ou não".', condicional:null },
      { etapa:3, titulo:'REAGIR AO FLUXO INVERTIDO', desc:'Quando o indicador já entregou o telefone do prospect (ou vice-versa) e o aluno precisa abordar, NÃO marcar reunião na hora. Enviar mensagem padrão: "Perfeito, fulana — pra eu entender seus primeiros desafios e ver como melhor te ajudar (ou se consigo te ajudar), tenho um formato que em 2 minutinhos você responde aqui no link." Depois do formulário, aí sim agenda.', condicional:'Se indicador insistir que "o cara já quer fechar, já tá pronto" — manter o formulário mesmo assim. O hábito de exceção quebra o sistema.' },
      { etapa:4, titulo:'QUALIFICAR NO CRM ANTES DA REUNIÃO', desc:'Com formulário respondido, abrir CRM, ler respostas e qualificar: ICP? Tem faturamento mínimo? Tem outra proposta na mesa? Decidir reunião sim/não. Se sim, marca. Se não, devolve com elegância — "no momento meu serviço atende [perfil X], te recomendo [alternativa]".', condicional:null },
      { etapa:5, titulo:'DEFENDER O SISTEMA CONTRA A TENTAÇÃO DO ATALHO', desc:'Casos como o da Lorena (BPO via BNI) mostram a tentação: "o pessoal do BNI já vem consciente, já quer orçamento, não precisa de formulário". Rafa contraria: justamente aí o formulário antecipa a informação que importa (já tem outra proposta? já conhece o tema?) e evita reunião desperdiçada. Sem exceção.', condicional:'Se aluno argumentar que "esse nicho é diferente, formulário afasta" — testar A/B antes de abolir. Na maioria dos casos a regra vale; quando não vale, é exceção justificada por dado, não por sensação.' },
      { etapa:6, titulo:'ITERAR AS PERGUNTAS DO FORMULÁRIO', desc:'Cada pergunta tem que ser estratégica e direta no que importa. Exemplo de iteração: "você já conhecia registro de marca?" é pergunta fraca (não mede nada acionável). Trocar por "você já consultou outros profissionais sobre o mesmo assunto?" — capta se há proposta concorrente, que é o dado que muda o jogo na reunião.', condicional:null }
    ],
    o_que_temos:[
      'Protocolo documentado (Mentoria NS 18/03 ~linha 3001-3058)',
      'Aplicação prática com Lorena (BNI) confirmada',
      'Frase-âncora: "Quando me indicar, você dá o link, não meu telefone."'
    ],
    o_que_falta:[
      'Template de formulário de qualificação',
      'IA que monta o formulário por nicho',
      'Scripts pra parceiros (como ensinar quem indica)'
    ],
    fonte_primaria:'Mentoria NS 18/03 (~linha 3001-3058)',
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
    tecnico:'Desacoplar CNPJ × marca registrada × marca de comunicação; registrar marca no CPF',
    trilhas:['posicionamento'],
    status:'parcial',
    o_que_e:'Framework pro expert decidir se a marca da operação fica no NOME DELE (marca pessoal) ou em um NOME DE EMPRESA distinto (marca corporativa) — incluindo registro INPI no CPF × CNPJ, e quando criar segunda marca pra atender públicos diferentes sem canibalizar.',
    o_que_temos:[
      'Tese estrutural — desacoplar CNPJ e marca: \'O nome do meu CNPJ é Mazei Treinamentos Ltda. O nome do meu logo é Rafaela Mazei. Eu não tenho logo de Mazei Treinamentos, nunca vou ter. Tem nada a ver\' (Planejamentos NS, ~l.4761)',
      'Princípio de proteção patrimonial: \'Hoje as minhas marcas são registradas no meu CPF, não é no meu CNPJ. Dora Arquitetura tá registrado no CPF ou no CNPJ? CNPJ. Quem criou esse nome? Mas não é da Andreia, é das três meninas, porque ela tem sócia. Aí amanhã se ela vai desfazer a sociedade e as meninas falam: não abro mão do nome, já era\' (~l.4790)',
      'Estratégia de segunda marca: \'Vamos supor que isso vale a pena vender pra todos os nichos. Você cria um outro CNPJ. O Instagram é diferente, o negócio é diferente, a cara é diferente. Não vai ser você divulgando\' (~l.4730-4745)',
      'Princípio de não-canibalização: \'A pessoa não pode saber que é a mesma. Quem contratar a Lisiane Lisboa marketing médico é uma coisa, quem contratar a BZL é outra, o médico tá achando que ninguém competiu com ele\' (~l.4727)',
      'Tese sobre nome ser estratégia: \'Você escolhe o nome da empresa baseado em quê? O empresário pensa baseado em lucro, não passando por cima de valores. Mas com a energia que precisa pensar de negócios\' (Hot Seats MAZZEI$TRIA, ~l.3281)',
      'Repertório da Rafa (todas no CPF): \'Negócio Soberano, Método Mazei, Rafaela Mazei, Mazei$tria, Sem Venda Sem Vida\' — mais de 10 marcas, todas no CPF (~l.4798-4805)',
      'Coerência marca × operação: \'Pode ser a marca, o mesmo nome. Quero usar BZL. Aí você faz uma alteração contratual e usa\' — alteração contratual é barata (~l.4750)'
    ],
    o_que_falta:[
      '⚠ 3 critérios objetivos de decisão entre marca pessoal × corporativa (tipo de público, ticket, escala pretendida, possibilidade de venda futura)',
      '⚠ Quando faz sentido a marca pessoal VIRAR corporativa (expert deixar de aparecer, vender o negócio, abrir sociedade)',
      '⚠ Caminho prático de migração quando o expert já construiu tudo no nome dele mas precisa institucionalizar'
    ],
    quando_acionar:[
      'Expert vai escolher nome de empresa ou marca e está prestes a usar o sobrenome/CPF como default sem analisar estratégia',
      'Expert tem CNPJ com nome ruim/limitante e quer entender se troca, se cria marca paralela, ou se separa CNPJ de marca operacional',
      'Expert quer escalar pra atender público novo (ticket maior ou menor) sem misturar com o atual e canibalizar',
      'Expert tem sócio ou parceria e a marca está registrada no CNPJ da sociedade — risco de perder o nome se desfizer',
      'Expert vai registrar marca no INPI e precisa decidir CPF × CNPJ',
      'Expert já é conhecido pelo próprio nome mas quer institucionalizar pra poder se afastar da operação',
      'Expert tem dois CNPJs/duas marcas e está confundindo as coisas (qual usa nota fiscal de quem, qual divulga onde)'
    ],
    teses_metodologias:{
      base_externa:null,
      teses_rafa:[
        '\'O nome do meu CNPJ é Mazei Treinamentos Ltda. O nome do meu logo é Rafaela Mazei. Eu não tenho logo de Mazei Treinamentos, nunca vou ter.\'',
        '\'Hoje as minhas marcas são registradas no meu CPF, não é no meu CNPJ.\'',
        '\'Se amanhã você colocar um sócio, eu tô ferrada, porque a gente nunca sabe o que as pessoas são capazes de fazer.\' (sobre registrar marca no CNPJ)',
        '\'A pessoa não pode saber que é a mesma.\' (sobre criar segunda marca pra outro público)',
        '\'Você escolhe o nome da empresa baseado em quê? Isso é estratégia.\''
      ]
    },
    passo_a_passo:[
      { etapa:1, titulo:'DESACOPLAR 3 CAMADAS: CNPJ, MARCA REGISTRADA E MARCA DE COMUNICAÇÃO', desc:'São 3 coisas independentes: (a) razão social do CNPJ (Mazei Treinamentos Ltda), (b) marca registrada no INPI (Rafaela Mazei, Negócio Soberano, Método Mazei...), (c) logo e nome usados na comunicação. Não precisam coincidir.', condicional:null },
      { etapa:2, titulo:'REGISTRAR TODA MARCA NO CPF DO EXPERT, NUNCA NO CNPJ', desc:'Marca no CPF está blindada de sociedades, dissolução de empresa, mudança de CNPJ. Se a marca está no CNPJ e há sócio, ele pode segurar o nome se a sociedade quebrar. Rafa: mais de 10 marcas registradas, todas no CPF.', condicional:null },
      { etapa:3, titulo:'AVALIAR SE PÚBLICO E TICKET SUSTENTAM UMA MARCA SÓ', desc:'Único público com único arco de produtos → marca pessoal centralizada faz sentido. Públicos muito diferentes (marketing médico + marketing pra outros nichos) onde um cliente NÃO PODE saber que tem o mesmo dono → considerar segunda marca.', condicional:'Se mesmo público → uma marca só. Se públicos contrastantes que se canibalizam → considerar segunda marca.' },
      { etapa:4, titulo:'DECISÃO DE SEGUNDA MARCA — NÃO-CANIBALIZAÇÃO', desc:'Público distinto que não pode ver concorrência aparente do mesmo dono: criar segunda marca com Instagram próprio, cara própria, expert NÃO aparece divulgando. Pode ser dentro do mesmo CNPJ (alteração contratual barata) ou em CNPJ novo (mais caro, justificado por escala).', condicional:null },
      { etapa:5, titulo:'⚠ COMPLETAR COM RAFA — 3 CRITÉRIOS DE DECISÃO PESSOAL × CORPORATIVA', desc:'Pedir à Rafa: \'Quais os 3 critérios objetivos que você usa pra dizer pro mentorado — marca no seu nome ou em nome de empresa?\' Hipóteses: (a) o expert quer ser a cara permanente ou poder se afastar?, (b) o ticket/público comporta personificação?, (c) há intenção de vender o negócio no futuro?', condicional:null }
    ],
    fonte_primaria:'Planejamentos em Grupo NS linhas ~4727-4805',
    fonte_secundaria:'Hot Seats MAZZEI$TRIA ~l.3273-3293',
    sessao:'S4 · Posicionamento',
    duracao_rafa:'15min (3 critérios de decisão pessoal × corporativa)',
    vira_conteudo:[
      'Aula T4.3 \'Seu nome ou o nome da empresa\'',
      'Guia de decisão pessoal × corporativa',
      'Checklist de registro INPI'
    ]
  }
];

// ================================================================
// JORNADA DETALHADA · etapas da jornada do aluno no 2Z Level
// ================================================================
const JORNADA_DETALHADA = {
  'onboarding': {
    id:'onboarding',
    nome:'Onboarding',
    subtitulo:'Entrada do aluno no ecossistema Bellz House',
    objetivo:'Apresentar o funcionamento do produto, as plataformas, o ritual de mentoria e os combinados — sem consumir o tempo da Rafa. Conduzido 100% pela Consultora de Progresso.',
    duracao:'1 semana · primeiro contato + assinatura + entrega de acessos',
    status:'parcial',
    papeis:[
      { quem:'Aluno', papel:'Recebe boas-vindas, assina contrato, acessa Curseduca e Notion, preenche dados iniciais.' },
      { quem:'Consultora de Progresso', papel:'Conduz 100% do onboarding. Apresenta plataformas, ritual e combinados. Garante que o aluno chegue no Diagnóstico 360º com tudo configurado.' },
      { quem:'Rafa', papel:'NÃO opera nesta etapa. Aluno só conhece a Rafa no Plano Mestre.' }
    ],
    processo:[
      { etapa:'01 · Boas-vindas + contrato', desc:'Mensagem inicial da CP, envio do contrato (Assiny/DocuSign), assinatura digital. Primeiro vídeo de boas-vindas da Rafa (gravado, na Curseduca).' },
      { etapa:'02 · Acesso às plataformas', desc:'Acesso à Curseduca (vídeos + documentos), acesso ao Notion-mãe (gestão de aluno), entrada no grupo WhatsApp Business da turma.' },
      { etapa:'03 · Ritual + combinados', desc:'CP explica o ritual de mentoria (frequência de encontros, expectativas, prazos), entrega documento de regras + termo de conduta, marca o primeiro 1:1 de Diagnóstico.' },
      { etapa:'04 · IA de Boas-Vindas', desc:'Aluno conversa com IA de Boas-Vindas (Claude Project) que faz briefing conversacional inicial — coleta contexto leve antes do Diagnóstico 360º formal.' }
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
      'IA de Boas-Vindas no Claude Project (briefing conversacional)',
      'Vídeo de boas-vindas da Rafa (gravado, 3-5min)',
      'Documento de regras + termo de conduta padronizado',
      'Template de mensagem inicial da CP (script)',
      'Automação Notion: CP marca onboarding completo → dispara convite Diagnóstico 360º'
    ],
    output:'Aluno chega no Diagnóstico 360º com plataformas configuradas, regras compreendidas, vídeo de boas-vindas assistido e expectativas alinhadas.'
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
    // ⚠️ 01/07/2026: "A Fundação" não é mais um nome à parte — esta etapa É o Sell-Z, aplicado individualmente.
    // id interno mantido (a-fundacao) só pra não quebrar rotas #jornada/a-fundacao já existentes.
    nome:'Sell-Z',
    subtitulo:'Sell-Z aplicado individualmente — mesmo squad/conteúdo do programa vendido em cohort separado; sem turma aberta, o mentorado percorre no próprio ritmo',
    objetivo:'Antes das trilhas personalizadas, todo aluno estrutura a base que sustenta qualquer crescimento: identidade, visão estratégica, leitura de mercado, infraestrutura mínima do negócio. Esta base é o próprio Sell-Z — não é um programa à parte, é o mesmo conteúdo/squad do Sell-Z vendido separadamente, aplicado aqui no ritmo individual do mentorado. Sem essa base, qualquer outra ação fica em cima de fundação rasa.',
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
        rafa_envolvida:'Revisão estratégica de 15min no primeiro Mentoria'
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
      { item:'Home Office Bellz (Notion)', uso:'Onde o aluno executa o Sell-Z (aplicado individualmente) + acompanha progresso', status:'em construção' },
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
      'Dashboard de progresso do Sell-Z (aplicado individualmente) no Home Office Bellz (visual: 7 ações com check verde/amarelo/vermelho)'
    ],
    output:'Aluno sai desta etapa com: modelo de negócio claro, leitura de mercado feita, infraestrutura PJ resolvida, PDF de Oferta pronto, posicionamento construído, CRM rodando, ritual de vendas instalado. Base sólida pra qualquer trilha personalizada que venha depois.',
    nota_sell_z:'Esta etapa É o Sell-Z (mesmo squad, mesmo conteúdo, mesmas 7 ações) — não é uma base separada que "também" vira Sell-Z. Diferença é só o ritmo: no 2Z Level o mentorado aplica o Sell-Z individualmente (sem turma aberta); no produto Sell-Z vendido separadamente, roda em cohort sincronizado de 8 semanas.'
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
    publico:'Persona Fernanda · maturidade: lucro/sobra recorrente já acontecendo (corte por comportamento, não por faturamento)',
    ticket:'R$20.4k-22.8k/ano (atual)',
    quando:'Em operação · 26 alunos ativos (migradas de Maestria)',
    trilhas_cobertas:'Todas as 7 trilhas conforme Plano Mestre individual',
    promessa:'Acompanhamento próximo para donos de negócio que já têm lucro recorrente e precisam assumir o governo da própria empresa — sem depender do próprio sacrifício.',
    puv:'Guiamos o dono de negócio que já fatura, mas ainda vive na montanha-russa do faturamento, a assumir o governo da própria empresa, através de uma mentoria de acompanhamento em grupo, para viver na prática o vender, gerir e sorrir na mesma medida.',
    tagline:'De dono de negócio a empresário de verdade.',
    status:'ativo',
    paleta:{ primaria:'#7da5b8', secundaria:'#1f3a2a' },
    // === JORNADA DO ALUNO (cada etapa abre página detalhada via #jornada/<id>) ===
    jornada:{
      entrada:[
        { id:'onboarding', num:'01', nome:'Onboarding', quem:'Consultora de Progresso', desc:'Apresenta funcionamento + plataformas + ritual. Conduzido 100% pela CP — Rafa não opera nesta etapa.' },
        { id:'diagnostico-360', num:'02', nome:'Diagnóstico 360º', quem:'Aluno preenche · Squad processa', desc:'4 instrumentos: Briefing Estratégico + DISC + Score-Z (7 pilares) + Indicadores. Aluno preenche o miniapp; o Squad 2Z Level processa e gera o relatório + base do Plano Mestre.' },
        { id:'plano-mestre', num:'03', nome:'Plano Mestre', quem:'1:1 com a Rafa (90min)', desc:'Mapa anual do aluno: trilhas + metas mensais + ordem de execução. Gerado por IA, validado pela Rafa.' }
      ],
      base_universal:[
        { id:'a-fundacao', nome:'Sell-Z', desc:'Base universal de todo aluno — é o próprio Sell-Z aplicado individualmente (mesmo squad/conteúdo do programa vendido em cohort separado). Inclui Plano de Vida × Negócio, Leitura do Tabuleiro, Setup PJ, Material de Oferta, Posicionamento, CRM, Ritual de Vendas. 7 ações concretas com aceleradores IA.' }
      ],
      marcos_ciclo:[
        { quando:'Mês 6', nome:'Revisão de Rota', desc:'1:1 com a Rafa. Leitura dos números + ajuste do plano.' },
        { quando:'Mês 11-12', nome:'A Travessia', desc:'1:1 com a Rafa. Balanço do ciclo + janela de renovação.' }
      ]
    },
    // === ENCONTROS RECORRENTES ===
    encontros:[
      { nome:'Mezza', frequencia:'1×/mês · manhã', desc:'Ritual de comunidade + café + convidado especialista. Fortalece pertencimento. (Nome oficial encurtado de "Mezza Bellz" pra só "Mezza" — decisão da Rafa 01/07.)' },
      { nome:'Sessão "Destrava"', frequencia:'2×/mês · 30min por mentorado (agendado antes)', desc:'Sessão individual onde cada mentorado destrava seu caso com a Rafa. O mentorado agenda os 30min antes. É a entrega central de acompanhamento — não existe "janela" separada, é uma coisa só. (Antes chamada "Mentoria".)' },
      { nome:'Z-Lab', frequencia:'1×/mês · só entra depois que TODO o método estiver implementado E uma turma de Sell-Z já tiver rodado', desc:'Análise de casos do aluno — pode ser reunião comercial gravada, material de oferta, ou outro caso real. A Rafa analisa o que só o humano vê (não-verbal, nuance). Pré-requisito: oferta definida + método implementado + Sell-Z já rodado (não é dia 1 da mentoria). (Antes chamada "Engenharia Reversa".)' },
      { nome:'Evento presencial anual', frequencia:'1×/ano · 3 dias', desc:'1 dia exclusivo + 2 dias abertos a pagantes. Imersão profunda. (Nome ainda a definir.)' }
    ],
    // === COMPONENTES TANGÍVEIS ===
    componentes:[
      { nome:'Home Office Bellz', tipo:'Notion', desc:'O Notion com CRM (já com a metodologia dentro) e ferramentas de gestão diária para as mentoradas.' },
      { nome:'Indicadores Bellz', tipo:'Aplicativo (Marco)', desc:'Painel de indicadores financeiros e comerciais.' },
      { nome:'Área de Membros Bellz House', tipo:'Plataforma própria (substitui Curseduca)', desc:'Nova plataforma em construção: aulas, materiais, playbooks e ferramentas da mentoria (Sessão Destrava, Mezza, Z-Lab arquivados). Plano de longo prazo: migrar Home Office Bellz e Indicadores Bellz pra dentro dessa mesma plataforma.', status:'em construção' },
      { nome:'Comunidade WhatsApp', tipo:'WhatsApp', desc:'Grupo de alunos ativos.' }
    ],
    // === OFERTA (proposta comercial) ===
    oferta:{
      status:'da_pra_fechar',
      nota:'A oferta do 2Z Level dá pra FECHAR agora — o produto já opera. O que falta é consolidar os pontos ⚠️ abaixo (decisão sua).',
      inclui:[
        'Diagnóstico 360º — mapeamento estratégico de entrada',
        'Plano Mestre — 1:1 de 90min com a Rafa (o mapa anual)',
        'Acesso às 7 trilhas do método (conforme Plano Mestre individual)',
        'Sell-Z aplicado individualmente — a base universal (7 ações estruturais)',
        'Sessão Destrava — 2×/mês, 30min individuais com a Rafa',
        'Mezza — 1×/mês, conteúdo + convidado',
        'Z-Lab — 1×/mês (após método implementado + 1ª turma de Sell-Z rodada)',
        'Evento presencial anual — acesso VIP',
        'Marcos 1:1 — Revisão de Rota (mês 6) e A Travessia (mês 11)',
        'Plataformas — Home Office Bellz · Indicadores Bellz · Área de Membros · Comunidade WhatsApp',
        'Acompanhamento da Consultora de Progresso'
      ],
      a_definir:[
        { item:'Bônus', desc:'O "bônus de fechamento imediato" que você usa nas vendas (dobro de tempo / acesso do sócio) vira bônus PADRÃO da oferta, ou é só tática de fechamento 1:1? Definir o(s) bônus oficial(is).' },
        { item:'Garantia', desc:'Você pratica a garantia invertida de 6 meses condicionada à aplicação. Confirmar os termos exatos (o que conta como "aplicou e não teve retorno").' },
        { item:'Investimento', desc:'Histórico: sweet spot 12× R$1.900 (acima disso começou inadimplência). Confirmar o preço oficial atual.' },
        { item:'Ancoragem de preço', desc:'A cascata que você usa na venda (mercado → consultoria → entrega → bônus → preço real por contraste). Definir a que entra na oferta.' },
        { item:'Condições de pagamento', desc:'Parcelas, à vista com desconto, entrada, régua de flexibilização.' },
        { item:'Inclui × NÃO inclui', desc:'Deixar explícito o que NÃO promete (é grupo, não atendimento individual ilimitado; não é "o negócio rodar sem você").' }
      ]
    }
  },
  {
    id:'sell-z',
    nome:'Sell-Z',
    formato:'Cohort de 8 semanas · workshop 21-22/07 · kick-off 29/07',
    publico:'Persona Ana · sem piso de faturamento (qualifica por entrega acima da média + leads chegando + decidir aplicar)',
    ticket:'R$1k-3k (a confirmar)',
    quando:'Workshop 21-22/07 · kick-off 29/07 · conteúdo 5/08-set/2026',
    trilhas_cobertas:'Comercial · Oferta · Gestão (parcial) · Posicionamento (intro)',
    promessa:'Em 8 semanas, instala o processo comercial que faz a venda acontecer com previsibilidade.',
    puv:'Tiramos o dono de negócio do improviso e o colocamos no comando do próprio processo comercial, construindo, através de uma implementação guiada, uma oferta de alto valor, pronta para ser a escolhida pelo cliente ideal.',
    tagline:'8 semanas de aceleração implacável. Domine o método. Faça o sino tocar.',
    status:'em_construcao',
    paleta:{ primaria:'#c75a2c', secundaria:'#0e0f0d' },
    jornada_status:'A jornada do aluno, os encontros específicos e a estrutura interna do Sell-Z serão documentados durante a preparação do lançamento (junho/julho 2026), em sessão conjunta com Pedro (responsável pela operação técnica do lançamento).',
    // === OFERTA (proposta comercial) ===
    oferta:{
      status:'maior_parte',
      nota:'A estrutura da oferta do Sell-Z dá pra fechar agora (é decisão comercial, não depende do squad). Só o conteúdo fino de cada fase depende do squad pronto.',
      inclui:[
        'Fase 0 · Ponto de partida — Plano de Vida × Negócio',
        'Fase 1 · Pra quem eu vendo — ICP + leitura de mercado',
        'Fase 2 · O que eu vendo — oferta de alto valor',
        'Fase 3 · Por que me escolhem — posicionamento',
        'Fase 4 · Como me organizo — PF/PJ + CRM mínimo',
        'Fase 5 · Como eu vendo — ritual + sessão de venda consultiva',
        'Fase 6 · Como leio os números — indicadores + funil'
      ],
      a_definir:[
        { item:'Investimento', desc:'Faixa atual R$1k–3k. Definir o preço da 1ª turma.' },
        { item:'Bônus · Garantia · Condições', desc:'Dá pra fechar sem o squad — decisão comercial.' }
      ],
      depende_squad:'O conteúdo fino de cada fase (aulas gravadas, passo-a-passo de cada framework, instrumentos finais) depende do squad do Sell-Z pronto. A estrutura da oferta acima dá pra fechar e vender antes disso.'
    }
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
  observacao:'VARREDURA COMPLETA EXECUTADA em 26/05/2026: 4 agentes paralelos varreram ~7MB de transcrições (Aulas · Planejamentos · Mentorias · WhatsApp). Extraídos 11 frameworks NOVOS direto das transcrições + 4 detalhamentos de frameworks existentes — sem precisar consultar a Rafa. Score global do método saltou para refletir o material já extraído. Relatório completo em outputs/varredura-transcricoes-2026-05-26.md. Próximas sessões com a Rafa são SOMENTE para validação + renomeação + autorização de uso de casos reais.',
  sessoes:[
    { sessao:'1', foco:'Comercial · 13 frameworks (10 com material profundo)', frameworks:'Venda Consultiva · 5 Regras de Objeção · Matemática do Funil · ICP Estrutural · 3 Dúvidas do "Vou Pensar" · Pré-Vendas × Vendas · Pergunta Empática · Plano de Foco · Qualificação de Lead · Leitura de Indicadores · Leitura por Consciência · Pós-NÃO-venda · Engenharia Reversa do Funil', fonte:'Abrir cada framework no dash e comentar (corrige/ajusta/aprova)', duracao_rafa:'~1h-1h15' },
    { sessao:'2', foco:'Oferta e Produto · 7 frameworks (4 profundos)', frameworks:'Anatomia do PDF de Oferta · Etapa ≠ Produto · Esteira de Produtos · Cálculo do Valor do Tempo · PDF Irresistível · Bônus + BFI · Precificação por Valor', fonte:'Abrir cada framework no dash e comentar', duracao_rafa:'~35-45min' },
    { sessao:'3', foco:'Gestão Adm. & Financeira · 5 frameworks (4 profundos)', frameworks:'Análise PF/PJ · Leitura de Fluxo de Caixa · Mapa de Custos e Margem · Critérios de Contratação de Apoio · Anteceder Erros', fonte:'Abrir cada framework e comentar (Rafa indica fonte se faltar dado)', duracao_rafa:'~30-40min' },
    { sessao:'4', foco:'Posicionamento · 8 frameworks (3 profundos)', frameworks:'3 Cadeiras · Engenharia Reversa de Posicionamento · Diferenciação por Atributos · Diferenciação por Personalização · O Uau do Cliente · Investimento em Presença · Depoimento × Elogio · Marca Pessoal × Corporativa', fonte:'Abrir cada framework no dash e comentar', duracao_rafa:'~35-45min' },
    { sessao:'5', foco:'Tração · 4 frameworks (3 profundos)', frameworks:'Mapa de Canais de Aquisição · Indicação Estruturada · Escala de Funis · Regra do Link, não Telefone', fonte:'Abrir cada framework no dash e comentar', duracao_rafa:'~25-30min' },
    { sessao:'6', foco:'Liderança · 4 frameworks (todos com material)', frameworks:'Timing de Contratação · Estrutura de Time Comercial · Liderança e Delegação · Roteiro de Desligamento', fonte:'Abrir cada framework no dash e comentar', duracao_rafa:'~30min' },
    { sessao:'7', foco:'Mentalidade · 7 frameworks (4 profundos)', frameworks:'Transição de Identidade · Roda da Vida Empresarial · Mapa de Crenças Limitantes · Ética × Caráter · Plano de Vida × Negócio · Termômetro da Felicidade · Mentalidade Mínima', fonte:'Abrir cada framework no dash e comentar', duracao_rafa:'~35-45min' },
    { sessao:'+', foco:'Diagnóstico 360º + Plano Mestre (páginas centrais)', frameworks:'Revisar os 4 instrumentos do Diagnóstico + a estrutura do Plano Mestre e comentar', fonte:'Páginas em O Produto 2Z › Jornada do Aluno', duracao_rafa:'~30min' },
    { sessao:'+', foco:'Validação final (assíncrono · sem reunião)', frameworks:'Renomear frameworks com nome provisório · autorizar uso dos casos reais · aprovar nomes finais', fonte:'Assíncrono — Rafa lê e confirma', duracao_rafa:'~30min' }
  ],
  total_rafa:'~4h30 a 5h30 no total — 48 frameworks (32 com material detalhado) + 2 páginas centrais + validação final. Recomendação: dividir em 2-3 blocos de ~1h30-2h, NÃO fazer tudo de uma vez (cansa e cai a qualidade da revisão).',
  fontes_disponiveis:[
    'Transcrição Consultoria Presencial (26/05/2026) — 1273 linhas',
    '🆕 Aulas do Método Mazzei (Engenharia de Vendas PDF · Processo de Vendas · Transcrições Aulas — 904KB)',
    '🆕 Planejamentos em Grupo NS · 518KB · ~11000 linhas',
    '🆕 Planejamentos Individuais MAZZEI$TRIA · 882KB · ~18000 linhas',
    '🆕 Mentorias NS + MAZZEI$TRIA + NS 18/03 — total ~1.3MB',
    '🆕 WhatsApp MAZZEI$TRIA · 3MB · 35.365 linhas (out/2023-nov/2025)',
    'Notion de gestão atual da Rafa (operação)',
    '118 mentorias analisados (10 meses · CSV)',
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
// ESCOPO INCEPTION · o que está dentro e fora do contrato
// ================================================================
const ESCOPO_INCEPTION = {
  versao:'2026-05-28',
  mensagem_rafa:'É um produto robusto, somos uma equipe enxuta. Não vai dar pra fazer tudo de uma vez — precisamos priorizar, anotar as ideias pra não perder, mas focar em resolver UMA coisa por vez. O que entrego das trilhas é a documentação do método (pra você executar). Os materiais dos alunos eu entrego só os 4 principais abaixo. O resto, depois você decide: executa internamente ou a gente orça uma 2ª etapa de consultoria.',
  principio_estrategico:{
    titulo:'Por que o produto não vai entregar TUDO no Notion',
    evidencia:'The Path, aparentemente perfeito, tudo destrinchado, super detalhado → apenas 10% dos alunos aplicam. Workshop com IA, que entrega o essencial e o resto puxa sob demanda → mais de 50% aplicam. Excesso de material trava o aluno; ele entra em sobrecarga cognitiva e desiste.',
    regra:'Notion = apenas o essencial, comum a TODOS os alunos, resolvível rápido. Curseduca = todo material extenso, aulas, conteúdo aprofundado — consulta sob demanda, no momento em que o aluno precisa.',
    o_que_isso_protege:[
      'Reduz ansiedade do aluno pelo excesso de informação',
      'Aumenta taxa de aplicação real — que é o que entrega resultado',
      'Reduz tempo de produção (foco no que tem maior alavancagem)',
      'Mantém o método vivo e atualizável (Curseduca atualiza fácil; Notion entregue duplicado fica engessado)',
      'Sustenta a reputação do método pelo resultado dos alunos, não pelo volume de material'
    ],
    divisao_papeis:[
      { papel:'Inception (consultora)', faz:'Lapidação do método, definição de estrutura das trilhas, identificação de frameworks, definição de tema/título de cada aula ou material, briefing do objetivo (o que o aluno precisa sair sabendo/fazendo), construção das ferramentas Notion essenciais e das IAs do escopo.' },
      { papel:'Rafa (expert)', faz:'Conteúdo final das aulas (script, recursos didáticos, gravação, upload na Curseduca), conteúdo dos materiais extensos, decisões editoriais de tom e profundidade.' }
    ]
  },
  dentro_escopo:{
    titulo:'O que a Inception entrega nesta consultoria',
    grupos:[
      {
        grupo:'Documentação do método (para Rafa executar internamente)',
        itens:[
          'Dashboard completo de trilhas, frameworks e teses (este sistema)',
          'Briefing de lacunas para Rafa preencher (1h-1h30 assíncrono)',
          'Arquitetura de mentoria (ARQUITETURA_MENTORIA.md)',
          'Plano de extração + auditoria de gap dos frameworks'
        ]
      },
      {
        grupo:'4 ferramentas principais (materiais dos alunos)',
        itens:[
          { id:'notion-interno', nome:'Notion de acompanhamento dos mentorados (uso interno Bellz)', desc:'Sistema interno onde CP atualiza status do onboarding, dispara automações, registra entregáveis e acompanha progresso de cada aluno.', status:'em construção', prioridade:1 },
          { id:'notion-aluno', nome:'Notion do mentorado (entregável ao cliente)', desc:'Notion duplicável que o aluno recebe ao entrar. Contém: Plano Mestre (kanban acionável), trilhas com links pra Curseduca, CRM, ferramenta de documentação de reuniões.', status:'em construção', prioridade:2 },
          { id:'ia-plano-mestre', nome:'IA treinada pra gerar Plano Mestre a partir do Diagnóstico 360º', desc:'Recebe o relatório do Diagnóstico 360º + transcrição da sessão Rafa+aluno → gera Plano Mestre estruturado no template Notion. Validado pela Rafa antes de entregar.', status:'a criar', prioridade:3 },
          { id:'ias-fundacao', nome:'IAs aceleradoras do Sell-Z', desc:'Conjunto de IAs que apoiam as 7 ações concretas do Sell-Z (Plano de Vida × Negócio, Leitura do Tabuleiro, Setup PJ, Material de Oferta, Posicionamento, CRM, Ritual de Vendas). Mesmo conjunto serve tanto o Sell-Z vendido em cohort quanto aplicado individualmente no 2Z Level. ⚠ ESCOPO EXATO A DEFINIR — Rafa + Maiara precisam fechar o que entra/não entra antes de construir.', status:'a definir escopo', prioridade:4 }
        ]
      }
    ]
  },
  fora_escopo:{
    titulo:'O que NÃO está nesta consultoria',
    aviso:'Esses itens vão sair organizados como "caminho" no dashboard — Rafa decide depois se executa internamente ou se a gente orça uma 2ª etapa.',
    itens:[
      'Materiais educacionais detalhados de TODAS as 7 trilhas (aulas, playbooks, templates específicos por nicho)',
      'Ferramentas de criação de conteúdo (calendários editoriais, scripts de Reels/Stories, geradores de copy)',
      'Templates específicos por nicho (ex: PDF de oferta pra advocacia, pra arquitetura, pra saúde)',
      'IAs especializadas além das 4 do escopo (ex: IA criadora de oferta, IA construtora de posicionamento, IA mapeadora de concorrência)',
      'Operação contínua de CS / Consultora de Progresso (treinamento, contratação, gestão)',
      'Lançamento, copy de campanhas, criativos de tráfego',
      'Estrutura técnica de plataforma (Curseduca, automações, integração de checkout)'
    ]
  },
  principio_priorizacao:[
    'O que estiver no escopo vai ser entregue COMPLETO antes de abrir nova frente.',
    'Ideias novas que aparecerem viram registro em "backlog futuro" — não interrompem o ciclo atual.',
    'A Inception é equipe enxuta: paciência > velocidade, foco > escopo aberto.'
  ],
  backlog_futuro:[
    'IA Criadora de Ofertas (ja em Sprint 0 — virá em 2ª etapa)',
    'IA Construtora de Posicionamento (engenharia reversa)',
    'IA Mapeadora de Concorrência',
    'Templates de oferta multi-nicho (advocacia, arquitetura, saúde, social mídia, consultoria)',
    'Ferramentas de criação de conteúdo (calendário editorial, IA de Reels, scripts de Stories)',
    'IAs de aprofundamento das trilhas (Comercial, Oferta, Gestão, etc — uma por trilha mestra)'
  ]
};

// ================================================================
// ENTREGÁVEIS DA INCEPTION · página detalhada por entregável
// ================================================================
const ENTREGAVEIS = {
  'documentacao-metodo':{
    id:'documentacao-metodo',
    nome:'Documentação do Método',
    categoria:'Documentação',
    icone:'📚',
    publico:'Rafa (uso interno Bellz House)',
    plataforma:'Dashboard HTML + arquivos MD',
    status:'em construção (60% pronto)',
    prioridade:1,
    visao_geral:'O método inteiro extraído, organizado e documentado em estrutura navegável. Não é entregue ao aluno — é o ativo da Bellz House. Serve pra Rafa executar com qualquer equipe (CP, designer instrucional, copywriter futuro) e pra orientar a produção das aulas/materiais.',
    conteudo:[
      { item:'Dashboard navegável (este sistema)', formato:'HTML + JS local', desc:'7 trilhas, 73 frameworks, jornada do aluno, ecossistema de produtos. Atualizável.', status:'em construção' },
      { item:'Frameworks autorais documentados', formato:'Página por framework com Quando Acionar · Teses · Passo-a-passo', desc:'Cada framework com gatilhos concretos, base externa (quando há), teses literais da Rafa e passo-a-passo com ramificações.', status:'parcial (22 de 73 com material extraído)' },
      { item:'Briefing por material da trilha', formato:'Lista por trilha com Tema · Objetivo · Framework usado · Plataforma (Notion/Curseduca)', desc:'Pra cada material que cada trilha precisa ter: o que é, o que resolve no aluno, qual framework usa, onde mora (Notion ou Curseduca).', status:'a criar — entrega após sessão Rafa sábado' },
      { item:'Arquitetura de Mentoria', formato:'Documento MD', desc:'Visão geral da arquitetura completa: jornada do aluno, papéis, plataformas.', status:'pronto (ARQUITETURA_MENTORIA.md)' },
      { item:'Auditoria de Gap dos Frameworks', formato:'Documento MD', desc:'Mapa do que falta extrair, agrupado por trilha, com fonte provável nas transcrições e diagnóstico de viabilidade.', status:'pronto' },
      { item:'Briefing de Lacunas para Rafa', formato:'Documento MD', desc:'9 perguntas/pedidos específicos pra Rafa preencher os gaps que só ela pode definir. ~1h-1h30 assíncrono dela.', status:'pronto' }
    ],
    como_funciona:'Maiara extrai conhecimento das transcrições/áudios/PDFs da Rafa, organiza em estrutura navegável, marca como "parcial" (rascunho IA). Em sessão única com Rafa, vira "pronto" (validado). Dashboard fica como ativo permanente da Bellz House — Rafa pode usar com qualquer pessoa nova que entrar no time.',
    o_que_NAO_tem:[
      'Roteiro de aula completo (Rafa produz)',
      'Conteúdo final dos materiais (Rafa produz)',
      'Sistema de aprendizado dos alunos (é Curseduca + Notion, ver entregáveis específicos)'
    ]
  },
  'notion-aluno':{
    id:'notion-aluno',
    nome:'Notion do Mentorado',
    categoria:'Notion',
    icone:'📋',
    publico:'Alunos do 2Z Level (entregável final)',
    plataforma:'Notion · template duplicável',
    status:'em construção',
    prioridade:2,
    visao_geral:'Sistema operacional que o aluno recebe quando entra no 2Z Level. CONTÉM APENAS o essencial, comum a todos, resolvível rápido. NÃO contém aulas nem material extenso (isso fica na Curseduca). Tudo aqui é acionável — o aluno usa diariamente.',
    conteudo:[
      { item:'Plano Mestre do aluno', formato:'Kanban acionável (tarefas com check)', desc:'Mapa do ciclo personalizado: trilhas, metas, ações e rotinas. Aluno transita as tarefas no Kanban à medida que executa. CP acompanha. (Os acessos às aulas da Curseduca ficam DENTRO de cada ação do Plano Mestre — não é página separada.)', status:'em construção' },
      { item:'CRM Bellz', formato:'Banco de dados Notion · condicional', desc:'Pipeline captação → qualificação → diagnóstico → apresentação → fechamento, com dash de followups em atraso. CONDICIONAL: se o aluno já usa RD Station/outro CRM, não usa este. Se não tem, usa o nosso. (Mentorado preenche · CP acompanha)', status:'em construção' },
      { item:'Documentação de Reuniões', formato:'Template Notion + dash · condicional', desc:'Histórico de reuniões × resultados, transcrição, análise e documentação individual. Recebe os feedbacks da IA Analista de Reuniões. CONDICIONAL: se já tem ferramenta própria, mantém. (Mentorado preenche · CP acompanha)', status:'em construção' },
      { item:'Lista de Produtos/Serviços', formato:'Tabela simples · OBRIGATÓRIA', desc:'Nome · ticket · descrição · regra de entrega. Alimenta o CRM e serve pra CP consultar e lembrar o que cada mentorado faz na hora de orientar. Obrigatória mesmo pra quem tem esteira simples.', status:'a criar' },
      { item:'Plano de Foco semanal', formato:'Template Notion · ritual', desc:'Inegociável × Importante × Sabotador da semana. Rotina fixa de todos. É o filtro de priorização que a Rafa usa.', status:'a criar' },
      { item:'Banco de Depoimentos', formato:'Database Notion · condicional', desc:'Organiza depoimentos por categoria, com tags, prints e links de vídeo. Inclui na mesma página o roteiro de como coletar. CONDICIONAL: se já tem organizado, não precisa.', status:'a criar' },
      { item:'Checklist Setup PJ', formato:'Lista acionável', desc:'O que precisa estar configurado pra operar como CNPJ (separação PF/PJ, conta jurídica, contador, marca no CPF). Possível redundância com o Diagnóstico 360º — a definir.', status:'⚠ aguardando informações Rafa' },
      { item:'Plano de Vida × Negócio', formato:'Template Notion (Sell-Z)', desc:'Output da 1ª ação do Sell-Z (aplicado no 2Z Level): identidade pretendida, estilo de vida e modelo de negócio coerente. Fica documentado no Notion do aluno.', status:'a criar' },
      { item:'Mapa de Canais de Aquisição', formato:'Template Notion (Tração)', desc:'Os canais que o aluno já tem, priorizados por esforço × impacto. Atualiza trimestral.', status:'a mapear' },
      { item:'Banco de Parceiros', formato:'Database Notion (Indicação)', desc:'Parceiros de indicação mão-dupla, com comissão e tracking. Cresce ao longo do tempo.', status:'a mapear' },
      { item:'Mapa de Funções (o que delegar)', formato:'Template Notion (Liderança)', desc:'O que tira do dono × o que delegar. Evolui conforme o negócio cresce.', status:'a mapear' },
      { item:'Diário de Decisões', formato:'Template Notion (Mentalidade)', desc:'Registro das decisões importantes + o critério usado. Treina decisão por lógica, não por medo.', status:'a mapear' },
      { item:'Formulário de Pré-Qualificação', formato:'Form + integração Pluga', desc:'Modelo do formulário em 2 camadas que captura o lead e joga no CRM. (Ver explicação de "Pluga" no resumo da Inception.)', status:'a criar' }
    ],
    como_funciona:'No onboarding, o aluno recebe convite pra duplicar o template. CP configura junto na primeira sessão (15min). O aluno usa diariamente — CRM, Plano Mestre, documentação de reuniões. Atualizações no Notion-mãe da Bellz se propagam pros alunos via republicação pontual (não automática — protege estabilidade).',
    o_que_NAO_tem:[
      'Aulas das trilhas (ficam na Curseduca)',
      'Material extenso, playbooks longos, e-books (Curseduca)',
      'IAs específicas por trilha (backlog futuro)',
      'Calendário editorial / scripts de conteúdo (backlog futuro)',
      'Templates por nicho (backlog futuro)'
    ]
  },
  'notion-interno':{
    id:'notion-interno',
    nome:'Notion Interno Bellz House',
    categoria:'Notion',
    icone:'🛠️',
    publico:'Equipe Bellz (Rafa + Consultora de Progresso + futuros)',
    plataforma:'Notion · workspace Bellz',
    status:'em construção',
    prioridade:1,
    visao_geral:'Sistema operacional interno da Bellz House pra gerir os alunos. Não é entregue ao aluno — fica com o time. CP usa diariamente pra atualizar onboarding, disparar automações, registrar entregas e acompanhar progresso. Rafa usa pra leitura macro antes das sessões 1:1.',
    conteudo:[
      { item:'Banco de dados de Alunos', formato:'Database Notion com status, tags, links', desc:'Cada aluno tem ficha com: dados do contrato, status do onboarding, Diagnóstico 360º, Plano Mestre, sessões realizadas, NPS, observações da CP.', status:'em construção' },
      { item:'Pipeline de Onboarding', formato:'Kanban', desc:'Etapas do onboarding com checklist por aluno. CP marca progresso, dispara mensagens automatizadas, garante que o aluno chega no Plano Mestre 100% pronto.', status:'em construção' },
      { item:'Banco de Sessões', formato:'Página por sessão (planejamento, hot seat, mesa)', desc:'Registro de cada sessão realizada com links de gravação, transcrição, presentes, principais decisões. Permite consulta histórica e extração de padrões.', status:'a criar' },
      { item:'Dashboard de Indicadores', formato:'Páginas vinculadas com fórmulas', desc:'NPS médio, taxa de aplicação das tarefas do Plano Mestre, alunos em risco, alunos prontos pra renovação.', status:'a criar' },
      { item:'Sistema de tags transversais', formato:'Multi-select Notion', desc:'Marca alunos por: trilha em foco, fase da jornada, perfil DISC, nicho. Permite filtros rápidos pra reunião do time.', status:'a criar' }
    ],
    como_funciona:'CP atualiza diariamente. Rafa entra pra ler antes de sessões 1:1 (10min de preparação substitui horas perdidas em reunião sem contexto). Dashboard de indicadores serve pra reunião semanal do time (15-20min, leitura rápida).',
    o_que_NAO_tem:[
      'Material de aulas (Curseduca)',
      'Conteúdo educacional pros alunos (Notion do Mentorado)',
      'Marketing automation / lançamento (fora do escopo)',
      'Financeiro avançado (fluxo de caixa, DRE — Rafa usa planilha própria)'
    ]
  },
  'curseduca':{
    id:'curseduca',
    nome:'Curseduca Estruturada',
    categoria:'Curseduca',
    icone:'🎓',
    publico:'Alunos do 2Z Level e Sell-Z (entregável final)',
    plataforma:'Curseduca (curseduca.com)',
    status:'em construção',
    prioridade:'documentação (não execução)',
    instrucao_rafa:'IMPORTANTE: a Inception NÃO acessa nem configura a Curseduca diretamente. O que entregamos é a DOCUMENTAÇÃO de como a plataforma deve ficar organizada — o que vai ter em cada trilha, a estrutura, os materiais. Você e a CP configuram lá dentro a partir dessa documentação. NÃO entregamos: capas das aulas, legendas/descrições dos conteúdos, edição de vídeo, design da plataforma. Isso é produção sua/da CP.',
    visao_geral:'Plataforma de aprendizado dos alunos. Contém TODO material extenso: aulas, playbooks, recursos didáticos, vídeos. Aluno consulta sob demanda. A Inception entrega a DOCUMENTAÇÃO da organização (esta página + o Plano de Ensino); a Rafa e a CP configuram a plataforma e produzem o conteúdo. Não acessamos a Curseduca diretamente.',
    conteudo:[
      { item:'Estrutura organizada por trilha', formato:'Categorias e subcategorias na Curseduca', desc:'7 trilhas como categorias principais (Comercial, Oferta, Gestão, Posicionamento, Tração, Liderança, Mentalidade). Cada trilha com seus materiais aninhados.', status:'a criar' },
      { item:'Padrão visual e descritivo', formato:'Template de página', desc:'Cada material/aula segue padrão visual: capa, descrição curta, framework usado, duração, recursos complementares.', status:'a criar' },
      { item:'Boas-vindas + vídeo da Rafa', formato:'Vídeo + documento de regras', desc:'Vídeo de 3-5min da Rafa (que ela grava) + documento de regras + ritual de mentoria. Aluno consome no onboarding.', status:'a criar (Rafa grava)' },
      { item:'Banco de Masterclasses', formato:'Vídeos catalogados', desc:'Toda mesa/masterclass gravada (incluindo as anteriores) catalogada por tema + por trilha. Aluno acessa pelos 2 caminhos.', status:'a criar' },
      { item:'Aulas das trilhas', formato:'Vídeo + recursos + framework de referência', desc:'Conteúdo principal das trilhas. Cada aula tem: vídeo (Rafa grava), recursos didáticos (Rafa monta), referência ao framework do método (estrutura entregue pela Inception).', status:'⚐ Rafa produz · Inception entrega briefing' },
      { item:'Materiais complementares', formato:'PDF, planilha, link', desc:'Documentos de apoio extensos (templates de contrato, planilhas de cálculo de margem, exemplos de PDF de oferta).', status:'⚐ Rafa produz · Inception entrega briefing' }
    ],
    como_funciona:'Aluno acessa Curseduca a partir de link dentro do Notion (não decora URL nem login complexo). Consome trilha por trilha, conforme a indicação do Plano Mestre. Pode buscar por tema (busca interna) quando lembra de uma masterclass específica. Curseduca registra progresso automaticamente — CP usa esse dado pra acompanhar aplicação.',
    o_que_NAO_tem:[
      'Materiais que são ferramentas operacionais (esses ficam no Notion)',
      'CRM, Plano Mestre, documentação de reunião (Notion)',
      'Comunicação direta com a Rafa (WhatsApp Business)',
      'IAs do método (separadas, ver entregáveis específicos)'
    ]
  },
  'diagnostico-360':{
    id:'diagnostico-360',
    nome:'Diagnóstico 360º',
    categoria:'Sistema Central',
    icone:'📊',
    publico:'Aluno preenche (entrada) · Rafa/CP processa (interno)',
    plataforma:'Formulário Notion (coleta) + Squad 2Z Level no Claude Code (análise) + PDF (entrega)',
    status:'em construção',
    prioridade:1,
    link_externo:{ url:'https://inceptionxp.com/diagnostico-2z/', label:'🔗 Abrir o Diagnóstico completo para avaliação' },
    instrucao_rafa:'Rafa: o miniapp do diagnóstico do aluno já está PRONTO. Clique no botão acima, navegue como se fosse sua aluna preenchendo, e deixe seus comentários nesta página (bloco no rodapé). Os instrumentos estão aguardando a sua validação — não precisa criar nada, só avaliar o que está escrito e me dizer o que ajustar.',
    fluxo_aluno:[
      'A aluna acessa o miniapp e preenche os 4 instrumentos no ritmo dela (pode parar e voltar — salva sozinho).',
      'Ao enviar, as respostas brutas vão para o sistema interno (pasta do mentorado no Claude Code).',
      'O Squad 2Z Level processa: calcula o Score-Z, lê o DISC e as respostas abertas, e gera o relatório do Diagnóstico 360º (PDF com a identidade da mentoria).',
      'A Rafa revisa o relatório (~30min) e valida.',
      'Na sessão 1:1 de Plano Mestre, o relatório vira a base do plano de ação personalizado da aluna.'
    ],
    visao_geral:'Sistema de mapeamento do ponto de partida do aluno. Herda dos Briefings 1 e 2 antigos mas adiciona a camada nova de Maturidade dos 7 Pilares (Score-Z). O aluno preenche 4 instrumentos no miniapp — captura resposta bruta. O Squad 2Z Level processa internamente e gera o relatório Consolidado com ID visual da mentoria, entregue na sessão de Plano Mestre junto com o Notion do mentorado.',
    conteudo:[
      { item:'Instrumento 1 · DISC (Perfil Comportamental)', formato:'12 grupos de 4 adjetivos · ~12min', desc:'Análise comportamental validada (Marston, 1928). Alimenta o algoritmo de personalização do Plano Mestre. D/I/S/C define abordagem do plano (hard comercial / relacionamento / processo / dados).', status:'aguardando validação Rafa' },
      { item:'Instrumento 2 · Score-Z (Maturidade dos 7 Pilares)', formato:'35 perguntas mistas · ~40min', desc:'CAMADA NOVA. Mede maturidade em Comercial · Oferta · Gestão · Posicionamento · Tração · Liderança · Mentalidade. Perguntas simples do dia a dia; a IA interpreta a maturidade. Score 0-100 por pilar + radar.', status:'aguardando validação Rafa' },
      { item:'Instrumento 3 · Indicadores e Metas', formato:'~45min (pede dados em mãos)', desc:'Vendas/recebimento 12 meses + margem + conversão + metas semestre/ano + 3 metas qualitativas. Alimenta o App de Métricas (não fica no Plano Mestre).', status:'aguardando validação Rafa' },
      { item:'Instrumento 4 · Briefing Estratégico', formato:'12 perguntas dissertativas · ~25min', desc:'Primeiro instrumento (baixa fricção): a aluna fala dela — dores, origem, o que a move. Captura nuances que a IA usa pra escrever a análise com profundidade.', status:'aguardando validação Rafa' },
      { item:'Agente Diagnosticador (Squad)', formato:'Skill no Claude Code', desc:'Processa os 4 inputs brutos (JSON exportados do Notion). Calcula scores, faz cruzamentos, gera análise qualitativa estruturada.', status:'a criar' },
      { item:'Agente Designer (Squad)', formato:'Skill com template visual', desc:'Gera o PDF Diagnóstico Consolidado com ID visual da mentoria (template Canva/HTML estilizado). Entrega final que vai com a Rafa na sessão de Plano Mestre.', status:'a criar' },
      { item:'Reaplicação trimestral do pilar prioritário', formato:'Formulário curto Notion (5-7 perguntas) + Squad processa', desc:'A cada 3 meses, aluno reaplica SÓ o pilar prioritário. Squad compara com score anterior e mostra evolução. Resultado entra na revisão do Plano Mestre.', status:'a criar' }
    ],
    como_funciona:'1) CP envia link dos 4 formulários no onboarding · 2) Aluno preenche em 2 semanas (~2h total) · 3) CP exporta respostas brutas pra pasta /mentorados/[aluno]/ no Claude Code · 4) CP roda @squad-2z-level processar · 5) @diagnosticador analisa, @designer gera PDF · 6) Rafa revisa em 30min (CHECKPOINT 1) · 7) PDF vai pra sessão 1:1 de Plano Mestre.',
    o_que_NAO_tem:[
      'Aluno NÃO conversa com IA — só preenche formulário (decisão técnica, captura resposta bruta)',
      'PDF do Plano Mestre — o Plano vive no Notion, não em PDF (esse entregável só gera o PDF do Diagnóstico)',
      'Roda da Vida — instrumento separado, depende do PDF original da Rafa (backlog)',
      'Análise psicológica profunda — é diagnóstico de negócio, não terapia',
      'Pesquisa de público do nicho — essa é a IA Construtora de ICP (entregável separado)'
    ]
  },
  'plano-mestre':{
    id:'plano-mestre',
    nome:'Plano Mestre',
    categoria:'Sistema Central',
    icone:'🎯',
    publico:'Aluno (vive no Notion dele) · Rafa valida · CP acompanha',
    plataforma:'Notion (Kanban acionável) + Squad 2Z Level gera via MCP Notion',
    status:'em construção',
    prioridade:2,
    visao_geral:'Output central do produto. Mapa estratégico do aluno para 6 meses — gerado pelo Squad a partir do Diagnóstico 360º + transcrição da sessão 1:1 com Rafa. Vive no Notion do mentorado como Kanban acionável. Princípio literal da Rafa: 3 ações que demoram 1 mês pra cumprir bem feito. Qualidade > quantidade.',
    conteudo:[
      { item:'Seção 1 · Cabeçalho', formato:'Padrão automático', desc:'Foto, nome, nicho, ciclo atual, datas de início e revisão (sempre 6 meses depois).', status:'padrão · a definir template' },
      { item:'Seção 2 · Síntese Estratégica', formato:'Gerada pela IA, validada pela Rafa', desc:'Perfil DISC + impacto na execução. Radar Score-Z dos 7 pilares. 3 hipóteses de priorização → Rafa escolhe 1 na sessão.', status:'a criar' },
      { item:'Seção 3 · As 3 Ações do Ciclo', formato:'Cards Kanban no Notion', desc:'Cada ação: título · pilar · frameworks ativados (links pro dash) · sub-tarefas (child pages) · material/instruções de como fazer (links pra aulas Curseduca + IAs) · prazo · critério de feito.', status:'a criar' },
      { item:'Seção 4 · Rotinas e Rituais', formato:'Lista no Notion organizada por frequência', desc:'Diárias · Semanais · Mensais · Outras. Cada rotina com link pro material que explica como fazer + onde registrar (Notion ou App de Métricas).', status:'a criar' },
      { item:'Seção 5 · Metas do Ciclo', formato:'Página Notion estruturada', desc:'Meta vendas semestre · meta vendas ano · meta ticket médio · 3 metas qualitativas · mensagem-âncora do ciclo (frase-mantra). Indicadores mensais vão pro App de Métricas.', status:'a criar' },
      { item:'Agente Plano Mestre (Squad)', formato:'Skill estrategista no Claude Code', desc:'Algoritmo de priorização (3 hipóteses) · gerador das 3 ações · personalizador de rotinas (considera DISC + estágio do negócio + condicionais).', status:'a criar' },
      { item:'Agente Notion Sync (Squad)', formato:'Skill com MCP Notion', desc:'Preenche o Notion do mentorado direto via MCP: cria página, monta Kanban, avalia condicionais (CRM próprio? doc-reunião externa? banco depoimentos?), insere links pras aulas e IAs.', status:'a criar' }
    ],
    como_funciona:'1) PRÉ-SESSÃO: @squad-2z-level já gerou Diagnóstico Consolidado · 2) SESSÃO 1:1 (90min): Rafa discute 3 hipóteses com aluno, valida priorização, ajusta 3 ações, define mensagem-âncora (gravada Otter/Descript) · 3) PÓS-SESSÃO: CP joga transcrição na pasta do aluno + roda @plano-mestre · 4) @plano-mestre gera Plano com base no Diagnóstico + transcrição · 5) Rafa revisa em 20min (CHECKPOINT 2) · 6) @notion-sync preenche Notion do mentorado direto via MCP · 7) CP avisa aluno + agenda 1º check-in em 2 semanas.',
    o_que_NAO_tem:[
      'Mais que 3 ações principais (princípio Rafa: qualidade > quantidade)',
      'Indicadores mensais (esses vão pro App de Métricas)',
      'Conteúdo educativo embutido (Curseduca, com link no Notion)',
      'Plano financeiro detalhado (planilha de fluxo de caixa, separada)',
      'Cronograma diário (cada aluno tem seu ritmo)'
    ]
  },
  'squad-2z-level':{
    id:'squad-2z-level',
    nome:'Squad 2Z Level (Claude Code)',
    categoria:'Sistema Central',
    icone:'⚙️',
    publico:'Rafa + CP (uso interno)',
    plataforma:'Claude Code · Squad de agentes + skills + MCP Notion',
    status:'a criar',
    prioridade:1,
    visao_geral:'Sistema operacional interno que processa o Diagnóstico 360º e gera o Plano Mestre. Compõe-se de 4 agentes especializados (diagnosticador, designer, plano-mestre, notion-sync) que rodam em sequência com 2 checkpoints de validação humana da Rafa. Substitui horas de trabalho manual da CP por execução automatizada com supervisão.',
    conteudo:[
      { item:'@diagnosticador', formato:'Agente com 5 skills', desc:'Skills: analisador-disc · calculadora-score-z · analisador-indicadores · sintetizador-qualitativo · gerador-radar. Processa os 4 JSONs de input e gera análise estruturada.', status:'a criar' },
      { item:'@designer-diagnostico', formato:'Agente com template visual', desc:'Aplica o template visual da Bellz House sobre a análise estruturada. Output: PDF Diagnóstico 360º Consolidado pronto pra Rafa revisar.', status:'a criar' },
      { item:'@plano-mestre', formato:'Agente estrategista com 4 skills', desc:'Skills: algoritmo-priorizacao · gerador-3-acoes · personalizador-rotinas · mensagem-ancora. Considera DISC + Score-Z + estágio do negócio + condicionais.', status:'a criar' },
      { item:'@notion-sync', formato:'Agente com MCP Notion', desc:'Cria página do aluno · monta Kanban Plano Mestre · avalia condicionais (CRM, doc-reunião, banco depoimentos) · insere links pras aulas Curseduca e IAs do aluno.', status:'a criar' },
      { item:'Algoritmo de Decisões', formato:'Lógica de regras no agente plano-mestre', desc:'4 camadas: Priorização de Pilar (Posicionamento antes de Comercial se ambos baixos) · Adaptação por DISC (D/I/S/C muda abordagem) · Adaptação por Estágio (<R$5k vs >R$30k) · Sinais-Vermelho (gatilhos automáticos: sem margem? sem ICP?).', status:'a definir com Rafa' },
      { item:'Pasta /mentorados/[aluno]/', formato:'Estrutura de arquivos no Claude Code', desc:'CP cria uma pasta por aluno. Coloca os JSONs dos formulários + transcrição da sessão 1:1. Squad lê tudo e executa o fluxo completo.', status:'padrão a documentar' }
    ],
    como_funciona:'FLUXO COMPLETO: 1) CP cria /mentorados/[nome-aluno]/ · 2) CP coloca os 4 JSONs (disc, score-z, indicadores, briefing) · 3) CP roda @squad-2z-level processar · 4) @diagnosticador analisa · 5) @designer-diagnostico gera PDF · 6) ⏸ CHECKPOINT 1: Rafa revisa PDF, aprova · 7) Acontece sessão 1:1 (90min, gravada) · 8) CP joga transcrição na pasta · 9) @plano-mestre gera plano · 10) ⏸ CHECKPOINT 2: Rafa valida e ajusta · 11) @notion-sync preenche Notion do mentorado via MCP · 12) CP notifica aluno. Tempo total Rafa por aluno: ~2h30min (vs 4-5h hoje).',
    o_que_NAO_tem:[
      'Aluno não acessa o Squad — é exclusivamente uso interno Rafa/CP',
      'Não substitui sessão 1:1 — sessão acontece entre os 2 checkpoints',
      'Não substitui análise da Rafa nos encontros de Z-Lab (comportamento não-verbal)',
      'Não processa pagamentos, não envia emails, não opera o app de métricas',
      'Não gera conteúdo educacional (Curseduca é separada)'
    ]
  },
  'app-metricas':{
    id:'app-metricas',
    nome:'App de Métricas',
    categoria:'App Externo',
    icone:'📈',
    publico:'Alunos (entregável final · em desenvolvimento)',
    plataforma:'App próprio (Rafa + Marco · em desenvolvimento)',
    status:'em desenvolvimento (Rafa + Marco · FORA do escopo Inception)',
    prioridade:'externa',
    visao_geral:'Aplicativo próprio que a Rafa está desenvolvendo com o Marco. Substitui planilhas. Os alunos do 2Z Level vão usar pra monitorar métricas comerciais e financeiras. A Inception NÃO desenvolve esse app — apenas integra com o Plano Mestre e o Diagnóstico 360º (que captam os dados de entrada).',
    conteudo:[
      { item:'Indicadores comerciais', formato:'App', desc:'Vendas mensais (R$) · quantidade de vendas · ticket médio · taxa de conversão · margem.', status:'em dev Marco + Rafa' },
      { item:'Indicadores financeiros', formato:'App', desc:'Fluxo de caixa (diário ou semanal conforme volume) · entradas · saídas · saldo · custos fixos.', status:'em dev Marco + Rafa' },
      { item:'Metas vs Realizado', formato:'App', desc:'Compara metas semestrais e anuais do Plano Mestre com o realizado mês a mês.', status:'em dev Marco + Rafa' },
      { item:'Integração com Diagnóstico 360º (Instrumento 3)', formato:'Import inicial', desc:'Dados dos últimos 12 meses do Briefing 2 (Instrumento 3 do Diagnóstico) entram como histórico inicial no app.', status:'a definir interface' },
      { item:'Integração com Plano Mestre (Seção 5)', formato:'Sync de metas', desc:'Metas semestrais/anuais definidas no Plano Mestre alimentam o app. Aluno vê progresso real-time.', status:'a definir interface' }
    ],
    como_funciona:'Aluno preenche dados no app conforme cadência (diária pra fluxo de caixa de volume alto, semanal pra prestador de serviço). App mostra dashboards. Diagnóstico 360º manda os 12 meses de histórico como base. Plano Mestre manda as metas. CP acompanha indicadores no Notion interno (via export ou integração futura). RAFA acompanha indicadores estratégicos nas sessões.',
    o_que_NAO_tem:[
      '❌ NÃO está no escopo da Inception desenvolver o app',
      '❌ NÃO substitui o Notion (Notion é processo, app é métrica)',
      '❌ NÃO substitui o CRM (CRM é pipeline, app é resultado)',
      '❌ NÃO entrega o app pronto — depende do andamento Rafa + Marco'
    ]
  },
  'playbook-treinamento':{
    id:'playbook-treinamento',
    nome:'Playbook de Treinamento Rafa + CP',
    categoria:'Treinamento',
    icone:'🎓',
    publico:'Rafa + Consultora de Progresso (entrega final)',
    plataforma:'HTML interativo + vídeos Loom + checklists imprimíveis',
    status:'a criar (entrega FINAL)',
    prioridade:'última',
    visao_geral:'Entrega final da consultoria. Depois que TODOS os sistemas estão prontos (Squad, Notion, Curseduca estruturada, IAs do aluno, app integrado), criamos o playbook de operação. Cobre o passo a passo de TUDO que Rafa e CP precisam saber pra rodar o produto sozinhas.',
    conteudo:[
      { item:'Manual operacional do Squad 2Z Level', formato:'HTML com print/vídeo de cada passo', desc:'Como criar pasta /mentorados/[aluno] · como rodar cada agente · como ler outputs · como pedir ajustes · troubleshooting.', status:'a criar' },
      { item:'Fluxo completo do mentorado', formato:'Diagrama interativo + checklist', desc:'Do onboarding ao encerramento de ciclo: cada etapa, quem faz, em quanto tempo, com qual ferramenta, com qual output.', status:'a criar' },
      { item:'Como treinar e usar as IAs do aluno', formato:'Aulas curtas (Loom) + scripts de chamada', desc:'ICP, Proposta Comercial (Claude — como Rafa configura e dá aula introdutória) + Analista de Reuniões (ChatGPT — como cria o GPT customizado).', status:'a criar' },
      { item:'Gestão do Notion Interno Bellz', formato:'HTML com tour visual', desc:'Como CP atualiza banco de alunos · como dispara automações · como lê o dashboard · como aciona Rafa em casos de risco.', status:'a criar' },
      { item:'Rotina diária da CP', formato:'Checklist imprimível', desc:'O que CP faz toda manhã (check de alunos em atraso, follow-up de pendências, prep de sessões do dia).', status:'a criar' },
      { item:'Rotina semanal da Rafa', formato:'Checklist imprimível', desc:'Quando Rafa faz revisões, quando reaplicações, quando reuniões de revisão de ciclo.', status:'a criar' },
      { item:'Troubleshooting comum', formato:'FAQ navegável', desc:'IA viajou? Aluno não preencheu? Faltam dados? Notion deu erro? Squad não respondeu? — solução pra cada caso.', status:'a criar' },
      { item:'Como evoluir o método', formato:'Guia de manutenção', desc:'Quando aparecer framework novo, como atualizar dashboard, prompts das IAs, templates do Plano Mestre.', status:'a criar' }
    ],
    como_funciona:'Sessão de treinamento de 8h (1 dia inteiro ou 2 turnos de 4h) com Rafa + CP. Maiara conduz pelo playbook ao vivo, com casos reais simulados. Cada sessão gravada (vira parte do playbook). Após o treinamento, Rafa e CP operam sozinhas por 2 semanas com Maiara em standby pra dúvidas. Depois disso, Maiara desliga do operacional.',
    o_que_NAO_tem:[
      'Suporte contínuo (apenas standby de 2 semanas pós-treinamento)',
      'Treinamento de novas pessoas que entrem no time depois (playbook é o material — Rafa treina internamente)',
      'Atualização do método (Rafa atualiza com o time dela)'
    ]
  }
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
// ================================================================
// PLANO DE ENSINO · aulas que vão na Curseduca, por trilha
// Inception entrega o briefing (tema + objetivo + framework base).
// Rafa produz o conteúdo final (script, recursos, gravação).
// ================================================================
const PLANO_ENSINO = {
  intro:'Cada aula nasce de um framework do método. A Inception entrega o briefing (tema, objetivo e framework base); a Rafa grava o conteúdo na Curseduca. Objetivo de cada aula descrito em "ao fim, o aluno consegue…" (andragogia: toda aula leva a uma ação concreta).',
  legenda:'🎬 Rafa grava · 👤 Convidado especialista · ⏱ duração estimada',
  trilhas:[
    { id:'comercial', nome:'Comercial', cor:'verde', aulas:[
      { num:'T1.1', titulo:'Da primeira conversa ao pix', objetivo:'Conduzir uma sessão de venda consultiva completa, da qualificação ao fechamento, sem mandar preço solto no WhatsApp.', framework:'Sessão de Venda Consultiva', dur:'~25min' },
      { num:'T1.2', titulo:'Transformando o "vou pensar" em decisão', objetivo:'Antecipar e contornar as objeções mais comuns perguntando (não argumentando), e identificar as 3 dúvidas reais por trás do "vou pensar".', framework:'5 Regras de Objeção + 3 Dúvidas', dur:'~22min' },
      { num:'T1.3', titulo:'Enxergando onde o dinheiro trava no funil', objetivo:'Mapear as etapas do funil, medir a conversão de cada uma e descobrir em qual etapa está vazando dinheiro.', framework:'Matemática do Funil', dur:'~20min' },
      { num:'T1.4', titulo:'Qualificação: com quem vale a pena falar', objetivo:'Definir o ICP estrutural e usar formulário de pré-qualificação pra parar de gastar tempo com quem não fecha.', framework:'ICP Estrutural + Qualificação de Lead', dur:'~18min' },
      { num:'T1.5', titulo:'Decidindo com números, não com achismo', objetivo:'Ler os indicadores comerciais essenciais e tomar decisão com base em matemática, não em sensação.', framework:'Leitura de Indicadores', dur:'~20min' },
      { num:'T1.6', titulo:'Aumentando a conversão com ajustes de abordagem', objetivo:'Adaptar a condução da venda ao nível de consciência do cliente.', framework:'Leitura por Nível de Consciência', dur:'~18min' },
      { num:'T1.7', titulo:'O pós-venda que gera indicação e recompra', objetivo:'Estruturar o pós-venda pra transformar cliente satisfeito em indicação e recompra.', framework:'Pós-venda Comercial', dur:'~15min' }
    ]},
    { id:'oferta', nome:'Oferta e Produto', cor:'laranja', aulas:[
      { num:'T2.1', titulo:'A anatomia da oferta blindada', objetivo:'Montar uma oferta que comunica transformação antes do preço — e entender por que etapa não é produto.', framework:'Anatomia do PDF + Etapa ≠ Produto', dur:'~25min' },
      { num:'T2.2', titulo:'A apresentação comercial que comunica valor', objetivo:'Estruturar o material de oferta (PDF/HTML) que conduz o cliente à decisão.', framework:'PDF de Oferta Irresistível', dur:'~22min' },
      { num:'T2.3', titulo:'Cobrando o que vale sem medo', objetivo:'Precificar pela transformação entregue, não pela hora trabalhada.', framework:'Precificação por Valor', dur:'~20min' },
      { num:'T2.4', titulo:'O valor do seu tempo', objetivo:'Calcular quanto vale a sua hora em cada serviço e usar isso pra decidir o que delegar.', framework:'Cálculo do Valor do Tempo', dur:'~18min' },
      { num:'T2.5', titulo:'Da venda única à esteira que sustenta o mês', objetivo:'Construir uma esteira coerente onde o cliente entra e tem caminho pra continuar.', framework:'Esteira de Produtos', dur:'~20min' }
    ]},
    { id:'gestao', nome:'Gestão e Financeiro', cor:'verde', aulas:[
      { num:'T3.1', titulo:'De autônomo a empresário: a separação que muda tudo', objetivo:'Separar PF de PJ (dinheiro e identidade) e definir pró-labore.', framework:'Análise PF/PJ', dur:'~20min' },
      { num:'T3.2', titulo:'Sabendo se o mês fechou no azul', objetivo:'Ler a planilha de fluxo de caixa e identificar processos falhos antes que o mês feche no vermelho.', framework:'Leitura de Fluxo de Caixa', dur:'~22min' },
      { num:'T3.3', titulo:'Onde o seu faturamento está vazando', objetivo:'Calcular margem real por serviço e caçar os "ralos" antes de mexer no preço.', framework:'Mapa de Custos e Margem', dur:'~20min' },
      { num:'T3.4', titulo:'Quando (e quem) contratar de apoio', objetivo:'Decidir o timing e o perfil da contratação de apoio com base em caixa e fase do negócio.', framework:'Critérios de Contratação de Apoio', dur:'~18min' }
    ]},
    { id:'posicionamento', nome:'Posicionamento', cor:'azul', aulas:[
      { num:'T4.1', titulo:'Saindo da guerra de preço', objetivo:'Mover o cliente de "te comparar com qualquer um" para "te escolher antes de comparar" (As 3 Cadeiras).', framework:'As 3 Cadeiras', dur:'~22min' },
      { num:'T4.2', titulo:'O que faz o cliente te escolher antes de comparar', objetivo:'Descobrir os diferenciais reais (atributos verificáveis, não adjetivos) via engenharia reversa.', framework:'Engenharia Reversa + Diferenciação por Atributos', dur:'~22min' },
      { num:'T4.3', titulo:'Seu nome ou o nome da empresa?', objetivo:'Decidir entre marca pessoal e corporativa com critério estratégico, e registrar a marca no CPF.', framework:'Marca Pessoal × Corporativa', dur:'~18min' },
      { num:'T4.4', titulo:'Sua presença comunica o seu preço', objetivo:'Alinhar o cenário visual (escritório, stories, atelier) ao ticket que você cobra.', framework:'Investimento em Presença', dur:'~15min' },
      { num:'T4.5', titulo:'Depoimento que vende (não elogio)', objetivo:'Coletar e organizar depoimentos estruturados com antes/depois e números.', framework:'Depoimento × Elogio', dur:'~18min' }
    ]},
    { id:'tracao', nome:'Tração e Aquisição', cor:'laranja', aulas:[
      { num:'T5.1', titulo:'Mapeando os canais que você já tem', objetivo:'Identificar e priorizar os canais de aquisição de baixo custo que já existem.', framework:'Mapa de Canais', dur:'~18min' },
      { num:'T5.2', titulo:'Transformando indicação em sistema', objetivo:'Sair da indicação passiva para um sistema ativo com parceiros e comissão.', framework:'Indicação Estruturada', dur:'~22min' },
      { num:'T5.3', titulo:'A regra do link, não do telefone', objetivo:'Implementar o protocolo de qualificação para indicações (BNI, networking, parceiros).', framework:'Regra do Link, não Telefone', dur:'~12min' },
      { num:'T5.4', titulo:'Escalando os canais que funcionam', objetivo:'Operar e escalar os funis de aquisição que já dão resultado.', framework:'Escala de Funis', dur:'~20min' },
      { num:'T5.5', titulo:'Clientes pelo YouTube / LinkedIn / TikTok', objetivo:'Canais de aquisição de conteúdo — aulas com especialistas convidados.', framework:'(convidado)', dur:'a definir', convidado:true }
    ]},
    { id:'lideranca', nome:'Liderança e Time', cor:'verde', aulas:[
      { num:'T6.1', titulo:'Saindo do gargalo: o que delegar primeiro', objetivo:'Mapear o que tira do dono e definir a primeira função a delegar.', framework:'Mapa de Funções + Valor do Tempo', dur:'~18min' },
      { num:'T6.2', titulo:'A hora certa de contratar', objetivo:'Reconhecer os sinais de "contratar para crescer" vs "crescer para contratar".', framework:'Timing de Contratação', dur:'~18min' },
      { num:'T6.3', titulo:'Formando o seu time comercial', objetivo:'Estruturar papéis (SDR, closer) e treinar pelo playbook do método.', framework:'Estrutura de Time Comercial', dur:'~22min' },
      { num:'T6.4', titulo:'Liderando para o time entregar', objetivo:'Delegar desenhando, acompanhando e ajustando — sem virar gargalo nem passar a mão.', framework:'Liderança e Delegação', dur:'~20min' },
      { num:'T6.5', titulo:'Quando e como desligar alguém', objetivo:'Conduzir um desligamento como decisão empresarial, com protocolo e sem drama.', framework:'Roteiro de Desligamento', dur:'~18min', gap:true }
    ]},
    { id:'mentalidade', nome:'Mentalidade e Identidade', cor:'azul', aulas:[
      { num:'T7.1', titulo:'De profissional a empresário: a virada interna', objetivo:'Fazer a transição de identidade de "técnico" para "dono de negócio".', framework:'Transição de Identidade', dur:'~18min' },
      { num:'T7.2', titulo:'Um negócio que sustenta a vida que você quer', objetivo:'Alinhar o modelo de negócio ao estilo de vida desejado (sair da escala heroica).', framework:'Plano de Vida × Negócio + Roda da Vida', dur:'~20min' },
      { num:'T7.3', titulo:'As crenças que travam o seu negócio', objetivo:'Identificar e quebrar crenças limitantes com matemática e caso real.', framework:'Mapa de Crenças Limitantes', dur:'~20min' },
      { num:'T7.4', titulo:'O Plano de Foco: inegociável, importante, sabotador', objetivo:'Aplicar o filtro de priorização que separa o que sustenta do que destrói o resultado.', framework:'Plano de Foco', dur:'~15min' }
    ]}
  ]
};

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
  PLANO_ENSINO,
  APROVACOES,
  ESCOPO_INCEPTION,
  ENTREGAVEIS,
  calcularProgressoFrameworks,
  calcularProgressoTrilha
};

})();
