import { Component } from '@angular/core';
import { FormularioApi } from '../../api/formulario-api/formulario-api';
import { FormularioPut } from '../../api/formulario-put/formulario-put';
import { FormularioDelete } from '../../api/formulario-delete/formulario-delete';

@Component({
  selector: 'app-consumo-api',
  imports: [
    FormularioApi,
    FormularioPut,
    FormularioDelete
  ],
  templateUrl: './consumo-api.html',
  styleUrl: './consumo-api.css'
})
export class ConsumoApi {

}