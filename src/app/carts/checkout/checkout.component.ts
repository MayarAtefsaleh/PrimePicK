import { Component, OnInit } from '@angular/core';
import { CartsService } from '../services/carts.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent implements OnInit {
  cartProducts: any[] = [];
  productQuantity: number = 1;
  total: any = 0;
  success: boolean = false;
  data: any = {};

  constructor(private service: CartsService) {}
  ngOnInit(): void {
    this.getCartProducts();
  }

  minus(index: number) {
    if (this.cartProducts[index].quantity > 0) {
      this.cartProducts[index].quantity--;
      this.getAllItemsTotal();
      localStorage.setItem('cart', JSON.stringify(this.cartProducts));
    } else {
      alert('The item quantity is empty');
    }
  }

  plus(index: number) {
    this.cartProducts[index].quantity++;
    this.getAllItemsTotal();
    localStorage.setItem('cart', JSON.stringify(this.cartProducts));
  }

  getCartProducts() {
    if ('cart' in localStorage) {
      this.cartProducts = JSON.parse(localStorage.getItem('cart')!);
    }

    this.getAllItemsTotal();
  }

  getAllItemsTotal() {
    this.total = 0;
    for (let x in this.cartProducts) {
      this.total += this.cartProducts[x].price * this.cartProducts[x].quantity;
    }
    this.total = Number(this.total.toFixed(2)); // تقريب الرقم إلى رقم عشري بنصفين

    return this.total;
  }

  detectChange() {
    this.getAllItemsTotal();
    localStorage.setItem('cart', JSON.stringify(this.cartProducts));
  }

  deleteProduct(index: number) {
    this.cartProducts.splice(index, 1); // hna index 3ayz ams7 kam w l7d r2m kam fna choosed num 1 because iwant to delete only one index aly ana m7ddah
    this.getAllItemsTotal();
    localStorage.setItem('cart', JSON.stringify(this.cartProducts));
  }



  orderNow(data: any) {
    let userId = 5;
    let user = localStorage.getItem('user');

    try {
      if (user) {
        userId = JSON.parse(user);
      }
    } catch (error) {
      console.error('Error parsing user data:', error);
    }
    if (this.total)
    {
      let orderData:any = {
        ...data,
        total: this.total,
      userId
      }

      this.service.orderNow(orderData).subscribe((result) =>
      {
        if (result)
        {
          alert('order placed');

        }
        this.success = true;
      })
    }

    setTimeout(() => {
      this.success = false;
    }, 5000);
  }

}
