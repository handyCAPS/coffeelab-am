import { Coffee } from './../interfaces/coffee.interface';
import { Pot } from './../interfaces/pot.interface';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PotService {
  pots: Pot[];

  constructor() {}

  addCoffeeToPot(coffee: Coffee, potId: string): Coffee {
    let whatPot: Pot;
    this.pots = this.pots.map((pot: Pot) => {
      if (pot.id === potId) {
        whatPot = pot;
        coffee.pot = pot;
        return { ...pot, currentCoffee: coffee };
      }
      return { ...pot };
    });
    return { ...coffee, pot: whatPot };
  }
}
