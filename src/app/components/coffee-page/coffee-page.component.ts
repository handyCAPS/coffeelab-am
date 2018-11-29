import { hasOwn } from './../../helpers';
import { CoffeeFormComponent } from './../coffee-form/coffee-form.component';
import { CoffeeService } from './../../services/coffee.service';
import { Coffee } from '../../interfaces/coffee.interface';
import { Component, OnInit } from '@angular/core';

import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AngularFireDatabase } from '@angular/fire/database';

import { Observable } from 'rxjs';
import { DatabaseReference } from '@angular/fire/database/interfaces';

@Component({
  selector: 'app-coffee-page',
  templateUrl: './coffee-page.component.html',
  styleUrls: ['./coffee-page.component.scss']
})
export class CoffeePageComponent implements OnInit {
  coffees: Coffee[];

  stuff = [];

  coffeeRef: DatabaseReference;

  constructor(
    private coffeeService: CoffeeService,
    public dialog: MatDialog,
    private db: AngularFireDatabase
  ) {
    // this.coffees = this.coffeeService.getCoffees();
    this.coffeeRef = this.db.database.ref('coffee');
    this.coffeeRef.on('value', snapshot => {
      const value = snapshot.val();
      const tempArray = [];
      for (const item in value) {
        if (hasOwn(value, item)) {
          const newCoffee = { ...value[item], id: item };
          tempArray.push(newCoffee);
        }
      }
      this.coffees = this.getOrderedCoffees(tempArray);
    });
  }

  ngOnInit() {}

  addCoffee(newCoffee: Coffee) {
    this.db.database.ref('coffee').push(newCoffee);
  }

  removeCoffee(coffeeId: string): void {
    this.db.database.ref('coffee/' + coffeeId).remove();
  }

  updateCoffeeScore(coffeeId: string, updateTo: 'up' | 'down') {
    let currentRating;
    this.coffees.some((coffee: Coffee) => {
      if (coffee.id === coffeeId) {
        currentRating = coffee.rating;
        return true;
      }
      return false;
    });
    const newRating =
      updateTo === 'up'
        ? Math.min(currentRating + 1, 5)
        : Math.max(currentRating - 1, 0);
    this.coffees = this.coffeeService.editCoffee(coffeeId, 'rating', newRating);
  }

  openCoffeeForm() {
    const dialogRef = this.dialog.open(CoffeeFormComponent, {
      width: '30rem'
    });
  }

  getOrderedCoffees(coffees: Coffee[]): Coffee[] {
    return coffees.sort(
      (coffeeA: Coffee, coffeeB: Coffee) => coffeeA.order - coffeeB.order
    );
  }
}
