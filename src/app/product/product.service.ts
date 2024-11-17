import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  baseUrl: string = 'https://localhost:44308/api/luftborn/Product/';
  constructor(private httpClient: HttpClient) {}
  getProductById(id: number): Observable<Product> {
    return this.httpClient.get<Product>(this.baseUrl + id);
  }
  getAllProducts(searchString: string): Observable<Product> {
    let params = new HttpParams();
    params = params.append('searchString', searchString);
    return this.httpClient.get<Product>(this.baseUrl, { params: params });
  }
}
