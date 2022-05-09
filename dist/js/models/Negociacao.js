export class Negociacao {
    constructor(_data, quantidade, valor) {
        this._data = _data;
        this.quantidade = quantidade;
        this.valor = valor;
    } //Podemos passar esses parâmetros no construtor dessa forma sem anecessidade de declarar o this no bloco construtor ou as propriedades privadas antes do construtor. APENAS NO CASO ONDE HÁ PARAMETROS NO CONSTRUTOR.
    //Utilizando o readonly temos uma tributo apenas leitura sem necessiade de declarar um get (). Podemos apenas ACESSAR.
    get volume() {
        return this.quantidade * this.valor;
    }
    get data() {
        const date = new Date(this._data.getTime()); //getTime valor da data em milisegundos. setDate() => atribui valor.
        return date; //programacao defensiva. Estarei retornando uma cópia da minha data inserida de modo que a modificação é feito na cópia.
    }
}
