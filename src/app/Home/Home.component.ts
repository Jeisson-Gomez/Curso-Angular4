import { Component } from "@angular/core";
import { RopaService } from "../Services/Ropa.component.service";

@Component({
    selector: 'Home',
    templateUrl: './home.component.html',
    providers: [RopaService]
})

export class HomeComponent{
    public titulo = 'Pagina Principal';

    public Listado_Ropa: Array<string> = [];
    public Prenda_a_Guardar: any;
    public fecha;
    public Nombre = 'Jeisson Gomez';

    constructor(
        private _RopaService: RopaService
    ){
        this.fecha = new Date(2023, 11, 5);
    }

    ngOnInit(){
        this.Listado_Ropa = this._RopaService.getRopa();
        console.log(this.Listado_Ropa);
    }

    guardarPrenda(){
        this._RopaService.addRopa(this.Prenda_a_Guardar);
    }

    eliminarPrenda(index: number){
        this._RopaService.deleteRopa(index);
    }
}