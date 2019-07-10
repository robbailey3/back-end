import { TestBed } from '@angular/core/testing';

import { ServerAdminService } from './server-admin.service';

describe('ServerAdminService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServerAdminService = TestBed.get(ServerAdminService);
    expect(service).toBeTruthy();
  });
});
