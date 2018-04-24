import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SpinnerOverviewComponent } from './docs/components/spinner-overview/spinner-overview.component';
import { ButtonOverviewComponent } from './docs/components/button-overview/button-overview.component';

const routes: Routes = [{
  path: 'spinner/overview',
  component: SpinnerOverviewComponent
},
{
  path: 'button/overview',
  component: ButtonOverviewComponent
},
{
  path: '',
  redirectTo: '/spinner/overview',
  pathMatch: 'full'
},
{
  path: '**',
  redirectTo: '/spinner/overview',
  pathMatch: 'full'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
