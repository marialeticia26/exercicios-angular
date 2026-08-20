import { TestBed } from '@angular/core/testing';

import { Votacao } from './votacao';

describe('Votacao', () => {
  let service: Votacao;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Votacao);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
