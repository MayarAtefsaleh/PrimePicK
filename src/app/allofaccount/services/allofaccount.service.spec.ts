import { TestBed } from '@angular/core/testing';

import { AllofaccountService } from './allofaccount.service';

describe('AllofaccountService', () => {
  let service: AllofaccountService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllofaccountService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
