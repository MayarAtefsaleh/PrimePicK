import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-singleproduct',
  templateUrl: './singleproduct.component.html',
  styleUrls: ['./singleproduct.component.scss'],
})
export class SingleproductComponent {
  @Input() data: any = {};
  @Output() item = new EventEmitter();
  amount: number = 0;

  add()
  {
    this.item.emit(this.data);

  }
}
