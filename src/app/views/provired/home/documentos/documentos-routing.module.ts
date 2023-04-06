import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutorizacionesComponent } from './autorizaciones/autorizaciones.component';
import { TutorialesComponent } from './tutoriales/tutoriales.component';
import { TerminosComponent } from './terminos/terminos.component';

const routes: Routes = [
  {
    path: 'autorizaciones',
    component: AutorizacionesComponent
  },
  {
    path: 'tutoriales',
    component: TutorialesComponent
  },
  {
    path: 'terminos_condiciones',
    component:TerminosComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocumentosRoutingModule { }
