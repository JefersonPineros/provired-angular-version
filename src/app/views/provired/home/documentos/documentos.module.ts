import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocumentosRoutingModule } from './documentos-routing.module';
import { DocumentosComponent } from './documentos.component';
import { AutorizacionesComponent } from './autorizaciones/autorizaciones.component';
import { TutorialesComponent } from './tutoriales/tutoriales.component';
import { TerminosComponent } from './terminos/terminos.component';
import { ButtonComponentModule, CardComponentModule, SideMenuModule } from 'src/app/components/components.module';


@NgModule({
  declarations: [
    DocumentosComponent,
    AutorizacionesComponent,
    TutorialesComponent,
    TerminosComponent
  ],
  imports: [
    CommonModule,
    DocumentosRoutingModule,
    CardComponentModule,
    SideMenuModule,
    ButtonComponentModule
  ]
})
export class DocumentosModule { }
