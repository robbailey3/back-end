import { TestBed } from '@angular/core/testing';

import { DigitalOceanService } from './digital-ocean.service';

describe('DigitalOceanService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DigitalOceanService = TestBed.get(DigitalOceanService);
    expect(service).toBeTruthy();
  });
});
