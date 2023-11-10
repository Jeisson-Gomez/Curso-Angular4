import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
    selector: 'Componente-Hijo',
    template: `
    <p>Este es el {{ title }}</p>
    <ul>
        <li>{{ Propiedad_uno }}</li>
        <li>{{ Propiedad_dos }}</li>
    </ul>

    <button>
        Enviar datos al padre
    </button>
    `
})

export class HijoComponent{
    public title: string;

    @Input('Texto_1') Propiedad_uno: string | undefined;
    @Input('Texto_2') Propiedad_dos: string | undefined;

    @Output() Desde_el_hijo = new EventEmitter;


    constructor(){
        this.title = "Componente hijo"
    }
}