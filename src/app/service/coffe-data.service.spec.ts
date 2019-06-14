import { TestBed } from '@angular/core/testing';

import { CoffeDataService } from './coffe-data.service';

describe('CoffeDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CoffeDataService = TestBed.get(CoffeDataService);
    expect(service).toBeTruthy();
  });
});
