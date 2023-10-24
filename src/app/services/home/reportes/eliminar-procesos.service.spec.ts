import { TestBed } from '@angular/core/testing';

import { EliminarProcesosService } from './eliminar-procesos.service';

describe('EliminarProcesosService', () => {
  let service: EliminarProcesosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EliminarProcesosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
