import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CartService } from './cart.service';

@Component({
  selector: 'nx-components-lib-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  public itemsInCart: BehaviorSubject<string[]> = new BehaviorSubject(null);

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.itemsInCart = this.cartService.itemsInCart;
  }

}
