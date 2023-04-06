import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponentComponent } from './card-component.component';
import { SharedModule } from 'primeng/api';
import { CardModule } from 'primeng/card';

export * from './card-component.component';

@NgModule({
  declarations: [
    CardComponentComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CardModule
  ],
  exports: [
    CardComponentComponent,
    SharedModule
  ]
})
export class CardComponentModule { }
