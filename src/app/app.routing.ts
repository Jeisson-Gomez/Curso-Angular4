import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Importación de los componentes
import { CochesComponent } from './Coche/Coches.Component';
import { ContactoComponent } from './Contacto/Contacto.component';
import { EmpleadoComponent } from './Empleado/Empleado.component';
import { TrabajadoresComponent } from "./Trabajadores/Trabajadores.component";

const appRoutes: Routes = [
    { path: '', component: EmpleadoComponent },
    { path: 'Coches', component: CochesComponent },
    { path: 'Contacto', component: ContactoComponent},
    { path: 'Empleado', component: EmpleadoComponent },
    { path: 'Trabajadores', component: TrabajadoresComponent },
    { path: '**', component: EmpleadoComponent}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);