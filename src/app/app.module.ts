import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './AppComponent';
import { SharedModule } from './shared/shared.module';
import { MainpageComponent } from './Components/Main/mainpage/mainpage.component';
import { ProductsModule } from './products/products.module';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CartsModule } from './carts/carts.module';
import { ListingdetailsModule } from './listingdetails/listingdetails.module';
import { AllofaccountModule } from './allofaccount/allofaccount.module';
import { UserModule } from './user/user.module';
import { AboutusComponent } from './Components/Main/aboutus/aboutus.component';
import { SupportComponent } from './Components/Main/support/support.component';
import { SearchresComponent } from './Components/Main/searchres/searchres.component';

@NgModule({
  declarations: [
    AppComponent,
    MainpageComponent,
    AboutusComponent,
    SupportComponent,
    SearchresComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    ProductsModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    CartsModule,
    ListingdetailsModule,
    UserModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [FormsModule],
})
export class AppModule {}
