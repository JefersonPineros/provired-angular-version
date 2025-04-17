import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StepsComponentComponent } from './steps-component.component';
import { StepsModule } from 'primeng/steps';

export * from './steps-component.component';

@NgModule({
  declarations: [StepsComponentComponent],
  imports: [CommonModule, StepsModule],
  exports: [StepsComponentComponent],
})
export class StepsComponentModule {}
