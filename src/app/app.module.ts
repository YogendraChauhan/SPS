// Angular imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Local imports
import { AppComponent } from './app.component';
import { SpinnerModule } from './modules/spinner/spinner.module';
import { ButtonModule } from './modules/button/button.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SpinnerModule
    ButtonModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
