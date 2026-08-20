import { Service, signal } from '@angular/core';
import { Candidato } from '../candidato';

@Service()
export class VotacaoService {

  candidatos = signal<Candidato[]>([
    {
      id: 1,
      nome: 'Ana',
      foto: 'https://picsum.photos/200?random=1',
      votos: 0
    },
    {
      id: 2,
      nome: 'Carlos',
      foto: 'https://picsum.photos/200?random=2',
      votos: 0
    },
    {
      id: 3,
      nome: 'Maria',
      foto: 'https://picsum.photos/200?random=3',
      votos: 0
    }
  ]);

  votar(id: number) {
    this.candidatos.update(lista =>
      lista.map(candidato =>
        candidato.id === id
          ? { ...candidato, votos: candidato.votos + 1 }
          : candidato
      )
    );
  }

  ordenarLista() {
    this.candidatos.update(lista =>
      [...lista].sort((a, b) => b.votos - a.votos)
    );
  }

}