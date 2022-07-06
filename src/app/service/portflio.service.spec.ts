import { TestBed } from '@angular/core/testing';

import { PortflioService } from './portflio.service';

describe('PortflioService', () => {
  let service: PortflioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PortflioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
