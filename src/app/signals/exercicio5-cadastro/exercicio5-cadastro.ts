import { Component, inject, signal } from '@angular/core';
import { form, FormField, required, email } from '@angular/forms/signals';
import { UsuarioCadastro } from './usuario-cadastro';
import { UsuariosService } from './services/usuarios';

@Component({
  selector: 'app-exercicio5-cadastro',
  imports: [FormField],
  templateUrl: './exercicio5-cadastro.html',
  styleUrl: './exercicio5-cadastro.css'
})
export class Exercicio5Cadastro {

  protected readonly usuariosService = inject(UsuariosService);

  protected usuarioModel = signal<UsuarioCadastro>({
    nomeCompleto: '',
    email: '',
    senha: '',
    confirmarSenha: '',
    dataNascimento: ''
  });

  protected usuarioForm = form(this.usuarioModel, (s) => {

    required(s.nomeCompleto, {
      message: 'Nome completo é obrigatório'
    });

    required(s.email, {
      message: 'E-mail é obrigatório'
    });

    email(s.email, {
      message: 'E-mail inválido'
    });

    required(s.senha, {
      message: 'Senha é obrigatória'
    });

    required(s.confirmarSenha, {
      message: 'Confirmação de senha é obrigatória'
    });

    required(s.dataNascimento, {
      message: 'Data de nascimento é obrigatória'
    });

  });


  protected erroSenha = signal('');

  protected cadastrarUsuario(event: SubmitEvent) {

    event.preventDefault();

    if (this.usuarioForm().invalid()) {
      return;
    }

    const usuario = this.usuarioModel();

    if (usuario.senha !== usuario.confirmarSenha) {
      this.erroSenha.set('As senhas não coincidem');
      return;
    }

    this.erroSenha.set('');

    this.usuariosService.cadastrarUsuario(usuario);

    this.usuarioModel.set({
      nomeCompleto: '',
      email: '',
      senha: '',
      confirmarSenha: '',
      dataNascimento: ''
    });

  }

}