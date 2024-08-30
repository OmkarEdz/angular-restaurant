import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Material
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSelectModule } from '@angular/material/select';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatTableModule } from '@angular/material/table';
import { MatChipsModule } from '@angular/material/chips';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatStepperModule } from '@angular/material/stepper';



import { HttpClientModule } from '@angular/common/http';
import { AllRestaurantsComponent } from './components/all-restaurants/all-restaurants.component';
import { AddressComponent } from './components/address/address.component';
import { RestaurantDetailComponent } from './components/restaurant-detail/restaurant-detail.component';
import { MenuItemComponent } from './components/menu-item/menu-item.component';
import { RecipeDialogComponent } from './components/recipe-dialog/recipe-dialog.component';
import { PayDialogComponent } from './components/pay-dialog/pay-dialog.component';
import { AddAddressComponent } from './components/add-address/add-address.component';
import { TruncateTextDirective } from './components/restaurant-detail/truncate-text.directive';
import { AddItemComponent } from './components/add-item/add-item.component';
import { CartPageComponent } from './components/cart-page/cart-page.component';
import { CookingReqDialogComponent } from './components/cooking-req-dialog/cooking-req-dialog.component';
import { SaveAddressDialogComponent } from './components/save-address-dialog/save-address-dialog.component';
import { GstDialogComponent } from './components/gst-dialog/gst-dialog.component';
import { DeliveryDialogComponent } from './components/delivery-dialog/delivery-dialog.component';
import { RouterModule, Routes } from '@angular/router';
import { RecipeMoreDetailsComponent } from './components/recipe-more-details/recipe-more-details.component';
import { AllMenuComponent } from './components/restaurant-detail/all-menu/all-menu.component';
import { MenuCatrgoryComponent } from './components/restaurant-detail/menu-catrgory/menu-catrgory.component';
import { MenuCatrgoryRecommededComponent } from './components/restaurant-detail/menu-catrgory-recommeded/menu-catrgory-recommeded.component';
import { MenuComponent } from './components/restaurant-detail/menu/menu.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { RestaurantFilterComponent } from './components/restaurant-filter/restaurant-filter.component';
import { RestaurantComponent } from './components/restaurant/restaurant.component';
import { RestaurantInfoComponent } from './components/restaurant-info/restaurant-info.component';
import { OrderedMenuComponent } from './components/ordered-menu/ordered-menu.component';
import { OrderTotalComponent } from './components/order-total/order-total.component';
import { OrderPaymentComponent } from './components/order-payment/order-payment.component';

const routes: Routes = [
    { path: 'restaurant-detail', component: AddressComponent }
    // Add other routes as needed
  ];

@NgModule({
    declarations: [
        AppComponent,
        AllRestaurantsComponent,
        AddressComponent,
        RestaurantDetailComponent,
        MenuItemComponent,
        RecipeDialogComponent,
        PayDialogComponent,
        AddAddressComponent,
        TruncateTextDirective,
        AddItemComponent,
        CartPageComponent,
        CookingReqDialogComponent,
        SaveAddressDialogComponent,
        GstDialogComponent,
        DeliveryDialogComponent,
        RecipeMoreDetailsComponent,
        AllMenuComponent,
        MenuCatrgoryComponent,
        MenuCatrgoryRecommededComponent,
        MenuComponent,
        SearchBarComponent,
        RestaurantFilterComponent,
        RestaurantComponent,
        RestaurantInfoComponent,
        OrderedMenuComponent,
        OrderTotalComponent,
        OrderPaymentComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        HttpClientModule,
        // Material
        MatExpansionModule,
        MatSnackBarModule,
        MatTooltipModule,
        MatToolbarModule,
        MatProgressBarModule,
        MatStepperModule,
        MatButtonModule,
        MatIconModule,
        MatInputModule,
        MatFormFieldModule,
        MatDialogModule,
        FormsModule,
        ReactiveFormsModule,
        MatMenuModule,
        MatSidenavModule,
        MatSelectModule,
        MatListModule,
        MatCardModule,
        MatButtonToggleModule,
        MatGridListModule,
        MatCheckboxModule,
        MatRadioModule,
        MatTableModule,
        MatChipsModule,
        MatSortModule,
        MatPaginatorModule,
        RouterModule.forRoot(routes)
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
