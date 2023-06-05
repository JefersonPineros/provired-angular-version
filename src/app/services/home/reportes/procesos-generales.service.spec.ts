import { TestBed } from '@angular/core/testing';

import { ProcesosGeneralesService } from './procesos-generales.service';

describe('ProcesosGeneralesService', () => {
  let service: ProcesosGeneralesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProcesosGeneralesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
