import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercicio3Mercado } from './exercicio3-mercado';

describe('Exercicio3Mercado', () => {
  let component: Exercicio3Mercado;
  let fixture: ComponentFixture<Exercicio3Mercado>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Exercicio3Mercado],
    }).compileComponents();

    fixture = TestBed.createComponent(Exercicio3Mercado);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
