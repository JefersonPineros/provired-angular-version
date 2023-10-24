import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponentComponent } from './modal-component.component';
import { DialogModule } from 'primeng/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

export * from './modal-component.component';

@NgModule({
  declarations: [
    ModalComponentComponent
  ],
  imports: [
    CommonModule,
    DialogModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [
    ModalComponentComponent
  ]
})
export class ModalComponentModule { }
