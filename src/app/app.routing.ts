import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//importacinon de los componentes
import { ContactoCompoent } from './Contacto/Contacto.component';
import { EmpleadoComponent } from './Empleado/Empleado.component';
import { TrabajadoresComponent } from "./Trabajadores/Trabajadores.component";

const appRoutes: Routes = [
    { path: '', component: EmpleadoComponent },
    { path: 'Contacto', component: ContactoCompoent},
    { path: 'Empleado', component: EmpleadoComponent },
    { path: 'Trabajadores', component: TrabajadoresComponent },
    { path: '**', component: EmpleadoComponent}
];

export const AppRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);