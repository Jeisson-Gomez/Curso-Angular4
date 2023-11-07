import { Component } from '@angular/core';
import { Empleado } from './Empleado';

@Component({
    selector: 'Empleado-tag',
    templateUrl: './Empleado.component.html'
})

export class EmpleadoComponent{
    public titulo = 'Componente de Empleado';

    public Empleado!: Empleado;
    public Trabajadores: Array<any> = [];
    public Trabajador_Externo!: boolean;
    public Color!: string;

    ngOnInit(){
        this.Empleado = new Empleado('David Lopez', 44, "Cocinero", true);
        this.Trabajadores = [
            new Empleado('Mamolo Martines', 23, 'Cocinero', true),
            new Empleado('Luisa Garcia', 56, 'Cocinera', false),
            new Empleado('Victor Robles', 38, 'Programador', true)
        ];

        this.Trabajador_Externo = true;
        this.Color = 'red'
    }

    cambiarExterno(valor: boolean){
        this.Trabajador_Externo = valor;
    }
}