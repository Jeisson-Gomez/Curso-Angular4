import { Coche } from "./Coche";
import { Component } from "@angular/core";

@Component({
    selector: 'Coches',
    templateUrl: "./Coches.component.html"
})

export class CochesComponent{
    public Coche: Coche;
    public Coches:  Array<any> = []

    constructor(){
        this.Coche = new Coche('', '', '');
        this.Coches = [
            new Coche("Dodge Charger", 400, "Rojo"),
            new Coche("Ford Mustang", 350, "Negro"),
        ];
    }

    onSubmit(){
        this.Coches.push(this.Coche);
        this.Coche = new Coche(" ", "", " ");
    }
}