import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProcesosGeneralesComponent } from './procesos-generales/procesos-generales.component';
import { ProcesosActivosComponent } from './procesos-activos/procesos-activos.component';
import { EliminarProcesosComponent } from './eliminar-procesos/eliminar-procesos.component';
import { SolicitudesComponent } from './solicitudes/solicitudes.component';
import { ConsultaProcesalComponent } from './consulta-procesal/consulta-procesal.component';
import { HistorialProcesosComponent } from './historial-procesos/historial-procesos.component';
import { RamaJucialComponent } from './rama-jucial/rama-jucial.component';

const routes: Routes = [
  {
    path: 'procesos_generales',
    component: ProcesosGeneralesComponent,
  },
  {
    path: 'procesos_activos',
    component: ProcesosActivosComponent,
  },
  {
    path: 'eliminar_procesos',
    component: EliminarProcesosComponent,
  },
  {
    path: 'historial_procesos',
    component: HistorialProcesosComponent,
  },
  {
    path: 'mis_solicitudes',
    component: SolicitudesComponent,
  },
  {
    path: 'consulta_procesal',
    component: ConsultaProcesalComponent,
  },
  {
    path: 'rama_judicial',
    component: RamaJucialComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReportesRoutingModule {}
