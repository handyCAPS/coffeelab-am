import { CoffeeService } from './../../services/coffee.service';
import { Coffee } from './../../interfaces/coffee.interface';
import { Component, OnInit, Input } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { fadeInOut } from 'src/app/animations/fade-in-out';

@Component({
  selector: 'app-coffee-item',
  templateUrl: './coffee-item.component.html',
  styleUrls: ['./coffee-item.component.scss'],
  animations: [fadeInOut]
})
export class CoffeeItemComponent implements OnInit {
  @Input() coffee: Coffee;

  constructor(
    private coffeeService: CoffeeService,
    private db: AngularFireDatabase
  ) {}

  ngOnInit() {}

  updateCoffeeRating(newRating: number): void {
    const updatedCoffee = { ...this.coffee, rating: newRating };
    this.coffeeService
      .updateCoffeeScore(updatedCoffee)
      .subscribe(result => console.log('score result', result));
  }

  removeCoffee(coffeeId: string): void {
    this.db.database.ref('coffee/' + coffeeId).remove();
  }
}
