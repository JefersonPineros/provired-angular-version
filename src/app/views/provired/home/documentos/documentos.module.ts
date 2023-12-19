import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocumentosRoutingModule } from './documentos-routing.module';
import { DocumentosComponent } from './documentos.component';
import { AutorizacionesComponent } from './autorizaciones/autorizaciones.component';
import { TutorialesComponent } from './tutoriales/tutoriales.component';
import { TerminosComponent } from './terminos/terminos.component';
import {
  ButtonComponentModule,
  CardComponentModule,
  SideMenuModule,
  TextAreaModule,
} from 'src/app/components/components.module';
import { TerminosCondicionesService } from 'src/app/services/home/documentos/terminos.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    DocumentosComponent,
    AutorizacionesComponent,
    TutorialesComponent,
    TerminosComponent,
  ],
  imports: [
    CommonModule,
    DocumentosRoutingModule,
    CardComponentModule,
    SideMenuModule,
    ButtonComponentModule,

    HttpClientModule,
    TextAreaModule,
  ],
  providers: [TerminosCondicionesService],
})
export class DocumentosModule {}
