import { Component } from '@angular/core';
import { ItemCarrito } from 'src/app/clases/ItemCarrito';
import { Pelicula } from 'src/app/clases/peliculas.models';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-animada',
  templateUrl: './animada.component.html',
  styleUrls: ['./animada.component.scss']
})
export class AnimadaComponent {
  itemsComprados: Pelicula[] = new Array<Pelicula>();
  peli: Pelicula[]| undefined;



// TITULOS
titulos: string[]= ["CODIGO","PELICULA", "GENERO", 'AÑO', 'DESCRIPCION','PRECIO', 'LA QUIERO!'];
// OBJETOS 
pelis: any[] = [
  {codigo: 66, nombre: 'El Rey León', genero:'Animada', fecha: 1994, descripcion: 'Simba, el heredero al trono del reino animal, y su padre, el rey Mufasa, caen en una trampa urdida por el hermano del rey para quedarse con el trono.', precio: 2500 },
  {codigo: 77, nombre: 'Akira ', genero:'Animada', fecha: 1988, descripcion: 'Un proyecto militar pone en jaque la ciudad de Neo Tokio cuando transforma a un motero en un monstruo con habilidades psíquicas y que solo podrá ser detenido por un grupo con sus mismas habilidades.', precio: 3500 },
  {codigo: 88, nombre: 'Toy Story',  genero:'Animada', fecha: 1995, descripcion: 'Un grupo de juguetes que cobran vida cuando las personas no están mirando se embarcarán en distintas aventuras que los pondrán en peligro.', precio: 4500 },
  {codigo: 99, nombre: 'Wall-E',  genero:'Animada', fecha: 2008, descripcion: 'En un futuro lejano, un pequeño robot dedicado a recolectar basura, hace un descubrimiento que lo lleva a realizar un maravilloso viaje que podría decidir el destino de la humanidad.', precio: 1500 },
  {codigo: 111, nombre: 'Mulan ',  genero:'Animada', fecha: 1988, descripcion: 'Basada en un cuento folklórico, Mulan es una joven que se hará pasar por hombre para evitar que su padre enfermo sirva en el ejército durante la guerra.', precio: 4500 },
  
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
voto1: number= 0;
voto2: number = 0;
voto3: number = 0;
voto4: number = 0;
voto5: number = 0;


votar1() {  
    this.voto1 ++;
}
votar2() {  
  this.voto2 ++;
}
votar3() {  
  this.voto3 ++;
}
votar4() {  
  this.voto4 ++;
}
votar5() {  
  this.voto5 ++;
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
