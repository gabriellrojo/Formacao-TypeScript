export abstract class View<T> {
    //<T> Generico: utilizamos o genérico pois há incompatibilidade entre dos paramentros do método template de mensagemView -string- e negociacaoView -Negociacoes-. Colocamos o T na nos métodos da classe abstrata enquanto que nas filhas mantemos os parâmetros necessários. 
    protected elemento: HTMLElement //mudamos de private para protected para que as classes filhas possam herdar esse elemento.
    private escapar = false

    constructor(seletor: string, escapar?: boolean){
        //Os parametros que podem ou não ser adicionados (?), devem estar sempre ao final.
        this.elemento = document.querySelector(seletor)
        if(escapar){
            this.escapar = escapar
        }

    }
    
    public update(model: T): void{
        let template = this.template(model)
        if(this.escapar){
            template.replace(/<script>[\s\S]*?<\/script>/, '')
        }
        this.elemento.innerHTML = template
    }

    protected abstract template(model: T): string; //protected. Apenas as classes pais e filhos podem ter acesso ao método
}