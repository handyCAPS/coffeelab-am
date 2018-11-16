import { CoffeeService } from './../../services/coffee.service';
import { Coffee } from '../../interfaces/coffee.interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coffee-page',
  templateUrl: './coffee-page.component.html',
  styleUrls: ['./coffee-page.component.scss']
})
export class CoffeePageComponent implements OnInit {
  coffees: Coffee[];

  constructor(private coffeeService: CoffeeService) {
    this.coffees = this.coffeeService.getCoffees();
  }

  ngOnInit() {}
}
