import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponentComponent } from './modal-component.component';
import { DialogModule } from 'primeng/dialog';

export * from './modal-component.component';

@NgModule({
  declarations: [
    ModalComponentComponent
  ],
  imports: [
    CommonModule,
    DialogModule
  ],
  exports: [
    ModalComponentComponent
  ]
})
export class ModalComponentModule { }
