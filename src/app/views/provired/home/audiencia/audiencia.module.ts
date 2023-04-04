import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AudienciaComponent } from './audiencia.component';
import { AudienciaRoutingModule } from './audiencia-routing.module';



@NgModule({
  declarations: [
    AudienciaComponent
  ],
  imports: [
    CommonModule,
    AudienciaRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AudienciaModule { }
