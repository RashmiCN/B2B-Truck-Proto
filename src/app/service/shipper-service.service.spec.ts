import { TestBed } from '@angular/core/testing';

import { ShipperServiceService } from './shipper-service.service';

describe('ShipperServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ShipperServiceService = TestBed.get(ShipperServiceService);
    expect(service).toBeTruthy();
  });
});
