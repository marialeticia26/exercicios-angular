import { Routes } from '@angular/router';
import { Introducao } from './paginas/introducao/introducao';
import { Signals } from './paginas/signals/signals';

export const routes: Routes = [

  {
  path: 'signals',
  component: Signals
},

  {
    path: 'introducao',
    component: Introducao
  },

  {
    path: '',
    redirectTo: 'introducao',
    pathMatch: 'full'
  }

];