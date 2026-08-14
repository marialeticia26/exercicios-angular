import { Component, signal } from '@angular/core';
import { form, FormField, required, min, max } from '@angular/forms/signals';
import { Aluno } from './aluno';

@Component({
  selector: 'app-exercicio4-alunos',
  imports: [FormField],
  templateUrl: './exercicio4-alunos.html',
  styleUrl: './exercicio4-alunos.css',
})
export class Exercicio4Alunos {

  protected alunoModel = signal<Aluno>({
    nome: '',
    media: null
  });

  protected alunoForm = form(this.alunoModel, (s) => {

    required(s.nome, {
      message: 'Nome é obrigatório'
    });

    required(s.media, {
      message: 'Média é obrigatória'
    });

    min(s.media, 0, {
      message: 'A média mínima é 0'
    });

    max(s.media, 10, {
      message: 'A média máxima é 10'
    });

  });

  protected alunos = signal<Aluno[]>([]);

  protected cadastrarAluno(event: SubmitEvent) {

  event.preventDefault();

  const aluno = this.alunoModel();

  this.alunos.update(lista => [...lista, aluno]);

  this.alunoModel.set({
    nome: '',
    media: null
  });

}

}

