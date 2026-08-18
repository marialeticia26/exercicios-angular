import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercicio5Cadastro } from './exercicio5-cadastro';

describe('Exercicio5Cadastro', () => {
  let component: Exercicio5Cadastro;
  let fixture: ComponentFixture<Exercicio5Cadastro>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Exercicio5Cadastro],
    }).compileComponents();

    fixture = TestBed.createComponent(Exercicio5Cadastro);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
