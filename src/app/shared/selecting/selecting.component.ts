import { Component,Input,Output,OnInit,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-selecting',
  templateUrl: './selecting.component.html',
  styleUrls: ['./selecting.component.scss'],
})
export class SelectingComponent {
  @Input() detail: any[] = [];
  @Input() data: any[] = [];
  @Output() choosedValue = new EventEmitter();
  @Output() choosedAll = new EventEmitter();

  detectChanges(event: any)
  {
    this.choosedValue.emit(event);
  }

  getdetails()
  {
     this.choosedAll.emit();
  }
}
