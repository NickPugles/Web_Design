# E-Reviews — Aula 06: CSS (Seletores, Cores, Tipografia e Layouts Básicos)

## Descrição do Projeto
Continuação do E-Reviews (Aula 05), agora com foco em **CSS**: aplicação das
propriedades vistas em aula, uso de seletores por tag, classe e ID, e novos
recursos de layout (flexbox, header fixo, selo sobre imagem e botão "voltar ao
topo"). O CSS é aplicado de forma **externa**, vinculado ao HTML pela tag
`<link rel="stylesheet" href="style.css">`.

Tema livre, construído a partir das tarefas anteriores. Projeto do grupo:
- Repositório: https://github.com/NickPugles/Web_Design
- Deploy (Vercel): https://e-reviews.vercel.app

## Objetivo
Aplicar no projeto **todas as propriedades CSS vistas em aula**, de forma clara
no layout, além de **10+ propriedades adicionais** para design, interatividade e
responsividade — mantendo `index.html` com mais de 300 linhas e `style.css` com
mais de 200.

## Tecnologias Utilizadas
- **HTML5**: estrutura semântica da página.
- **CSS externo** (`style.css`): toda a estilização, vinculada por `<link>`.
- **`script.js`**: apenas referência — guarda o bloco JSON-LD de dados
  estruturados, que foi removido do `index.html` e não é carregado pela página.

## Estrutura do Projeto
```
Aula-6/
├── index.html          (395 linhas)
├── style.css           (480 linhas)
├── script.js           (bloco de referência do JSON-LD de dados estruturados)
├── README.md           (esta documentação)
├── imagens/            (pôsteres + capa do vídeo)
├── video/video.mp4
└── audio/musica.mp3 + musica.ogg
```

## Propriedades CSS Vistas em Aula (item 2) — onde foram aplicadas
| Propriedade | Uso no projeto |
|---|---|
| `color` | texto do body, títulos, botões e selo |
| `background-color` | topo, rodapé, cartões, tabela e `.badge` |
| `font-family` | `"Segoe UI", Arial, sans-serif` no body |
| `font-size` | h1, h2, `.featured-card`, `.badge` |
| `margin` | espaçamento externo de seções e cartões (`margin: 0 auto`) |
| `padding` | espaço interno de cartões, botões, `th`/`td` |
| `border` | bordas de cartões, inputs, select e tabela |
| `width` / `height` | dimensões de imagens, botões e containers |
| `display` | `flex` (menu, `.featured`), `block`, `inline-block` |
| `position` | `sticky` (`.topo`), `relative` (`.critica-img`), `absolute` (`.badge`), `fixed` (`.voltar-topo`) |
| `top`/`right`/`bottom`/`left` | âncoras das posições acima |
| `text-align` | centralização de títulos, textos e selos |
| Seletor por **tag** | `body`, `h1`, `table`, `video`, etc. |
| Seletor por **classe** | `.topo`, `.critica`, `.featured-card`, `.badge` |
| Seletor por **ID** | `#introducao-texto` |

## Propriedades Adicionais (item 3) — 10+
1. `box-sizing` (reset com `border-box`)
2. `box-shadow` (elevação dos cartões e botões)
3. `border-radius` (cantos arredondados)
4. `transition` (animação suave em hover)
5. `transform` (`translateY`/`scale` no hover)
6. `:hover` (estado interativo de cartões, botões e links)
7. `linear-gradient` (fundos do topo, rodapé e botões)
8. `gap` + `flex-wrap` (espaçamento e quebra no flexbox)
9. `align-items` + `justify-content` (alinhamento dos layouts flex)
10. `letter-spacing` e `text-transform` (tipografia de títulos e selos)
11. `line-height` (respiro entre linhas)
12. `min-height` (fundo do body cobre a tela toda: `100vh`)
13. `filter` (brilho no hover do botão)
14. `opacity` + `cursor` (botão "voltar ao topo")
15. `z-index` (camadas de header fixo e selo)
16. `user-select` (selo inselectável)
17. `:focus-visible` (acessibilidade por teclado)
18. `overflow` (recorte arredondado da tabela)
19. `@media` (responsividade)

## Novos Recursos da Aula 6 (item 5)
- **Header fixo** (`position: sticky`) que acompanha a rolagem.
- Seção **"Em Cartaz"** com layout **flexbox** (cartões lado a lado, quebra no mobile).
- **Selo "Em alta"** (`position: absolute`) sobre a imagem da crítica de filmes.
- Botão **"↑ Topo"** (`position: fixed`) que leva à âncora `#inicio`.

## Como Executar (item 1)
1. Abra a pasta `Aula-6`.
2. Execute o `index.html` no navegador — o `style.css` é carregado pela tag
   `<link>` (CSS externo).

## Versionamento (item 4)
O projeto deve ser versionado com **Git no VS Code**: `git init`, vincular ao
repositório do GitHub (`git remote add origin ...`) e publicar com `git push`.
Modelo de tags usado pelo grupo: `MAJOR.MINOR.PATCH`.

## Considerações Finais
A Aula 6 aprofunda o domínio de seletores, cores, tipografia e layouts. O
E-Reviews demonstra na prática o CSS externo, as propriedades básicas da aula e
um conjunto maior de propriedades adicionais que elevam design, interatividade e
responsividade — tudo comentado no próprio código.
