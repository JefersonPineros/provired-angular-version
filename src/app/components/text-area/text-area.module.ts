import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextAreaComponent } from './text-area.component';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

export * from './text-area.component';


@NgModule({
  declarations: [
    TextAreaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    InputTextareaModule
  ],
  exports: [
    TextAreaComponent
  ]
})
export class TextAreaModule { }
