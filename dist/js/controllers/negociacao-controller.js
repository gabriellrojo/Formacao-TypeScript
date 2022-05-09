import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { NegociacoesView } from "../views/negociacoes-view.js";
export class NegociacaoController {
    constructor() {
        this.negociacoes = new Negociacoes(); //como estamos instanciando aqui, não precisamos declarar o tipo. TS já entende.
        this.negociacoesView = new NegociacoesView("#negociacoesView");
        this.inputData = document.querySelector("#data");
        this.inputQuantidade = document.querySelector("#quantidade");
        this.inputValor = document.querySelector("#valor");
        this.negociacoesView.template(this.negociacoes); //vai apresentar nossa tabela vazia nesse momento da leitura do códico pois invocamos o método template, mas não realizamos nenhuma adição
        this.negociacoesView.update(this.negociacoes);
    }
    adiciona() {
        let negociacao = this.criaNegociacao();
        this.negociacoes.adiciona(negociacao);
        this.negociacoesView.update(this.negociacoes);
        this.limpaFormulario();
    }
    criaNegociacao() {
        //Vamos alterar aqui, pois estamos obtendo um objeto apenas com strings
        let exp = /-/g;
        let date = new Date(this.inputData.value.replace(exp, ","));
        let quantidade = parseInt(this.inputQuantidade.value);
        let valor = parseFloat(this.inputValor.value);
        return new Negociacao(date, quantidade, valor);
    }
    limpaFormulario() {
        this.inputData.value = "";
        this.inputQuantidade.value = "";
        this.inputValor.value = "";
        this.inputData.focus();
    }
}
