import { Component, OnInit, HostListener } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { interval, Subscription } from 'rxjs';
import { ProductsService } from 'src/app/products/services/products.service';


@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.scss'],
})
export class MainpageComponent implements OnInit {
  vendorscount: number = 0;
  vendorscountstop: Subscription = new Subscription();
  productscount: number = 0;
  productscountstop: Subscription = new Subscription();
  customerscount: number = 0;
  customerscountstop: Subscription = new Subscription();
  salescount: number = 0;
  salescountstop: Subscription = new Subscription();
  searchResult: any[] = [];
  constructor(private service: ProductsService, private router: Router) {}

  ngOnInit() {
    this.vendorscountstop = interval(10).subscribe(() => {
      this.vendorscount++;
      // We need to stop at a particular point
      if (this.vendorscount === 1000) {
        // This will unsubscribe from the observable
        this.vendorscountstop.unsubscribe();
      }
    });

    this.productscountstop = interval(3000).subscribe(() => {
      this.productscount++;
      // We need to stop at a particular point
      if (this.productscount === 4) {
        // This will unsubscribe from the observable
        this.productscountstop.unsubscribe();
      }
    });

    this.customerscountstop = interval(10).subscribe(() => {
      this.customerscount++;
      // We need to stop at a particular point
      if (this.customerscount === 6000) {
        // This will unsubscribe from the observable
        this.customerscountstop.unsubscribe();
      }
    });

    this.salescountstop = interval(6000).subscribe(() => {
      this.salescount++;
      // We need to stop at a particular point
      if (this.salescount === 2) {
        // This will unsubscribe from the observable
        this.salescountstop.unsubscribe();
      }
    });
  }

  searchProduct(query: KeyboardEvent) {
    const element = query.target as HTMLInputElement;
    const keyword = element.value.trim();

    if (keyword) {
      this.service.searchProduct(keyword).subscribe((res: any) => {
        this.searchResult = res;
      });
    } else {
      this.searchResult = [];
    }
  }

  hideSearch() {
    this.searchResult = [];
  }

  submitSearch(val: any) {
    const routeExists = this.router.config.find(
      (route) => route.path === `search/${val}`
    );

    if (routeExists) {
      this.router.navigate([`search/${val}`]);
    } else {
      // Page doesn't exist, navigate to an alternative page
      const queryParams: any = {
        // Add any query parameters you want to pass to the alternative page
        // For example:
        keyword: val,
      };

      const navigationExtras: NavigationExtras = {
        queryParams,
      };

      this.router.navigate(['/notfound'], navigationExtras);
    }
  }
}

