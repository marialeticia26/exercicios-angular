import { Component, inject } from '@angular/core';
import { LoginService } from './services/login';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  
  protected readonly loginService = inject(LoginService);
}