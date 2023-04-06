import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportesRoutingModule } from './reportes-routing.module';
import { ReportesComponent } from './reportes.component';
import { ProcesosGeneralesComponent } from './procesos-generales/procesos-generales.component';
import { ProcesosActivosComponent } from './procesos-activos/procesos-activos.component';
import { EliminarProcesosComponent } from './eliminar-procesos/eliminar-procesos.component';
import { HistorialProcesosComponent } from './historial-procesos/historial-procesos.component';
import { SolicitudesComponent } from './solicitudes/solicitudes.component';
import { ConsultaProcesalComponent } from './consulta-procesal/consulta-procesal.component';


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
    ReportesRoutingModule
  ]
})
export class ReportesModule { }
