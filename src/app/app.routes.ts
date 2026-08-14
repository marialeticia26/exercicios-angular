import { Routes } from '@angular/router';
import { Introducao } from './paginas/introducao/introducao';
import { Signals } from './paginas/signals/signals';
import { Home } from './paginas/home/home';

export const routes: Routes = [

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
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }

];