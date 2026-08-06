import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercicio2Pessoa } from './exercicio2-pessoa';

describe('Exercicio2Pessoa', () => {
  let component: Exercicio2Pessoa;
  let fixture: ComponentFixture<Exercicio2Pessoa>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Exercicio2Pessoa],
    }).compileComponents();

    fixture = TestBed.createComponent(Exercicio2Pessoa);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
