import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddToCartComponent } from './add-to-cart.component';
import { MatButtonModule } from '@angular/material';


@NgModule({
  declarations: [AddToCartComponent],
  imports: [
    CommonModule,
    MatButtonModule
  ],
  exports: [AddToCartComponent]
})
export class AddToCartModule { }
