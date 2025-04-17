import { TestBed } from '@angular/core/testing';

import { ProcesosActivosService } from './procesos-activos.service';

describe('ProcesosActivosService', () => {
  let service: ProcesosActivosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProcesosActivosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
