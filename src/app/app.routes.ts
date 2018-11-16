import { CoffeeDetailComponent } from './coffee-detail/coffee-detail.component';
import { CoffeePageComponent } from './components/coffee-page/coffee-page.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'coffee',
    component: CoffeePageComponent
  },
  {
    path: 'coffee/:id',
    component: CoffeeDetailComponent
  }
];
