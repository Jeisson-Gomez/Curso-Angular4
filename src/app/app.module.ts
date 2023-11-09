import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { routing, AppRoutingProviders } from './app.routing';

//Componentes
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CochesComponent } from './Coche/Coches.Component';
import { ContactoComponent } from './Contacto/Contacto.component';
import { EmpleadoComponent } from './Empleado/Empleado.component';
import { TrabajadoresComponent } from './Trabajadores/Trabajadores.component';

@NgModule({
  declarations: [
    AppComponent,
    CochesComponent,
    ContactoComponent,
    EmpleadoComponent,
    TrabajadoresComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    routing
  ],
  providers: [AppRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
