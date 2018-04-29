import { TestBed, inject } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { HttpUserService } from './http-user.service';

describe('HttpUserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpUserService],
      imports: [
        HttpClientModule
      ]
    });
  });

  it('should be created', inject([HttpUserService], (service: HttpUserService) => {
    expect(service).toBeTruthy();
  }));
});
