import { Service, signal } from '@angular/core';
import { UsuarioCadastro } from '../usuario-cadastro';

@Service()
export class UsuariosService {

  usuarios = signal<UsuarioCadastro[]>([]);

  cadastrarUsuario(usuario: UsuarioCadastro) {
    this.usuarios.update(lista => [...lista, usuario]);
  }

}