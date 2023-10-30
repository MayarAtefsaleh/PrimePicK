import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AllofaccountService
{

  constructor(private http: HttpClient) {}

  productAllList() {
    return this.http.get(environment.AnotherBase + 'products');
  }

  deleteProduct(id: number) {
    return this.http.delete(environment.AnotherBase + `products/${id}`);
  }

  getProduct(id: any) {
    return this.http.get(environment.AnotherBase + `products/${id}`);
  }

  updateProduct(product: any) {
    return this.http.put(
      environment.AnotherBase + `products/${product.id}`,
      product
    );
  }

  getUser(userId: number) {
    return this.http.get(environment.AnotherBase + `users/${userId}`);
  }

  updateUser(userId: number, userData: any) {
    return this.http.put(environment.AnotherBase + `users/${userId}`, userData);
  }
}
