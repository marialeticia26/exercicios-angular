import { Component } from '@angular/core';

@Component({
  selector: 'app-exercicio6-contador',
  imports: [],
  templateUrl: './exercicio6-contador.html',
  styleUrl: './exercicio6-contador.css',
})
export class Exercicio6Contador {
  contador = 0;

incrementar() {
  this.contador++;
}

zerar() {
  this.contador = 0;
}
}
