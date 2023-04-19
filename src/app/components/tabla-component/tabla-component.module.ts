import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablaComponentComponent } from './tabla-component.component';
import { TableModule } from 'primeng/table';

export * from './tabla-component.component';

@NgModule({
  declarations: [
    TablaComponentComponent,
  ],
  imports: [
    CommonModule,

    TableModule
  ],
  exports: [
    TablaComponentComponent
  ]
})
export class TablaComponentModule { }
