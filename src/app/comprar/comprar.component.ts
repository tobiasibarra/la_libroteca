import { Component } from '@angular/core';
import { ItemCarrito } from '../clases/ItemCarrito';
import { Router } from '@angular/router';

@Component({
  selector: 'app-comprar',
  templateUrl: './comprar.component.html',
  styleUrls: ['./comprar.component.scss']
})
export class ComprarComponent {

  constructor(private router: Router) {

  }
listaItemsCarrito: ItemCarrito[] | undefined;
ngOnInit():void{
  let carritoStorage = localStorage.getItem("carrito") as string;
   let carrito = JSON.parse(carritoStorage);
   this.listaItemsCarrito = carrito;
}




vaciarCarrito(){
  localStorage.clear();
  this.listaItemsCarrito = [];
}
borrarItem(indice:any){
 this.listaItemsCarrito?.splice(indice,1)

}
total: number =  0 ;
sumarTotal(indice: any){
 
}
}
