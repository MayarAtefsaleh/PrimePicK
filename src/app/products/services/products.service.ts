import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient, private router: Router) {}

  cartProducts: any[] = [];
  productQuantity: number = 1;

  getAllProducts() {
    return this.http.get(environment.baseApi + 'products');
  }

  getLimitedProducts() {
    return this.http.get(environment.baseApi + 'products?limit=4');
  }

  getAllCategories() {
    return this.http.get(environment.baseApi + 'products/categories');
  }

  getProductsByCategory(keyword: string) {
    return this.http.get(environment.baseApi + 'products/category/' + keyword);
  }

  getAllVehicles() {
    return this.http.get(environment.AnotherBase + 'vehicles');
  }

  getAllHouses() {
    return this.http.get(environment.AnotherBase + 'housing');
  }

  getProductByID(id: any) {
    return this.http.get(environment.baseApi + 'products/' + id);
  }

  addToCart(product: any) {
    this.cartProducts.push(product); // Add the product to the cartProducts array
  }

  addAmount(product: any, quantity: number) {
    for (let i = 0; i < quantity; i++) {
      this.cartProducts.push(product);
    }
  }

  searchProduct(query: any) {
    return this.http.get(environment.baseApi + `products/category/${query}`);
  }
}
