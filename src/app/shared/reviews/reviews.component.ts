import { Component, OnInit } from '@angular/core';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss'],
})
export class ReviewsComponent implements OnInit {
  // reviews: any[] = [];
  // loading: boolean = false;
  constructor(private service: SharedService) {}

  ngOnInit(): void {
    // this.getReviews();
  }

  // getReviews() {
  //   this.loading = true;
  //   this.service.getAllReviews().subscribe(
  //     (res: any) => {
  //       this.reviews = res;
  //       this.loading = false;
  //     },
  //     (error) => {
  //       this.loading = false;
  //       alert('Error');
  //     }
  //   );
  // }
}
