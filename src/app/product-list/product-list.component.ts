import { Component, OnInit } from '@angular/core';
import { CarritoProdService } from '../carrito-prod.service';
import { Producto } from './Producto';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  productos: Producto[]= [
  {
    nombre: 'Colorante en gel',
    variedad: 'Color rojo',
    precio: 600,
    stock: 12,
    imagen: 'assets/img/colorante.jpeg',
    promocion: false,
    cantidad: 0,
  }, 
  {
    nombre: 'Perlas de azucar',
    variedad: 'Color marfil',
    precio: 580,
    stock: 21,
    imagen: 'assets/img/perlas.jpeg',
    promocion: true,
    cantidad: 0,
  },
  {
    nombre: 'Azucar perlada',
    variedad: 'Dorado',
    precio: 900,
    stock: 16,
    imagen: 'assets/img/azucar.jpeg',
    promocion: false,
    cantidad: 0,
  },
  {
    nombre: 'Colorante en aerosol',
    variedad: 'Verde',
    precio: 850,
    stock: 0,
    imagen: 'assets/img/colorante_aerosol.jpeg',
    promocion: true,
    cantidad: 0,
  }, 
  {
    nombre: 'Palo de amasar',
    variedad: '23 cm',
    precio: 990,
    stock: 5,
    imagen: 'assets/img/palo_amasar.jpeg',
    promocion: false,
    cantidad: 0,
  }
]
  
  constructor(private carrito: CarritoProdService) { 
    
  }

  ngOnInit(): void {
  }

  agregarAlCarrito(producto): void {
    this.carrito.agregarAlCarrito(producto);
    producto.stock -= producto.cantidad ;
    producto.cantidad = 0 ;
  }

  maxReached(m: string){
    alert(m);
}

}
