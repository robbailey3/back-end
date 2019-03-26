import { TestBed } from '@angular/core/testing';

import { ErrorLoggingService } from './error-logging.service';

describe('ErrorLoggingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ErrorLoggingService = TestBed.get(ErrorLoggingService);
    expect(service).toBeTruthy();
  });
});
