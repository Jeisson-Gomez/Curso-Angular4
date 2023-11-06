import { Component } from '@angular/core';
import { Empleado } from './Empleado';

@Component({
    selector: 'Empleado-tag',
    templateUrl: './Empleado.component.html'
})

export class EmpleadoComponent{
    public titulo = 'Componente de empleado';

    constructor(){}
}