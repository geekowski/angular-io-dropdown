import { TestBed } from '@angular/core/testing';

import { AngularIoDropdownService } from './angular-io-dropdown.service';

describe('AngularIoDropdownService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AngularIoDropdownService = TestBed.get(AngularIoDropdownService);
    expect(service).toBeTruthy();
  });
});
