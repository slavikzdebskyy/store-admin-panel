import { TestBed } from '@angular/core/testing';

import { SpinnerService } from './spinner.service';

describe('SpinnerService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [SpinnerService],
  }));

  it('should be created', () => {
    const service: SpinnerService = TestBed.get(SpinnerService);
    expect(service).toBeTruthy();
  });
});
