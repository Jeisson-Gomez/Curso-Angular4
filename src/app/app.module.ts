import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing, AppRoutingProviders } from './app.routing';

//Componentes
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpleadoComponent } from './Empleado/Empleado.component';
import { TrabajadoresComponent } from './Trabajadores/Trabajadores.component';

@NgModule({
  declarations: [
    AppComponent,
    EmpleadoComponent,
    TrabajadoresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    routing
  ],
  providers: [AppRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
