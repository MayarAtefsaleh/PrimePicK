import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllProductsComponent } from './all-products/all-products.component';
import { ProductsDetailsComponent } from './products-details/products-details.component';
import { SharedModule } from '../shared/shared.module';
import { LimitedProductsComponent } from './limited-products/limited-products.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { HousesComponent } from './houses/houses.component';
import { RouterModule, Routes } from '@angular/router';
import { SingleproductComponent } from './singleproduct/singleproduct.component';




@NgModule({
  declarations: [
    AllProductsComponent,
    ProductsDetailsComponent,
    LimitedProductsComponent,
    VehiclesComponent,
    HousesComponent,
    SingleproductComponent,
  ],
  imports: [CommonModule, SharedModule, RouterModule],
  exports: [
    AllProductsComponent,
    ProductsDetailsComponent,
    LimitedProductsComponent,
    VehiclesComponent,
    HousesComponent,
    SingleproductComponent
  ],
})
export class ProductsModule {}
