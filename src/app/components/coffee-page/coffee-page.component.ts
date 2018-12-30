import { PotFormDialogComponent } from './../pot-form-dialog/pot-form-dialog.component';
import { PotFormComponent } from './../pot-form/pot-form.component';
import { PotService } from './../../services/pot.service';
import { Pot } from './../../interfaces/pot.interface';
import { hasOwn } from './../../helpers';
import { CoffeeFormComponent } from './../coffee-form/coffee-form.component';
import { CoffeeService } from './../../services/coffee.service';
import { Coffee } from '../../interfaces/coffee.interface';
import { Component, OnInit } from '@angular/core';

import { MatDialog } from '@angular/material';
import { AngularFireDatabase } from '@angular/fire/database';

class SortingOptions {
  options: 'Rating' | 'Date' | 'Order';
}
@Component({
  selector: 'app-coffee-page',
  templateUrl: './coffee-page.component.html',
  styleUrls: ['./coffee-page.component.scss']
})
export class CoffeePageComponent implements OnInit {
  public coffees: Coffee[] = [];
  public pots: Pot[] = [];

  private coffeeSortingPrefix = 'orderCoffeeBy';

  private coffeeSorting: SortingOptions['options'] = 'Order';

  public sortingOptions: SortingOptions['options'][] = [
    'Rating',
    'Date',
    'Order'
  ];

  public get sortingFunction(): string {
    return this.coffeeSortingPrefix + this.coffeeSorting;
  }

  constructor(
    private coffeeService: CoffeeService,
    public dialog: MatDialog,
    private db: AngularFireDatabase,
    private potService: PotService
  ) {
    this.coffees = this.coffeeService.getCoffees();
    this.coffeeService
      .listenForCoffee()
      .subscribe(
        value =>
          (this.coffees = this.getOrderedCoffees(
            value,
            this[this.sortingFunction]
          ))
      );
    this.potService.listenForPots().subscribe(pots => (this.pots = pots));
  }

  ngOnInit() {}

  addCoffee(newCoffee: Coffee) {
    this.db.database.ref('coffee').push(newCoffee);
  }

  openCoffeeForm() {
    const dialogRef = this.dialog.open(CoffeeFormComponent, {
      width: '30rem'
    });
  }

  sortCoffee(by: SortingOptions['options']): void {
    this.coffeeSorting = by;
    this.coffees = this.getOrderedCoffees(
      this.coffees,
      this[this.sortingFunction]
    );
  }

  public orderCoffeeByRating(coffeeA: Coffee, coffeeB: Coffee) {
    return coffeeA.rating - coffeeB.rating;
  }

  public orderCoffeeByOrder(coffeeA: Coffee, coffeeB: Coffee) {
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

  openPotForm() {
    this.dialog
      .open(PotFormDialogComponent, {
        width: '600px'
      })
      .afterClosed()
      .subscribe(hasError => {
        if (hasError) {
          console.error('FUCK!!!');
        }
      });
  }
}
