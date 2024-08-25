import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Disco } from '../clases/discos.model';
import { ItemCarrito } from '../clases/ItemCarrito';

@Component({
  selector: 'app-musica',
  templateUrl: './musica.component.html',
  styleUrls: ['./musica.component.scss']
})
export class MusicaComponent {
  constructor(private router: Router) { }
  
  Discos : Disco[] | undefined;

  itemsComprados: Disco[] = new Array<Disco>();
  
  titulos: string [] = ["Codigo","Nombre","Precio","Imagen", "Lo quiero!"]
  ngOnInit(): void {
    this.Discos = this.generarDiscos();
  }

  generarDiscos(){
    let arrayDiscos = new Array<Disco>();
    let d1 = new Disco();
    d1.codigo = 1;
    d1.nombre = "Los Ramones";
    d1.precio= 3000;
    d1.imagen="assets/ra.jpg";

    let d2 = new Disco();
    d2.codigo = 2;
    d2.nombre = "Sex Pistols";
    d2.precio= 3000;
    d2.imagen="assets/sp.png";

    let d3 = new Disco();
    d3.codigo = 3;
    d3.nombre = "The Clash";
    d3.precio= 3000;
    d3.imagen="assets/tc.jpg";

    let d4 = new Disco();
    d4.codigo = 4;
    d4.nombre = "Megadeth";
    d4.precio= 3000;
    d4.imagen="assets/megadeth.jpg";

    let d5 = new Disco();
    d5.codigo = 5;
    d5.nombre = "La polla records";
    d5.precio= 3000;
    d5.imagen="assets/lp.jpg";

    let d6 = new Disco();
    d6.codigo = 6;
    d6.nombre = "Iron Maiden";
    d6.precio= 6000;
    d6.imagen="assets/ironm.jpg";

    let d7 = new Disco();
    d7.codigo = 7;
    d7.nombre = "Metallica";
    d7.precio= 3500;
    d7.imagen="assets/metallica.jpg";

    let d8 = new Disco();
    d8.codigo = 8;
    d8.nombre = "Queen";
    d8.precio= 3500;
    d8.imagen="assets/queen.jpg";

    let d9 = new Disco();
    d9.codigo = 9;
    d9.nombre = "Los Fabulosos Cadillacs";
    d9.precio= 1500;
    d9.imagen="assets/fabu.jpg";

    let d10 = new Disco();
    d10.codigo = 10;
    d10.nombre = "Rob Zombie";
    d10.precio= 2500;
    d10.imagen="assets/rob.jpg";


    
    arrayDiscos.push(d1);
    arrayDiscos.push(d2);
    arrayDiscos.push(d3);
    arrayDiscos.push(d4);
    arrayDiscos.push(d5);
    arrayDiscos.push(d6);
    arrayDiscos.push(d7);
    arrayDiscos.push(d8);
    arrayDiscos.push(d9);
    arrayDiscos.push(d10);
 
    return arrayDiscos;
}
  comprarItem(item: Disco){
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


