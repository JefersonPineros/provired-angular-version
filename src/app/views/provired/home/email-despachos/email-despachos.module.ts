import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { EmailDespachosRoutingModule } from './email-despachos-routing.module';
import { EmailDespachosComponent } from './email-despachos.component';
import {
  ButtonComponentModule,
  CardComponentModule,
  FiltersDinamicsModule,
  InputTextComponentModule,
  SideMenuModule,
  TabMenuComponentModule,
  TablaComponentModule,
} from 'src/app/components/components.module';
import { EmailDespachosService } from 'src/app/services/home/email/email-despachos.service';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { NgxSpinnerModule } from 'ngx-spinner';
import { TerminosCondicionesService } from 'src/app/services/home/documentos/terminos.service';

@NgModule({
  declarations: [EmailDespachosComponent],
  imports: [
    CommonModule,
    EmailDespachosRoutingModule,

    HttpClientModule,

    CardComponentModule,
    InputTextComponentModule,
    ButtonComponentModule,
    FiltersDinamicsModule,
    TablaComponentModule,

    SideMenuModule,
    ToastModule,
    NgxSpinnerModule,
  ],
  providers: [EmailDespachosService, MessageService],
})
export class EmailDespachosModule {}
