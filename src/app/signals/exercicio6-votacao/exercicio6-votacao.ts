import { Component, inject } from '@angular/core';
import { VotacaoService } from './services/votacao';

@Component({
  selector: 'app-exercicio6-votacao',
  imports: [],
  templateUrl: './exercicio6-votacao.html',
  styleUrl: './exercicio6-votacao.css'
})
export class Exercicio6Votacao {

  protected readonly votacaoService = inject(VotacaoService);

}