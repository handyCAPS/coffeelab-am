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

  constructor(
    public dialogRef: MatDialogRef<CoffeeFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data
  ) {
    this.model = new Coffee();
  }

  ngOnInit() {}

  handleFormSubmit() {
    console.log(this.model);
  }
}
