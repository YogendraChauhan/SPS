import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SpinnerOverviewComponent } from './docs/components/spinner-overview/spinner-overview.component';
import { ButtonOverviewComponent } from './docs/components/button-overview/button-overview.component';
import { SpinnerExampleComponent } from './docs/components/spinner-overview/spinner-example/spinner-example.component';
import { SpinnerApiComponent } from './docs/components/spinner-overview/spinner-api/spinner-api.component';
import { ButtonExampleComponent } from './docs/components/button-overview/button-example/button-example.component';
import { ButtonApiComponent } from './docs/components/button-overview/button-api/button-api.component';

const routes: Routes = [{
  path: 'spinner/overview',
  component: SpinnerOverviewComponent,
  data: {title: 'Spinner UI Overview'},
  children: [
    { path: '', redirectTo: 'examples', pathMatch: 'full' },
    { path: 'examples', component: SpinnerExampleComponent },
    { path: 'api', component: SpinnerApiComponent }
  ]
},
{
  path: 'button/overview',
  component: ButtonOverviewComponent,
  data: {title: 'Button UI Overview'},
  children: [
    { path: '', redirectTo: 'examples', pathMatch: 'full' },
    { path: 'examples', component: ButtonExampleComponent },
    { path: 'api', component: ButtonApiComponent }
  ]
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
