import { Service, signal } from '@angular/core';
import { Aluno } from '../aluno';

@Service()
export class Alunos {

    alunos = signal<Aluno[]>([]);

    cadastrarAluno(aluno: Aluno) {
  this.alunos.update(lista => [...lista, aluno]);
}

}
