import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { NegociacoesView } from "../views/negociacoes-view.js";
import { MensagemView } from "../views/mensagem-view.js";
export class NegociacaoController {
    constructor() {
        this.negociacoes = new Negociacoes(); //como estamos instanciando aqui, não precisamos declarar o tipo. TS já entende.
        this.negociacoesView = new NegociacoesView("#negociacoesView");
        this.mensagemView = new MensagemView("#mensagemView");
        this.SABADO = 6;
        this.DOMINGO = 0; //Há uma convenção que recomenda declararmos constantes em caixa alta
        this.inputData = document.querySelector("#data");
        this.inputQuantidade = document.querySelector("#quantidade");
        this.inputValor = document.querySelector("#valor");
        this.negociacoesView.update(this.negociacoes);
    }
    adiciona() {
        let negociacao = this.criaNegociacao();
        if (!this.diaEhUtil(negociacao.data)) {
            this.mensagemView.update("Negociações válidas apenas em dias úteis");
        }
        this.negociacoes.adiciona(negociacao);
        this.atualizaView();
        this.limpaFormulario();
        //getDay(): dias da semana 0 até 6, sendo 0 o domingo. O getDate retorna o dia do mês conforme visto em outra atividade
    }
    diaEhUtil(data) {
        return data.getDay() > 0 && data.getDay() < 6;
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
    atualizaView() {
        this.negociacoesView.update(this.negociacoes);
        this.mensagemView.update("Negociação Incluída com Sucesso");
    }
}
