import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { SpinnerComponent } from './spinner/spinner.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { SelectingComponent } from './selecting/selecting.component';
import { FormsModule } from '@angular/forms';
import { ChoosetypeComponent } from './choosetype/choosetype.component';
import { MainlayoutComponent } from './mainlayout/mainlayout.component';
import { ScrolltotopComponent } from './scrolltotop/scrolltotop.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SpinnerComponent,
    ReviewsComponent,
    SelectingComponent,
    ChoosetypeComponent,
    MainlayoutComponent,
    ScrolltotopComponent,
    PagenotfoundComponent,
  ],
  imports: [CommonModule, RouterModule, HttpClientModule, FormsModule],
  exports: [
    HeaderComponent,
    FooterComponent,
    SpinnerComponent,
    ReviewsComponent,
    SelectingComponent,
    FormsModule,
    MainlayoutComponent,
    ScrolltotopComponent,
  ],
})
export class SharedModule {}
