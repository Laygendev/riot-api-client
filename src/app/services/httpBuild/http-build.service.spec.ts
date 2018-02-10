import { TestBed, inject } from '@angular/core/testing';

import { HttpBuildService } from './http-build.service';

describe('HttpBuildService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpBuildService]
    });
  });

  it('should be created', inject([HttpBuildService], (service: HttpBuildService) => {
    expect(service).toBeTruthy();
  }));
});
