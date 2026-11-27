# E-Reviews — Aula 08: JavaScript (Sintaxe, Variáveis e Estruturas)

## Descrição do Projeto
Continuação do E-Reviews (Aulas 05, 06 e 07). Desta vez o site ganhou **vida**:
o JavaScript entra sobre a estrutura HTML e o CSS já construídos para validar
formulários, filtrar conteúdo, calcular estatísticas, ordenar tabelas e reagir
a cliques e rolagem — tudo executado no navegador (client side), como apresenta
o slide da aula.

O JS é aplicado de forma **externa** (item 1 da atividade), vinculado ao HTML
pela tag `<script src="script.js" defer></script>` no final do `body`. O
atributo `defer` garante que o script só execute depois que todo o DOM estiver
construído, sem travar o carregamento da página.

Projeto do grupo:
- Repositório: https://github.com/NickPugles/Web_Design
- Deploy (Vercel): https://e-reviews.vercel.app

## Objetivo (enunciado da Atividade - 8.pdf)
1. `index.html` + `style.css` + `script.js`, com JS externo via `<script src>`;
2. Pelo menos **5 funcionalidades em JavaScript** seguindo os exemplos da aula;
3. README com **100+ linhas** descrevendo as funcionalidades;
4. Git no VS Code → GitHub (etapa manual);
5. `index.html` com **500+ linhas**, `style.css` com **400+**, `script.js` com **300+**;
6. Código comentado + documentação + prints no CANVAS.

## Estrutura do Projeto
```
Aula-8/
├── index.html          (655 linhas)
├── style.css           (1071 linhas)
├── script.js           (428 linhas — as 10 funcionalidades)
├── README.md           (esta documentação)
├── imagens/            (pôsteres + capa do vídeo)
├── video/video.mp4
├── audio/musica.mp3 + musica.ogg
├── Aula 08 - JS_ Sintaxe, Variáveis e Estruturas.pdf
└── Atividade - 8.pdf
```

## As 10 Funcionalidades Implementadas (item 2 — mínimo era 5)

### 1. Alternância de tema claro/escuro
Botão no canto do cabeçalho. Um `addEventListener("click")` chama
`document.body.classList.toggle("tema-escuro")`, e um operador **ternário**
atualiza o rótulo do botão. No CSS, mais de 20 regras `body.tema-escuro …`
invertem as cores de cartões, botões, tabela e console.

### 2. Filtro de críticas por categoria
Os botões "Todos / Filmes / Séries / Livros / Jogos" têm `data-cat`. O script
lê `evento.target.dataset.cat`, marca o botão ativo com `classList` e percorre
as seções da página (marcadas com o mesmo atributo) mostrando ou adicionando a
classe `.oculto` (`display: none`).

### 3. Busca por texto
O campo de busca dispara a cada tecla (`addEventListener("input")`). O script
pega `campoBusca.value`, normaliza com `trim().toLowerCase()` e compara com o
`textContent` de cada seção de crítica usando `indexOf` — o que não contém o
termo é ocultado.

### 4. Contador dinâmico de resultados
Logo abaixo dos filtros, o parágrafo `#resultado-busca` é reescrito via
`textContent` com template strings: informa a categoria ativa ou quantas das 4
seções de crítica contiveram o termo buscado.

### 5. "Console da Aula" — as demos do slide, rodando na página
Seção nova com 7 botões (Variáveis, Operadores, Condicionais, Repetições,
Funções, Arrays e Objetos), espelhando os blocos de código dos slides 9 a 24.
Cada botão executa a função correspondente no objeto `demos` — que devolve um
array de strings — e o script reconstrói o painel escuro estilo terminal com
`createElement("div")` + `appendChild()`, linha a linha, como um `console.log`.
Conceitos usados: `const`/`let`, `typeof`, template strings, `==`/`===`, `%`,
`**`, `&&`/`||`/`!`, `if/else if/else`, ternário, `for`, `while`, `break`,
`continue`, função tradicional, arrow function, `length`, `forEach`, `filter`,
`map`, `reduce`, objeto com `this`.

### 6. Estatísticas calculadas a partir de array de objetos
As notas ficam num array `criticas` de objetos. `length` dá o total,
`reduce` soma, a média sai da divisão com `toFixed(2)` e `Math.max(...notas)`
+ `find()` apontam a maior nota com o título. Os números são injetados nos
cartões da seção "Resumo das Notas" via `textContent`.

