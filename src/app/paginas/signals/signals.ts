import { Component } from '@angular/core';
import { Contador } from '../../signals/exercicio1/contador/contador';
import { Login } from '../../signals/exercicio1/login/login';
import { Imagem } from '../../signals/exercicio1/imagem/imagem';
import { Exercicio2ListaUsuarios } from '../../signals/exercicio2-lista-usuarios/exercicio2-lista-usuarios';
import { Exercicio3Login } from '../../signals/exercicio3-login/exercicio3-login';

@Component({
  selector: 'app-signals',
  imports: [
    Contador,
    Login,
    Imagem,
    Exercicio2ListaUsuarios,
    Exercicio3Login
  ],
  templateUrl: './signals.html',
  styleUrl: './signals.css'
})
export class Signals {

}