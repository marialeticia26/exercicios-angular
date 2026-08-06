import { Component } from '@angular/core';
import { Pessoa } from './pessoa';

@Component({
  selector: 'app-exercicio2-pessoa',
  imports: [],
  templateUrl: './exercicio2-pessoa.html',
  styleUrl: './exercicio2-pessoa.css',
})
export class Exercicio2Pessoa {
  pessoa1: Pessoa = {
    nome: "Maria",
    sexo: "Feminino",
    dataNascimento: "26/07/2006",
    estadoCivil: "Solteira"
  };

  pessoa2: Pessoa = {
    nome: "João",
    sexo: "Masculino",
    dataNascimento: "20/08/1995",
    estadoCivil: "Casado"
  }
}
