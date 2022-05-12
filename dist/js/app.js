import { NegociacaoController } from "./controllers/negociacao-controller.js";
let controller = new NegociacaoController();
let form = document.querySelector(".form");
form.addEventListener("submit", (event) => {
    event.preventDefault();
    controller.adiciona();
});
