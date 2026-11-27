/* ============================================================
   E-Reviews - script.js (Aula 8: JS Sintaxe, Variáveis e Estruturas)

   ATIVIDADE (item 1): JavaScript EXTERNO, vinculado no index.html
   pela tag <script src="script.js" defer>.

   FUNCIONALIDADES (item 2 — mínimo 5; aqui são 10):
    1. Alternância de tema claro/escuro .......... classList.toggle
    2. Filtro de críticas por categoria .......... dataset + classList
    3. Busca por texto .......................... textContent + indexOf
    4. Contador dinâmico de resultados .......... textContent
    5. "Console da Aula" (demos 01-07) .......... funções + createElement
    6. Estatísticas das notas ................... arrays + reduce + Math.max
    7. Ordenação da tabela por nota ............. array.sort + appendChild
    8. Publicar crítica pelo formulário ......... value + validação + DOM
    9. Botão "Topo" que aparece no scroll ....... addEventListener scroll
   10. Data de hoje no rodapé ................... Date + toLocaleDateString

   Todo o código usa os recursos ensinados no slide: const/let, template
   strings, typeof, operadores aritméticos/comparação/lógicos, if/else if/
   else, operador ternário, for/while/break, functions + arrow functions,
   arrays (length, forEach, filter, map, reduce, sort) e objetos (this).
   ============================================================ */

/* ============================================================
   DADOS CENTRAIS — um ARRAY DE OBJETOS com todas as críticas.
   Objetos: propriedades (dados) + this nos métodos, como no slide 24.
   ============================================================ */
const criticas = [
    { categoria: "Filme", titulo: "Jogos Vorazes", nota: 8.5 },
    { categoria: "Série", titulo: "Shadowhunters", nota: 7.8 },
    { categoria: "Livro", titulo: "Flores para Algernon", nota: 9.0 }
];

/* Função auxiliar (slide 18): devolve uma linha formatada para as
   saídas "estilo console" da página. Arrow function + template string. */
const linha = (texto) => `${texto}`;

/* ============================================================
   FUNCIONALIDADE 1 — Tema claro/escuro
   Recursos: querySelector, addEventListener, classList.toggle,
   textContent e operador ternário.
   ============================================================ */
const botaoTema = document.querySelector("#btn-tema");

botaoTema.addEventListener("click", () => {
    // classList alterna a classe .tema-escuro no body (CSS faz o resto)
    document.body.classList.toggle("tema-escuro");

    // Ternário: verifica a classe e troca o rótulo do botão
    const escuro = document.body.classList.contains("tema-escuro");
    botaoTema.textContent = escuro ? "Tema claro" : "Tema escuro";
});

/* ============================================================
   FUNCIONALIDADE 2 — Filtro por categoria
   Recursos: querySelectorAll, dataset (atributos data-cat), forEach,
   if/else e classList (adicionar/remover a classe .oculto).
   ============================================================ */
const botoesFiltro = document.querySelectorAll(".filtro-btn");
const secoesCategoria = document.querySelectorAll("main section[data-cat]");

function filtrarCategoria(evento) {
    const categoria = evento.target.dataset.cat; // data-cat do botão

    // Marca visualmente o botão ativo (remove de todos, adiciona em um)
    botoesFiltro.forEach((botao) => botao.classList.remove("ativo"));
    evento.target.classList.add("ativo");

    // Percorre as seções: mostra sempre/perde ou esconde conforme o filtro
    secoesCategoria.forEach((secao) => {
        const alvo = secao.dataset.cat;
        const deveMostrar = categoria === "todos" || alvo === "sempre" || alvo === categoria;

        if (deveMostrar) {
            secao.classList.remove("oculto");
        } else {
            secao.classList.add("oculto");
        }
    });

    // Limpa a busca ao trocar de filtro para os textos não brigarem
    document.querySelector("#busca").value = "";
    atualizarContador();
}

botoesFiltro.forEach((botao) => botao.addEventListener("click", filtrarCategoria));

/* ============================================================
   FUNCIONALIDADE 3 — Busca por texto
   Recursos: input + addEventListener("input"), value, toLowerCase,
   indexOf (busca sem acento/exata) e classList.
   ============================================================ */
