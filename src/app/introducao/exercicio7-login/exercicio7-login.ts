import { Component } from '@angular/core';

@Component({
  selector: 'app-exercicio7-login',
  imports: [],
  templateUrl: './exercicio7-login.html',
  styleUrl: './exercicio7-login.css',
})
export class Exercicio7Login {
  logado = false;

alterarLogin() {
  this.logado = !this.logado;
}
}
