import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-exercicio3-login',
  imports: [],
  templateUrl: './exercicio3-login.html',
  styleUrl: './exercicio3-login.css'
})
export class Exercicio3Login {

  usuario = signal('');
  senha = signal('');
  logado = signal(false);

  atualizarUsuario(event: Event) {
    const input = event.target as HTMLInputElement;
    this.usuario.set(input.value);
  }

  atualizarSenha(event: Event) {
    const input = event.target as HTMLInputElement;
    this.senha.set(input.value);
  }

  fazerLogin() {
    if (this.usuario() == 'admin' && this.senha() == '1234') {
      this.logado.set(true);
    } else {
      this.logado.set(false);
    }
  }

}