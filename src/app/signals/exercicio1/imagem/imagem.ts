import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-imagem',
  imports: [],
  templateUrl: './imagem.html',
  styleUrl: './imagem.css'
})
export class Imagem {

  urlImagem = signal('');

  atualizarUrl(event: Event) {
  const input = event.target as HTMLInputElement;
  this.urlImagem.set(input.value);
}

}