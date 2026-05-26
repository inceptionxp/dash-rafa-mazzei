# Dashboard v2 · Rafaella Mazzei · Bellz House

Dashboard pública de acompanhamento do método autoral da Rafa em construção. Single-page, estática, GitHub Pages.

**URL de deploy (após swap):** `inceptionxp.github.io/dash-rafa-mazzei/`
**Arquivo de entrada:** `index.html`
**Stack:** HTML + CSS vanilla + JS vanilla (sem build, sem dependências)

---

## Estrutura

```
dash-rafa-mazzei-v2/
├── index.html              ← shell (sidebar + main + modal). Não mexer a não ser pra trocar título/meta.
├── assets/
│   ├── style.css           ← paleta Bellz House, tipografia, todos os componentes
│   └── app.js              ← roteamento por hash, renderers, modal de framework
└── data/
    └── data.js             ← TODO O CONTEÚDO (este é o arquivo que você edita 99% do tempo)
```

---

## Como rodar local

```bash
cd dash-rafa-mazzei-v2
python3 -m http.server 8765
# abrir http://localhost:8765
```

Ou simplesmente `open index.html` (file://) funciona pra Home + navegação. Para o JS funcionar 100%, melhor o servidor.

---

## Como editar o conteúdo (data.js)

Tudo o que aparece visualmente vem de `data/data.js`. Estrutura:

### 1. Trilhas
```js
const TRILHAS = [
  {
    id: 'comercial',           // slug — não muda
    nome: 'Comercial',         // exibido no hero
    categoria: 'pilar',        // 'pilar' OU 'reforco'
    frase: '...',              // frase italic do hero
    objetivo: '...',           // parágrafo de transformação
    quando_acionar: [...],     // bullets do callout
    duracao: '3-4 meses',
    frameworks: ['fw-id', ...],// IDs de frameworks que aparecem nesta trilha
    aulas: [
      { num:1, nome:'...', ensina:'...', quem:'Rafa', entregavel:'...', status:'extrair' }
    ],
    instrumentos: [...],
    kpis: { numericos:[...], subjetivos:[...] },
    lacunas: [...],
    sessao_extracao:'S1 ...'
  }
]
```

**Status de aulas:** `planejada` · `extrair` · `gravada`

### 2. Frameworks
```js
const FRAMEWORKS = [
  {
    id: '3-cadeiras',          // slug — usado em trilhas[].frameworks
    nome: 'As 3 Cadeiras',     // título grande
    tecnico: '...',            // descrição técnica
    trilhas: ['posicionamento','oferta'],
    status: 'parcial',         // 'pronto' · 'parcial' · 'extrair'
    o_que_e: '...',            // 1 frase
    o_que_temos: [...],
    o_que_falta: [...],
    fonte_primaria: '...',
    fonte_secundaria: '...',
    sessao: 'S1 · ...',
    duracao_rafa: '1h30',
    vira_conteudo: [...]
  }
]
```

**Status de framework:** `pronto` · `parcial` · `extrair`

### 3. Outros blocos de conteúdo
- `ECOSSISTEMA` — marca-mãe + componentes
- `PERSONAS` — Ana e Fernanda
- `PRODUTOS` — Sell-Z, 2Z Level, Imersão
- `EXTRACAO` — calendário de sessões
- `APROVACOES` — { validados, aguardando, pendentes }

---

## Como atualizar status de um framework

1. Abre `data/data.js`
2. Acha o framework pelo `id` (ex: `'3-cadeiras'`)
3. Muda o campo `status:`
4. Atualiza `o_que_temos` e `o_que_falta` se for o caso
5. Salva. Recarrega a página.

O **progresso global** e o **progresso por trilha** se recalculam automaticamente (ver funções `calcularProgressoFrameworks` e `calcularProgressoTrilha` no fim do `data.js`).

**Fórmula:** `score = (pronto × 100 + parcial × 40) / total`

---

## Como mudar paleta / tipografia

Tudo no `:root` do `assets/style.css`:

```css
:root{
  --preto:#0e0f0d;
  --verde:#1f3a2a;
  --laranja:#c75a2c;
  --azul:#7da5b8;
  --cream:#e8e3d4;
  /* ... */
}
```

Quando o brandbook final da Bellz House sair (~15/06), atualizar esses valores.

---

## Deploy GitHub Pages

A v1 está em `inceptionxp/dash-rafa-mazzei` repo. Quando a Rafa validar a v2:

1. Mover repo atual para branch `v1-backup`
2. Substituir conteúdo de `main` pelo conteúdo desta pasta
3. GitHub Pages serve automaticamente

Comandos sugeridos (a executar quando aprovado):
```bash
cd ~/Claude\ Code/projetos-ia/clientes/rafaella-mazzei/dash-rafa-mazzei
git checkout -b v1-backup && git push -u origin v1-backup
git checkout main
rm -rf assets data index.html  # limpar v1
cp -r ../dash-rafa-mazzei-v2/* .
git add -A && git commit -m "Dashboard v2 · Bellz House"
git push
```

---

## Navegação (hashes da URL)

| Hash | View |
|---|---|
| `#home` | Home |
| `#ecossistema` | Ecossistema Bellz House + personas |
| `#metodo` | Arquitetura do método (Diagnóstico, Plano Mestre, 7 trilhas, marcos) |
| `#trilha/<id>` | Página de uma trilha (id: comercial, oferta, gestao, posicionamento, tracao, lideranca, mentalidade) |
| `#frameworks` | Galeria de frameworks com filtros |
| `#produtos` | Sell-Z, 2Z Level, Imersão |
| `#extracao` | Plano de extração com a Rafa |
| `#aprovacoes` | Registro de validações |

Modal de framework abre via JS (não há rota dedicada).

---

## Lista de tarefas pendentes na dashboard

Quando avançarmos com extrações, voltar aqui pra atualizar:

- [ ] Confirmar nome final da Imersão e atualizar em PRODUTOS
- [ ] Trocar nomes provisórios de frameworks (Task #12 da arquitetura)
- [ ] Substituir status 'parcial' por 'pronto' conforme extrações forem feitas
- [ ] Adicionar fotos das aulas gravadas quando começarem (campo `aulas[].url` futuro)
- [ ] Quando brandbook Bellz House sair, atualizar paleta no `:root` do `style.css`
- [ ] Adicionar logo definitivo (substitui o wordmark de texto na sidebar)

---

**v2 · 2026-05-26** · Preparado por Inception Experience
