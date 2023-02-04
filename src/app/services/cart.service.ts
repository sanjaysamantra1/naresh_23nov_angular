import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItemsPublisher = new Subject();

  getCartItems() {
    return this.cartItemsPublisher.asObservable();
  }
  addItemToCart(item: any) {
    this.cartItemsPublisher.next(item);
  }
  clearCart() {
    this.cartItemsPublisher.next(null);
  }
}
