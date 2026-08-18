import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercicio7Tarefas } from './exercicio7-tarefas';

describe('Exercicio7Tarefas', () => {
  let component: Exercicio7Tarefas;
  let fixture: ComponentFixture<Exercicio7Tarefas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Exercicio7Tarefas],
    }).compileComponents();

    fixture = TestBed.createComponent(Exercicio7Tarefas);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
