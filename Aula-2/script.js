
// Captura os elementos HTML
const botao = document.getElementById("meuBotao");
const mensagem = document.getElementById("mensagem");

// Adiciona um evento de clique ao botão
botao.addEventListener("click", function() {

    mensagem.textContent = "Parabéns! Seu JavaScript está funcionando!";

});
