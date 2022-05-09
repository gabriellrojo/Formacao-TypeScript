export class Negociacoes {
    constructor() {
        this.negociacoes = []; //Array<Negociacao> pode ser declarado também da seguinte forma: Negociacao[]
    }
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    lista() {
        return this.negociacoes;
    }
}
