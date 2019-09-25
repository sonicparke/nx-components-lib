import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';

import { AppComponent } from './app.component';
import { AddToCartComponent } from '@nx-components-lib/shop-widgets/components';
import { createCustomElement } from '@angular/elements';

@NgModule({
  declarations: [
    AppComponent,
    AddToCartComponent
  ],
  entryComponents: [AddToCartComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor (private injector: Injector) {} ngDoBootstrap() {
    const elAddToCartComponent = createCustomElement(AddToCartComponent, { injector: this.injector });
    customElements.define('web-components-root', elAddToCartComponent);
    }
}
