import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveAddressDialogComponent } from './save-address-dialog.component';

describe('SaveAddressDialogComponent', () => {
  let component: SaveAddressDialogComponent;
  let fixture: ComponentFixture<SaveAddressDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaveAddressDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaveAddressDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
