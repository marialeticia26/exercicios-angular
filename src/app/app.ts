import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Exercicio1Apresentacao } from './introducao/exercicio1-apresentacao/exercicio1-apresentacao';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Exercicio1Apresentacao], 
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('exercicios-angular');
}
