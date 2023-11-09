import { Coche } from "./Coche";
import { Component } from "@angular/core";
import { PeticionesService } from "../Services/Peticiones.service";

@Component({
    selector: 'Coches',
    templateUrl: "./Coches.component.html",
    providers: [ PeticionesService ]
})

export class CochesComponent{
    public Coche: Coche;
    public Coches: Array<any> = [];
    public Articulos: any;

    constructor(
        private _PeticionesService: PeticionesService
    ){
        this.Coche = new Coche('', '', '');
        this.Coches = [
            new Coche("Dodge Charger", "400", "Rojo"),
            new Coche("Ford Mustang", "350", "Negro"),
        ];
    }

    ngOnInit(){
        this._PeticionesService.getArticulos().subscribe(
            result=>{
                console.log(result);
                
                if(!this.Articulos){
                    console.log("Error en el servidor");
                }
            },
            error =>{
                var errorMessage = <any>error;
                console.log(errorMessage);
            });
    }

    onSubmit(){
        this.Coches.push(this.Coche);
        this.Coche = new Coche(" ", "", " ");
    }
}