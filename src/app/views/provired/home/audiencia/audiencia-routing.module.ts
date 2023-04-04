import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AudienciaComponent } from './audiencia.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'audiencia',
    pathMatch: 'full'
  },
  {
    path: 'audiencia',
    component: AudienciaComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AudienciaRoutingModule { }
