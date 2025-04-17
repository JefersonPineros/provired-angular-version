import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FiltersDinamicsComponent } from './filters-dinamics.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DepartamentosService } from 'src/app/services/utils/departamentos.service';
import { MunicipiosService } from 'src/app/services/utils/municipios.service';
import { CorporacionesService } from 'src/app/services/utils/corporaciones.service';
import { DespachosService } from 'src/app/services/utils/despachos.service';
import { ButtonComponentModule, DropdownComponentModule, InputTextComponentModule } from '../components.module';
import { EliminarProcesosService } from 'src/app/services/home/reportes/eliminar-procesos.service';

export * from './filters-dinamics.component';

@NgModule({
  declarations: [
    FiltersDinamicsComponent
  ],
  imports: [
    CommonModule,

    FormsModule,
    ReactiveFormsModule,
    DropdownComponentModule,
    InputTextComponentModule,
    ButtonComponentModule
  ],
  exports: [
    FiltersDinamicsComponent
  ],
  providers: [
    DepartamentosService,
    MunicipiosService,
    CorporacionesService,
    DespachosService,
    EliminarProcesosService
  ],

})
export class FiltersDinamicsModule { }
