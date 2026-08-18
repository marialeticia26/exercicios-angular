import { Component, inject } from '@angular/core';
import { UsuariosService } from './services/usuarios';

@Component({
  selector: 'app-exercicio2-lista-usuarios',
  imports: [],
  templateUrl: './exercicio2-lista-usuarios.html',
  styleUrl: './exercicio2-lista-usuarios.css'
})
export class Exercicio2ListaUsuarios {
  protected readonly usuariosService = inject(UsuariosService);
}