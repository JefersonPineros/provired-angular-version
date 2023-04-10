import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProviredRoutingModule } from './provired-routing.module';
import { AccessPermissionsGuard } from 'src/app/guards/access-permissions.guard';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    ProviredRoutingModule
  ],
  providers: [AccessPermissionsGuard]
})
export class ProviredModule { }
