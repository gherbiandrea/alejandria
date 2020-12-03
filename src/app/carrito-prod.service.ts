import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Producto } from './product-list/Producto';

@Injectable({
  providedIn: 'root'
})
export class CarritoProdService {

  private _listaCarrito: Producto[] = [];
  listaCarrito: BehaviorSubject<Producto[]> = new BehaviorSubject([]);

  constructor() { }

  agregarAlCarrito(producto: Producto) {
    let item: Producto = this._listaCarrito.find((v1) => v1.nombre == producto.nombre);
    if (!item){
      this._listaCarrito.push({ ... producto});
    }
    else {
      item.cantidad += producto.cantidad ;
    }
   
    console.log(this._listaCarrito);
    this.listaCarrito.next(this._listaCarrito);
  }

 
}
