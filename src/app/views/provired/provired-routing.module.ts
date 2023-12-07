import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccessPermissionsGuard } from 'src/app/guards/access-permissions.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'access-provired',
    pathMatch: 'full',
  },
  {
    path: 'access-provired',
    loadChildren: () =>
      import('./login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'home-provired',
    canActivate: [AccessPermissionsGuard],
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'recuperar-contrasena',
    loadChildren: () =>
      import('./recuperar-contrasena/recuperar-contrasena.module').then(
        (m) => m.RecuperarContrasenaModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProviredRoutingModule {}
