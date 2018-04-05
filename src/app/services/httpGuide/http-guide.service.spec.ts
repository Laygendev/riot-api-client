import { TestBed, inject } from '@angular/core/testing';

import { HttpGuideService } from './http-guide.service';

describe('HttpGuideService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpGuideService]
    });
  });

  it('should be created', inject([HttpGuideService], (service: HttpGuideService) => {
    expect(service).toBeTruthy();
  }));
});
