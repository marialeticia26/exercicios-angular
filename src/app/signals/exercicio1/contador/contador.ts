import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-contador',
  imports: [],
  templateUrl: './contador.html',
  styleUrl: './contador.css'
})
export class Contador {

  contador = signal(0);

  incrementar() {
    this.contador.update(valor => valor + 1);
  }

  zerar() {
    this.contador.set(0);
  }

}