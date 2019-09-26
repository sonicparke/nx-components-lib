import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { CartService } from '../cart/cart.service';
import { scan } from 'rxjs/operators';

@Component({
  selector: 'nx-components-lib-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.scss']
})
export class AddToCartComponent implements OnInit {
  @Input() item: string;
  @Output() itemAdded: EventEmitter<any> = new EventEmitter();

  constructor(private cartService: CartService) { }

  ngOnInit() {
  }

  public addToCart(item: string) {
    this.itemAdded.emit(item);
    this.cartService.addToCart(item);
  }

}
