import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderedMenuComponent } from './ordered-menu.component';

describe('OrderedMenuComponent', () => {
  let component: OrderedMenuComponent;
  let fixture: ComponentFixture<OrderedMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderedMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderedMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
