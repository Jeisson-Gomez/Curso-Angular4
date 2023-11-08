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
    public Color_Seleccionador!: string;

    ngOnInit(){
        this.Empleado = new Empleado('David Lopez', 44, "Cocinero", true);
        this.Trabajadores = [
            new Empleado('Mamolo Martines', 23, 'Cocinero', true),
            new Empleado('Luisa Garcia', 56, 'Cocinera', true),
            new Empleado('Victor Robles', 38, 'Programador', false)
        ];

        this.Trabajador_Externo = true;
        this.Color = 'blue'
        this.Color_Seleccionador = '#ccc'
    }

    cambiarExterno(valor: boolean){
        this.Trabajador_Externo = valor;
    }

    logColorSeleccionado(){
        console.log(this.Color_Seleccionador);
    }
}