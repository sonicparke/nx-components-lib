import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddToCartModule } from './add-to-cart/add-to-cart.module';
import { CartModule } from './cart/cart.module';

@NgModule({
  imports: [CommonModule],
  exports: [
    AddToCartModule,
    CartModule
  ]
})
export class ShopWidgetsModule {}
