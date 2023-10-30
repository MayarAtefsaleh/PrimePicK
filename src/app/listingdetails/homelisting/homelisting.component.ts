import { Component } from '@angular/core';
import { ItemdetailsService } from '../services/itemdetails.service';

@Component({
  selector: 'app-homelisting',
  templateUrl: './homelisting.component.html',
  styleUrls: ['./homelisting.component.scss']
})
export class HomelistingComponent {
base64: any = '';
  data: any = {};
  success: boolean = false;

  constructor(private service: ItemdetailsService) {}

  ngOnInit(): void {}

  getImgPath(event: any) {
    //de code gahez 3lnet for transfrom image path to base64
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.base64 = reader.result;
    };
  }

  submit(data: any) {
    this.service.addProduct(data).subscribe((result) => {
      console.log(result);
      if (result) {
        alert('Product is added');
      }
      this.success = true;
    });

    setTimeout(() =>
    {
      this.success = false;
    }, 3000);
  }

}
