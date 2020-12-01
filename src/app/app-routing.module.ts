import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlejandriaContactoComponent } from './alejandria-contacto/alejandria-contacto.component';
import { AlejandriaProductosComponent } from './alejandria-productos/alejandria-productos.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'alejandria-productos',
    pathMatch: 'full'
  },
  {
    path: 'alejandria-productos',
    component: AlejandriaProductosComponent
  },
  {
    path: 'alejandria-contacto',
    component: AlejandriaContactoComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
