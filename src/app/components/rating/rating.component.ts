import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements OnInit {
  @Input() rating: number;
  @Input() maxRating: number;
  @Output() newRating = new EventEmitter<number>();

  ratingArray: number[] = [];
  starsLeftArray = [];

  constructor() {
    this.ratingArray = [];
    this.starsLeftArray = [];
  }

  ngOnInit() {
    if (typeof this.maxRating === 'undefined') {
      this.maxRating = 5;
    }
    if (typeof this.rating === 'undefined') {
      this.rating = 5;
    }
    this.rating = Math.min(this.rating, this.maxRating);
    this.setOpenAndClosedStars();
  }

  setOpenAndClosedStars() {
    const starObject = this.getOpenAndClosedStars(this.rating);
    this.starsLeftArray = starObject.open;
    this.ratingArray = starObject.closed;
  }

  getOpenAndClosedStars(rating: number): { open: number[]; closed: number[] } {
    const resultObject = {
      open: [],
      closed: []
    };

    for (let i = 1; i < rating + 1; i++) {
      resultObject.closed.push(i);
    }

    const starsLeft = this.maxRating - rating;

    if (starsLeft > 0) {
      for (let i = rating; i < this.maxRating; i++) {
        resultObject.open.push(i + 1);
      }
    }

    return resultObject;
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
