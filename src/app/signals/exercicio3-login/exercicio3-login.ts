import { Component, inject } from '@angular/core';
import { LoginService } from './services/login';

@Component({
  selector: 'app-exercicio3-login',
  imports: [],
  templateUrl: './exercicio3-login.html',
  styleUrl: './exercicio3-login.css'
})
export class Exercicio3Login {
protected readonly loginService = inject(LoginService);
}