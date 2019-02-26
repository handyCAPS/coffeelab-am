import { Pot } from '../../interfaces/pot.interface';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pot-list',
  templateUrl: './pot-list.component.html',
  styleUrls: ['./pot-list.component.scss']
})
export class PotListComponent implements OnInit {
  @Input() pots: Pot[];

  @Output() plusClicked = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  plusClickedFunc() {
    this.plusClicked.emit();
  }
}
