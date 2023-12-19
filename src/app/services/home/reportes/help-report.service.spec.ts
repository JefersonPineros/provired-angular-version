import { TestBed } from '@angular/core/testing';

import { HelpReportService } from './help-report.service';

describe('HelpReportService', () => {
  let service: HelpReportService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HelpReportService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
