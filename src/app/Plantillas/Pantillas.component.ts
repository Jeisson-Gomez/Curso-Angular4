import { Component } from "@angular/core";

@Component({
    selector: 'Plantillas',
    templateUrl: './Plantillas.component.html'
})

export class PlantillasComponent{
    public titulo;
    public Administrador;

    public Datos_Externos = 'Jeisson Gomez';
    public Identity={
        id: 1,
        Web: 'https://github.com/Jeisson-Gomez',
        Tematica: 'Desarrollo Web'
    };

    constructor(){
        this.titulo = "Plantillas ngTemplate en angular";
        this.Administrador = true;
    }

    cambiar(value: any){
        this.Administrador = value;
    }

    recibirDatos($event: any){
        console.log($event.nombre);
    }
}