import { TestBed } from '@angular/core/testing';

import { TerminosCondicionesService } from './terminos.service';

describe('TerminosService', () => {
  let service: TerminosCondicionesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TerminosCondicionesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
