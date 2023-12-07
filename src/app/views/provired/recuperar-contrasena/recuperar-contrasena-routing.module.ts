import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecuperarContrasenaComponent } from './recuperar-contrasena.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'update-pass',
    pathMatch: 'full',
  },
  {
    path: 'update-pass',
    component: RecuperarContrasenaComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecuperarContrasenaRoutingModule {}
