import { CoffeeFormComponent } from './../coffee-form/coffee-form.component';
import { CoffeeService } from './../../services/coffee.service';
import { Coffee } from '../../interfaces/coffee.interface';
import { Component, OnInit } from '@angular/core';

import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-coffee-page',
  templateUrl: './coffee-page.component.html',
  styleUrls: ['./coffee-page.component.scss']
})
export class CoffeePageComponent implements OnInit {
  coffees: Coffee[];

  constructor(private coffeeService: CoffeeService, public dialog: MatDialog) {
    this.coffees = this.coffeeService.getCoffees();
  }

  ngOnInit() {}

  addCoffee() {
    console.log(
      this.coffeeService.addCoffee({
        id: 'three',
        name: 'Huile Supremo',
        store: 'Simon Levelt',
        rating: 2,
        dateAdded: new Date().toISOString()
      })
    );
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
}
