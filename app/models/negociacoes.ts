import { Negociacao } from "./negociacao.js"

export class Negociacoes {
    private negociacoes: Array<Negociacao> = [] //Array<Negociacao> pode ser declarado também da seguinte forma: Negociacao[]

    adiciona(negociacao: Negociacao) {
        this.negociacoes.push(negociacao)
    }

    lista(): ReadonlyArray<Negociacao>{ //ready only array: não permite modificação no nosso array. Impede que alguém exclua alguma negociacao adicionada => SOMENTE LEITURA. Pode ser decladado como: readonly Negociacao[]
        return this.negociacoes
    }
}