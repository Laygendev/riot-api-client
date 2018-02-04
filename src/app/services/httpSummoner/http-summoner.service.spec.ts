import { TestBed, inject } from '@angular/core/testing';

import { HttpSummonerService } from './http-summoner.service';

describe('HttpSummonerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpSummonerService]
    });
  });

  it('should be created', inject([HttpSummonerService], (service: HttpSummonerService) => {
    expect(service).toBeTruthy();
  }));
});
