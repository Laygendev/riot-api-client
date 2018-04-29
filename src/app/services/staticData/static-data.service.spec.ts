import { TestBed, inject } from '@angular/core/testing';

import { HttpClientModule } from '@angular/common/http';

import { StaticDataService } from './static-data.service';

describe('StaticDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        StaticDataService
      ],
      imports: [
        HttpClientModule
      ]
    });
  });

  it('should be created', inject([StaticDataService], (service: StaticDataService) => {
    expect(service).toBeTruthy();
  }));
});
