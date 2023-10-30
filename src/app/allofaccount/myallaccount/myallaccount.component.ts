import { Component, OnInit } from '@angular/core';
import { AllofaccountService } from '../services/allofaccount.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-myallaccount',
  templateUrl: './myallaccount.component.html',
  styleUrls: ['./myallaccount.component.scss'],
})
export class MyallaccountComponent implements OnInit {
  // userData: any;
  success: boolean = false;
  Id!: number;
  email!: string;
  username!: string;
  location!: string;
  phone!: string;
  agreetermscheck!: boolean;
  emailAboutMe!: boolean;
  confirmPassword!: string;
  password!: string;

  constructor(
    private http: HttpClient,
    private router: Router,
    private userService: AllofaccountService
  ) {}

  ngOnInit(): void {
    const userDataString = localStorage.getItem('user') as string;
    if (userDataString) {
      const userData = JSON.parse(userDataString);
      this.fetchUserData(userData.id);
    }
  }

  fetchUserData(userId: number): void {
    this.userService.getUser(userId).subscribe((userData: any) => {
      this.username = userData.FullName;
      this.email = userData.Email;
      this.location = userData.Location;
      this.phone = userData.Phone;
      this.password = userData.Password;
      this.confirmPassword = userData.ConfirmPassword;
      this.emailAboutMe = userData.EmailAboutMe;
      this.agreetermscheck = userData.Agreetermscheck;
      this.Id = userData.id;
    });
  }

  onSubmit(): void {
    const updatedUserData = {
      FullName: this.username,
      Email: this.email,
      Location: this.location,
      Phone: this.phone,
      Password: this.password,
      ConfirmPassword: this.confirmPassword,
      EmailAboutMe: this.emailAboutMe,
      Agreetermscheck: this.agreetermscheck,
      id: this.Id,
    };

    // Update data in local storage
    localStorage.setItem('user', JSON.stringify(updatedUserData));

    // Update data in API
    this.userService
      .updateUser(updatedUserData.id, updatedUserData)
      .subscribe(() => {
        this.success = true;
      });
    setTimeout(() => {
      this.success = false;
    }, 3000);
  }

  logout() {
    localStorage.removeItem('user');
    this.router.navigate(['/userlogin']);
  }
}
