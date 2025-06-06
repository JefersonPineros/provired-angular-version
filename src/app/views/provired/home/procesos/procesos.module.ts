import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProcesosRoutingModule } from './procesos-routing.module';
import { ProcesosComponent } from './procesos.component';
import {
  ButtonComponentModule,
  CardComponentModule,
  DropdownComponentModule,
  InputTextComponentModule,
  SideMenuModule,
  TextAreaModule
} from 'src/app/components/components.module';
import { DatePickerModule } from 'src/app/components/date-picker/date-picker.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DepartamentosService } from 'src/app/services/utils/departamentos.service';
import { MunicipiosService } from 'src/app/services/utils/municipios.service';
import { CorporacionesService } from 'src/app/services/utils/corporaciones.service';
import { DespachosService } from 'src/app/services/utils/despachos.service';
import { ProcesosService } from 'src/app/services/home/procesos/procesos.service';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { NgxSpinnerModule } from 'ngx-spinner';


@NgModule({
  declarations: [
    ProcesosComponent
  ],
  imports: [
    CommonModule,
    ProcesosRoutingModule,

    FormsModule,
    ReactiveFormsModule,

    DropdownComponentModule,
    DatePickerModule,
    SideMenuModule,
    CardComponentModule,
    ButtonComponentModule,
    InputTextComponentModule,
    TextAreaModule,

    ToastModule,
    NgxSpinnerModule

  ],
  providers: [
    DepartamentosService,
    MunicipiosService,
    CorporacionesService,
    DespachosService,
    ProcesosService,
    MessageService
  ]
})
export class ProcesosModule { }
