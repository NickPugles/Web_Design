# Web_Design — Disciplina de Web Design (FACENS)

Repositório/pasta pessoal com todos os materiais e atividades desenvolvidos na
disciplina de **Web Design** do 2º semestre de Ciência da Computação (CP100) da
FACENS, ministrada pelo Prof. Me. Deivison S. Takatu, em 2026.

O curso evolui de forma prática sobre um mesmo projeto de grupo — o **E-Reviews**,
um site de críticas de filmes, séries, livros e jogos — que vai ganhando camadas
a cada aula: estrutura HTML, mídias, SEO, CSS e (futuramente) JavaScript.

## Projeto do grupo: E-Reviews
- Repositório do grupo: https://github.com/Igor-SJ/e-reviews
- Deploy (Vercel): https://e-reviews.vercel.app
- Análise de SEO (SEO Checker/Seobility): 77/100
- Este repositório (pessoal, com as atividades da disciplina):
  https://github.com/NickPugles/Web_Design

## Estrutura da pasta
```
Web_Design/
├── README.md               (este arquivo)
├── Aula-1/                 (PDFs: apresentação da disciplina e PAs)
├── Aula-2/                 (introdução à web + versionamento; site com JS)
├── Aula-3/                 (fundamentos do HTML)
├── Aula-4/                 (mídias em HTML: imagem, vídeo, áudio, form)
├── Aula-5/                 (SEO com HTML — E-Reviews otimizado)
├── Aula-6/                 (CSS: seletores, cores, tipografia e layouts)
├── Aula-7/                 (PDFs: CSS Box Model e Flexbox)
├── Aula-8/                 (PDFs: JS — sintaxe, variáveis e estruturas)
├── AC-2/                   (avaliação continuada — EcoEnergia)
└── AF-Avaliacao_Final/     (documentação e critérios da avaliação final)
```

## Resumo por pasta

### Aula-1 — Apresentação da disciplina
Material introdutório (apenas PDFs): apresentação da disciplina de Web Design,
plano de ensino (PA) da CATIM1 e do curso CP100 (Computação). Define regras,
conteúdo e avaliação do semestre.

### Aula-2 — Introdução a Web Design e Controle de Versões
Primeiros passos com HTML, CSS e JavaScript, além de Git/versionamento.
- `index.html` + `style.css` + `script.js`: página de demonstração com
  estruturação, estilização e interatividade (botão que exibe mensagem via JS).
- `README.md` do projeto e PDFs da aula/atividade.

### Aula-3 — Fundamentos do HTML
Exercício de estruturação com HTML5: tags básicas, semântica, texto, listas,
links, imagens, tabela e formulário.
- `index.html` + `style.css` + `README.md`.

### Aula-4 — Mídias em HTML
Página didática em grade (4×2) reunindo os principais elementos de mídia e
estrutura:
- 3 imagens com `src`, `alt`, `width`, `height`;
- vídeo com `controls`, `width` e `poster`;
- áudio com duas fontes (`.mp3` e `.ogg`);
- formulário com validação (`required`, `type="email"`);
- links (simples, nova aba, imagem clicável), listas, tabela, IDs, classes e
  `div` como contêiner.
- Pastas `imagens/`, `video/` e `audio/` com as mídias usadas.

### Aula-5 — SEO com HTML (E-Reviews)
Versão do E-Reviews otimizada para buscadores, com mais de 370 linhas de HTML
comentado explicando cada técnica de SEO aplicada:
- `<title>`, meta description, canonical, meta robots, Open Graph, favicon;
- JSON-LD (dados estruturados) — bloco de referência também em `script.js`;
- um único `<h1>`, hierarquia de headings, breadcrumb, links descritivos,
  `alt` + dimensões nas imagens, `loading="lazy"` e acessibilidade;
- conteúdo com mais de 680 palavras na página inicial;
- mídias reaproveitadas da Aula-4 (`imagens/`, `video/`, `audio/`).

### Aula-6 — CSS: Seletores, Cores, Tipografia e Layouts Básicos
O mesmo E-Reviews, agora com foco em CSS externo (407 linhas de HTML, 480 de
CSS), aplicando todas as propriedades vistas em aula (`color`, `background`,
`font-*`, `margin`, `padding`, `border`, `width/height`, `display`, `position`,
`text-align`, seletores por tag/classe/ID) e 18 propriedades adicionais
(flexbox, gradientes, `box-shadow`, `transition`, `transform`, `:hover`,
`@media`…). Recursos novos:
- header fixo (`position: sticky`);
- seção "Em Cartaz" em flexbox;
- selo "Em alta" sobre a imagem (`position: absolute`);
- botão "↑ Topo" (`position: fixed`).

### Aula-7 — CSS: Box Model e Flexbox (material)
PDFs da aula e da atividade (Box Model e Flexbox). Atividade ainda não
desenvolvida nesta pasta.

### Aula-8 — JavaScript: Sintaxe, Variáveis e Estruturas (material)
PDFs da aula e da atividade (fundamentos de JS). Atividade ainda não
desenvolvida nesta pasta.

### AC-2 — Avaliação Continuada 2
Material da segunda avaliação continuada: critérios de avaliação e o projeto
**EcoEnergia** (apresentação em `ecoenergia-apresentacao-main.zip`).

### AF-Avaliacao_Final — Avaliação Final
Documentação da avaliação final (`AF - Documentacao.pdf`) e seus critérios de
avaliação.

## Tecnologias utilizadas ao longo do curso
- **HTML5** — estruturação semântica e mídias;
- **CSS3** — estilização, layout (grade, flexbox), responsividade e SEO visual;
- **JavaScript** — noções de interatividade (Aula-2; aprofundamento na Aula-8);
- **Git/GitHub** — versionamento (modelo MAJOR.MINOR.PATCH) e publicação;
- **Vercel** — deploy e análise de SEO do projeto do grupo.

## Como executar as páginas
Cada pasta de aula com código (`Aula-2` a `Aula-6`) é autocontida:
abra o `index.html` correspondente em um navegador (duplo clique ou
`Abrir com`). Não há dependências de build — é HTML/CSS/JS puro.
