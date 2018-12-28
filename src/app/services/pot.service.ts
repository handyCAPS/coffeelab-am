import { AngularFireDatabase } from '@angular/fire/database';
import { Coffee } from './../interfaces/coffee.interface';
import { Pot } from './../interfaces/pot.interface';
import { Injectable } from '@angular/core';
import { ReplaySubject, Observable } from 'rxjs';
import { DatabaseReference } from '@angular/fire/database/interfaces';

function hasOwn(object: object, key: string): boolean {
  return Object.prototype.hasOwnProperty.call(object, key);
}

@Injectable({
  providedIn: 'root'
})
export class PotService {
  pots: Pot[] = [];

  potSubject: ReplaySubject<Pot[]>;
  potObservable: Observable<Pot[]>;

  private potPath = 'pots';
  private potRef: DatabaseReference;

  constructor(private db: AngularFireDatabase) {
    this.potSubject = new ReplaySubject<Pot[]>(1);
    this.potObservable = this.potSubject.asObservable();
    this.potRef = this.db.database.ref(this.potPath);
    this.potRef.once('value', snapshot => {
      this.pots = this.formatPots(snapshot.val());
    });
  }

  listenForPots(): Observable<Pot[]> {
    this.potSubject.next(this.pots);
    this.potRef.on('value', snapshot => {
      const potsObject = snapshot.val();
      const potArray = this.formatPots(potsObject);
      this.pots = potArray;
      this.potSubject.next(potArray);
    });
    return this.potObservable;
  }

  formatPots(potObject): Pot[] {
    const potArray = [];
    for (const potKey in potObject) {
      if (hasOwn(potObject, potKey)) {
        potArray.push({
          id: potKey,
          ...potObject[potKey]
        });
      }
    }
    return potArray;
  }

  addPotToDb(newPot: Pot): Observable<boolean> {
    const newNumber = this.pots.length + 1;
    const numberedPot = { ...newPot, number: newNumber };
    this.pots = [...this.pots, numberedPot];
    return Observable.create(observer => {
      this.potRef.push(numberedPot, error => {
        observer.next(!error);
      });
    });
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
