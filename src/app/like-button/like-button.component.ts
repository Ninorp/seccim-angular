import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms'

@Component({
  selector: 'like-button',
  templateUrl: './like-button.template.html',
  styles: []
})
export class LikeButtonComponent implements OnInit {

  constructor() { }

  liked: boolean = false;
  text: string;

  ngOnInit() {
  }

}
