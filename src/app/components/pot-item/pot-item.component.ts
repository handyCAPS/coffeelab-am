import { PotFormDialogComponent } from './../pot-form-dialog/pot-form-dialog.component';
import { MatDialog } from '@angular/material';
import { Pot } from './../../interfaces/pot.interface';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pot-item',
  templateUrl: './pot-item.component.html',
  styleUrls: ['./pot-item.component.scss']
})
export class PotItemComponent implements OnInit {

  @Input() pot: Pot;

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  onOpenEditForm() {
    console.log('opening form...');

    this.dialog.open(PotFormDialogComponent, {
      width: '600px',
      data: {
        pot: this.pot
      }
    });
  }

}
