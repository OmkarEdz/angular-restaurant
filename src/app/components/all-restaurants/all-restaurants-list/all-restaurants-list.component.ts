import { Component, OnInit, AfterViewInit, ViewEncapsulation, Inject  } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddressComponent } from '../../address/address.component';
import { OverlayContainer } from '@angular/cdk/overlay';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-restaurants-list',
  templateUrl: './all-restaurants-list.component.html',
  styleUrls: ['./all-restaurants-list.component.scss']
})
export class AllRestaurantsListComponent implements OnInit {
  constructor(private route: Router, private dialog: MatDialog, @Inject(OverlayContainer) private overlayContainer: OverlayContainer) {}

  ngOnInit(): void {
    // Initialization logic here
  }

  openAddress(): void {
    // Add the class to the overlay container before opening the dialog
    const containerElement = this.overlayContainer.getContainerElement();
    containerElement.classList.add('address_popup_wrapper');
  
    // Open the dialog
    const dialogRef = this.dialog.open(AddressComponent);
  
    // After the dialog is opened, you can still perform any other operations if needed
    dialogRef.afterOpened().subscribe(() => {
      // Other operations if needed
    });
  
    // Remove the class from the overlay container when the dialog is closed
    dialogRef.afterClosed().subscribe(() => {
      containerElement.classList.remove('address_popup_wrapper');
    });
  }
  

  restaurants = [
    {
      restaurants_name: 'Domino’s Pizza',
      restaurants_menu: 'Pizza, Italian, Pastas, Desserts',
      restaurants_loc: 'Erandwane',
      restaurants_dist: '1.5 km',
      restaurants_dist_time: '30-35mins',
      restaurants_disc: '30%',
      restaurants_rating: '4.3',
      path: '/restaurant-detail',
      imgsrc: 'https://webdevfolio.com/edreamz_projects/togethring-restaurant/assets/dominos.jpg',
    },
    {
      restaurants_name: 'Burger King',
      restaurants_menu: 'Pizza, Italian, Pastas, Desserts',
      restaurants_loc: 'Erandwane',
      restaurants_dist: '1.5 km',
      restaurants_dist_time: '30-35mins',
      restaurants_disc: '30%',
      restaurants_rating: '4.3',
      path: '/restaurant-detail',
      imgsrc: 'https://webdevfolio.com/edreamz_projects/togethring-restaurant/assets/burger_king.jpg',
    },
    {
      restaurants_name: 'KFC',
      restaurants_menu: 'Pizza, Italian, Pastas, Desserts',
      restaurants_loc: 'Erandwane',
      restaurants_dist: '1.5 km',
      restaurants_dist_time: '30-35mins',
      restaurants_disc: '30%',
      restaurants_rating: '4.3',
      path: '/restaurant-detail',
      imgsrc: 'https://webdevfolio.com/edreamz_projects/togethring-restaurant/assets/kfc.jpg',
    },
    {
      restaurants_name: 'Domino’s Pizza',
      restaurants_menu: 'Pizza, Italian, Pastas, Desserts',
      restaurants_loc: 'Erandwane',
      restaurants_dist: '1.5 km',
      restaurants_dist_time: '30-35mins',
      restaurants_disc: '30%',
      restaurants_rating: '4.3',
      path: '/restaurant-detail',
      imgsrc: 'https://webdevfolio.com/edreamz_projects/togethring-restaurant/assets/dominos.jpg',
    },
    {
      restaurants_name: 'Domino’s Pizza',
      restaurants_menu: 'Pizza, Italian, Pastas, Desserts',
      restaurants_loc: 'Erandwane',
      restaurants_dist: '1.5 km',
      restaurants_dist_time: '30-35mins',
      restaurants_disc: '30%',
      restaurants_rating: '4.3',
      path: '/restaurant-detail',
      imgsrc: 'https://webdevfolio.com/edreamz_projects/togethring-restaurant/assets/dominos.jpg',
    },
    {
      restaurants_name: 'Domino’s Pizza',
      restaurants_menu: 'Pizza, Italian, Pastas, Desserts',
      restaurants_loc: 'Erandwane',
      restaurants_dist: '1.5 km',
      restaurants_dist_time: '30-35mins',
      restaurants_disc: '30%',
      restaurants_rating: '4.3',
      path: '/restaurant-detail',
      imgsrc: 'https://webdevfolio.com/edreamz_projects/togethring-restaurant/assets/dominos.jpg',
    },
    {
      restaurants_name: 'Domino’s Pizza',
      restaurants_menu: 'Pizza, Italian, Pastas, Desserts',
      restaurants_loc: 'Erandwane',
      restaurants_dist: '1.5 km',
      restaurants_dist_time: '30-35mins',
      restaurants_disc: '30%',
      restaurants_rating: '4.3',
      path: '/restaurant-detail',
      imgsrc: 'https://webdevfolio.com/edreamz_projects/togethring-restaurant/assets/dominos.jpg',
    },
    {
      restaurants_name: 'Domino’s Pizza',
      restaurants_menu: 'Pizza, Italian, Pastas, Desserts',
      restaurants_loc: 'Erandwane',
      restaurants_dist: '1.5 km',
      restaurants_dist_time: '30-35mins',
      restaurants_disc: '30%',
      restaurants_rating: '4.3',
      path: '/restaurant-detail',
      imgsrc: 'https://webdevfolio.com/edreamz_projects/togethring-restaurant/assets/dominos.jpg',
    }
  ];

  router(router: string) {
    this.route.navigateByUrl(router);
  }
}
