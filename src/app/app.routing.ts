import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Importación de los componentes
import { CochesComponent } from './Coche/Coches.Component';
import { ContactoComponent } from './Contacto/Contacto.component';
import { EmpleadoComponent } from './Empleado/Empleado.component';
import { HomeComponent } from './Home/Home.component';
import { PlantillasComponent } from './Plantillas/Pantillas.component';
import { TrabajadoresComponent } from "./Trabajadores/Trabajadores.component";

const appRoutes: Routes = [
    { path: '', component: EmpleadoComponent },
    { path: 'Coches', component: CochesComponent },
    { path: 'Contacto', component: ContactoComponent},
    { path: 'Contacto/: page', component: ContactoComponent},
    { path: 'Empleado', component: EmpleadoComponent },
    { path: 'Pagina-Principal', component: HomeComponent },
    { path: 'Plantillas', component: PlantillasComponent },
    { path: 'Trabajadores', component: TrabajadoresComponent },
    { path: '**', component: HomeComponent}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);