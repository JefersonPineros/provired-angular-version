import { TestBed } from '@angular/core/testing';

import { EmailDespachosService } from './email-despachos.service';

describe('EmailDespachosService', () => {
  let service: EmailDespachosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmailDespachosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
