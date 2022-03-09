import { TestBed } from '@angular/core/testing';

import { FuncionesComunesService } from './funciones-comunes.service';

describe('FuncionesComunesService', () => {
  let service: FuncionesComunesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FuncionesComunesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
