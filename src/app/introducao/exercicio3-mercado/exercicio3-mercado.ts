import { Component } from '@angular/core';
import { Mercado } from './mercado';

@Component({
  selector: 'app-exercicio3-mercado',
  imports: [],
  templateUrl: './exercicio3-mercado.html',
  styleUrl: './exercicio3-mercado.css',
})
export class Exercicio3Mercado {
  unidadeDeBlumenau: Mercado = {
    nome: "Mercado Blumenau",
    macasVendidasPorAno: 1000,
    precoMaca: 5.50,
    laranjasVendidasPorAno: 1500,
    precoLaranja: 4.50
  };
  
  unidadeDeJoinville: Mercado = {
    nome: "Mercado Joinville",
    macasVendidasPorAno: 1200,
    precoMaca: 5.75,
    laranjasVendidasPorAno: 1800,
    precoLaranja: 4.75
  };
  
  unidadeDeFlorianopolis: Mercado = {
    nome: "Mercado Florianópolis",
    macasVendidasPorAno: 1400,
    precoMaca: 6.00,
    laranjasVendidasPorAno: 2000,
    precoLaranja: 5.00
  };
}
