import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-myallorders',
  templateUrl: './myallorders.component.html',
  styleUrls: ['./myallorders.component.scss'],
})
export class MyallordersComponent {
  constructor(private router: Router) {}

  logout() {
    localStorage.removeItem('user');
    this.router.navigate(['/userlogin']);
  }
}
