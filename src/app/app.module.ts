import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './componentes/home/home.component';
import { LibrosComponent } from './componentes/libros/libros.component';
import { PeliculasComponent } from './componentes/peliculas/peliculas.component';
import { TerrorComponent } from './componentes/peliculas/terror/terror.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MusicaComponent } from './musica/musica.component';

import { DetalleComponent } from './detalle/detalle.component';
import { CarritoComponent } from './carrito/carrito.component';
import { ComediaComponent } from './componentes/peliculas/comedia/comedia.component';
import { RomanceComponent } from './componentes/peliculas/romance/romance.component';
import { AccionComponent } from './componentes/peliculas/accion/accion.component';
import { AnimadaComponent } from './componentes/peliculas/animada/animada.component';
import { LoginComponent } from './login/login.component';
import { ComprarComponent } from './comprar/comprar.component';





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LibrosComponent,
    PeliculasComponent,
    TerrorComponent,
    MusicaComponent,
   
    DetalleComponent,
        CarritoComponent,
        ComediaComponent,
        RomanceComponent,
        AccionComponent,
        AnimadaComponent,
        LoginComponent,
        ComprarComponent,
        
      
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
