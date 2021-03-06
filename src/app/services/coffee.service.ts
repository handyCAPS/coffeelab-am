import { Pot } from './../interfaces/pot.interface';
import { Observable, from } from 'rxjs';
import { hasOwn } from './../helpers';
import { DatabaseReference } from '@angular/fire/database/interfaces';
import { AngularFireDatabase } from '@angular/fire/database';
import { Coffee } from './../interfaces/coffee.interface';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoffeeService {
  private coffees: Coffee[] = [];
  private coffeeRef: DatabaseReference;
  private maxRating = 5;

  constructor(private db: AngularFireDatabase) {
    this.coffeeRef = this.db.database.ref('coffee');
    this.coffeeRef.once(
      'value',
      snapshot => (this.coffees = this.wrangleCoffees(snapshot.val()))
    );
  }

  public listenForCoffee(): Observable<Coffee[]> {
    return Observable.create(observer => {
      this.coffeeRef.on('value', snapshot => {
        const coffees = snapshot.val();
        this.coffees = this.wrangleCoffees(coffees);
        observer.next(this.coffees);
      });
    });
  }

  private wrangleCoffees(coffeeObject): Coffee[] {
    const coffeeArray = [];
    for (const coffeeKey in coffeeObject) {
      if (hasOwn(coffeeObject, coffeeKey)) {
        const newCoffee: Coffee = {
          ...coffeeObject[coffeeKey],
          id: coffeeKey
        };
        coffeeArray.push(newCoffee);
      }
    }
    return coffeeArray;
  }

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
      prev.push({ ...curr });
      return prev;
    }, []);
    this.coffees = newState;
    return newState;
  }

  public getNewCoffeeRating(oldRating: number, newRating: number): number {
    if (oldRating === newRating) { return newRating; }
    if (newRating > oldRating) {
      return Math.min(newRating, this.maxRating);
    }
    return Math.max(0, newRating);
  }

  public updateCoffeeScore(coffee: Coffee): Observable<boolean> {
    return from(this.coffeeRef.child(coffee.id).update(coffee));
  }

  public addPot(pot: Pot): void {
    this.db.database.ref('pot').push(pot);
  }
}
