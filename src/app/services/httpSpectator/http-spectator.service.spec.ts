import { TestBed, inject } from '@angular/core/testing';

import { HttpSpectatorService } from './http-spectator.service';

describe('HttpSpectatorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpSpectatorService]
    });
  });

  it('should be created', inject([HttpSpectatorService], (service: HttpSpectatorService) => {
    expect(service).toBeTruthy();
  }));
});
