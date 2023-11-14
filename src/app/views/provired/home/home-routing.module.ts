import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'page-red'
      },
      {
        path: 'inicio',
        loadChildren: () => import('./audiencia/audiencia.module').then((m) => m.AudienciaModule)
      },
      {
        path: 'page-red',
        loadChildren: () => import('./page-red/page-red.module').then((m) => m.PageRedModule)
      },
      {
        path: 'notificaciones',
        loadChildren: () => import('./notificaciones/notificaciones.module').then((m) => m.NotificacionesModule)
      },
      {
        path: 'reportes',
        loadChildren: () => import('./reportes/reportes.module').then((m) => m.ReportesModule)
      },
      {
        path: 'procesos',
        loadChildren: () => import('./procesos/procesos.module').then((m) => m.ProcesosModule)
      },
      {
        path: 'email_despachos',
        loadChildren: () => import('./email-despachos/email-despachos.module').then((m) => m.EmailDespachosModule)
      },
      {
        path: 'documentos',
        loadChildren: () => import('./documentos/documentos.module').then((m) => m.DocumentosModule)
      },
      {
        path: 'usuarios',
        loadChildren: () => import('./usuarios/usuarios.module').then((m) => m.UsuariosModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
