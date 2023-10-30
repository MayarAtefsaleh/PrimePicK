import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-limited-products',
  templateUrl: './limited-products.component.html',
  styleUrls: ['./limited-products.component.scss'],
})
export class LimitedProductsComponent implements OnInit {
  products: any[] = []; //34an ast2bl al data feh
  loading: boolean = false;
  constructor(private service: ProductsService) {}

  ngOnInit() {
    this.getLimitedProducts();
  }

  getLimitedProducts()
  {
    this.loading = true;
    this.service.getLimitedProducts().subscribe(
      (res: any) => {
        this.products = res
          this.loading = false;;
      },
      (error) =>
      {
        this.loading = false;
        alert('Error');
      }
    );
  }
}
