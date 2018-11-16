import { routes } from './app.routes';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'CoffeeLab';
  paths;

  constructor() {
    this.buildRoutes();
  }

  buildRoutes() {
    this.paths = routes
      .map(route => ({
        path: route.path,
        name: route.path[0].toUpperCase() + route.path.slice(1)
      }))
      .filter(route => !/\/:/.test(route.path));
  }
}
