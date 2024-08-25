import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Libro } from '../clases/libros.model';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss']
})
export class DetalleComponent {
  @Input() libro: Libro | undefined;

 @Output() emitAction= new EventEmitter<string>();

emitClose(){
  this.emitAction.emit("cerrar");
}

}
