import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from 'src/app/products/services/products.service';

@Component({
  selector: 'app-searchres',
  templateUrl: './searchres.component.html',
  styleUrls: ['./searchres.component.scss'],
})
export class SearchresComponent implements OnInit {
  searchResult: any[] = [];

  constructor(
    private activeroute: ActivatedRoute,
    private service: ProductsService
  ) {}

  ngOnInit(): void {
    let query = this.activeroute.snapshot.paramMap.get('query');
    query && this.service.searchProduct(query).subscribe((res: any) =>
    {
      this.searchResult = res;
    });
  }
}
