import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercicio6Contador } from './exercicio6-contador';

describe('Exercicio6Contador', () => {
  let component: Exercicio6Contador;
  let fixture: ComponentFixture<Exercicio6Contador>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Exercicio6Contador],
    }).compileComponents();

    fixture = TestBed.createComponent(Exercicio6Contador);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
