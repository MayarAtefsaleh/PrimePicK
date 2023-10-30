import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyallaccountComponent } from './myallaccount.component';

describe('MyallaccountComponent', () => {
  let component: MyallaccountComponent;
  let fixture: ComponentFixture<MyallaccountComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyallaccountComponent]
    });
    fixture = TestBed.createComponent(MyallaccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
