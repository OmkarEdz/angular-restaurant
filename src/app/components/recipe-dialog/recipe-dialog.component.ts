import { Component, OnInit, AfterViewInit, ViewEncapsulation, Inject  } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { OverlayContainer } from '@angular/cdk/overlay';
import { PayDialogComponent } from '../pay-dialog/pay-dialog.component';

@Component({
  selector: 'app-recipe-dialog',
  templateUrl: './recipe-dialog.component.html',
  styleUrls: ['./recipe-dialog.component.scss']
})
export class RecipeDialogComponent {
  constructor(private dialog: MatDialog, @Inject(OverlayContainer) private overlayContainer: OverlayContainer) {}

  ngOnInit(): void {
    // Initialization logic here
  }

  openPayDialog(): void {
    // Open the dialog
    const dialogRef = this.dialog.open(PayDialogComponent);
  }
}
