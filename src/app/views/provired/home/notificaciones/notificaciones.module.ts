import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotificacionesRoutingModule } from './notificaciones-routing.module';
import { NotificacionesComponent } from './notificaciones.component';
import { GuiaCapturaComponent } from './guia-captura/guia-captura.component';
import { ValidarRadicadosComponent } from './validar-radicados/validar-radicados.component';
import { DigitarNotificacionesComponent } from './digitar-notificaciones/digitar-notificaciones.component';
import { EditarNotificacionesComponent } from './editar-notificaciones/editar-notificaciones.component';
import { EstadoElectronicoComponent } from './estado-electronico/estado-electronico.component';
import { ReportNotificacionesComponent } from './report-notificaciones/report-notificaciones.component';
import { ButtonComponentModule, CardComponentModule, CheckboxComponentModule, RadioButtonComponentModule, SideMenuModule } from 'src/app/components/components.module';
import { DatePickerModule } from 'src/app/components/date-picker/date-picker.module';


@NgModule({
  declarations: [
    NotificacionesComponent,
    GuiaCapturaComponent,
    ValidarRadicadosComponent,
    DigitarNotificacionesComponent,
    EditarNotificacionesComponent,
    EstadoElectronicoComponent,
    ReportNotificacionesComponent
  ],
  imports: [
    CommonModule,
    NotificacionesRoutingModule,

    CardComponentModule,
    SideMenuModule,
    CheckboxComponentModule,
    RadioButtonComponentModule,
    DatePickerModule,
    ButtonComponentModule
  ]
})
export class NotificacionesModule { }
