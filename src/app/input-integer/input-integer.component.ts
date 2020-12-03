import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Producto } from '../product-list/Producto';

@Component({
  selector: 'app-input-integer',
  templateUrl: './input-integer.component.html',
  styleUrls: ['./input-integer.component.scss']
})
export class InputIntegerComponent implements OnInit {

  constructor() { }
  
  @Input()
  cantidad: number;

  @Input()
  max: number;

  @Output()
  cantidadChange: EventEmitter<number> = new EventEmitter<number>();

  @Output()
  maxReached: EventEmitter<string> = new EventEmitter<string>();


  ngOnInit(): void {
  }

  upQuantity(): void{
    if (this.cantidad < this.max) {
      this.cantidad++;
      this.cantidadChange.emit(this.cantidad);
    }
    else {
      this.maxReached.emit("Se alcanzó el máximo");
    }
  }

  downQuantity(): void{
    if (this.cantidad > 0)
      this.cantidad--;
      this.cantidadChange.emit(this.cantidad);
  }

  changeQuantity(event): void {
    console.log(event.key);
    this.cantidadChange.emit(this.cantidad);
    
  }
}
