import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingComponent } from './rating.component';
import { MatIconModule } from '@angular/material';

fdescribe('RatingComponent', () => {
  let component: RatingComponent;
  let fixture: ComponentFixture<RatingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RatingComponent],
      imports: [MatIconModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return an object with the number of open and closed stars', () => {
    const actual = component.getOpenAndClosedStars(5);
    const expected = {
      open: [],
      closed: [1, 2, 3, 4, 5]
    };
    expect(actual.open).toEqual(expected.open, 'The open key is wrong');
    expect(actual.closed).toEqual(expected.closed, 'The closed key is wrong');
    const actual2 = component.getOpenAndClosedStars(4);
    const expected2 = {
      open: [5],
      closed: [1, 2, 3, 4]
    };
    expect(actual2.open).toEqual(expected2.open, 'The open key is wrong');
    expect(actual2.closed).toEqual(expected2.closed, 'The closed key is wrong');
    const actual3 = component.getOpenAndClosedStars(3);
    const expected3 = {
      open: [4, 5],
      closed: [1, 2, 3]
    };
    expect(actual3.open).toEqual(expected3.open, 'The open key is wrong');
    expect(actual3.closed).toEqual(expected3.closed, 'The closed key is wrong');
  });
});
