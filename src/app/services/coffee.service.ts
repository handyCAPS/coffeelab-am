import { Coffee } from './../interfaces/coffee.interface';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoffeeService {
  private coffees: Coffee[] = [
    {
      id: 'none',
      name: 'Baristas Choice',
      store: 'Kaldi Gouda',
      rating: 4,
      dateAdded: new Date().toISOString()
    },
    {
      id: 'none1',
      name: 'Corazon Espresso Bio',
      store: 'Simon Levelt',
      rating: 3,
      dateAdded: new Date().toISOString()
    }
  ];

  constructor() {}

  public getCoffees(): Coffee[] {
    return this.coffees;
  }

  getCoffeeById(id: string): Coffee {
    return this.coffees.reduce((emptyCoffee, coffeeItem) => {
      if (coffeeItem.id === id) {
        return { ...coffeeItem };
      }
      return emptyCoffee;
    }, new Coffee());
  }

  addCoffee(newCoffee: Coffee): number {
    return this.coffees.push(newCoffee);
  }

  editCoffee(coffeeId: string, key: string, newValue: any): Coffee[] {
    const newState = this.coffees.reduce((prev: Coffee[], curr: Coffee) => {
      if (curr.id !== coffeeId) {
        prev.push(curr);
        return prev;
      }
      curr[key] = newValue;
      prev.push({...curr});
      return prev;
    }, []);
    this.coffees = newState;
    return newState;
  }
}
