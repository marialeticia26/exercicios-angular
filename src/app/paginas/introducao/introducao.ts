import { Component } from '@angular/core';
import { Exercicio1Apresentacao } from '../../introducao/exercicio1-apresentacao/exercicio1-apresentacao';
import { Exercicio2Pessoa } from '../../introducao/exercicio2-pessoa/exercicio2-pessoa';
import { Exercicio3Mercado } from '../../introducao/exercicio3-mercado/exercicio3-mercado';
import { Exercicio6Contador } from '../../introducao/exercicio6-contador/exercicio6-contador';
import { Exercicio7Login } from '../../introducao/exercicio7-login/exercicio7-login';
import { Exercicio8Imagem } from '../../introducao/exercicio8-imagem/exercicio8-imagem';

@Component({
  selector: 'app-introducao',
  imports: [
    Exercicio1Apresentacao,
    Exercicio2Pessoa,
    Exercicio3Mercado, Exercicio6Contador,
    Exercicio7Login, Exercicio8Imagem
  ],
  templateUrl: './introducao.html',
  styleUrl: './introducao.css'
})
export class Introducao {

}