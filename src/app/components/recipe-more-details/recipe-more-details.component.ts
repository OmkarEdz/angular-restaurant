import { Component, OnInit, Inject, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RecipeDialogComponent } from '../recipe-dialog/recipe-dialog.component';
import { AddItemComponent } from '../add-item/add-item.component';
import { OverlayContainer } from '@angular/cdk/overlay';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-recipe-more-details',
  templateUrl: './recipe-more-details.component.html',
  styleUrls: ['./recipe-more-details.component.scss']
})
export class RecipeMoreDetailsComponent {
  constructor(
    private router: Router,
    private location: Location, 
    private dialog: MatDialog, 
    @Inject(OverlayContainer) private overlayContainer: OverlayContainer
  ) {}

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

}
