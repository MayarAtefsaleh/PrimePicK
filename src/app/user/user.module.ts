import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserauthComponent } from './userauth/userauth.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { UserloginComponent } from './userlogin/userlogin.component';



@NgModule({
  declarations: [UserauthComponent, UserloginComponent],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  exports: [UserauthComponent],
})
export class UserModule {}
