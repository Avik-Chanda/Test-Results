import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-time-icons',
  templateUrl: './time-icons.component.html',
  styleUrls: ['./time-icons.component.scss']
})
export class TimeIconsComponent implements OnInit {

  constructor() { }

  Never = 'Never';
  Ocassionally = 'Ocassionally';
  Hours = '4 Hours';
  Yearly = 'Yearly';


  private newMethod() {
    return "Yearly";
  }

  ngOnInit() {
  }

}
