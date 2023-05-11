import { TestBed } from '@angular/core/testing';

import { DuctoService } from './ducto.service';

describe('DuctoService', () => {
  let service: DuctoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DuctoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
