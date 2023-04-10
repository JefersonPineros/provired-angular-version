import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotificacionesRoutingModule } from './notificaciones-routing.module';
import { NotificacionesComponent } from './notificaciones.component';
import { GuiaCapturaComponent } from './guia-captura/guia-captura.component';
import { ValidarRadicadosComponent } from './validar-radicados/validar-radicados.component';
import { DigitarNotificacionesComponent } from './digitar-notificaciones/digitar-notificaciones.component';
import { EditarNotificacionesComponent } from './editar-notificaciones/editar-notificaciones.component';
import { EstadoElectronicoComponent } from './estado-electronico/estado-electronico.component';


@NgModule({
  declarations: [
    NotificacionesComponent,
    GuiaCapturaComponent,
    ValidarRadicadosComponent,
    DigitarNotificacionesComponent,
    EditarNotificacionesComponent,
    EstadoElectronicoComponent
  ],
  imports: [
    CommonModule,
    NotificacionesRoutingModule
  ]
})
export class NotificacionesModule { }
