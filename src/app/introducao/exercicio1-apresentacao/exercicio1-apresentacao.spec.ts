import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercicio1Apresentacao } from './exercicio1-apresentacao';

describe('Exercicio1Apresentacao', () => {
  let component: Exercicio1Apresentacao;
  let fixture: ComponentFixture<Exercicio1Apresentacao>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Exercicio1Apresentacao],
    }).compileComponents();

    fixture = TestBed.createComponent(Exercicio1Apresentacao);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
