import { Routes } from '@angular/router';
import { Introducao } from './paginas/introducao/introducao';
import { Signals } from './paginas/signals/signals';
import { Home } from './paginas/home/home';
import { FormularioApi } from './api/formulario-api/formulario-api';
import { FormularioPut } from './api/formulario-put/formulario-put';

export const routes: Routes = [

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
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }

];