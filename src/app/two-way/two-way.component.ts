import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way',
  templateUrl:'./two-way.template.html',
  styles: []
})
export class TwoWayComponent implements OnInit {

  text: string;

  constructor() { }

  ngOnInit() {
  }

}
