import { TestBed } from '@angular/core/testing';

import { MasterSettingsService } from './master-settings.service';

describe('MasterSettingsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MasterSettingsService = TestBed.get(MasterSettingsService);
    expect(service).toBeTruthy();
  });
});
