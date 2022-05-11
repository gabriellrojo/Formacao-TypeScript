export abstract class View<T> {
    //<T> Generico: utilizamos o genérico pois há incompatibilidade entre dos paramentros do método template de mensagemView -string- e negociacaoView -Negociacoes-. Colocamos o T na nos métodos da classe abstrata enquanto que nas filhas mantemos os parâmetros necessários. 
    protected elemento: HTMLElement //mudamos de private para protected para que as classes filhas possam herdar esse elemento.

    constructor(seletor: string){
        this.elemento = document.querySelector(seletor)

    }

    protected abstract template(model: T): string; //protected. Apenas as classes pais e filhos podem ter acesso ao método
    
    public update(model: T): void{
        this.elemento.innerHTML = this.template(model)
    }
}