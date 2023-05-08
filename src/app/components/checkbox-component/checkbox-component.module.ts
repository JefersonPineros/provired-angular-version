import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckboxComponentComponent } from './checkbox-component.component';
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

export * from './checkbox-component.component';

@NgModule({
  declarations: [
    CheckboxComponentComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,

    CheckboxModule
  ],
  exports: [
    CheckboxComponentComponent
  ]
})
export class CheckboxComponentModule { }
