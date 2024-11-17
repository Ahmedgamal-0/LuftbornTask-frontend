import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product.model';
import { ProductFormComponent } from '../product-form/product-form.component';
import { RouterModule } from '@angular/router';
 
@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductFormComponent,RouterModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss',
})
export class ProductListComponent implements OnInit {
  constructor(private _productService: ProductService) {}
 
  products: any;
  ngOnInit() {
    this.getAllProducts();
  }
  getAllProducts(event?: any) {
    this._productService
      .getAllProducts(
        event?.target?.value && event?.target?.value?.length > 2
          ? event?.target?.value
          : null
      )
      .subscribe((response) => {
        this.products = response.data;
      });
  }
  messageForDelete: string = null;
  deleteProduct(id: number) {
    this.messageForDelete = null;
    this._productService.deleteProduct(id).subscribe((response) => {
      this.messageForDelete = 'Deleted Successfully';
      window.location.reload();
    });
  }
}