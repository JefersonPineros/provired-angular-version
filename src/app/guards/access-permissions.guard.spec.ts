import { TestBed } from '@angular/core/testing';

import { AccessPermissionsGuard } from './access-permissions.guard';

describe('AccessPermissionsGuard', () => {
  let guard: AccessPermissionsGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AccessPermissionsGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
