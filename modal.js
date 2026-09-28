 // =========================================================
// BOTÕES "SAIBA MAIS"
// =========================================================

const botoesModal = document.querySelectorAll(".btn-modal");
const modal = document.getElementById("modal");
const fecharModal = document.querySelector(".close-btn");
const modalTitle = document.getElementById("modal-title");
const modalText = document.getElementById("modal-text");


// Informações de cada mito
const informacoes = [
    {
        titulo: "Mito 1: A vacina contra a Covid-19 causa Covid-19",
        texto: "As vacinas contra a Covid-19 não causam a doença. Elas ajudam o sistema imunológico a reconhecer o vírus e a desenvolver uma resposta de defesa."
    },
    {
        titulo: "Mito 2: As vacinas contra a Covid-19 não são eficazes",
        texto: "As vacinas foram desenvolvidas para estimular o sistema imunológico e podem reduzir o risco de formas graves da Covid-19, hospitalização e morte."
    }
];


// Quando clicar em "Saiba mais"
botoesModal.forEach(function(botao, indice) {

    botao.addEventListener("click", function() {

        modalTitle.textContent = informacoes[indice].titulo;
        modalText.textContent = informacoes[indice].texto;

        modal.classList.remove("hidden");
    });

});


// Quando clicar no X
fecharModal.addEventListener("click", function() {

    modal.classList.add("hidden");

});


// Quando clicar fora da caixa branca
modal.addEventListener("click", function(evento) {

    if (evento.target === modal) {
        modal.classList.add("hidden");
    }

});


// =========================================================
// BOTÕES "CURTIR"
// =========================================================

const botoesLike = document.querySelectorAll(".btn-like");

botoesLike.forEach(function(botao) {

    botao.addEventListener("click", function() {

        let curtidas = Number(botao.getAttribute("data-likes"));

        curtidas = curtidas + 1;

        botao.setAttribute("data-likes", curtidas);

        const contador = botao.querySelector(".like-count");

        contador.textContent = curtidas;

    });

});