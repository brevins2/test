import { TestBed } from '@angular/core/testing';

import { PresentServiceService } from './present-service.service';

describe('PresentServiceService', () => {
  let service: PresentServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PresentServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
