import { Component, Input , OnInit, AfterViewInit, ViewEncapsulation, Inject  } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddressComponent } from '../address/address.component';
import { OverlayContainer } from '@angular/cdk/overlay';
import { Router } from '@angular/router';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.scss']
})
export class RestaurantComponent {
  @Input() restaurants_item: any; // Define an input property to receive the restaurant data
  
  constructor(private route: Router) {}

  // Example function for navigating on click (assumed router function)
  router(router: string) {
    this.route.navigateByUrl(router);
  }
}