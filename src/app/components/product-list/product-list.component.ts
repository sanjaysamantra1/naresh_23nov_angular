import { Component, OnInit } from '@angular/core';
import * as data from './products_data.json';
import Swal from 'sweetalert2';
import { CartService } from 'src/app/services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products = (data as any).default;
  p: number = 2;
  searchText: string = '';

  constructor(private cartService: CartService, private router: Router) {}
  ngOnInit(): void {}

  addToCart(prod: any) {
    Swal.fire('Congratulations!', 'Your Item is added to cart!', 'success');
    this.cartService.addItemToCart(prod);
  }
  sortAsc() {
    this.products = this.products.sort(
      (p1: any, p2: any) => p1.price - p2.price
    );
  }
  sortDesc() {
    this.products = this.products.sort(
      (p1: any, p2: any) => p2.price - p1.price
    );
  }
  doSOmethingAndGotoDetails(prod:any) {
    console.log('doSOmething');
    // this.router.navigate(['/product-details', this.p] );
    this.router.navigate(['/productdetail'], { queryParams: prod });
  }
}
