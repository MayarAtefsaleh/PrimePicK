import { NgModule } from '@angular/core';
import { ItemlistingComponent } from './itemlisting/itemlisting.component';
import { VehiclelistingComponent } from './vehiclelisting/vehiclelisting.component';
import { HomelistingComponent } from './homelisting/homelisting.component';
import { CommonModule } from '@angular/common';
import { ProductsModule } from '../products/products.module';
import { AppRoutingModule } from '../app-routing.module';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ItemlistingComponent,
    VehiclelistingComponent,
    HomelistingComponent,
  ],
  imports: [CommonModule,
    ProductsModule,
    AppRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule],
  exports: [
    ItemlistingComponent,
    VehiclelistingComponent,
    HomelistingComponent,

  ],
})
export class ListingdetailsModule {}
