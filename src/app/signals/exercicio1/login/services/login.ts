import { Service, signal } from '@angular/core';

@Service()
export class LoginService {

    logado = signal(false);

  alterarLogin() {
    this.logado.update(valor => !valor);
  }


}
