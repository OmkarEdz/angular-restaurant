import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GstDialogComponent } from './gst-dialog.component';

describe('GstDialogComponent', () => {
  let component: GstDialogComponent;
  let fixture: ComponentFixture<GstDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GstDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GstDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
