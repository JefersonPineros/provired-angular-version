import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'

import { ReportesRoutingModule } from './reportes-routing.module';
import { ReportesComponent } from './reportes.component';
import { ProcesosGeneralesComponent } from './procesos-generales/procesos-generales.component';
import { ProcesosActivosComponent } from './procesos-activos/procesos-activos.component';
import { EliminarProcesosComponent } from './eliminar-procesos/eliminar-procesos.component';
import { HistorialProcesosComponent } from './historial-procesos/historial-procesos.component';
import { SolicitudesComponent } from './solicitudes/solicitudes.component';
import { ConsultaProcesalComponent } from './consulta-procesal/consulta-procesal.component';
import {
  ButtonComponentModule,
  CardComponentModule,
  DropdownComponentModule,
  InputTextComponentModule,
  ModalComponentModule,
  SideMenuModule,
  TablaComponentModule,
  TextAreaModule
} from 'src/app/components/components.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DespachosService } from 'src/app/services/utils/despachos.service';
import { CorporacionesService } from 'src/app/services/utils/corporaciones.service';
import { MunicipiosService } from 'src/app/services/utils/municipios.service';
import { DepartamentosService } from 'src/app/services/utils/departamentos.service';
import { ProcesosGeneralesService } from 'src/app/services/home/reportes/procesos-generales.service';
import { ToastModule } from 'primeng/toast';
import { NgxSpinnerModule } from 'ngx-spinner';
import { MessageService } from 'primeng/api';
import { ProcesosActivosService } from 'src/app/services/home/reportes/procesos-activos.service';
import { DatePickerModule } from 'src/app/components/date-picker/date-picker.module';
import { RecaptchaModule, RecaptchaFormsModule } from 'ng-recaptcha';
import { EliminarProcesosService } from 'src/app/services/home/reportes/eliminar-procesos.service';


@NgModule({
  declarations: [
    ReportesComponent,
    ProcesosGeneralesComponent,
    ProcesosActivosComponent,
    EliminarProcesosComponent,
    HistorialProcesosComponent,
    SolicitudesComponent,
    ConsultaProcesalComponent
  ],
  imports: [
    CommonModule,
    ReportesRoutingModule,

    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,

    CardComponentModule,
    ButtonComponentModule,
    SideMenuModule,
    InputTextComponentModule,
    DropdownComponentModule,
    TablaComponentModule,
    ModalComponentModule,
    DatePickerModule,
    TextAreaModule,

    ToastModule,
    NgxSpinnerModule,
    RecaptchaModule,
    RecaptchaFormsModule
  ],
  providers: [
    DepartamentosService,
    MunicipiosService,
    CorporacionesService,
    DespachosService,
    ProcesosGeneralesService,
    MessageService,
    ProcesosActivosService,
    EliminarProcesosService
  ]
})
export class ReportesModule { }
