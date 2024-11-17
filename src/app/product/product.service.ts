import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IResult, Product } from './product.model';
import { ActivatedRouteSnapshot } from '@angular/router';
 
@Injectable({
  providedIn: 'root',
})
export class ProductService {
  baseUrl: string = 'https://localhost:44308/api/luftborn/Product/';
  constructor(private httpClient: HttpClient) {}
  addProduct(product: Product): Observable<IResult<Product>> {
    return this.httpClient.post<IResult<Product>>(this.baseUrl, product);
  }
  editProduct(product: Product): Observable<IResult<Product>> {
    return this.httpClient.put<IResult<Product>>(this.baseUrl, product);
  }
  deleteProduct(id: number): Observable<IResult<string>> {
    return this.httpClient.delete<IResult<string>>(this.baseUrl + id);
  }
  getProductById(id: number): Observable<IResult<Product>> {
    return this.httpClient.get<IResult<Product>>(this.baseUrl + id);
  }
  getAllProducts(searchString: string): Observable<IResult<Product>> {
    let params = new HttpParams();
    params = params.append('searchString', searchString);
    return this.httpClient.get<IResult<Product>>(this.baseUrl, { params: params });
  }
  resolve(route: ActivatedRouteSnapshot) {
    console.log(route.params['id'])
    return this.getProductById(route.params['id']);
  }
}