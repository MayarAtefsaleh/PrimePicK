import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.scss'],
})
export class ProductsDetailsComponent implements OnInit {
  id: any;
  data: any = {};
  loading: boolean = false;
  cartProducts: any[] = [];
  productQuantity: number = 0;
  constructor(
    private route: ActivatedRoute,
    private service: ProductsService,
    private router: Router
  ) {
    this.id = this.route.snapshot.paramMap.get('id');
  }
  ngOnInit(): void {
    this.getProduct();
  }

  getProduct() {
    this.loading = true;
    this.service.getProductByID(this.id).subscribe(
      (res) => {
        this.data = res;
        this.loading = false;
        if (!this.data) {
          this.router.navigate(['/notfound']); // Navigate to Error404Page
        }
      },
      (error) => {
        this.loading = false;
        this.router.navigate(['/notfound']); // Navigate to Error404Page
      }
    );
  }

  handleQuantity(val: string) {
    if (this.productQuantity < 1000 && val === 'plus') {
      this.productQuantity += 1;
    } else if (this.productQuantity > 0 && val === 'min') {
      this.productQuantity -= 1;
    }
  }

  addToCart() {
    if (localStorage.getItem('user')) {
      if (this.data) {
        if ('cart' in localStorage) {
          this.cartProducts = JSON.parse(localStorage.getItem('cart')!);
          let existingItem = this.cartProducts.find(
            (item: any) => item.id === this.data.id
          );

          if (existingItem) {
            existingItem.quantity += this.productQuantity; // Increment the quantity of the existing item by the selected quantity
            alert('Product quantity added in your cart!');
          } else {
            this.data.quantity = this.productQuantity; // Set the quantity of the new item to the selected quantity
            this.cartProducts.push(this.data);
            alert('Product Added to cart successfully');
          }

          localStorage.setItem('cart', JSON.stringify(this.cartProducts));
        } else {
          this.data.quantity = this.productQuantity; // Set the quantity of the new item to the selected quantity
          this.cartProducts = [this.data];
          localStorage.setItem('cart', JSON.stringify(this.cartProducts));
          alert('Product Added to cart successfully');
        }
      } else {
        throw new Error('No data available to add to cart.');
      }
    } else {
      alert('You should login first..');
      window.location.href = '/userlogin';
    }
  }
}
