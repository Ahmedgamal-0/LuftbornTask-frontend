import { Routes } from '@angular/router';
import { ProductService } from './product/product.service';
 
export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./product/product-list/product-list.component').then(
        (c) => c.ProductListComponent
      ),
  },
  {
    path: 'edit-product/:id',
    loadComponent: () =>
      import('./product/product-form/product-form.component').then(
        (c) => c.ProductFormComponent
      ),
    resolve: {
      product: ProductService,
    },
  },
  {
    path: 'add-product',
    loadComponent: () =>
      import('./product/product-form/product-form.component').then(
        (c) => c.ProductFormComponent
      ),
  },
];