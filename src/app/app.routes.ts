import { Routes } from '@angular/router';
import {HomeComponent} from './home-component/home-component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'map',
    pathMatch: 'full'
  },
  {
    path: 'map',
    component: HomeComponent,
  }
];
