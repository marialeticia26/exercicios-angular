import { Component, inject } from '@angular/core';
import { TarefasService } from './services/tarefas';

@Component({
  selector: 'app-exercicio7-tarefas',
  imports: [],
  templateUrl: './exercicio7-tarefas.html',
  styleUrl: './exercicio7-tarefas.css'
})
export class Exercicio7Tarefas {

  protected readonly tarefasService = inject(TarefasService);

}