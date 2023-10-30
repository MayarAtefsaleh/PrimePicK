import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Iuser } from 'src/app/Models/iuser';
import { UserService } from '../services/user.service';
import { passwordMatch } from './CustomValidators/passwordmatchvalidator';

@Component({
  selector: 'app-userauth',
  templateUrl: './userauth.component.html',
  styleUrls: ['./userauth.component.scss'],
})
export class UserauthComponent implements OnInit {
  success: boolean = false;
  constructor(private FB: FormBuilder, private service: UserService) {}

  userRegisterForm!: FormGroup;

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.userRegisterForm = this.FB.group(
      {
        FullName: ['', [Validators.required]],
        Email: [
          '',
          [
            Validators.required,
            Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}'),
          ],
        ], // Email pattern validation
        Location: ['', [Validators.required]],
        Phone: ['', [Validators.required, Validators.pattern('[0-9]{10}')]], // Phone pattern validation (10 digits)
        Password: ['', [Validators.required]], // Password pattern validation (at least 8 characters, one lowercase, one uppercase, one digit)
        ConfirmPassword: ['', [Validators.required]],
        Agreetermscheck: [''],
        EmailAboutMe: [''],
      },
      { validators: passwordMatch }
    );
  }

  get FullName() {
    return this.userRegisterForm.get('FullName');
  }

  get Email() {
    return this.userRegisterForm.get('Email');
  }

  get Location() {
    return this.userRegisterForm.get('Location');
  }

  get Phone() {
    return this.userRegisterForm.get('Phone');
  }

  get Password() {
    return this.userRegisterForm.get('Password');
  }

  get ConfirmPassword() {
    return this.userRegisterForm.get('ConfirmPassword');
  }

  // signUp() {
  //   let userModel: Iuser = this.userRegisterForm.value as Iuser;
  //   console.log(userModel);
  // }

  signUp(data: Iuser) {

    this.success = true;
    setTimeout(() => {
      this.service.userSignUp(data);
    }, 1000);
  }
}