const campoBusca = document.querySelector("#busca");

function buscarCriticas() {
    const termo = campoBusca.value.trim().toLowerCase();
    const secoes = document.querySelectorAll("#filmes, #series, #livros, #jogos");
    let encontradas = 0;

    secoes.forEach((secao) => {
        // textContent devolve todo o texto dentro da section
        const texto = secao.textContent.toLowerCase();
        const achou = termo === "" || texto.indexOf(termo) !== -1;

        if (achou) {
            secao.classList.remove("oculto");
            encontradas++;
        } else {
            secao.classList.add("oculto");
        }
    });

    atualizarContador(termo, encontradas);
}

campoBusca.addEventListener("input", buscarCriticas);

/* ============================================================
   FUNCIONALIDADE 4 — Contador dinâmico de resultados
   Recursos: textContent, template strings e if simples.
   ============================================================ */
const paragrafoResultado = document.querySelector("#resultado-busca");

function atualizarContador(termo = "", encontradas = null) {
    if (termo !== "" && encontradas !== null) {
        // Operador lógico || usado acima; aqui mostra o resultado da busca
        paragrafoResultado.textContent =
            `Busca por "${termo}": ${encontradas} de 4 seções de crítica contêm esse texto.`;
    } else {
        const ativo = document.querySelector(".filtro-btn.ativo");
        paragrafoResultado.textContent =
            `Mostrando a categoria "${ativo.textContent.trim()}".`;
    }
}

/* ============================================================
   FUNCIONALIDADE 5 — Console da Aula (demos 01 a 07 do slide)
   Recursos: objeto de funções, switch-like por dataset, createElement,
   appendChild, for/while, typeof, ternário e métodos de array.
   ============================================================ */
const saida = document.querySelector("#saida-console");

/* Cada demo devolve um ARRAY de strings (uma linha por console.log). */
const demos = {
    // Slide 9: variáveis e tipos (const/let, typeof, template string)
    variaveis() {
        const nome = "João";
        let idade = 20;
        const estudante = true;
        return [
            "=== 01 — Variáveis e Tipos ===",
            `${nome} | ${idade} | ${estudante}`,
            `typeof nome    -> ${typeof nome}`,
            `typeof idade   -> ${typeof idade}`,
            `typeof estudante -> ${typeof estudante}`,
            `Olá, ${nome}! Você tem ${idade} anos.`
        ];
    },

    // Slide 13: operadores aritméticos, de comparação e lógica
    operadores() {
        const nota1 = 8;
        const nota2 = 7;
        const media = (nota1 + nota2) / 2; // + e /
        return [
            "=== 02 — Operadores ===",
            `Média: ${media}`,
            `Aprovado (media >= 7): ${media >= 7}`,
            `nota1 === nota2: ${nota1 === nota2}`,
            `8 % 3 (resto): ${8 % 3}`,
            `2 ** 10 (potência): ${2 ** 10}`,
            `true && false -> ${true && false}`,
            `true || false -> ${true || false}`,
            `!true -> ${!true}`
        ];
    },

    // Slide 15: if / else if / else + operador ternário
    condicionais() {
        const linhas = ["=== 03 — Condicionais ==="];
        // Loop for (slide 17) só para variar a nota testada:
        for (let nota = 9.5; nota >= 5; nota -= 2) {
            let situacao;
            if (nota >= 9) {
                situacao = "Excelente";
            } else if (nota >= 7) {
                situacao = "Aprovado";
            } else {
                situacao = "Reprovado";
            }
            const resumo = nota >= 7 ? "✔" : "✖"; // ternário
            linhas.push(`nota ${nota.toFixed(1)} -> ${situacao} ${resumo}`);
        }
        return linhas;
    },

    // Slide 17: for, while, break e continue
    repeticoes() {
        const linhas = ["=== 04 — Repetições ==="];
        let pares = "";
        for (let i = 1; i <= 10; i++) {
            if (i % 2 !== 0) continue; // continue: pula os ímpares
            pares += `${i} `;
        }
        linhas.push(`Pares de 1 a 10: ${pares.trim()}`);

        // while + break: conta até achar o primeiro múltiplo de 7
        let n = 1;
        while (true) {
            if (n % 7 === 0) break; // break: interrompe a repetição
            n++;
        }
        linhas.push(`Primeiro múltiplo de 7 encontrado: ${n}`);
        return linhas;
    },

    // Slide 19: function tradicional + arrow function + return
    funcoes() {
        function somar(a, b) {
            return a + b;
        }
        const multiplicar = (a, b) => a * b; // arrow function
        const dobro = (x) => x * 2;
        return [
            "=== 05 — Funções ===",
            `somar(10, 20) = ${somar(10, 20)}`,
            `multiplicar(5, 4) = ${multiplicar(5, 4)}`,
            `dobro(21) = ${dobro(21)}`
        ];
    },

    // Slide 22: arrays — length, forEach, filter, map, reduce, sort
    arrays() {
        const notas = [7, 8, 5, 9, 10];
        const aprovadas = notas.filter((nota) => nota >= 7);
        const comVirgula = notas.map((nota) => `${nota},`).join(" ");
        const soma = notas.reduce((total, nota) => total + nota, 0);
        return [
            "=== 06 — Arrays ===",
            `notas: [${comVirgula}] quantidade: ${notas.length}`,
            `forEach: ${notas.map((n, i) => `${i}:${n}`).join(" ")}`,
            `filter(>=7): [${aprovadas.join(", ")}]`,
            `reduce(soma): ${soma} | média: ${(soma / notas.length).toFixed(2)}`
        ];
    },

    // Slide 24: objetos — propriedades, métodos e this
    objetos() {
        const aluno = {
            nome: "Carlos",
            idade: 20,
            curso: "ADS",
            apresentar() {
                // this referencia o próprio objeto dentro do método
                return `Meu nome é ${this.nome}, ${this.idade} anos, curso ${this.curso}.`;
            }
        };
        return [
            "=== 07 — Objetos ===",
            `aluno.nome -> ${aluno.nome}`,
            `aluno.curso -> ${aluno.curso}`,
            aluno.apresentar()
        ];
    }
};

