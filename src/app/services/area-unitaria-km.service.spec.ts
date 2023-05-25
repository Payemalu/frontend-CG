import { TestBed } from '@angular/core/testing';

import { AreaUnitariaKmService } from './area-unitaria-km.service';

describe('AreaUnitariaKmService', () => {
  let service: AreaUnitariaKmService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AreaUnitariaKmService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
