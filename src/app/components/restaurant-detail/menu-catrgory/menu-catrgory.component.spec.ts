import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuCatrgoryComponent } from './menu-catrgory.component';

describe('MenuCatrgoryComponent', () => {
  let component: MenuCatrgoryComponent;
  let fixture: ComponentFixture<MenuCatrgoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuCatrgoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuCatrgoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
