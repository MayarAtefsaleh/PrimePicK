import { Component, Input, OnInit } from '@angular/core';
import { ItemdetailsService } from '../services/itemdetails.service';

@Component({
  selector: 'app-itemlisting',
  templateUrl: './itemlisting.component.html',
  styleUrls: ['./itemlisting.component.scss'],
})
export class ItemlistingComponent implements OnInit {
  base64: any = '';
  data: any = {};
  success: boolean = false;

  constructor(private service: ItemdetailsService) {}

  ngOnInit(): void {}

  // getImgPath(event: any) {
  //   const file = event.target.files[0];
  //   const reader = new FileReader();
  //   reader.readAsDataURL(file);
  //   reader.onload = () => {
  //     this.base64 = reader.result as string;
  //   };
  // }

  submit(data: any) {
    this.service.addProduct(data).subscribe((result) => {
      console.log(result);
      if (result) {
        alert('Product is added');
      }
      this.success = true;
    });

    setTimeout(() => {
      this.success = false;
    }, 3000);
  }
}
