import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//importacinon de los componentes
import { TrabajadoresComponent } from "./Trabajadores/Trabajadores.component";

const appRoutes: Routes = [
    { path: '', component: TrabajadoresComponent },
    { path: 'Trabajadores', component: TrabajadoresComponent },
    { path: '**', component: TrabajadoresComponent}
];

export const AppRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);