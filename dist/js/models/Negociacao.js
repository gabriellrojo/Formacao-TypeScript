export class Negociacao {
    constructor(_data, quantidade, valor) {
        this._data = _data;
        this.quantidade = quantidade;
        this.valor = valor;
    }
    get volume() {
        return this.quantidade * this.valor;
    }
    get data() {
        const date = new Date(this._data.getTime());
        return date;
    }
    static criaDe(dataString, quantidadeString, valorString) {
        let exp = /-/g;
        let date = new Date(dataString.replace(exp, ","));
        let quantidade = parseInt(quantidadeString);
        let valor = parseFloat(valorString);
        return new Negociacao(date, quantidade, valor);
    }
}
