import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { PeliculasComponent } from './componentes/peliculas/peliculas.component';
import { TerrorComponent } from './componentes/peliculas/terror/terror.component';
import { AppComponent } from './app.component';
import { MusicaComponent } from './musica/musica.component';
import { LibrosComponent } from './componentes/libros/libros.component';
import { CarritoComponent } from './carrito/carrito.component';
import { ComediaComponent } from './componentes/peliculas/comedia/comedia.component';
import { AccionComponent } from './componentes/peliculas/accion/accion.component';
import { AnimadaComponent } from './componentes/peliculas/animada/animada.component';
import { RomanceComponent } from './componentes/peliculas/romance/romance.component';
import { LoginComponent } from './login/login.component';
import { ComprarComponent } from './comprar/comprar.component';
import { Libro } from './clases/libros.model';



const routes: Routes = [
  
  {
    path: '',
    redirectTo: 'libros',
    pathMatch: 'full'
  },
 


  {
    path: 'libros',
  component: LibrosComponent
  },
  {
    path: 'musica',
    component: MusicaComponent
  },


  
  
  {
    path: 'carrito',
  component: CarritoComponent 
  },
  {
    path: 'login',
  component: LoginComponent 
  },
  {
    path: 'comprar',
  component: ComprarComponent 
  },




  {
    path: 'peliculas',
    component: PeliculasComponent
  },
  {
    path: 'terror',
    component: TerrorComponent
  },
  
  {
    path: 'accion',
    component: AccionComponent
  },
  {
    path: 'animada',
    component: AnimadaComponent
  },
  {
    path: 'romance',
    component: RomanceComponent
  },
  {path: 'comedia',
  component: ComediaComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


 }

