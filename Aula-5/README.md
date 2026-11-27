# E-Reviews — Aula 05: SEO com HTML

## Descrição do Projeto
O E-Reviews é um website de opiniões, artigos e críticas sobre filmes, séries,
livros e jogos. Nesta atividade (Aula 05), o foco foi aplicar **técnicas de SEO
(Search Engine Optimization)** diretamente no HTML, além de melhorar a interface
e o design reaproveitando mídias e recursos das atividades anteriores.

O tema é livre e foi construído a partir do projeto do grupo, já publicado em:
- Repositório: https://github.com/NickPugles/Web_Design
- Deploy (Vercel): https://e-reviews.vercel.app

## Objetivo
Elaborar uma página web em HTML com no mínimo 200 linhas, aplicando boas práticas
de SEO e usando mídias (imagem, vídeo, áudio), formulário, listas, tabela, links,
IDs e classes e contêineres semânticos (`section`/`article`) — todos já vistos nas
aulas anteriores.

## Tecnologias Utilizadas
- **HTML5**: estrutura semântica da página e marcação de SEO.
- **CSS3**: estilização, layout em cartões, responsividade e acessibilidade.

## Estrutura do Projeto
```
Aula-5/
├── index.html          (página principal)
├── style.css           (estilização)
├── script.js           (bloco de referência do JSON-LD de dados estruturados)
├── README.md           (esta documentação)
├── imagens/
│   ├── filme-jogos_vorazes.webp
│   ├── serie-shadowhunters.webp
│   ├── livro-flores_algernon.webp
│   └── capa_do_video.jpeg
├── video/
│   └── video.mp4
└── audio/
    ├── musica.mp3
    └── musica.ogg
```

## Técnicas de SEO Aplicadas
Cada técnica está comentada no próprio `index.html`. Resumo:

1. **Idioma do documento** — `<html lang="pt-BR">` para acessibilidade e leitura
   correta por robôs e leitores de tela.
2. **Título da página** — o `<title>` foi alterado a pedido do grupo para
   "Aula 5". Observação honesta: a diretriz de SEO recomenda ~60 caracteres com
   a palavra-chave principal; "Aula 5" (6 caracteres) está fora dessa meta.
3. **Meta description (~155 caracteres)** — resumo claro usado nos resultados de
   busca (119 caracteres).
4. **Tag canonical** — `<link rel="canonical">` evita penalização por conteúdo
   duplicado.
5. **Meta robots** — `index, follow` libera a indexação do conteúdo principal.
6. **Open Graph** — tags `og:` melhoram a pré-visualização em redes sociais.
7. **Favicon** — reforça a identidade visual e pode aumentar o CTR.
8. **Apenas um `<h1>`** — o título principal da página; o resto segue a hierarquia
   `h2`/`h3` sem pular níveis (aparência ajustada via CSS, não por headings).
9. **Tags semânticas** — `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`,
   `<footer>` dão contexto à estrutura.
10. **Links descritivos** — sem "clique aqui"; links externos usam
    `rel="noopener noreferrer"`.
11. **Breadcrumb** — trilha de navegação em `<ol>`, indicando hierarquia.
12. **Imagens com `alt`, `width` e `height`** — acessibilidade e estabilidade do
    layout (evita deslocamento durante o carregamento).
13. **`loading="lazy"`** — melhora a velocidade de carregamento.
14. **Dados estruturados (JSON-LD)** — schema `WebSite` para habilitar rich results.
15. **Conteúdo textual relevante** — 732 palavras visíveis na home (contagem do
   `<body>` sem comentários/tags; a aula alerta que menos
    de 250 palavras tende a ser ignorada por buscadores).
16. **Acessibilidade** — `aria-label` nas navegações, `scope` nas tabelas,
    `<caption>`, foco visível para navegação por teclado e contraste adequado.

## Recursos de Mídia e Design (aulas anteriores)
- 3 imagens com `src`, `alt`, `width`, `height`.
- Vídeo com `controls`, `width` e `poster`.
- Áudio com `controls` e duas fontes (`.mp3` e `.ogg`) + texto alternativo.
- Formulário com nome, e-mail, categoria (select), mensagem e botão (validação
  `required` e `type="email"`).
- Listas ordenada (Top 5) e não ordenada (links de referência).
- Tabela com `thead`, `tbody`, `th` (com `scope`) e `caption`.
- IDs (`#introducao`) e classes (`.critica`, `.critica-texto`, `.nota`, `.ranking`).
- `<section>` e `<article>` como contêineres agrupando subtítulos e parágrafos.
- Layout em grade de cartões com hover, gradientes e responsividade (media queries).

## Como Executar
1. Abra a pasta `Aula-5`.
2. Execute o `index.html` em um navegador (duplo clique ou `Abrir com`).

## Verificação de SEO / PageRank
Ferramentas de PageRank/SEO (ex.: SEO Checker da Seobility,
smallseotools.com) exigem uma **URL pública** — não analisam `file://` local.
Para obter a nota real, é preciso publicar a página (ex.: novo deploy na Vercel)
e colar o endereço na ferramenta.

O site do grupo já publicado obteve **77/100** no SEO Checker (conforme o PDF da
atividade). Esta versão da Aula-5 aplica os critérios da aula de forma local e
verificável:

| Critério | Meta da aula | Nesta página |
|---|---|---|
| Linhas de código | mínimo 200 | 373 |
| Palavras na home | 250+ (ideal 800) | 732 |
| Tags `<h1>` | exatamente 1 | 1 |
| Título | ~60 caracteres | 6 ("Aula 5", fora da meta) |
| Meta description | ~155 caracteres | 119 |
| Imagens com `alt` | todas | 3/3 |
| Canonical / meta robots | presentes | sim |

## Considerações Finais
A atividade demonstra como SEO e HTML andam juntos: estrutura semântica,
metadados corretos, conteúdo relevante e acessibilidade melhoram tanto a
experiência do usuário quanto o posicionamento orgânico. Os números acima podem
ser conferidos localmente; a nota de uma ferramenta externa depende de publicar a
página em um domínio acessível.
