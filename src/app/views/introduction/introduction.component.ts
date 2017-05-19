import { Component, OnInit } from '@angular/core';

@Component({
  selector: '.app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.scss']
})
export class IntroductionComponent implements OnInit {

  appTitle = 'Make a plea for an offence';

  constructor() { }

  ngOnInit() {
  }

}
