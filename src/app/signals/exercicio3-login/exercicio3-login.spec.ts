import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercicio3Login } from './exercicio3-login';

describe('Exercicio3Login', () => {
  let component: Exercicio3Login;
  let fixture: ComponentFixture<Exercicio3Login>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Exercicio3Login],
    }).compileComponents();

    fixture = TestBed.createComponent(Exercicio3Login);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
