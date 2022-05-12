export class Negociacao {
    constructor(
        private _data: Date, 
        public readonly quantidade: number, 
        public readonly valor: number){} //Podemos passar esses parâmetros no construtor dessa forma sem anecessidade de declarar o this no bloco construtor ou as propriedades privadas antes do construtor. APENAS NO CASO ONDE HÁ PARAMETROS NO CONSTRUTOR.
        //Utilizando o readonly temos uma tributo apenas leitura sem necessiade de declarar um get (). Podemos apenas ACESSAR.

    get volume(): number{
        return this.quantidade * this.valor
    }

    get data(): Date {
        const date = new Date (this._data.getTime())//getTime valor da data em milisegundos. setDate("x") => atribui valor.
        return date //programacao defensiva. Estarei retornando uma cópia da minha data inserida de modo que a modificação é feito na cópia.
    }

    public static criaDe(dataString: string, quantidadeString: string, valorString: string): Negociacao{
         //Vamos alterar aqui, pois estamos obtendo um objeto apenas com strings
         let exp = /-/g
         let date = new Date(dataString.replace(exp, ","));
         let quantidade = parseInt(quantidadeString);
         let valor = parseFloat(valorString)
         
         return new Negociacao (date, quantidade , valor)

    }
}