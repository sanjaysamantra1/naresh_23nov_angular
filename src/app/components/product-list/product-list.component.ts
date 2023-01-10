import { Component, OnInit } from '@angular/core';
import * as data from './products_data.json';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products = (data as any).default;
  p: number = 2;
  searchText: string = '';

  constructor() {}
  ngOnInit(): void {}

  addToCart() {
    Swal.fire('Congratulations!', 'Your Item is added to cart!', 'success');
  }
}
