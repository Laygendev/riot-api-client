import { TestBed, inject } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { HttpSummonerService } from './http-summoner.service';

describe('HttpSummonerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpSummonerService],
      imports: [
        HttpClientModule
      ]
    });
  });

  it('should be created', inject([HttpSummonerService], (service: HttpSummonerService) => {
    expect(service).toBeTruthy();
  }));
});
