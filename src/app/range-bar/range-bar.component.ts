import { Component, OnInit } from '@angular/core';
import { Options } from 'ng5-slider';

@Component({
  selector: 'app-range-bar',
  templateUrl: './range-bar.component.html',
  styleUrls: ['./range-bar.component.scss']
})
export class RangeBarComponent implements OnInit {

  constructor() { }
  initialValue = 16.5;

  value = this.initialValue;
  highValue = 90;
  options: Options = {
    floor : 0,
    ceil: 100,
    step: 16.5,
    showTicks: false
  };

  ngOnInit() {
  }

  backToOriginalPosition() {
    this.value = this.initialValue;
  }

  changePosition(position: number) {
    this.value = position + this.initialValue;
  }

}
