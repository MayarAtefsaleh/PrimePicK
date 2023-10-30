import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.scss'],
})
export class VehiclesComponent implements OnInit {
  products: any[] = [];
  loading: boolean = false;
  constructor(private service: ProductsService) {}

  ngOnInit(): void {
    this.getVehicles();
  }

  getVehicles() {
    this.loading = true;
    this.service.getAllVehicles().subscribe(
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
