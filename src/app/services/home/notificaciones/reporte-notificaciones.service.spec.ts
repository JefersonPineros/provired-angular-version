import { TestBed } from '@angular/core/testing';

import { ReporteNotificacionesService } from './reporte-notificaciones.service';

describe('ReporteNotificacionesService', () => {
  let service: ReporteNotificacionesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReporteNotificacionesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
