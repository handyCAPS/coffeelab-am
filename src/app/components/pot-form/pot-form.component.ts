import { Coffee } from './../../interfaces/coffee.interface';
import { CoffeeService } from './../../services/coffee.service';
import { Pot } from './../../interfaces/pot.interface';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PotService } from 'src/app/services/pot.service';

@Component({
  selector: 'app-pot-form',
  templateUrl: './pot-form.component.html',
  styleUrls: ['./pot-form.component.scss']
})
export class PotFormComponent implements OnInit {
  @Input() loadedPot: Pot;
  @Output() savedToDb = new EventEmitter<boolean>();
  pot: Pot;
  coffees: Coffee[];

  constructor(
    private potService: PotService,
    private coffeeService: CoffeeService
  ) {
    this.coffees = this.coffeeService.getCoffees();
  }

  ngOnInit() {
    this.pot = this.loadedPot ? this.loadedPot : new Pot();
  }

  handleFormSubmit(e) {
    e.preventDefault();
    if (this.loadedPot) {
      this.updatedDb({ ...this.pot });
    } else {
      this.addToDb({ ...this.pot, number: -1 });
    }
  }

  addToDb(pot: Pot) {
    this.potService
      .addPotToDb(pot)
      .subscribe(hasError => this.savedToDb.emit(hasError));
  }

  updatedDb(pot: Pot) {
    this.potService
      .updatePot(pot)
      .subscribe(hasError => this.savedToDb.emit(hasError));
  }
}
