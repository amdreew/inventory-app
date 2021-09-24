import { TestBed } from '@angular/core/testing';

import { MapResponseDataService } from './map-response-data.service';

describe('MapResponseDataService', () => {
  let service: MapResponseDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MapResponseDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
