import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  constructor(private http: HttpClient) { }

  // getAllReviews() {
  //   return this.http.get('https://hub.dummyapis.com/employee');
  // }
}
