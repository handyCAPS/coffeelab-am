import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements OnInit {
  @Input() rating: number;
  @Output() newRating = new EventEmitter<number>();

  ratingArray: number[];
  starsLeftArray = [1, 2, 3, 4, 5];

  constructor() {}

  ngOnInit() {
    this.setOpenAndClosedStars();
  }

  setOpenAndClosedStars() {
    this.starsLeftArray = [1, 2, 3, 4, 5];
    if (typeof this.rating !== undefined) {
      this.ratingArray = [];
      for (let i = 1; i < this.rating + 1; i++) {
        this.ratingArray.push(i);
      }
      this.starsLeftArray = this.starsLeftArray.filter(num => {
        return this.ratingArray.indexOf(num) === -1;
      });
    }
  }

  handleClick(starIndex: number) {
    if (starIndex === this.rating) {
      return;
    }
    this.rating = starIndex;
    this.setOpenAndClosedStars();
    this.newRating.emit(starIndex);
  }
}
