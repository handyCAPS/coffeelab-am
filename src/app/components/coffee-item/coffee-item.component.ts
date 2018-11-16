import { Coffee } from './../../interfaces/coffee.interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coffee-item',
  templateUrl: './coffee-item.component.html',
  styleUrls: ['./coffee-item.component.scss']
})
export class CoffeeItemComponent implements OnInit {
  coffees: Coffee[];

  constructor() {
    this.coffees = [
      {
        id: 'none',
        name: 'Baristas Choice',
        store: 'Kaldi Gouda',
        rating: 4,
        dateAdded: new Date().toISOString()
      },
      {
        id: 'none2',
        name: 'Corazon Espresso Bio',
        store: 'Simon Levelt',
        rating: 3,
        dateAdded: new Date().toISOString()
      }
    ];
  }

  ngOnInit() {}
}
