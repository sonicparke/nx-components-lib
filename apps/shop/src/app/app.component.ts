import { Component, ViewChild } from '@angular/core';
// tslint:disable-next-line:nx-enforce-module-boundaries
import { CartService } from '@nx-components-lib/shop-widgets/components';

@Component({
  selector: 'nx-components-lib-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public item: string;
  public alert: string;
  public items = ['Rubber Duck', 'Squeege', 'Shoes']

  constructor(private cartService: CartService) {}

  public itemAdded(_item: string) {
    this.alert = _item;
  }

}
