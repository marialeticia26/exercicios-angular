import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercicio2ListaUsuarios } from './exercicio2-lista-usuarios';

describe('Exercicio2ListaUsuarios', () => {
  let component: Exercicio2ListaUsuarios;
  let fixture: ComponentFixture<Exercicio2ListaUsuarios>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Exercicio2ListaUsuarios],
    }).compileComponents();

    fixture = TestBed.createComponent(Exercicio2ListaUsuarios);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
