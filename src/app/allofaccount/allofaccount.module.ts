import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyallordersComponent } from './myallorders/myallorders.component';
import { MyallaccountComponent } from './myallaccount/myallaccount.component';
import { ListingdetailsModule } from '../listingdetails/listingdetails.module';
import { MyalllistingsComponent } from './myalllistings/myalllistings.component';
import { UpdateproductComponent } from './updateproduct/updateproduct.component';
import { AppRoutingModule } from '../app-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    MyalllistingsComponent,
    MyallordersComponent,
    MyallaccountComponent,
    UpdateproductComponent,

  ],
  imports: [
    CommonModule,
    ListingdetailsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [
    MyalllistingsComponent,
    MyallordersComponent,
    MyallaccountComponent,
  ],
})
export class AllofaccountModule {}
