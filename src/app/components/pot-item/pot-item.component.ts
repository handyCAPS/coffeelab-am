import { Pot } from './../../interfaces/pot.interface';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pot-item',
  templateUrl: './pot-item.component.html',
  styleUrls: ['./pot-item.component.scss']
})
export class PotItemComponent implements OnInit {

  @Input() pot: Pot;

  constructor() { }

  ngOnInit() {
  }

}
