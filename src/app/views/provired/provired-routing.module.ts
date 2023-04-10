import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccessPermissionsGuard } from 'src/app/guards/access-permissions.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'access-provired',
    pathMatch:'full'
  },
  {
    path: 'access-provired',
    loadChildren: () => import('./login/login.module').then((m) => m.LoginModule)
  },
  {
    path: 'home-provired',
    canActivate: [
      AccessPermissionsGuard
    ],
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProviredRoutingModule { }
