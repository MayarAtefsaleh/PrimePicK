import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchresComponent } from './searchres.component';

describe('SearchresComponent', () => {
  let component: SearchresComponent;
  let fixture: ComponentFixture<SearchresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchresComponent]
    });
    fixture = TestBed.createComponent(SearchresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
