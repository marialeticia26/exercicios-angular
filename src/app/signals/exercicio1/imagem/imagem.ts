import { Component, inject } from '@angular/core';
import { ImagemService } from './services/imagem';

@Component({
  selector: 'app-imagem',
  imports: [],
  templateUrl: './imagem.html',
  styleUrl: './imagem.css'
})
export class Imagem {
  
  protected readonly imagemService = inject(ImagemService);

}