import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Ilogin, Iuser } from 'src/app/Models/iuser';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient, private router: Router) {}

  userSignUp(user: Iuser) {
    this.http
      .post(environment.AnotherBase + 'users', user, { observe: 'response' })
      .subscribe((res) => {
        if (res) {
          localStorage.setItem('user', JSON.stringify(res.body));
          this.router.navigate(['/userlogin']);
        }
      });
  }

  userLogin(data: Ilogin) {
    this.http
      .get<Iuser[]>(
        environment.AnotherBase +
          `users?Email=${data.Email}&Password=${data.Password}`,
        { observe: 'response' }
      )
      .subscribe((result) => {
        if (result && result.body) {
          localStorage.setItem('user', JSON.stringify(result.body[0]));
          this.router.navigate(['/**']);
        }
      });
  }

  // userAuthReload() {
  //   if (localStorage.getItem('user')) {
  //     this.router.navigate(['/**']);
  //   }
  // }

  // login()
  // { calling apis

  // }

  // logout()
  // {
  //   localStorage.removeItem('user');
  // }

  // get isUserLogged():boolean
  // {
  //   return (localStorage.getItem('user')) ? true : false;

  // }
}
