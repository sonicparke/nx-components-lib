import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'nx-components-lib-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public items = ['Rubber Duck', 'Squeege', 'Shoes']
  public itemToAdd: BehaviorSubject<any> = new BehaviorSubject(null);

  constructor() {}

  public itemAdded(_item: string) {
    this.itemToAdd.next(_item);
  }

}
