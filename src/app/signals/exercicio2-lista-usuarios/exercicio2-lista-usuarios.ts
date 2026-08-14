import { Component, signal } from '@angular/core';
import { Usuario } from './usuario';

@Component({
  selector: 'app-exercicio2-lista-usuarios',
  imports: [],
  templateUrl: './exercicio2-lista-usuarios.html',
  styleUrl: './exercicio2-lista-usuarios.css'
})
export class Exercicio2ListaUsuarios {

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