/* Ao clicar numa demo: roda a função, pega o array de linhas e
   reconstrói a <pre> com createElement + appendChild (slide 30). */
document.querySelectorAll(".demo-btn").forEach((botao) => {
    botao.addEventListener("click", () => {
        const nomeDemo = botao.dataset.demo;
        const linhas = demos[nomeDemo]();

        saida.textContent = ""; // limpa a saída anterior
        linhas.forEach((texto) => {
            const par = document.createElement("div"); // novo elemento
            par.textContent = texto;
            saida.appendChild(par); // insere no documento
        });
    });
});

/* ============================================================
   FUNCIONALIDADE 6 — Estatísticas das notas
   Recursos: array de objetos, length, reduce, Math.max, toFixed,
   ternário e textContent nos <span> do resumo.
   ============================================================ */
const spanTotal = document.querySelector("#stat-total");
const spanMedia = document.querySelector("#stat-media");
const spanMaior = document.querySelector("#stat-maior");

function atualizarEstatisticas() {
    const notas = criticas.map((c) => c.nota);
    const soma = notas.reduce((acc, n) => acc + n, 0);
    const media = notas.length > 0 ? soma / notas.length : 0;

    spanTotal.textContent = criticas.length;
    spanMedia.textContent = media.toFixed(2);
    spanMaior.textContent = `${Math.max(...notas)} — ${
        criticas.find((c) => c.nota === Math.max(...notas)).titulo}`;
}

atualizarEstatisticas();

/* ============================================================
   FUNCIONALIDADE 7 — Ordenar a tabela pela coluna Nota
   Recursos: array.sort com arrow function, createElement tr/td,
   appendChild e alternância com boolean (!ordem).
   ============================================================ */
const corpoTabela = document.querySelector("#corpo-tabela");
const botaoOrdenar = document.querySelector("#btn-ordenar");
const setaOrdem = document.querySelector("#seta-ordem");
let ordemDecrescente = true;

