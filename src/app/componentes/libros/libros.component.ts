import { Component, OnInit } from '@angular/core';
import { ItemCarrito } from 'src/app/clases/ItemCarrito';
import { Libro } from 'src/app/clases/libros.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.scss']
})
export class LibrosComponent implements OnInit {
 
  libros : Libro[] | undefined;
  titulos: string [] = ["Editorial","Nombre y descripción","Precio","Imagen","Acciones"]
  itemsComprados: Libro[] = new Array<Libro>();
  showDetalle!: boolean;
  libroSelected:Libro | undefined;
  constructor(){

  }
  ngOnInit(): void {
    this.libros = this.generarLibros();
  }

  generarLibros(){
    let arrayLibros = new Array<Libro>();
    let l1 = new Libro();
    l1.codigo = 122;
    l1.nombre = "IT";
    l1.editorial= "Debolsillo";
    l1.descripcion= "'¿Por qué llega cíclicamente el horror a Derry en forma de un payaso siniestro que va sembrando la destrucción a su paso? Esto es lo que se proponen averiguar los protagonistas de esta novela.'";
    l1.precio= 3000;
    l1.imagen="assets/it.jpg";

    let l2 = new Libro();
    l2.codigo = 123;
    l2.editorial= "Lea";
    l2.nombre = "EL VISITANTE";
    l2.descripcion ="'Maitland parece un buen tipo, un ciudadano ejemplar, ¿acaso tiene dos caras? Y ¿cómo es posible que estuviera en dos sitios a la vez? La respuesta, como no podría ser de otra forma saliendo de la pluma de Stephen King, te hará desear no haber preguntado.'" ;
    l2.precio= 5000;
    l2.imagen="assets/vis.jpg";

    let l3 = new Libro();
    l3.codigo = 124; 
    l3.editorial= "Lea";
    l3.nombre = "LOS MITOS DE CTHULHU";
    l3.descripcion = "'Heredero de Poe y precursor de Stephen King, para muchos éste es el relato definitivo de horror cósmico de Lovecraft, acompañado en esta edición por la pequeña joya «Nyarlatothep», que transcurre en El Cairo.'";
    l3.precio= 2500;
    l3.imagen="assets/lv.jpg";
   

    let l4 = new Libro();
    l4.codigo = 125;
    l4.nombre = "EDGAR ALLAN POE";
    l4.descripcion = "'Estamos frente a la obra de una imaginación prodigiosa, sin lugar a dudas, una imaginación que se esmeró en recorrer todos los rincones de la experiencia humana, revisar minuciosamente y narrarlo todo.'";
    l4.editorial= "Lea";
    l4.precio= 4000;
    l4.imagen="assets/poe.png";

    let l5 = new Libro();
    l5.codigo = 126;
    l5.nombre = "EL HERBARIO DE LAS HADAS";
    l5.descripcion = "'Un libro de gran formato sobre el apasionante universo de las hadas. Las bellas imágenes, realizadas por Benjamin Lacombe , de estos seres y las plantas que habitan ilustran el diario que narra la historia.'";
    l5.editorial= "Edelvives";
    l5.precio= 1000;
    l5.imagen="assets/herbario.jpg";

    let l6 = new Libro();
    l6.codigo = 127;
    l6.nombre = "THE RED BOOK";
    l6.descripcion ="'El Libro Rojo de Carl Gustav Jung es un libro profético, pero no en el sentido banal de una anticipación sino como una advertencia acerca de la condición de todo ser humano, co-creador de la propia vida individual y el espíritu de su época.'"
    l6.editorial= "Sonne";
    l6.precio= 20000;
    l6.imagen="assets/lr.jpg";

    let l7 = new Libro();
    l7.codigo = 128;
    l7.editorial= "Edelvives";
    l7.nombre = "ALICIA EN EL PAIS DE LAS MARAVILLAS";
    l7.descripcion = " 'Alicia en el país de las maravillas es el relato infantil de las aventuras de una niña bajo tierra, pero también una obra llena de asombros y riquezas'";
    l7.precio= 8000;
    l7.imagen="assets/alicia.jpg";

    let l8 = new Libro();
    l8.codigo = 129;
    l8.nombre = "BLANCANIEVES";
    l8.descripcion= "'El conflicto interno, el mal que vertebra toda la historia de Blancanieves es el defecto de la vanidad, de una excesiva preocupación por la apariencia física que nos lleva a ser egocéntricos, egoístas y malvados'";
    l8.editorial= "Edelvives";
    l8.precio= 8000;
    l8.imagen="assets/blancanieves.jpeg";

    let l9 = new Libro();
    l9.codigo = 130;
    l9.nombre = "LAS BRUJAS";
    l9.descripcion = "'Magas, adivinas, curanderas, hechiceras... El francés Benjamin Lacombe aporta con sus maravillosas ilustraciones belleza, sugestión y misterio a esta enciclopedia breve, ¡pero muy completa!, sobre la historia de las brujas. '"
    l9.editorial= "Edelvives";
    l9.precio= 8000;
    l9.imagen="assets/brujas.jpg";

    let l10 = new Libro();
    l10.codigo = 131;
    l10.nombre = "BORGES: EL MISTERIO ESENCIAL";
    l10.descripcion = "- 'En la década final de su vida, Borges emprendió una gira por los Estados Unidos con el fin de participar de una serie de diálogos organizados por las universidades más prestigiosas de esa nación (Chicago, Indiana, Columbia y el M.I.T., entre otras'";
    l10.editorial= "Sudamericana";
    l10.precio= 9000;
    l10.imagen="assets/br.png";

   

    arrayLibros.push(l1);
    arrayLibros.push(l2);
    arrayLibros.push(l3);
    arrayLibros.push(l4);
    arrayLibros.push(l5);
    arrayLibros.push(l6);
    arrayLibros.push(l7);
    arrayLibros.push(l8);
    arrayLibros.push(l9);
    arrayLibros.push(l10);
    return arrayLibros;
}
comprarItem(item: Libro){
  
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
mostrarDetalle(l: Libro){
  console.log(l);
  this.libroSelected = l;
  this.showDetalle = true;
}

captureAction(evt:any){
  this.showDetalle = false;
}
  

}
