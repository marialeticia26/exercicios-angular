import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercicio4Alunos } from './exercicio4-alunos';

describe('Exercicio4Alunos', () => {
  let component: Exercicio4Alunos;
  let fixture: ComponentFixture<Exercicio4Alunos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Exercicio4Alunos],
    }).compileComponents();

    fixture = TestBed.createComponent(Exercicio4Alunos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
