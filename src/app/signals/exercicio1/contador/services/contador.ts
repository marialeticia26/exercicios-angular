import { Service, signal } from '@angular/core';

@Service()
export class ContadorService {

  contador = signal(0);

  incrementar() {
    this.contador.update(valor => valor + 1);
  }

  zerar() {
    this.contador.set(0);
  }

}