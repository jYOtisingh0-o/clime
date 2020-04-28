import { TestBed } from '@angular/core/testing';

import { WeathercoordService } from './weathercoord.service';

describe('WeathercoordService', () => {
  let service: WeathercoordService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeathercoordService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
