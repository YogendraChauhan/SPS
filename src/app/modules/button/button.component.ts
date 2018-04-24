// Angular imports
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ButtonConfig } from './button.config';

@Component({
  selector: 'sps-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.sass']
})
export class ButtonComponent implements OnInit {
  @Input('options') options: ButtonConfig;
  public defaultOptions: ButtonConfig;
  @Output('clickEvent') clickEvent: EventEmitter<any>;

  constructor() {
    this.clickEvent = new EventEmitter<any>();
    this.defaultOptions = {
      className: 'btn',
      type: 'button',
      disabled: false,
      value: 'Button'
    };
  }

  ngOnInit() {
    this.options = Object.assign({}, this.defaultOptions, this.options);
  }
}
