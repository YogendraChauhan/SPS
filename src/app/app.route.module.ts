import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { LoginComponent } from "./modules/login/login.component";

const appRoutes : Routes = [
    { path: '*', component: LoginComponent },
    { path: 'login', component: LoginComponent },
];

export const APPROUTES = RouterModule.forRoot(appRoutes);