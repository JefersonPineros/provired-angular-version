import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RadioButtonComponentComponent } from './radio-button-component.component';
import { RadioButtonModule } from 'primeng/radiobutton';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

export * from './radio-button-component.component';


@NgModule({
  declarations: [
    RadioButtonComponentComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RadioButtonModule
  ],
  exports: [
    RadioButtonComponentComponent
  ]
})
export class RadioButtonComponentModule { }
