import { TestBed, inject } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { HttpSpectatorService } from './http-spectator.service';

describe('HttpSpectatorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpSpectatorService],
      imports: [
        HttpClientModule
      ]
    });
  });

  it('should be created', inject([HttpSpectatorService], (service: HttpSpectatorService) => {
    expect(service).toBeTruthy();
  }));
});
