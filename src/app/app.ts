import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Exercicio1Apresentacao } from './introducao/exercicio1-apresentacao/exercicio1-apresentacao';
import { Exercicio2Pessoa } from './introducao/exercicio2-pessoa/exercicio2-pessoa';
import { Exercicio3Mercado } from './introducao/exercicio3-mercado/exercicio3-mercado';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Exercicio1Apresentacao, Exercicio2Pessoa, Exercicio3Mercado], 
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('exercicios-angular');
}
