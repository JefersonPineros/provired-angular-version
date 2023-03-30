import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextComponentComponent } from './input-text-component.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { InputTextModule } from 'primeng/inputtext';

export * from './input-text-component.component';


@NgModule({
  declarations: [
    InputTextComponentComponent
  ],
  imports: [
    CommonModule,
    InputTextModule,

    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    InputTextComponentComponent
  ]
})
export class InputTextComponentModule { }
