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
  SideMenuModule
} from 'src/app/components/components.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DespachosService } from 'src/app/services/utils/despachos.service';
import { CorporacionesService } from 'src/app/services/utils/corporaciones.service';
import { MunicipiosService } from 'src/app/services/utils/municipios.service';
import { DepartamentosService } from 'src/app/services/utils/departamentos.service';


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
    DropdownComponentModule
  ],
  providers: [
    DepartamentosService,
    MunicipiosService,
    CorporacionesService,
    DespachosService
  ]
})
export class ReportesModule { }
