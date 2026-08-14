import { Component } from '@angular/core';
import { Contador } from '../../signals/exercicio1/contador/contador';
import { Login } from '../../signals/exercicio1/login/login';
import { Imagem } from '../../signals/exercicio1/imagem/imagem';

@Component({
  selector: 'app-signals',
  imports: [
    Contador,
    Login,
    Imagem
  ],
  templateUrl: './signals.html',
  styleUrl: './signals.css'
})
export class Signals {

}