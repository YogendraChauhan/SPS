import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sps-button-api',
  templateUrl: './button-api.component.html',
  styleUrls: ['./button-api.component.sass']
})

export class ButtonApiComponent implements OnInit {
  public exportedAs: string;

  constructor() { 
    this.exportedAs = '';
  }

  ngOnInit() {
    this.exportedAs = 'spsStandardButton';
  }
}
