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

  coffeeSortingPrefix = 'orderCoffeeBy';

  coffeeSorting: 'Rating' | 'Date' = 'Rating';

  constructor(
    private coffeeService: CoffeeService,
    public dialog: MatDialog,
    private db: AngularFireDatabase
  ) {
    this.coffees = this.coffeeService.getCoffees();
    this.coffeeRef = this.db.database.ref('coffee');
    this.coffeeService
      .listenForCoffee()
      .subscribe(
        value =>
          (this.coffees = this.getOrderedCoffees(
            value,
            this[this.coffeeSortingPrefix + this.coffeeSorting]
          ))
      );
  }

  ngOnInit() {}

  addCoffee(newCoffee: Coffee) {
    this.db.database.ref('coffee').push(newCoffee);
  }

  removeCoffee(coffeeId: string): void {
    this.db.database.ref('coffee/' + coffeeId).remove();
  }

  updateCoffeeScore(
    coffeeId: string,
    currentScore: number,
    down: boolean
  ): void {
    this.coffeeService.updateCoffeeScore(coffeeId, currentScore, down);
  }

  openCoffeeForm() {
    const dialogRef = this.dialog.open(CoffeeFormComponent, {
      width: '30rem'
    });
  }

  sortCoffee(by: 'Rating' | 'Date'): void {
    this.coffeeSorting = by;
    this.coffees = this.getOrderedCoffees(
      this.coffees,
      this[this.coffeeSortingPrefix + this.coffeeSorting]
    );
  }

  public orderCoffeeByRating(coffeeA: Coffee, coffeeB: Coffee) {
    return coffeeA.order - coffeeB.order;
  }

  public orderCoffeeByDate(coffeeA: Coffee, coffeeB: Coffee) {
    return (
      new Date(coffeeA.dateAdded).valueOf() -
      new Date(coffeeB.dateAdded).valueOf()
    );
  }

  getOrderedCoffees(coffees: Coffee[], sortingFunction): Coffee[] {
    return coffees.sort(sortingFunction);
  }
}
