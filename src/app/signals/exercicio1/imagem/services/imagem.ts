import { Service, signal } from '@angular/core';

@Service()
export class ImagemService {

  urlImagem = signal('');

  atualizarUrl(event: Event) {
    const input = event.target as HTMLInputElement;
    this.urlImagem.set(input.value);
  }

}