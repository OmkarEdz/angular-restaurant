import { Component, OnInit, Inject, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { OverlayContainer } from '@angular/cdk/overlay';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { GstDialogComponent } from '../gst-dialog/gst-dialog.component';
import { DeliveryDialogComponent } from '../delivery-dialog/delivery-dialog.component';
import { CookingReqDialogComponent } from '../cooking-req-dialog/cooking-req-dialog.component';
import { SaveAddressDialogComponent } from '../save-address-dialog/save-address-dialog.component';

@Component({
  selector: 'app-ordered-menu',
  templateUrl: './ordered-menu.component.html',
  styleUrls: ['./ordered-menu.component.scss']
})
export class OrderedMenuComponent implements OnInit {
  value: number = 0;

  constructor(
    private router: Router, 
    private location: Location, 
    private dialog: MatDialog, 
    @Inject(OverlayContainer) private overlayContainer: OverlayContainer
  ) {}
  
  ngOnInit(): void {}

  backtopage() {
    this.location.back();
  }

  handleMinus() {
    this.value--;  
  }
  handlePlus() {
    this.value++;    
  }

  openGSTDialog(): void {
    // Open the dialog
    const dialogRef = this.dialog.open(GstDialogComponent);
  }

  openDelvDialog(): void {
    // Open the dialog
    const dialogRef = this.dialog.open(DeliveryDialogComponent);
  }
  
  openCookDialog(): void {
    // Open the dialog
    const dialogRef = this.dialog.open(CookingReqDialogComponent);
  }
  
  openSaveAddDialog(): void {
    // Open the dialog
    const containerElement = this.overlayContainer.getContainerElement();
    containerElement.classList.add('save_add_popup_wrapper');

    const dialogRef = this.dialog.open(SaveAddressDialogComponent);

    dialogRef.afterOpened().subscribe(() => {
      // Other operations if needed
    });

    dialogRef.afterClosed().subscribe(() => {
      containerElement.classList.remove('save_add_popup_wrapper');
    });
  }

  redirectToRest() {
    this.router.navigate(['/restaurant-detail']).then(() => {
      // Close the dialog if necessary
    }).catch(() => {
      // Handle navigation error
    });
  }
}
