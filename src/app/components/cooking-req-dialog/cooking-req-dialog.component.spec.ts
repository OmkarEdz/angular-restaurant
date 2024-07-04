import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CookingReqDialogComponent } from './cooking-req-dialog.component';

describe('CookingReqDialogComponent', () => {
  let component: CookingReqDialogComponent;
  let fixture: ComponentFixture<CookingReqDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CookingReqDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CookingReqDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
