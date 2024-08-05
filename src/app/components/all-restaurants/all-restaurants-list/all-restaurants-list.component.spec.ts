import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllRestaurantsListComponent } from './all-restaurants-list.component';

describe('AllRestaurantsListComponent', () => {
  let component: AllRestaurantsListComponent;
  let fixture: ComponentFixture<AllRestaurantsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllRestaurantsListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllRestaurantsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
