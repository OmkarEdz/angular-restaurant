import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeMoreDetailsComponent } from './recipe-more-details.component';

describe('RecipeMoreDetailsComponent', () => {
  let component: RecipeMoreDetailsComponent;
  let fixture: ComponentFixture<RecipeMoreDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipeMoreDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecipeMoreDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
