import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import {
  AddToCartComponent,
  CartComponent,
  AddToCartModule,
  CartModule
} from '@nx-components-lib/shop-widgets';
import { createCustomElement } from '@angular/elements';

@NgModule({
  declarations: [
    // AddToCartComponent,
    // CartComponent
  ],
  entryComponents: [
    // AddToCartComponent,
    // CartComponent
  ],
  imports: [BrowserModule, AddToCartModule, CartModule],
  providers: [],
  bootstrap: []
})
export class AppModule {
  constructor(private injector: Injector) {}
  ngDoBootstrap() {
    const elAddToCartComponent = createCustomElement(AddToCartComponent, {
      injector: this.injector
    });
    customElements.define(
      'nx-components-lib-add-to-cart',
      elAddToCartComponent
    );

    const elCartComponent = createCustomElement(CartComponent, {
      injector: this.injector
    });
    customElements.define('nx-components-lib-cart', elCartComponent);
  }
}
