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

  addCoffee() {
    console.log(this.coffeeService.addCoffee({
      id: 'three',
      name: 'Huile Supremo',
      store: 'Simon Levelt',
      rating: 2,
      dateAdded: new Date().toISOString()
    }));
  }

  updateCoffeeScore(coffeeId: string) {
    let currentRating;
    this.coffees.some((coffee: Coffee) => {
      if (coffee.id === coffeeId) {
        currentRating = coffee.rating;
        return true;
      }
      return false;
    });
    const newRating = currentRating + 1;
    this.coffees = this.coffeeService.editCoffee(coffeeId, 'rating', newRating);
  }
}
