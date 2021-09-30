import { TestBed } from '@angular/core/testing';

import { ErrorHttpManagerService } from './error-http-manager.service';

describe('ErrorHttpManagerService', () => {
  let service: ErrorHttpManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ErrorHttpManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
