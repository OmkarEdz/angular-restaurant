import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllRestaurantsComponent } from './components/all-restaurants/all-restaurants.component';
import { RestaurantDetailComponent } from './components/restaurant-detail/restaurant-detail.component';
import { CartPageComponent } from './components/cart-page/cart-page.component';

const routes: Routes = [
  {
    path: 'cart' , component: CartPageComponent,
  },
  {
    path: 'restaurant-detail' , component: RestaurantDetailComponent,
  },
  {
    path: '**', component: AllRestaurantsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
