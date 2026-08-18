import { Service, signal } from '@angular/core';
import { Usuario } from '../usuario';

@Service()
export class UsuariosService {

  usuarios = signal<Usuario[]>([
    {
      id: 1,
      nome: 'Ana',
      idade: 20
    },
    {
      id: 2,
      nome: 'Carlos',
      idade: 25
    },
    {
      id: 3,
      nome: 'Maria',
      idade: 30
    }
  ]);

}