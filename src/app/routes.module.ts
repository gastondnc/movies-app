// Importaciones de Angular //
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Importaciones de los Componentes para las rutas //
import { WelcomeComponent } from './components/pages/welcome/welcome.component';
import { AboutComponent } from './components/pages/about/about.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { ProductsComponent } from './components/pages/products/products.component';
import { ProductDetailComponent } from './components/pages/products/product-detail/product-detail.component';


// ----  RUTAS O ROUTES ---- //
// Creamos una constante para (routes ), de tipo Routes, donde guadaremos un Array de objetos, en estos objetos definiremos dos propiedades: 1- El path: '', 2- El component: Elcomponent
const routes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },

  {
    path: 'about',
    component: AboutComponent
  },

  {
    path: 'contact',
    component: ContactComponent
  },

  {
    path: 'products',
    component: ProductsComponent
  },

  {
    path: 'products/:id',
    component: ProductDetailComponent
  }
]


@NgModule({
  declarations: [],

  imports: [
    RouterModule.forRoot(routes)
  ],

  exports: [
    RouterModule
  ]

})
export class RoutesModule { }

