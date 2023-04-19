import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AudienciaComponent } from './audiencia.component';
import { AudienciaRoutingModule } from './audiencia-routing.module';
import { ButtonComponentModule, CardComponentModule, TablaComponentModule } from 'src/app/components/components.module';
import { DatePickerModule } from 'src/app/components/date-picker/date-picker.module';
import { CalendarModule } from 'primeng/calendar';
import { AudienciaService } from 'src/app/services/home/audiencia/audiencia.service';
import { ToastModule } from 'primeng/toast';
import { NgxSpinnerModule } from 'ngx-spinner';
import { MessageService } from 'primeng/api';


@NgModule({
  declarations: [
    AudienciaComponent
  ],
  imports: [
    CommonModule,

    AudienciaRoutingModule,
    CardComponentModule,
    DatePickerModule,
    CalendarModule,
    ButtonComponentModule,
    TablaComponentModule,

    ToastModule,
    NgxSpinnerModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    AudienciaService,
    MessageService
  ]
})
export class AudienciaModule { }
