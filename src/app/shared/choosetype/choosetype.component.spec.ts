import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoosetypeComponent } from './choosetype.component';

describe('ChoosetypeComponent', () => {
  let component: ChoosetypeComponent;
  let fixture: ComponentFixture<ChoosetypeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChoosetypeComponent]
    });
    fixture = TestBed.createComponent(ChoosetypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
