import { TestBed } from '@angular/core/testing';

import { StatusUfService } from './status-uf.service';

describe('StatusUfService', () => {
  let service: StatusUfService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StatusUfService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
