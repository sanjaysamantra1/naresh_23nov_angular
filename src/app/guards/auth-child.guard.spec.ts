import { TestBed } from '@angular/core/testing';

import { AuthChildGuard } from './auth-child.guard';

describe('AuthChildGuard', () => {
  let guard: AuthChildGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthChildGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
