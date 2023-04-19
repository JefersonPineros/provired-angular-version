import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageRedRoutingModule } from './page-red-routing.module';
import { PageRedComponent } from './page-red.component';
import {
  ButtonComponentModule,
  CardComponentModule,
  TablaComponentModule
} from 'src/app/components/components.module';
import { VencimientosService } from 'src/app/services/home/vencimientos/vencimientos.service';
import { RouterModule } from '@angular/router';
import { ToastModule } from 'primeng/toast';
import { NgxSpinnerModule } from 'ngx-spinner';


@NgModule({
  declarations: [
    PageRedComponent
  ],
  imports: [
    CommonModule,
    RouterModule,

    PageRedRoutingModule,
    CardComponentModule,
    TablaComponentModule,
    ButtonComponentModule,
    ToastModule,
    NgxSpinnerModule
  ],
  providers: [
    VencimientosService
  ]
})
export class PageRedModule { }
