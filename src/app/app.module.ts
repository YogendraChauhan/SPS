// Angular imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

// Local imports
import { AppComponent } from './app.component';
import { SpinnerModule } from './modules/spinner/spinner.module';
import { ButtonModule } from './modules/button/button.module';
import { SpinnerOverviewComponent } from './docs/components/spinner-overview/spinner-overview.component';
import { ButtonOverviewComponent } from './docs/components/button-overview/button-overview.component';

@NgModule({
  declarations: [
    AppComponent,
    SpinnerOverviewComponent,
    ButtonOverviewComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    SpinnerModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }