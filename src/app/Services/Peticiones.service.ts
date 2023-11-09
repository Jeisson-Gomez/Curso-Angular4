import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpResponse } from "@angular/common/http";
import { map } from "rxjs-compat/operator/map";
import { Observable } from "rxjs";

@Injectable()

export class PeticionesService{
    public url: string;

    constructor(
        private _Http:HttpClient
    ){
        this.url = 'https://jsonplaceholder.typicode.com';
    }

    getPrueba(){
        return this._Http.get('Hola mundo desde el servicio');
    }

    getArticulos(){
        return this._Http.get(this.url);
    }
}