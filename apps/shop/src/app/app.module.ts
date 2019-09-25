import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ShopWidgetsModule } from '@nx-components-lib/shop-widgets';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    ShopWidgetsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
