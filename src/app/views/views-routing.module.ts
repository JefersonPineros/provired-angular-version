import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewsComponent } from './views.component';

const routes: Routes = [
  {
    path: '',
    component: ViewsComponent,
    children : [
      {
        path: '',
        redirectTo: 'provired',
        pathMatch: 'full'
      },
      {
        path: 'provired',
        loadChildren: () => import('./provired/provired.module').then((m) => m.ProviredModule )
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewsRoutingModule { }
