import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
    selector: 'Componente-Hijo',
    template: `
    <p>Este es el {{ title }}</p>
    <ul>
        <li>{{ Propiedad_Uno }}</li>
        <li>{{ Propiedad_Dos.web }}</li>
    </ul>

    <button (click)="enviar()">Enviar datos al padre</button>
    `
})

export class HijoComponent{
    public title: string;

    @Input('Texto_1') Propiedad_Uno: any;
    @Input('Texto_2') Propiedad_Dos: any;

    @Output() Desde_el_hijo = new EventEmitter();

    constructor(){
        this.title = "Componente hijo";
    }

    ngOnInit(){
        console.log(this.Propiedad_Uno);
        console.log(this.Propiedad_Dos);
    }

    enviar(){
        this.Desde_el_hijo.emit({
            Nombre: 'Jeisson Gomez',
            Web: 'github.com/Jeisson-Gomez',
            Twitter: '@Jeisson'
        });
    }
}