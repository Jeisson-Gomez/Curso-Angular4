import { Component } from "@angular/core";
import { Router, ActivatedRoute, Params } from "@angular/router";

@Component({
    selector: 'Contacto',
    templateUrl: './Contacto.component.html'
})

export class ContactoComponent{
    public titulo = 'Pagina de contacto de la web';
    public Parametro: any;

    constructor(
        private _Route: ActivatedRoute,
        private _Router: Router
    ){}

    ngOnInit(){}

    redirigir(){
        this._Router.navigate(['/Contacto', 'github.com/Jeisson-Gomez']);
    }

    redirigirdos(){
        this._Router.navigate(['/Pagina-Principal'])
    }
}