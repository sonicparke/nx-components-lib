import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddToCartComponent } from './add-to-cart.component';



@NgModule({
  declarations: [AddToCartComponent],
  imports: [
    CommonModule
  ],
  exports: [AddToCartComponent]
})
export class AddToCartModule { }
