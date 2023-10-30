import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss'],
})
export class AllProductsComponent implements OnInit {
  products: any[] = []; //34an ast2bl al data feh
  categories: any[] = []; //34an ast2bl al data feh
  loading: boolean = false;
  cartProducts: any[] = [];
  constructor(private service: ProductsService) {}

  ngOnInit(): void {
    this.getProducts();
    this.getCategories();
  }

  getProducts() {
    this.loading = true;
    this.service.getAllProducts().subscribe(
      (res: any) => {
        this.products = res;
        this.loading = false;
      },
      (error) => {
        this.loading = false;
        alert('Error');
      }
    );
  }

  getCategories() {
    this.loading = true;
    this.service.getAllCategories().subscribe(
      (res: any) => {
        this.categories = res;
        this.loading = false;
      },
      (error) => {
        this.loading = false;
        alert('Error');
      }
    );
  }

  filterProducts(event: any) {
    let value = event.target.value;
    this.getProductsCategory(value);
  }

  getProductsCategory(keyword: string) {
    this.loading = true;
    this.service.getProductsByCategory(keyword).subscribe(
      (res: any) => {
        this.products = res;
        this.loading = false;
      },
      (error) => {
        this.loading = false;
        alert('Error');
      }
    );
  }

  addToCart(event: any)
  {
    if (localStorage.getItem('user')) {
      if ('cart' in localStorage) {
        this.cartProducts = JSON.parse(localStorage.getItem('cart')!);
        let exist = this.cartProducts.find((item: any) => item.id === event.id);
        if (exist) {
          alert('Product is already in your cart!');
        } else {
          this.cartProducts.push(event);
          localStorage.setItem('cart', JSON.stringify(this.cartProducts));
          alert('Product Added to cart successfully');
        }
      } else {
        this.cartProducts = [event];
        localStorage.setItem('cart', JSON.stringify(this.cartProducts));
        alert('Product Added to cart successfully');
      }
    } else {
      alert('You should login first..');
      window.location.href = '/userlogin';
    }
  }
}
