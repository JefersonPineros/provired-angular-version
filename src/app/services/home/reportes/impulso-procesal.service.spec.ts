import { TestBed } from '@angular/core/testing';

import { ImpulsoProcesalService } from './impulso-procesal.service';

describe('ImpulsoProcesalService', () => {
  let service: ImpulsoProcesalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImpulsoProcesalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
