import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercicio7Login } from './exercicio7-login';

describe('Exercicio7Login', () => {
  let component: Exercicio7Login;
  let fixture: ComponentFixture<Exercicio7Login>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Exercicio7Login],
    }).compileComponents();

    fixture = TestBed.createComponent(Exercicio7Login);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
