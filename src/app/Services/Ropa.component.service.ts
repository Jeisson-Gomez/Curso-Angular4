import { Injectable } from "@angular/core";

@Injectable()

export class RopaService{
    public Nombre_Prenda = 'Pantalones Vaqueros';
    public Colección_Ropa = ['Pantalones Blancos', 'Camiseta Roja'];

    Prueba(Nombre_Prenda: string){
        return Nombre_Prenda;
    }

    addRopa(Nombre_Prenda: string): Array<string>{
        this.Colección_Ropa.push(Nombre_Prenda);
        return this.getRopa();
    }

    getRopa(): Array<string>{
        return this.Colección_Ropa;
    }

    deleteRopa(index: number){
        this.Colección_Ropa.splice(index, 1);
        return this.getRopa();
    }
}