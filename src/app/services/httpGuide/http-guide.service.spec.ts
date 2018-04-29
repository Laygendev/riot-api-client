import { TestBed, inject } from '@angular/core/testing';

import { HttpClientModule } from '@angular/common/http';

import { DataService } from '@app/services/data/data.service';
import { StaticDataService } from '@app/services/staticData/static-data.service';

import { HttpGuideService } from './http-guide.service';

describe('HttpGuideService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        HttpGuideService,
        DataService,
        StaticDataService
      ],
      imports: [
        HttpClientModule
      ]
    });
  });

  it('should be created', inject([HttpGuideService], (service: HttpGuideService) => {
    expect(service).toBeTruthy();
  }));
});
