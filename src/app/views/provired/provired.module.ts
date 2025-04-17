import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProviredRoutingModule } from './provired-routing.module';
import { AccessPermissionsGuard } from 'src/app/guards/access-permissions.guard';
import { RecuperarContrasenaComponent } from './recuperar-contrasena/recuperar-contrasena.component';

@NgModule({
  declarations: [],
  imports: [CommonModule, ProviredRoutingModule],
  providers: [AccessPermissionsGuard],
})
export class ProviredModule {}
