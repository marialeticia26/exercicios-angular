import { Component } from '@angular/core';
import { Exercicio1Apresentacao } from '../../introducao/exercicio1-apresentacao/exercicio1-apresentacao';
import { Exercicio2Pessoa } from '../../introducao/exercicio2-pessoa/exercicio2-pessoa';
import { Exercicio3Mercado } from '../../introducao/exercicio3-mercado/exercicio3-mercado';

@Component({
  selector: 'app-introducao',
  imports: [
    Exercicio1Apresentacao,
    Exercicio2Pessoa,
    Exercicio3Mercado
  ],
  templateUrl: './introducao.html',
  styleUrl: './introducao.css'
})
export class Introducao {

}