import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllProductsComponent } from './products/all-products/all-products.component';
import { ProductsDetailsComponent } from './products/products-details/products-details.component';
import { CartComponent } from './carts/cart/cart.component';
import { MainpageComponent } from './Components/Main/mainpage/mainpage.component';
import { LimitedProductsComponent } from './products/limited-products/limited-products.component';
import { VehiclesComponent } from './products/vehicles/vehicles.component';
import { HousesComponent } from './products/houses/houses.component';
import { CheckoutComponent } from './carts/checkout/checkout.component';
import { ChoosetypeComponent } from './shared/choosetype/choosetype.component';
import { ItemlistingComponent } from './listingdetails/itemlisting/itemlisting.component';
import { HomelistingComponent } from './listingdetails/homelisting/homelisting.component';
import { VehiclelistingComponent } from './listingdetails/vehiclelisting/vehiclelisting.component';
import { MyallordersComponent } from './allofaccount/myallorders/myallorders.component';
import { MyallaccountComponent } from './allofaccount/myallaccount/myallaccount.component';
import { MyalllistingsComponent } from './allofaccount/myalllistings/myalllistings.component';
import { UpdateproductComponent } from './allofaccount/updateproduct/updateproduct.component';
import { UserauthComponent } from './user/userauth/userauth.component';
import { MainlayoutComponent } from './shared/mainlayout/mainlayout.component';
import { UserloginComponent } from './user/userlogin/userlogin.component';
import { userauthGuard } from './Guards/userauth.guard';
import { AboutusComponent } from './Components/Main/aboutus/aboutus.component';
import { SupportComponent } from './Components/Main/support/support.component';
import { SearchresComponent } from './Components/Main/searchres/searchres.component';
import { PagenotfoundComponent } from './shared/pagenotfound/pagenotfound.component';

const routes: Routes = [
  {
    path: '',
    component: MainlayoutComponent,
    children: [
      { path: 'mainpage', component: MainpageComponent },
      { path: 'products', component: AllProductsComponent },
      { path: 'support', component: SupportComponent },
      { path: 'aboutus', component: AboutusComponent },
      { path: 'details/:id', component: ProductsDetailsComponent }, //8yrt al routing 3l4an hwa lma hyndh 3la al item w y2rf al id bt3ha mn al url
      { path: 'cart', component: CartComponent, canActivate: [userauthGuard] },
      { path: 'limitedproducts', component: LimitedProductsComponent },
      { path: 'vehicles', component: VehiclesComponent },
      { path: 'search/:query', component: SearchresComponent },
      { path: 'houses', component: HousesComponent },
      {
        path: 'checkout',
        component: CheckoutComponent,
        canActivate: [userauthGuard],
      },
      {
        path: 'choosetype',
        component: ChoosetypeComponent,
        canActivate: [userauthGuard],
      },
      {
        path: 'itemlisting',
        component: ItemlistingComponent,
        canActivate: [userauthGuard],
      },
      {
        path: 'homelisting',
        component: HomelistingComponent,
        canActivate: [userauthGuard],
      },
      {
        path: 'vehiclelisting',
        component: VehiclelistingComponent,
        canActivate: [userauthGuard],
      },
      {
        path: 'mylistings',
        component: MyalllistingsComponent,
        canActivate: [userauthGuard],
      },
      {
        path: 'myorders',
        component: MyallordersComponent,
        canActivate: [userauthGuard],
      },
      // { path: 'myaccount/:id', component: MyallaccountComponent, canActivate: [userauthGuard] },
      {
        path: 'myaccount',
        component: MyallaccountComponent,
        canActivate: [userauthGuard],
      },
      {
        path: 'updateproduct/:id',
        component: UpdateproductComponent,
        canActivate: [userauthGuard],
      },
    ],
  },

  { path: 'userauth', component: UserauthComponent },
  { path: 'userlogin', component: UserloginComponent },
  { path: 'notfound', component: PagenotfoundComponent },
  { path: '**', redirectTo: 'mainpage', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
