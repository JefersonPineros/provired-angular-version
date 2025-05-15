import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatalogosRoutingModule } from './catalogos-routing.module';
import { GenericoDepartamentoComponent } from './generico-departamento/generico-departamento.component';
import { GenericoMunicipiosComponent } from './generico-municipios/generico-municipios.component';
import { GenericoCorporacionComponent } from './generico-corporacion/generico-corporacion.component';
import { GenericoDespachosComponent } from './generico-despachos/generico-despachos.component';
import {
  ButtonComponentModule,
  CardComponentModule,
  InputTextComponentModule,
  ModalComponentModule,
  TablaComponentModule,
} from 'src/app/components/components.module';
import { ToastModule } from 'primeng/toast';
import { NgxSpinnerModule } from 'ngx-spinner';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DepartamentosService } from 'src/app/services/utils/departamentos.service';
import { MunicipiosService } from 'src/app/services/utils/municipios.service';
import { CorporacionesService } from 'src/app/services/utils/corporaciones.service';
import { DespachosService } from 'src/app/services/utils/despachos.service';
import { MessageService } from 'primeng/api';
import { InputPassModule } from '../../../../components/input-pass/input-pass.module';

@NgModule({
  declarations: [
    GenericoDepartamentoComponent,
    GenericoMunicipiosComponent,
    GenericoCorporacionComponent,
    GenericoDespachosComponent,
  ],
  imports: [
    CommonModule,
    CatalogosRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    CardComponentModule,
    InputTextComponentModule,
    ButtonComponentModule,
    TablaComponentModule,
    ModalComponentModule,
    HttpClientModule,
    ToastModule,
    NgxSpinnerModule,
    InputPassModule,
  ],
  providers: [
    DepartamentosService,
    MunicipiosService,
    CorporacionesService,
    DespachosService,
    MessageService,
  ],
})
export class CatalogosModule {}
