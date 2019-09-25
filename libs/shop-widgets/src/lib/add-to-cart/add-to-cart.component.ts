import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'nx-components-lib-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.scss']
})
export class AddToCartComponent implements OnInit {
  @Input() item: string;
  @Output() itemAdded: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  public addToCart(item: string) {
    this.itemAdded.emit(this.item);
  }

}
