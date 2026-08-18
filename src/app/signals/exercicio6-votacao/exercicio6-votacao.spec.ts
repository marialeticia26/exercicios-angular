import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercicio6Votacao } from './exercicio6-votacao';

describe('Exercicio6Votacao', () => {
  let component: Exercicio6Votacao;
  let fixture: ComponentFixture<Exercicio6Votacao>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Exercicio6Votacao],
    }).compileComponents();

    fixture = TestBed.createComponent(Exercicio6Votacao);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
