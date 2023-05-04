import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReportNotificacionesComponent } from './report-notificaciones/report-notificaciones.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        redirectTo: 'report-notifications',
        pathMatch: 'full'
      },
      {
        path: 'report-notifications',
        component: ReportNotificacionesComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotificacionesRoutingModule { }
