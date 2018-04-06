import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { LoginComponent } from "./login.component";
import { BrowserModule } from "@angular/platform-browser";

@NgModule({
    declarations: [
        LoginComponent
    ],
    imports: [
        BrowserModule
    ]
})
export class LoginModule { }
