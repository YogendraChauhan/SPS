import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { APPROUTES } from './app.route.module';
import { LoginComponent } from './modules/login/login.component';
import { LoginModule } from './modules/login/login.module';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    APPROUTES,
    LoginModule
  ],
  providers: [],
  bootstrap: [ LoginComponent ]
})
export class AppModule { }
