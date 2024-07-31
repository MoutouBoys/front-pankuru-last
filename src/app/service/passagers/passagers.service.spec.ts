import { TestBed } from '@angular/core/testing';

import { PassagersService } from './passagers.service';

describe('PassagersService', () => {
  let service: PassagersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PassagersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
