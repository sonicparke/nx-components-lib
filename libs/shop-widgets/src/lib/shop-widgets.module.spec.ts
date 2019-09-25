import { async, TestBed } from '@angular/core/testing';
import { ShopWidgetsModule } from './shop-widgets.module';

describe('ShopWidgetsModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ShopWidgetsModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(ShopWidgetsModule).toBeDefined();
  });
});
