// Angular imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Angular imports
import { ButtonComponent } from './button.component';
import { ButtonConfig } from './button.config';

@NgModule({
    imports: [CommonModule],
    exports: [ButtonComponent],
    declarations: [ButtonComponent],
    providers: [],
})
export class ButtonModule { }
