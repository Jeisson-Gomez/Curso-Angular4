import { Component } from "@angular/core";

@Component({
    selector: 'Trabajadores',
    templateUrl: './Trabajadores.component.html'
})

export class TrabajadoresComponent{
    public Nombre_Componente = "Componente de Frutas";
    public Listado_Fruta = 'Naranja, Mandarina, Piña, Arandanos'

    public Nombre: string;
    public Edad: number;
    public MayorDeEdad: boolean;
    public Comodin: any;

    constructor(){
        this.Nombre = 'Jeisson Gomez';
        this.Edad = 44;
        this.MayorDeEdad = true;
        this.Comodin = 'Si';
    }
}