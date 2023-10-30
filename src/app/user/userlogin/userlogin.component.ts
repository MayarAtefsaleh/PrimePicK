import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { Ilogin} from 'src/app/Models/iuser';


@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.scss'],
})
export class UserloginComponent implements OnInit
{
  
  constructor(
    private FB: FormBuilder,
    private service: UserService,

  ) {}
  userRegisterForm!: FormGroup;
  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.userRegisterForm = this.FB.group(
      {
        Email: [
          '',
          [
            Validators.required,
            Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}'),
          ],
        ], // Email pattern validation
        Password: ['', [Validators.required]], // Password pattern validation (at least 8 characters, one lowercase, one uppercase, one digit)
      }
      // { validators: passwordMatch }
    );
  }

  get Email() {
    return this.userRegisterForm.get('Email');
  }

  get Password() {
    return this.userRegisterForm.get('Password');
  }

  logIn(data: Ilogin) {
    this.service.userLogin(data);
  }


}
