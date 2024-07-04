import { Component, OnInit, AfterViewInit, ViewEncapsulation, Inject  } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddAddressComponent } from '../add-address/add-address.component';
import { OverlayContainer } from '@angular/cdk/overlay';


@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AddressComponent implements OnInit {
  constructor(private dialog: MatDialog, @Inject(OverlayContainer) private overlayContainer: OverlayContainer) {}

  ngOnInit(): void {
    // Initialization logic here
  }

  openAddAddressDialog(): void {
    // Add the class to the overlay container before opening the dialog
    const containerElement = this.overlayContainer.getContainerElement();
    containerElement.classList.add('add_addres_popup_wrapper');
    
    // Open the dialog
    const dialogRef = this.dialog.open(AddAddressComponent);
    
    // After the dialog is opened, you can still perform any other operations if needed
    dialogRef.afterOpened().subscribe(() => {
      // Other operations if needed
    });
    
    // Remove the class from the overlay container when the dialog is closed
    dialogRef.afterClosed().subscribe(() => {
      containerElement.classList.remove('add_addres_popup_wrapper');
    });
  }
}
