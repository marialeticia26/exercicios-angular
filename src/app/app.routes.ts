import { Routes } from '@angular/router';
import { Introducao } from './paginas/introducao/introducao';

export const routes: Routes = [

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