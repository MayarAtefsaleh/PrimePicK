import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart/cart.component';
import { ProductsModule } from '../products/products.module';
import { AppRoutingModule } from '../app-routing.module';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { CheckoutComponent } from './checkout/checkout.component';



@NgModule({
  declarations: [CartComponent, CheckoutComponent],
  imports: [
    CommonModule,
    ProductsModule,
    AppRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [CartComponent],
})
export class CartsModule {}
