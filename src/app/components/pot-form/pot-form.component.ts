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
    private coffeeService: CoffeeService,
  ) {
    this.pot = this.loadedPot ? this.loadedPot : new Pot();
    this.coffees = this.coffeeService.getCoffees();
  }

  ngOnInit() {}

  handleFormSubmit(e) {
    e.preventDefault();
    this.potService
      .addPotToDb({ ...this.pot, number: -1 })
      .subscribe(hasError => {
        this.savedToDb.emit(hasError);
      });
  }
}
