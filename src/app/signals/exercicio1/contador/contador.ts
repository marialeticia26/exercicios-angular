import { Component, inject } from '@angular/core';
import { ContadorService } from './services/contador';

@Component({
  selector: 'app-contador',
  imports: [],
  templateUrl: './contador.html',
  styleUrl: './contador.css'
})
export class Contador {

protected readonly contadorService = inject(ContadorService);

}