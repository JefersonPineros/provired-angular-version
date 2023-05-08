import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonComponentComponent } from './button-component.component';
import { ButtonModule } from 'primeng/button';
import { TooltipModule } from 'primeng/tooltip';

export * from './button-component.component';


@NgModule({
  declarations: [
    ButtonComponentComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    TooltipModule
  ],
  exports: [
    ButtonComponentComponent
  ]
})
export class ButtonComponentModule { }
