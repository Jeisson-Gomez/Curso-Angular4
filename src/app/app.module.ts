import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http'

// used to create fake backend
import { routing, appRoutingProviders } from './app.routing';

//Componentes
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CochesComponent } from './Coche/Coches.Component';
import { ContactoComponent } from './Contacto/Contacto.component';
import { EmpleadoComponent } from './Empleado/Empleado.component';
import { HomeComponent } from './Home/Home.component';
import { TrabajadoresComponent } from './Trabajadores/Trabajadores.component';

//Los pipes
import { ConversorPipe } from './Pipe/Conversor.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CochesComponent,
    ContactoComponent,
    ConversorPipe,
    EmpleadoComponent,
    HomeComponent,
    TrabajadoresComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    routing
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
