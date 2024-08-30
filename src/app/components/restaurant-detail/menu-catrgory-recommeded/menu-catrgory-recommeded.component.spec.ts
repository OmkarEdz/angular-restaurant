import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuCatrgoryRecommededComponent } from './menu-catrgory-recommeded.component';

describe('MenuCatrgoryRecommededComponent', () => {
  let component: MenuCatrgoryRecommededComponent;
  let fixture: ComponentFixture<MenuCatrgoryRecommededComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuCatrgoryRecommededComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuCatrgoryRecommededComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
