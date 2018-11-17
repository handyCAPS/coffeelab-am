import { CoffeeService } from './../services/coffee.service';
import { Coffee } from './../interfaces/coffee.interface';
import { Component, OnInit } from '@angular/core';
import { Route, Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-coffee-detail',
  templateUrl: './coffee-detail.component.html',
  styleUrls: ['./coffee-detail.component.scss']
})
export class CoffeeDetailComponent implements OnInit {
  coffee: Coffee;

  constructor(
    private coffeeService: CoffeeService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe(
      params => (this.coffee = this.coffeeService.getCoffeeById(params.id))
    );
  }
}
