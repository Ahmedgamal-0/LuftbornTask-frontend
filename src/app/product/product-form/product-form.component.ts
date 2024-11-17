import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../product.service';
import { Product } from '../product.model';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
 
@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [ReactiveFormsModule,RouterModule],
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.scss',
})
export class ProductFormComponent implements OnInit {
  productForm: FormGroup;
  product: Product;
  constructor(
    private productService: ProductService,
    private _route: ActivatedRoute,
    private router:Router
  ) {
    this.product = this._route?.snapshot?.data['product']?.data;
  }
  ngOnInit() {
    this.addProductForm(this.product);
  }
  addProductForm(product: Product) {
    this.productForm = new FormGroup({
      id: new FormControl<number>(product?.id),
      name: new FormControl<string>(product?.name, Validators.required),
      description: new FormControl<string>(product?.description),
      productUrl: new FormControl<string>(product?.productUrl),
      price: new FormControl<number>(product?.price, Validators.required),
    });
  }
  get productName() {
    return this.productForm.get('name');
  }
  get productDescription() {
    return this.productForm.get('description');
  }
  get productUrl() {
    return this.productForm.get('productUrl');
  }
  get productPrice() {
    return this.productForm.get('price');
  }
 
  message: string = null;
  submit() {
    this.message = null;
    if (this.product) {
      this.productService
        .editProduct(this.productForm.value)
        .subscribe((response) => {
          this.message = 'Updated Successfully';
          this.router.navigate(["../../"]);
        });
    } else {
      this.productService
        .addProduct(this.productForm.value)
        .subscribe((response) => {
          this.message = 'Added Successfully';
          this.router.navigate(["../"]);
        });
    }
  }
}