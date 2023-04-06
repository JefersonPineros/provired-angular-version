import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageRedComponent } from './page-red.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'start',
    pathMatch: 'full'
  },
  {
    path: 'start',
    component: PageRedComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageRedRoutingModule { }
