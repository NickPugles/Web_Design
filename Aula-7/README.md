# E-Reviews — Aula 07: CSS Box Model e Flexbox

## Descrição do Projeto
Continuação do E-Reviews (Aulas 05 e 06), agora com foco no **Box Model** e no
**Flexbox**. A página ganhou duas seções didáticas — uma mostrando as 4 camadas
(content, padding, border e margin) em caixas reais e outra demonstrando os
principais valores de `justify-content`, `align-items` e `flex-direction` —
além de aplicar esses conceitos em todo o layout do site (menu, Em Cartaz,
mídias, formulário, links e rodapé).

O CSS continua **externo**, vinculado pela tag
`<link rel="stylesheet" href="style.css">` (item 1 da atividade).

Projeto do grupo:
- Repositório: https://github.com/NickPugles/Web_Design
- Deploy (Vercel): https://e-reviews.vercel.app

## Objetivo (enunciado da Atividade - 7.pdf)
1. `index.html` + `style.css` com CSS externo via `<link>`;
2. **20 elementos** com valores em todas as propriedades de content, padding,
   border e margin;
3. **20+ propriedades de Flexbox** organizando os elementos de forma responsiva;
4. Git no VS Code → GitHub (a fazer pelo VS Code);
5. `index.html` com **mais de 400 linhas** e `style.css` com **mais de 300**;
6. Código todo comentado + documentação (este README) + prints no CANVAS.

## Estrutura do Projeto
```
Aula-7/
├── index.html          (521 linhas)
├── style.css           (790 linhas)
├── script.js           (bloco de referência do JSON-LD, fora do index.html)
├── README.md           (esta documentação)
├── imagens/            (pôsteres + capa do vídeo — reaproveitados da Aula-6)
├── video/video.mp4
├── audio/musica.mp3 + musica.ogg
├── Aula 07 - CSS_ Box Model e Flexbox.pdf
└── Atividade - 7.pdf
```

## Item 2 — Box Model: os 20 elementos
Cada elemento abaixo recebe valores explícitos de **content** (área de texto ou
`width`/`height`), **padding**, **border** e **margin** — marcados no CSS com o
comentário `BOX:`:

|#|Elemento|Exemplo no CSS|
|---|---|---|
|1|`body`|`padding: 0 4px` + `border-left: 4px` + `min-height: 100vh`|
|2|`.topo`|`padding: 28px 20px` + `border-bottom: 4px #f59e0b`|
|3|`.subtitulo`|`padding: 4px 0 0` + `margin: 6px 0 0`|
|4|`.topo nav a`|pill com `padding: 6px 16px` + `border: 1px`|
|5|`.breadcrumb li`|`padding: 2px 6px` + `border` pontilhada|
|6|`.box-item` (4 caixas-demo)|`width`/`height` + camadas variadas|
|7|`.flex-linha`|`padding: 10px 14px` + `border: 1px`|
|8|`.flex-coluna-alta`|`height: 90px` + `padding: 8px` + `border: 1px`|
|9|`.flex-bloco`|`padding: 12px` + `border: 1px` + `margin: 0`|
|10|`.legendas li`|`margin-bottom: 4px` + padding/border declarados|
|11|`.featured-card`|`padding: 18px 12px` + `border: 1px` + `margin: 0`|
|12|`.critica`|`max-width: 460px` + `padding: 16px` + `margin: 0 auto`|
|13|`.critica-texto`|`max-width: 680px` + `padding: 16px 24px` + `margin: 12px auto 0`|
|14|`.nota`|`padding: 2px 10px` + `border: 1px` + `margin: 6px 0`|
|15|`th`|`padding: 10px 14px` + `border: 1px` + `margin: 0`|
|16|`td`|idem ao `th` (regra `th, td`)|
|17|`form`|`max-width: 520px` + `padding: 22px` + `border: 1px` + `margin: 0 auto`|
|18|`label`|`margin-top: 6px` + padding/border declarados|
|19|`input, select, textarea`|`padding: 10px` + `border: 1px` + `margin: 0`|
|20|`button`|`padding: 12px` + `border: 2px` + `margin-top: 14px`|

A seção **"Box Model: as 4 camadas de cada elemento"** mostra o conceito
visualmente: `.box-content` (caixa 120×90 sem camadas), `.box-padding`
(padding 24px), `.box-border` (borda 8px) e `.box-margin` (margem 28px).
O reset usa `box-sizing: border-box`, então `width`/`height` já incluem
padding e border — layout previsível.

## Item 3 — Flexbox: propriedades aplicadas (20+)
| Propriedade | Valores usados | Onde |
|---|---|---|
| `display: flex` | flex | menu, breadcrumb, `.box-demo`, `.flex-galeria`, `.flex-linha`, `.flex-coluna-alta`, `.flex-bloco`, `.featured`, `.midias`, `form`, `.links`, `.rodape nav` (12 containers) |
| `flex-direction` | `row` (explícito) e `column` | demos de direção, galeria, mídias, formulário, mobile |
| `justify-content` | `flex-start`, `center`, `space-between`, `space-around`, `space-evenly` | galeria demonstrativa + menu, `.featured`, `.links`, rodapé |
| `align-items` | `flex-start`, `center`, `flex-end`, `stretch` | demos verticais, `.box-demo`, `.featured`, `.midias`, `.links` |
| `flex-wrap` | `wrap` | menu, `.box-demo`, `.featured`, `.links` |
| `gap` | 6–20px | todos os containers flex |
| `flex` | `1 1 150px` | `.featured-card` (cresce, encolhe, base 150px) |

Somando os containers e variações, a página usa **bem mais de 20 declarações
de propriedades flex** (12 `display: flex` + 5 `justify-content` demonstrados
um a um + direções, alinhamentos, quebras, gaps e `flex`).

## Item 5 — Quantidade de linhas
| Arquivo | Meta | Atingido |
|---|---|---|
| `index.html` | > 400 | 521 |
| `style.css` | > 300 | 790 |

## Responsividade
- `@media (max-width: 720px)`: demos do Flexbox reduzem o `gap` e centralizam
  os itens para caberem na tela;
- `@media (max-width: 600px)`: `.box-demo` e `.links` trocam de linha para
  coluna (`flex-direction: column`), `main` reduz o padding e `.critica` ocupa
  100% da largura.

## Atividade 01 (também do PDF da aula)
A Atividade 01 pede o preenchimento do formulário de gestão do grupo
(https://forms.gle/tGMLJpA6Bve71UJA9) + print anexo — etapa manual, fora do
código desta pasta.

## Versionamento (item 4)
Git no VS Code: `git init`, vincular ao repositório do GitHub
(`git remote add origin ...`) e publicar com `git push`. Modelo de tags do
grupo: `MAJOR.MINOR.PATCH`.

## Como Executar
1. Abra a pasta `Aula-7`;
2. Execute o `index.html` no navegador (duplo clique ou `Abrir com`) — o
   `style.css` carrega pela tag `<link>`.

## Considerações Finais
O Box Model cria as caixas e o Flexbox as organiza — a Aula 7 foi aplicada
transformando essa frase em duas seções visíveis no site: caixas com camadas
destacadas e uma galeria interativa dos valores de `justify-content` e
`align-items`, mantendo o E-Reviews responsivo do celular ao desktop.
