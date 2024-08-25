import { Component } from '@angular/core';
import { ItemCarrito } from 'src/app/clases/ItemCarrito';
import { Pelicula } from 'src/app/clases/peliculas.models';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-romance',
  templateUrl: './romance.component.html',
  styleUrls: ['./romance.component.scss']
})
export class RomanceComponent {
  peli: Pelicula[] = new Array<Pelicula>();
  itemsComprados: Pelicula[] = new Array<Pelicula>();


// TITULOS
titulos: string[]= ["CODIGO","PELICULA", "GENERO", 'AÑO', 'DESCRIPCION','PRECIO',  'LA QUIERO!'];
// OBJETOS 
pelis: any[] = [
  {codigo:12,nombre: 'El diario de Noa', genero:'Romance', fecha: 2004, descripcion: 'Esta película está basada en la novela homónima de Nicholas Sparks y sigue la historia de amor a lo largo de décadas entre Noah (interpretado por Ryan Gosling) y Allie (interpretada por Rachel McAdams). La película es conocida por su intensa química entre los actores y su dramática narrativa que aborda temas como el amor verdadero, la pérdida y la superación de la adversidad.',  precio: 3500  },
  {codigo:13,nombre: '500 días juntos', genero:'Romance', fecha: 2009, descripcion: 'La película sigue la historia de Tom (interpretado por Joseph Gordon-Levitt), un joven arquitecto que se enamora de Summer (interpretada por Zooey Deschanel), una mujer con un enfoque fresco y no tradicional sobre el amor y las relaciones. A lo largo de los siguientes 500 días, Tom y Summer experimentan altibajos en su relación, mientras Tom trata de entender lo que quiere y lo que significa el amor verdadero.',  precio: 2500  },
  {codigo:14,nombre: 'Un paseo para recordar',  genero:'Romance', fecha: 2002, descripcion: 'La historia sigue a Landon Carter, un joven rebelde que se ve obligado a participar en una obra de teatro de la escuela después de cometer una infracción. Allí conoce a Jamie Sullivan, una joven dulce y religiosa, y los dos jóvenes se enamoran mientras trabajan juntos en la obra.', precio: 2900  },
  {codigo:15,nombre: 'Cinema Paradiso',  genero:'Romance', fecha: 1988, descripcion: 'Un joven cineasta que regresa a su ciudad natal en Sicilia para asistir al funeral de Alfredo, el proyeccionista del cine local con el que creció. A través de flashbacks, Salvatore recuerda su infancia y su amistad con Alfredo, y cómo el cine y la amistad influenciaron su vida.', precio: 2500  },
  {codigo:16,nombre: 'La La Land',  genero:'Romance', fecha: 2016, descripcion: 'Esta película sigue la historia de dos artistas en Los Ángeles que luchan por sus sueños y se enamoran en el camino. La película combina elementos de comedia, drama y musical para crear una historia de amor única. Sin duda una peli para poder disfrutar, cantar y bailar y que te dejará con una lágrima debido a sus grandes torrentes de emoción y sus claros y oscuros.',  precio: 2800  },
  
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

