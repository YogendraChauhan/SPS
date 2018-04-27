import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OverviewComponent } from './samples/overview/overview.component';

const routes: Routes = [{ 
  path: 'overview', 
  component: OverviewComponent,
  data: {title: 'Component UI Overview'}
},
{
  path: '',
  redirectTo: '/overview',
  pathMatch: 'full'
},
{
  path: '**',
  redirectTo: '/overview',
  pathMatch: 'full'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
