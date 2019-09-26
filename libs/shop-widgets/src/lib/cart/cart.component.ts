import { Component, OnInit, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { scan } from 'rxjs/operators';

@Component({
  selector: 'nx-components-lib-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  @Input() public addItem: BehaviorSubject<any> = new BehaviorSubject([]);
  public itemsInCart;

  constructor() { }

  ngOnInit() {
    this.addItem
      .pipe(
        scan((acc, curr) => {
          let obj;
          let newArray;

          if (curr !== null) {
            obj = {
              'name': curr,
              'count': 0
            }
            newArray = [obj];
          }

          if (acc.length > 0) {
            newArray = [...acc, obj];
          }

          if (newArray) {
            return newArray;
          } else {
            return []
          }
        }, [])
      )
      .subscribe((result) => {
        this.itemsInCart = result;
      });
  }

}
