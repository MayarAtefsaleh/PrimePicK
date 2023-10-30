import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyallordersComponent } from './myallorders.component';

describe('MyallordersComponent', () => {
  let component: MyallordersComponent;
  let fixture: ComponentFixture<MyallordersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyallordersComponent]
    });
    fixture = TestBed.createComponent(MyallordersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
