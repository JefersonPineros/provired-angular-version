import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownComponentComponent } from './dropdown-component.component';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

export * from './dropdown-component.component';

@NgModule({
  declarations: [
    DropdownComponentComponent
  ],
  imports: [
    CommonModule,

    FormsModule,
    ReactiveFormsModule,

    DropdownModule
  ],
  exports: [
    DropdownComponentComponent
  ]
})
export class DropdownComponentModule { }
