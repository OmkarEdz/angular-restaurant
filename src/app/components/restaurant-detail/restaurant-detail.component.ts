import { Component, OnInit, Inject, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RecipeDialogComponent } from '../recipe-dialog/recipe-dialog.component';
import { AddItemComponent } from '../add-item/add-item.component';
import { OverlayContainer } from '@angular/cdk/overlay';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-restaurant-detail',
  templateUrl: './restaurant-detail.component.html',
  styleUrls: ['./restaurant-detail.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RestaurantDetailComponent implements OnInit {
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

  openRecipeDet(): void {
    const containerElement = this.overlayContainer.getContainerElement();
    containerElement.classList.add('rec_dia_popup_wrapper');

    const dialogRef = this.dialog.open(RecipeDialogComponent);

    dialogRef.afterOpened().subscribe(() => {
      // Other operations if needed
    });

    dialogRef.afterClosed().subscribe(() => {
      containerElement.classList.remove('rec_dia_popup_wrapper');
    });
  }

  openAddItem(): void {
    const containerElement = this.overlayContainer.getContainerElement();
    containerElement.classList.add('add_item_popup_wrapper');

    const dialogRef = this.dialog.open(AddItemComponent);

    dialogRef.afterOpened().subscribe(() => {
      // Other operations if needed
    });

    dialogRef.afterClosed().subscribe(() => {
      containerElement.classList.remove('add_item_popup_wrapper');
    });
  }

  redirectToCart() {
    this.router.navigate(['/cart']).then(() => {
    }).catch(() => {});
  }
}