function renderizarTabela() {
    // Copia o array original (sort altera no lugar; slice protege a ordem base)
    const ordenadas = criticas.slice().sort((a, b) =>
        ordemDecrescente ? b.nota - a.nota : a.nota - b.nota
    );

    corpoTabela.textContent = ""; // remove as linhas antigas
    ordenadas.forEach((critica) => {
        const tr = document.createElement("tr");
        // Células criadas em loop a partir de um array de valores
        [critica.categoria, critica.titulo, critica.nota.toFixed(1)].forEach((valor) => {
            const td = document.createElement("td");
            td.textContent = valor;
            tr.appendChild(td);
        });
        corpoTabela.appendChild(tr);
    });

    setaOrdem.textContent = ordemDecrescente ? "↓" : "↑";
}

botaoOrdenar.addEventListener("click", () => {
    ordemDecrescente = !ordemDecrescente; // lógica com ! (NÃO)
    renderizarTabela();
});

/* ============================================================
   FUNCIONALIDADE 8 — Publicar crítica pelo formulário
   Recursos: submit + preventDefault, leitura de .value, validação
   if/else, alert/confirm (slide 20), push no array, ternário,
   createElement/appendChild na lista da comunidade.
   ============================================================ */
const formulario = document.querySelector("#form-critica");
const listaComunidade = document.querySelector("#minhas-criticas");

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault(); // impede o recarregamento da página

    const autor = document.querySelector("#nome").value.trim();
    const categoria = document.querySelector("#categoria").value;
    const titulo = document.querySelector("#titulo-critica").value.trim();
    const nota = Number(document.querySelector("#nota-critica").value);
    const texto = document.querySelector("#mensagem").value.trim();

    // Validação com if + saída antecipada (return)
    if (autor === "" || titulo === "" || isNaN(nota)) {
        alert("Preencha autor, título e uma nota numérica para enviar.");
        return;
    }
    if (nota < 0 || nota > 10) {
        alert("A nota precisa estar entre 0 e 10.");
        return;
    }

    // Ternário: veredito rápido a partir da nota digitada
    const veredito = nota >= 7 ? "recomendado" : "evitar";

    // Remove o aviso de lista vazia na primeira publicação
    const aviso = listaComunidade.querySelector(".aviso-vazio");
    if (aviso) aviso.remove();

    // Novo item criado dinamicamente (createElement + appendChild)
    const item = document.createElement("li");
    item.className = "critica-usuario";
    item.innerHTML =
        `<strong>${titulo}</strong> (${categoria}) — ${nota.toFixed(1)}/10 ` +
        `por ${autor} — <em>${veredito}</em>` +
        (texto ? `<p>${texto}</p>` : "");
    listaComunidade.appendChild(item);

    // Guarda a crítica no array central: estatísticas e tabela refletem
    criticas.push({ categoria, titulo, nota });
    atualizarEstatisticas();
    renderizarTabela();

    // confirm: o usuário decide se limpa o formulário agora
    if (confirm("Crítica publicada! Limpar o formulário?")) {
        formulario.reset();
    }
});

/* ============================================================
   FUNCIONALIDADE 9 — Botão "Topo" aparece conforme o scroll
   Recursos: window.addEventListener("scroll"), window.scrollY,
   comparação > e classList.toggle com segundo argumento.
   ============================================================ */
const botaoTopo = document.querySelector("#voltar-topo");

window.addEventListener("scroll", () => {
    // toggle recebe true/false: mostra depois de 400px de rolagem
    botaoTopo.classList.toggle("mostrar", window.scrollY > 400);
});

/* ============================================================
   FUNCIONALIDADE 10 — Data de hoje no rodapé
   Recursos: objeto Date, método toLocaleDateString com "pt-BR" e
   toUpperCase em string.
   ============================================================ */
const hoje = new Date();
const dataFormatada = hoje.toLocaleDateString("pt-BR", {
    weekday: "long",
    day: "2-digit",
    month: "long",
    year: "numeric"
});
document.querySelector("#data-hoje").textContent = dataFormatada.toUpperCase();

/* ============================================================
   Mensagem final no console real do navegador (bônus pedido
   nos slides: console.log é a ferramenta de depuração do JS)
   ============================================================ */
console.log("E-Reviews Aula 8: 10 funcionalidades JavaScript carregadas.");
console.log(`Total de críticas em memória: ${criticas.length}`);
