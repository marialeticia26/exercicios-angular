import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercicio8Imagem } from './exercicio8-imagem';

describe('Exercicio8Imagem', () => {
  let component: Exercicio8Imagem;
  let fixture: ComponentFixture<Exercicio8Imagem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Exercicio8Imagem],
    }).compileComponents();

    fixture = TestBed.createComponent(Exercicio8Imagem);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
