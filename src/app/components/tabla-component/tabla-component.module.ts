import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablaComponentComponent } from './tabla-component.component';
import { TableModule } from 'primeng/table';
import { InputText, InputTextModule } from 'primeng/inputtext';

export * from './tabla-component.component';

@NgModule({
  declarations: [
    TablaComponentComponent,
  ],
  imports: [
    CommonModule,
    TableModule,
    InputTextModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
  exports: [
    TablaComponentComponent
  ]
})
export class TablaComponentModule { }
