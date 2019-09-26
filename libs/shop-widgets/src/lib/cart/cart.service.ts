import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { scan } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public itemsInCart: BehaviorSubject<any[]> = new BehaviorSubject([]);

  constructor() {}

  public addToCart(item) {
    const items = this.itemsInCart.value;
    items.push(item);
    this.itemsInCart.next(items);
  }
}
