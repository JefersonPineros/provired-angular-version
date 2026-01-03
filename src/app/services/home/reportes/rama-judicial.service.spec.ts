import { TestBed } from '@angular/core/testing';

import { RamaJudicialService } from './rama-judicial.service';

describe('RamaJudicialService', () => {
  let service: RamaJudicialService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RamaJudicialService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
