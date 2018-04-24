import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { SpinnerConfig } from './spinner.config';

@Component({
  selector: 'sps-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.sass']
})
export class SpinnerComponent implements OnInit {
  @Input()
  options:SpinnerConfig;
  defaults:SpinnerConfig;
  constructor() {
    this.defaults = {
      color:'#000FFF',
      position:'center',
      size:'30px',
      zIndex:'1000'
    }
  }

  ngOnInit() {
    console.log("defaults before in constructor : ", this.defaults);
    this.defaults = Object.assign({}, this.defaults, this.options);
    console.log("defaults after in constructor : ", this.defaults);
  }
}