import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//importacinon de los componentes
import { TrabajadoresComponent } from "./Trabajadores/Trabajadores.component";
import { EmpleadoComponent } from './Empleado/Empleado.component';

const appRoutes: Routes = [
    { path: '', component: EmpleadoComponent },
    { path: 'Empleado', component: EmpleadoComponent },
    { path: 'Trabajadores', component: TrabajadoresComponent },
    { path: '**', component: EmpleadoComponent}
];

export const AppRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);