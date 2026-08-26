import { Routes } from '@angular/router';
import { Introducao } from './paginas/introducao/introducao';
import { Signals } from './paginas/signals/signals';
import { Home } from './paginas/home/home';
import { FormularioApi } from './api/formulario-api/formulario-api';
import { FormularioPut } from './api/formulario-put/formulario-put';
import { FormularioDelete } from './api/formulario-delete/formulario-delete';
import { ConsumoApi } from './paginas/consumo-api/consumo-api';

export const routes: Routes = [

  {
    path: 'consumo-api',
    component: ConsumoApi
  },

  {
    path: 'formulario-api',
    component: FormularioApi
  },
  {
    path: 'home',
    component: Home
  },

  {
    path: 'introducao',
    component: Introducao
  },

  {
    path: 'signals',
    component: Signals
  },

  {
    path: 'formulario-put',
    component: FormularioPut
  },

  {
    path: 'formulario-delete',
    component: FormularioDelete
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }

];