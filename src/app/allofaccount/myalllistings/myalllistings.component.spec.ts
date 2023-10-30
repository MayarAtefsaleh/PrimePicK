import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyalllistingsComponent } from './MyalllistingsComponent';

describe('MyalllistingsComponent', () => {
  let component: MyalllistingsComponent;
  let fixture: ComponentFixture<MyalllistingsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyalllistingsComponent],
    });
    fixture = TestBed.createComponent(MyalllistingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
