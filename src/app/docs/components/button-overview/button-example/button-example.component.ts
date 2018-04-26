import { Component, OnInit } from '@angular/core';
// Local imports
import { ButtonConfig } from '../../../../modules/button/button.config';

@Component({
  selector: 'sps-button-example',
  templateUrl: './button-example.component.html',
  styleUrls: ['./button-example.component.sass']
})
export class ButtonExampleComponent implements OnInit {
  public defaultButtonConfig: ButtonConfig;
  public confirmButtonConfig: ButtonConfig;
  public deleteButtonConfig: ButtonConfig;
  public keyButtonConfig: ButtonConfig;
  
  constructor() {
    this.defaultButtonConfig = {
      value: 'Default Button',
      type: 'Cancel',
      id: 'defaultButton',
      name: 'defaultButton',
      className: 'sps-btn sps-btn--default'
    };

    this.confirmButtonConfig = {
      value: 'Confirm Button',
      id: 'confirmButton',
      name: 'confirmButton',
      className: 'sps-btn sps-btn--confirm'
    };

    this.deleteButtonConfig = {
      value: 'Delete Button',
      type: 'button',
      id: 'dangerButton',
      name: 'dangerButton',
      className: 'sps-btn sps-btn--delete',
      disabled: true
    };

    this.keyButtonConfig = {
      value: 'Key Button',
      type: 'button',
      id: 'keyButton',
      name: 'keyButton',
      className: 'sps-btn sps-btn--key'
    };
  }

  ngOnInit() {
  }

  public onSubmit(event): void {
    const button = event.target.innerText;
    alert(button + ' clicked');
  }

  public onClick(event): void {
    const button = event.target.innerText;
    alert(button + ' clicked');
  }
}
