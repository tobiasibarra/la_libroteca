import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ItemCarrito } from 'src/app/clases/ItemCarrito';
import { Pelicula } from 'src/app/clases/peliculas.models';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-terror',
  templateUrl: './terror.component.html',
  styleUrls: ['./terror.component.scss']
})
export class TerrorComponent implements OnInit{
  constructor(private router: Router) { }
  ngOnInit(): void {
    
  }

  itemsComprados: Pelicula[] = new Array<Pelicula>();
  peli: Pelicula[]| undefined;



  // TITULOS
  titulos: string[]= ["CODIGO","PELICULA", "GENERO", 'AÑO', 'DESCRIPCION','PRECIO', 'LA QUIERO!'];
  // OBJETOS 
  pelis: any[] = [
    {codigo: 11, nombre: 'Annabelle', genero:'Terror', fecha: 2014, descripcion: 'La cinta fue lanzada en el 2014 y aquí se ve como la niña poseída que ahora es una mujer adulta asesina a sus padres adoptivos y toda la situación es observada por sus vecinos que sin querer ahora son parte de todo los relacionado a ese mundo demoníaco.', precio: 2500  },
    {codigo: 22, nombre: 'El Exorcista', genero:'Terror', fecha: 1974, descripcion: 'Una inocente niña de 12 años sufre un grave trastorno en su comportamiento, pero los médicos son incapaces de diagnosticar las causas. En realidad, está poseída por el demonio y solo un exorcismo puede sanarla.', precio: 2800  },
    {codigo: 33, nombre: 'El grito',  genero:'Terror', fecha: 2005, descripcion: 'La historia sigue a Karen, una joven enfermera americana que acaba de llegar a Japón. Su nuevo trabajo es el de cuidar a una anciana que vive en una antigua casa, la misma en la que existe una maldición sobrenatural.',  precio: 2534 },
    {codigo: 44, nombre: 'Host',  genero:'Terror', fecha: 2020, descripcion: 'Host gira en torno a un grupo de amigas que quedan vía Zoom para hacer una sesión de espiritismo. Pero todo se complica cuando comienzan a ocurrirles cosas inexplicables a cada uno en sus casas.',  precio: 5400  },
    {codigo: 55, nombre: 'IT',  genero:'Terror', fecha: 2017, descripcion: ' Aquí, un grupo de niños de los 80 comienzan a descubrir una fuerza sobrenatural que está acabando con el pueblo de Derry en Maine.', precio: 4450 },
    
  ]
  peliElegida: string | undefined;
  detalles(peli:any) {
    this.peliElegida = `${peli.descripcion}`
      Swal.fire({
        title: ' <u>Descripcion</u>'+ ': ' + this.peliElegida,
        icon: 'info',
        confirmButtonText:
          '<i class="fa fa-thumbs-up"></i> Buenisimo!',
        
      })
}


nombrePeli: string | undefined;
votoAna: number= 0;
votoExo: number = 0;
votoGrito: number = 0;
votoHost: number = 0;
votoIt: number = 0;


votar1() {  
    this.votoAna ++;
}
votar2() {  
  this.votoExo ++;
}
votar3() {  
  this.votoGrito ++;
}
votar4() {  
  this.votoHost ++;
}
votar5() {  
  this.votoIt ++;
}

comprarItem(item: Pelicula){
  let iCarrito: ItemCarrito={
      codigo:item.codigo,
      nombre: item.nombre,
      precio: item.precio,
      cantidad: 1
  }
  if(localStorage.getItem("carrito")=== null){
  let carrito: ItemCarrito[] = [];
   carrito.push(iCarrito);
  localStorage.setItem("carrito", JSON.stringify(carrito))
  }
  else{
    let carritoStorage = localStorage.getItem("carrito") as string;
    let carrito = JSON.parse(carritoStorage);
    let index = -1;
    for(let i=0; i < carrito.length; i++){
      let itemC: ItemCarrito = carrito[i];
      if(iCarrito.codigo === itemC.codigo){
           index = i;
           break;
      }
    }

    if(index===-1){
    carrito.push(iCarrito);
    localStorage.setItem("carrito", JSON.stringify(carrito))
    }
    else{
      let itemCarrito: ItemCarrito= carrito[index];
      itemCarrito.cantidad!++;
      carrito[index] = itemCarrito;
      localStorage.setItem("carrito", JSON.stringify(carrito));
    }
    

  }

  }









}