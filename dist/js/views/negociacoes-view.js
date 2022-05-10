import { View } from "./view.js";
export class NegociacoesView extends View {
    constructor(seletor) {
        super(seletor);
    }
    template(model) {
        return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                </tr>
            </thead>
            <tbody>
                ${model.lista().map(negociacao => {
            return `
                        <tr>
                            <td>${Intl.DateTimeFormat().format(negociacao.data)}</td>
                            <td>${negociacao.quantidade}</td>
                            <td>${negociacao.valor}</td>
                        </tr>
                    `;
        }).join(" ")}
            </tbody>
        </table>
        `;
    }
}
//Intl.DateTimeFormat().format(data) => vai te dar o valor da data de acordo com a sua localização.
