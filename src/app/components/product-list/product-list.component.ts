import { Component, OnInit } from '@angular/core';
import * as data from './products_data.json';
import Swal from 'sweetalert2';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products = (data as any).default;
  p: number = 2;
  searchText: string = '';

  constructor(private cartService:CartService) {}
  ngOnInit(): void {}

  addToCart(prod:any) {
    Swal.fire('Congratulations!', 'Your Item is added to cart!', 'success');
    this.cartService.addItemToCart(prod);
  }
  sortAsc(){
    this.products = this.products.sort((p1:any,p2:any)=>p1.price-p2.price)
  }
  sortDesc(){
    this.products = this.products.sort((p1:any,p2:any)=>p2.price-p1.price)
  }
}
