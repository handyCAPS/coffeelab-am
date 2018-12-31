import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements OnInit {
  @Input() rating: number;

  ratingArray: number[];
  starsLeftArray = [0, 1, 2, 3, 4];

  constructor() {}

  ngOnInit() {
    if (typeof this.rating !== undefined) {
      this.ratingArray = [];
      for (let i = 0; i < this.rating; i++) {
        this.ratingArray.push(i);
      }
      this.starsLeftArray = this.starsLeftArray.filter(num => {
        return this.ratingArray.indexOf(num) === -1;
      });
    }
  }
}
