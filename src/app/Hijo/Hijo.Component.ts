import { Component } from "@angular/core";

@Component({
    selector: 'Componente-Hijo',
    template: `
    <p>Este es el {{ title }}</p>
    `
})

export class HijoComponent{
    public title: string;

    constructor(){
        this.title = "Componente hijo"
    }
}