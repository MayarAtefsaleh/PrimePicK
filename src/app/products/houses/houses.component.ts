import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-houses',
  templateUrl: './houses.component.html',
  styleUrls: ['./houses.component.scss'],
})
export class HousesComponent implements OnInit {
  products: any[] = [];
  loading: boolean = false;

  constructor(private service: ProductsService) {}

  ngOnInit(): void {
    this.getHouses();
  }

  getHouses() {
    this.loading = true;
    this.service.getAllHouses().subscribe(
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
}
