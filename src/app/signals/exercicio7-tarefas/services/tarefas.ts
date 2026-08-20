import { Service, signal } from '@angular/core';
import { Tarefa } from '../tarefa';

@Service()
export class TarefasService {

  nomeTarefa = signal('');

  tarefas = signal<Tarefa[]>([]);

  tarefaEditandoId = signal<number | null>(null);

  atualizarNome(event: Event) {
    const input = event.target as HTMLInputElement;
    this.nomeTarefa.set(input.value);
  }

  adicionarTarefa() {

    if (this.nomeTarefa().trim() === '') {
      return;
    }

    const novaTarefa: Tarefa = {
      id: this.tarefas().length + 1,
      nome: this.nomeTarefa(),
      concluida: false
    };

    this.tarefas.update(lista => [...lista, novaTarefa]);

    this.nomeTarefa.set('');
  }

  alterarConclusao(id: number) {

    this.tarefas.update(lista =>
      lista.map(tarefa =>
        tarefa.id === id
          ? { ...tarefa, concluida: !tarefa.concluida }
          : tarefa
      )
    );

  }

  removerTarefa(id: number) {

    this.tarefas.update(lista =>
      lista.filter(tarefa => tarefa.id !== id)
    );

  }

  editarTarefa(id: number) {

    const tarefa = this.tarefas().find(tarefa => tarefa.id === id);

    if (tarefa) {
      this.nomeTarefa.set(tarefa.nome);
      this.tarefaEditandoId.set(id);
    }

  }

  cancelarEdicao() {

    this.nomeTarefa.set('');
    this.tarefaEditandoId.set(null);

  }

  salvarEdicao() {

    const id = this.tarefaEditandoId();

    if (id === null || this.nomeTarefa().trim() === '') {
      return;
    }

    this.tarefas.update(lista =>
      lista.map(tarefa =>
        tarefa.id === id
          ? { ...tarefa, nome: this.nomeTarefa() }
          : tarefa
      )
    );

    this.nomeTarefa.set('');
    this.tarefaEditandoId.set(null);

  }

}