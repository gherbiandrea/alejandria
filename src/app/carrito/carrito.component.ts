import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CarritoProdService } from '../carrito-prod.service';
import { Producto } from '../product-list/Producto';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss']
})
export class CarritoComponent implements OnInit {

  listaCarrito$: Observable <Producto[]>;
  constructor(private carrito: CarritoProdService) {
      this.listaCarrito$ = carrito.listaCarrito.asObservable();
   }

  ngOnInit(): void {
  }

}
