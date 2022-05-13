import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { NegociacoesView } from "../views/negociacoes-view.js";
import { MensagemView } from "../views/mensagem-view.js";
import { DiasDaSemana } from "../enums/dias-da-semana.js";

export class NegociacaoController {
    private inputData: HTMLInputElement;
    private inputQuantidade: HTMLInputElement;
    private inputValor: HTMLInputElement
    private negociacoes = new Negociacoes() //como estamos instanciando aqui, não precisamos declarar o tipo. TS já entende.
    private negociacoesView = new NegociacoesView("#negociacoesView", true)
    private mensagemView = new MensagemView("#mensagemView")

    constructor(){
        this.inputData = document.querySelector("#data")
        this.inputQuantidade = document.querySelector("#quantidade");
        this.inputValor = document.querySelector("#valor")
        this.negociacoesView.update(this.negociacoes)
    }

    public adiciona(): void{ //Nao precisaria colocar, o TS subentende como public quando não especificado.
        let negociacao = Negociacao.criaDe(this.inputData.value, this.inputQuantidade.value, this.inputValor.value)
        if(!this.diaEhUtil(negociacao.data)){
            this.mensagemView.update("Negociações válidas apenas em dias úteis")

        }
        this.negociacoes.adiciona(negociacao)
        this.atualizaView()
        this.limpaFormulario()
        
        //getDay(): dias da semana 0 até 6, sendo 0 o domingo. O getDate retorna o dia do mês conforme visto em outra atividade
    }

    private diaEhUtil(data: Date){
        return data.getDay() > DiasDaSemana.DOMINGO && data.getDay() < DiasDaSemana.SABADO
    }

    private limpaFormulario(): void{
        this.inputData.value = "" 
        this.inputQuantidade.value = ""
        this.inputValor.value = ""
        this.inputData.focus()
    }

    private atualizaView(): void{
        this.negociacoesView.update(this.negociacoes)
        this.mensagemView.update("Negociação Incluída com Sucesso")
    }
}