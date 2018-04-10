// Angular imports
import { Component } from '@angular/core';

// Local imports
import { ButtonConfig } from './modules/button/button.config';

@Component({
  selector: 'sps-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})

export class AppComponent {
  public defaultButtonConfig: ButtonConfig;
  public primaryButtonConfig: ButtonConfig;
  public successButtonConfig: ButtonConfig;
  public dangerButtonConfig: ButtonConfig;
  public warnButtonConfig: ButtonConfig;
  public linkButtonConfig: ButtonConfig;

  constructor() {
    this.defaultButtonConfig = {
      value: 'Default Button',
      type: 'Cancel',
      id: 'defaultButton',
      name: 'defaultButton',
      className: 'btn btn-default'
    };

    this.primaryButtonConfig = {
      value: 'Primary Button',
      type: 'Reset',
      id: 'primaryButton',
      name: 'primaryButton',
      className: 'btn btn-primary'
    };

    this.successButtonConfig = {
      value: 'Success Button',
      type: 'submit',
      id: 'successButton',
      name: 'successButton',
      className: 'btn btn-success'
    };

    this.dangerButtonConfig = {
      value: 'Danger Button',
      type: 'button',
      id: 'dangerButton',
      name: 'dangerButton',
      className: 'btn btn-danger',
      disabled: true
    };

    this.warnButtonConfig = {
      value: 'Warning Button',
      type: 'button',
      id: 'warnButton',
      name: 'warnButton',
      className: 'btn btn-warning'
    };

    this.linkButtonConfig = {
      value: 'Link Button',
      type: 'linkButton',
      name: 'linkButton',
      className: 'btn btn-link'
    };
  }

  size = (length, sides) => {
    alert(length / sides);
  }

  public onSubmit(event): void {
    const button = event.target.innerText;
    alert(button + ' clicked');
  }

  public onClick(event): void {
    const button = event.target.innerText;
    alert(button + ' clicked');
    this.size(6, 2);
  }
}
