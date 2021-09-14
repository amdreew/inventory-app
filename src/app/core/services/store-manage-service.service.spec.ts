import { TestBed } from '@angular/core/testing';

import { StoreManageServiceService } from './store-manage-service.service';

describe('StoreManageServiceService', () => {
  let service: StoreManageServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StoreManageServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