### 7. Ordenação da tabela pela coluna "Nota"
O botão no `<th>` alterna o booleano `ordemDecrescente = !ordemDecrescente` e
chama `renderizarTabela()`, que copia o array (`slice()`), aplica
`sort((a, b) => b.nota - a.nota)`, limpa o `<tbody>` e recria cada `<tr>`/`<td>`
com `createElement` + `appendChild`. A seta ↓/↑ indica a direção atual.

### 8. Publicar crítica pelo formulário (a mais completa)
O `submit` é interceptado com `preventDefault()`; o script lê `.value` de cada
campo, valida com `if` (`autor === ""`, `isNaN(nota)`, limite 0–10) usando
`alert()` para avisar, calcula o veredito com ternário (`nota >= 7`), cria um
`<li class="critica-usuario">` com `innerHTML` controlado e insere com
`appendChild` na lista "Críticas da comunidade". Depois faz
`criticas.push(...)`, o que atualiza **junto** as estatísticas (item 6) e a
tabela ordenável (item 7), e pergunta com `confirm()` se limpa o formulário
(`form.reset()`).

### 9. Botão "↑ Topo" que aparece no scroll
`window.addEventListener("scroll")` compara `window.scrollY > 400` e usa
`classList.toggle("mostrar", condição)` — forma de duas linhas para mostrar ou
esconder o botão flutuante. O CSS controla `opacity` e `pointer-events`.

### 10. Data de hoje no rodapé
`new Date()` + `toLocaleDateString("pt-BR", {weekday, day, month, year})`
geram a data por extenso, convertida com `toUpperCase()` e injetada no rodapé
via `textContent`.

## Verificação (testes executados no navegador)
- Carregar a página: data preenchida, estatísticas 3 críticas / média 8.43 /
  maior nota 9 (Flores para Algernon) — sem nenhum clique;
- Clicar "Séries" no filtro: seção `#series` continua visível, `#filmes` e
  `#livros` recebem `.oculto` — ao voltar em "Todos", todas reaparecem;
- Digitar "distopia" na busca: só a seção do filme correspondente permanece;
- Clicar "07 — Objetos": o painel mostra as 4 linhas da demo do slide 24;
- Clicar "Nota ↓": primeira linha muda de Jogos Vorazes (8.5) para a ordem
  solicitada, a seta vira ↑;
- Enviar o formulário com "Interestelar 9.5": item verde surge na lista,
  estatísticas recalculam para 4 críticas / média 8.70 e a tabela ganha linha.

## Quantidade de Linhas (item 5)
| Arquivo | Meta | Atingido |
|---|---|---|
| `index.html` | > 500 | 655 |
| `style.css` | > 400 | 1071 |
| `script.js` | > 300 | 428 |
| `README.md` | > 100 (item 3) | ~150 (este arquivo) |

## SEO mantido das aulas anteriores
O JSON-LD voltou a ficar **inline no `<head>`** do `index.html` — agora o
`script.js` é reservado ao JavaScript funcional (carregado via `src`), e um
bloco `application/ld+json` dentro dele não seria lido pelos buscadores.
Meta description, canonical, Open Graph, headings e `alt` continuam no HTML.

## Versionamento (item 4)
Git no VS Code: `git init`, vincular ao repositório
(`git remote add origin ...`) e `git push`. Modelo de tags do grupo:
`MAJOR.MINOR.PATCH`.

## Como Executar
1. Abra a pasta `Aula-8`;
2. Execute o `index.html` no navegador — o CSS carrega pelo `<link>` e o JS
   pelo `<script src="script.js" defer>`;
3. Clique nos botões das seções "Explore as Críticas" e "Console da Aula" ou
   abra o DevTools (F12) para ver os `console.log` da página.

## Considerações Finais
Se nas Aulas 5-7 o E-Reviews era estático, a Aula 8 fecha o ciclo das três
linguagens: o HTML organiza, o CSS apresenta e o JavaScript **reage**. As 10
funcionalidades cobrem exatamente a sequência dos slides — variáveis e tipos,
operadores, condicionais, repetições, funções, arrays, objetos, DOM e eventos —
aplicadas em um site real, com estatísticas e tabela recalculando ao vivo
cada vez que alguém publica uma crítica no formulário.
