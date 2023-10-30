import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ItemdetailsService {
  constructor(private http:HttpClient) { }

  addProduct(data:any)
  {
    return this.http.post(environment.AnotherBase + 'products', data);
  }
}
