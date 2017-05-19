import { Component, OnInit } from '@angular/core';

@Component({
  selector: '.app-govuk-header',
  templateUrl: './govuk-header.component.html',
  styleUrls: ['./govuk-header.component.scss']
})
export class GovukHeaderComponent implements OnInit {

  appTitle = 'Make a plea';

  constructor() { }

  ngOnInit() {
  }

}
