import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  
  constructor(private httpclient: HttpClient) {}

  getAllProducts() {
    return this.httpclient.get('https://dummyjson.com/products');
  }
}
