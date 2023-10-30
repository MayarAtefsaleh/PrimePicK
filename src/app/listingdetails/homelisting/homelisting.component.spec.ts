import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomelistingComponent } from './homelisting.component';

describe('HomelistingComponent', () => {
  let component: HomelistingComponent;
  let fixture: ComponentFixture<HomelistingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomelistingComponent]
    });
    fixture = TestBed.createComponent(HomelistingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
