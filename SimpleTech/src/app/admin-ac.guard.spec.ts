import { TestBed } from '@angular/core/testing';

import { AdminAcGuard } from './admin-ac.guard';

describe('AdminAcGuard', () => {
  let guard: AdminAcGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AdminAcGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
