import { AngularFireDatabase } from '@angular/fire/database';
import { Coffee } from './../interfaces/coffee.interface';
import { Pot } from './../interfaces/pot.interface';
import { Injectable } from '@angular/core';
import { Observer, ReplaySubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PotService {
  pots: Pot[];

  potSubject: ReplaySubject<Pot[]>;
  potObservable: Observable<Pot[]>;

  private potRef = 'pots';

  constructor(private db: AngularFireDatabase) {
    this.potSubject = new ReplaySubject<Pot[]>();
    this.potObservable = this.potSubject.asObservable();
  }

  listenForPots(): Observable<Pot[]> {
    this.db.database.ref(this.potRef).on('value', snapshot => {
      const newVal = snapshot.val();
      this.pots = newVal;
      this.potSubject.next(newVal);
    });
    return this.potObservable;
  }

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
