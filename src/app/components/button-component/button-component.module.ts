import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonComponentComponent } from './button-component.component';
import { InputTextModule } from 'primeng/inputtext';

export * from './button-component.component';


@NgModule({
  declarations: [
    ButtonComponentComponent
  ],
  imports: [
    CommonModule,
    InputTextModule
  ],
  exports: [
    ButtonComponentComponent
  ]
})
export class ButtonComponentModule { }
