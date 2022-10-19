import { TestBed } from '@angular/core/testing';

import { NovoCursoService } from './novo-curso.service';

describe('NovoCursoService', () => {
  let service: NovoCursoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NovoCursoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
