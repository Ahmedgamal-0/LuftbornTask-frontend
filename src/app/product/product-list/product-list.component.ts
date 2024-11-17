import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss',
})
export class ProductListComponent implements OnInit {

  constructor(private _productService: ProductService) {}
  
  product: any;
  products: any;
  ngOnInit() {
    this.getAllProducts('x');
  }
  getAllProducts(searchString: string) {
    this._productService.getAllProducts(searchString).subscribe((response) => {
      this.products = response;
    });
  }
}
