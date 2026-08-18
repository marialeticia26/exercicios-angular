import { TestBed } from '@angular/core/testing';

import { Imagem } from './imagem';

describe('Imagem', () => {
  let service: Imagem;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Imagem);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
