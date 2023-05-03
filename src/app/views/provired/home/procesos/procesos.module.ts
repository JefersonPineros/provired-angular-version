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
    TextAreaModule
  ],
  providers: [
    DepartamentosService,
    MunicipiosService,
    CorporacionesService,
    DespachosService
  ]
})
export class ProcesosModule { }
