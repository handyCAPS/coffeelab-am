import { DatabaseReference } from '@angular/fire/database/interfaces';
import { AngularFireDatabase } from '@angular/fire/database';
import { Coffee } from './../../interfaces/coffee.interface';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-coffee-form',
  templateUrl: './coffee-form.component.html',
  styleUrls: ['./coffee-form.component.scss']
})
export class CoffeeFormComponent implements OnInit {
  model: Coffee;
  coffeeRef: DatabaseReference;

  constructor(
    private db: AngularFireDatabase,
    public dialogRef: MatDialogRef<CoffeeFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data
  ) {
    this.model = new Coffee();
    this.coffeeRef = this.db.database.ref('coffee');
  }

  ngOnInit() {}

  handleFormSubmit() {
    const newCoffee: Coffee = {
      ...this.model,
      dateAdded: new Date().toISOString(),
      order: 0
    };
    this.coffeeRef
      .push(newCoffee)
      .then(() => {
        this.dialogRef.close();
      });
  }
}
