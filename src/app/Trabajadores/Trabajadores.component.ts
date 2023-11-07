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

    ngOnInit(){
        this.cambiarNombre(this.Nombre);
        console.log(this.Nombre + ' ' + this.Edad);

        //Variables y alcance
        var uno = 4;
        var dos = 15;

        if(uno == 8){
            let uno = 3;
            let dos = 88;

            console.log("Dentro del If: "+uno+' '+dos);
        }

        console.log("Fuera del if: "+uno+' '+dos);
    }

    cambiarNombre(Nombre: any){
        this.Nombre = 'Jeisson';
    }

    cambiarEdad(Edad: number){
        this.Edad = 54;
    }
}