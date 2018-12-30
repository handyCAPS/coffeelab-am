import { Pot } from './../../interfaces/pot.interface';
import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-pot-form-dialog',
  templateUrl: './pot-form-dialog.component.html',
  styleUrls: ['./pot-form-dialog.component.scss']
})
export class PotFormDialogComponent implements OnInit {
  loadedPot: Pot;

  constructor(
    private dialog: MatDialogRef<PotFormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { pot: Pot }
  ) {}

  ngOnInit() {
    if (this.data && this.data.pot) {
      this.loadedPot = this.data.pot;
    }
  }

  afterDbSaved(hasError: boolean) {
    this.dialog.close(hasError);
    if (hasError) {
      console.error('Ah Fuck!!');
    }
  }
}
