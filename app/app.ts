//Para instalar o TS: npm install typescript@4.2.2 --save-dev.
//@4.2.2 corresponde a versão sugerida pelo professor.
//--save-dev é para indicar que o projeto em questão não irá para praça pois está em fase de desenvolvimento
import { NegociacaoController } from "./controllers/negociacao-controller.js";

let controller = new NegociacaoController();
let form = document.querySelector(".form")

form.addEventListener("submit", (event) => {
    event.preventDefault()
    controller.adiciona()
    
})

