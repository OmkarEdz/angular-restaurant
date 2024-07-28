import { Component, AfterViewInit, OnDestroy, Inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { OverlayContainer } from '@angular/cdk/overlay';
import { PayDialogComponent } from '../pay-dialog/pay-dialog.component';
import videojs from 'video.js';

@Component({
  selector: 'app-recipe-dialog',
  templateUrl: './recipe-dialog.component.html',
  styleUrls: ['./recipe-dialog.component.scss']
})

export class RecipeDialogComponent  {
  //player: videojs.Player;

  constructor(private dialog: MatDialog, @Inject(OverlayContainer) private overlayContainer: OverlayContainer) {}

  // ngAfterViewInit() {
  //   this.player = videojs('my-video', {
  //     controls: true,
  //     autoplay: false,
  //     preload: 'auto'
  //   });
  // }

  // ngOnDestroy() {
  //   if (this.player) {
  //     this.player.dispose();
  //   }
  // }

  openPayDialog(): void {
    // Open the dialog
    const dialogRef = this.dialog.open(PayDialogComponent);
  }

  ngOnInit(): void {
    // Initialization logic here
  }
}
