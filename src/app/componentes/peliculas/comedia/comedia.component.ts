import { Component, OnInit } from '@angular/core';
import { ItemCarrito } from 'src/app/clases/ItemCarrito';
import { Pelicula } from 'src/app/clases/peliculas.models';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-comedia',
  templateUrl: './comedia.component.html',
  styleUrls: ['./comedia.component.scss']
})
export class ComediaComponent implements OnInit {
  
  ngOnInit(): void {
    
  }

  itemsComprados: Pelicula[] = new Array<Pelicula>();
  peli: Pelicula[]| undefined;



// TITULOS
titulos: string[]= ["CODIGO","PELICULA", "GENERO", 'AÑO', 'DESCRIPCION','PRECIO', 'LA QUIERO!'];
// OBJETOS 
pelis: any[] = [
  {codigo:36, nombre: 'La otra Missy', genero:'Comedia', fecha: 2020, descripcion: 'Todo comienza cuando Tim conoce a la mujer de sus sueños y está dispuesto a dar el siguiente paso invitándola al retiro de su empresa, pero por una confusión invita a la Melissa equivocada que conoció en su peor cita a ciegas. Será el mejor fin de semana para Tim, sobre todo porque también estará su ex prometida por la que aún siente algo. ', precio: 2500  },
  {codigo:37, nombre: '¿Quién son los Miller?', genero:'Comedia', fecha: 2013, descripcion: '¿Quién *&$%! son los Miller?  trata sobre un pequeño traficante de drogas que convence a sus vecinos para crear una familia falsa, después de que un grupo de ladrones les roba el dinero de sus ventas y su jefe lo obliga a contrabandear droga desde México. ', precio: 2500  },
  {codigo:38, nombre: 'Noche de juegos',  genero:'Comedia', fecha: 2018, descripcion: 'Esta película de thriller cómico trata sobre una pareja competitiva que ama jugar juegos sobre preguntas y respuestas,  cada semana se junta con un grupo de amigos para jugar, pero todo se convierte en un verdadero misterio que resolver cuando uno de ellos decide llevar el juego a un nivel más alto. Secuestran a un jugador y quien lo encuentre ganará el juego, pero todos empiezan a dudar si es verdadero o falso, lo que los llevará a una noche desenfrenada.',  precio: 2500 },
  {codigo:39, nombre: 'Pasante de moda',  genero:'Comedia', fecha: 2015, descripcion: 'Jules Austin es una mujer exitosa de una empresa de moda en línea, que debe contratar como proyecto laboral a una persona de la tercera edad para ser practicante. Ben es un señor de setenta años que descubre que es bastante aburrido estar retirado, por lo que toma la oferta y se convierte en su pasante. Poco a poco se convierte en alguien especial para la empresa.',  precio: 2500  },
  {codigo:40, nombre: 'Vacaciones ',  genero:'Comedia', fecha: 2000, descripcion: 'Esta película de comedia/acción empieza cuando Rusty Griswold (Ed Helms) quiere fortalecer los lazos de su familia, repitiendo el viaje que hizo de vacaciones cuando era niño. Acompañado de su esposa Debbie (Christina Applegate) y sus dos hijos Jack (Skyler Gisondo) y Kevin (Steele Stebbins), cruzan todo Estados Unidos para ir al parque de atracciones favorito. Pero, no todo sale como esperaba.', precio: 2500  },
  
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


