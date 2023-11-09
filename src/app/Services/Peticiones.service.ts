import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpResponse } from "@angular/common/http";
import { map, Observable } from "rxjs";

@Injectable()

export class PeticionesService{
    public url: string;

    constructor(
        private _HttpClient:HttpClient
    ){
        this.url = 'https://jsonplaceholder.typicode.com/posts';
    }

    getPrueba(){
        return this._HttpClient.get('Hola mundo desde el servicio');
    }

    getArticulos(){
        return this._HttpClient.get(this.url);
    }
}