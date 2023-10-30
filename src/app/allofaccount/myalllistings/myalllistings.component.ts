import { Component, OnInit } from '@angular/core';
import { AllofaccountService } from '../services/allofaccount.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-myalllistings',
  templateUrl: './myalllistings.component.html',
  styleUrls: ['./myalllistings.component.scss'],
})
export class MyalllistingsComponent implements OnInit {
  products: any[] = [];
  success: boolean = false;
  constructor(private service: AllofaccountService,private router:Router) {}

  ngOnInit(): void {
    this.productList();
  }

  productList() {
    this.service.productAllList().subscribe(
      (res: any) => {
        console.log(res);
        if (res) {
          this.products = res;
        }
      },
      (error) => {
        alert('Error');
      }
    );
  }

  deleteProduct(id: number) {
    this.service.deleteProduct(id).subscribe((res) => {
      if (res) {
        alert('Product will be delete');
        this.productList();
      }
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
