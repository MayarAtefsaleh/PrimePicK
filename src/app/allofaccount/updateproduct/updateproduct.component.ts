import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AllofaccountService } from '../services/allofaccount.service';

@Component({
  selector: 'app-updateproduct',
  templateUrl: './updateproduct.component.html',
  styleUrls: ['./updateproduct.component.scss'],
})
export class UpdateproductComponent implements OnInit {
  data: any;
  success: boolean = false;
  base64: any = '';
  constructor(
    private route: ActivatedRoute,
    private service: AllofaccountService,
    private router:Router
  ) {}

  ngOnInit(): void {
    let prdId = this.route.snapshot.paramMap.get('id');
    this.service.getProduct(prdId).subscribe(
      (res) => {
        this.data = res;
        if (!this.data) {
          this.router.navigate(['/notfound']); // Navigate to Error404Page
        }
      },
      (error) => {

        this.router.navigate(['/notfound']); // Navigate to Error404Page
      }
    );
  }

  submit(item: any) {
    if (this.data) {
      item.id = this.data.id;
    }
    this.service.updateProduct(item).subscribe((res) => {
      if (res) {
        alert('product has updated');
      }
      this.success = true;
    });
    setTimeout(() => {
      this.success = false;
    }, 3000);
  }

  // getImgPath(event: any) {
  //   const file = event.target.files[0];
  //   const reader = new FileReader();
  //   reader.readAsDataURL(file);
  //   reader.onload = () => {
  //     this.base64 = reader.result as string;
  //   };
  // }
}
