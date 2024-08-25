import { Component } from '@angular/core';
import { ItemCarrito } from '../clases/ItemCarrito';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss']
})
export class CarritoComponent {

  constructor(private router: Router) {

  }
listaItemsCarrito: ItemCarrito[] | undefined;
ngOnInit():void{
  let carritoStorage = localStorage.getItem("carrito") as string;
   let carrito = JSON.parse(carritoStorage);
   this.listaItemsCarrito = carrito
}




vaciarCarrito(){
  Swal.fire({
    title: 'Estas seguro de queres vaciar el carrito?',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Si, borrar!'
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire(
        'Eliminado!',
        'Carrito vaciado correctamente!',
        'success'
      )
      localStorage.clear();
  this.listaItemsCarrito = [];
    }
  })
  


}
borrarItem(indice:any){
 

 Swal.fire({
  title: 'Estas seguro de borrar este producto?',
  icon: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Si, borrar!'
}).then((result) => {
  if (result.isConfirmed) {
    Swal.fire(
      'Eliminado!',
      'El producto fue eliminado correctamente!',
      'success'
    )
    this.listaItemsCarrito?.splice(indice,1)
  }
})


}


goTo(): void {
  this.router.navigate(['comprar']);
}



}
