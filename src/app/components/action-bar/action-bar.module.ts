import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActionBarComponent } from './action-bar.component';
import { BreadcrumbService } from 'src/app/services/utils/app.breadcrumb.service';

export * from './action-bar.component';

@NgModule({
  declarations: [ActionBarComponent],
  imports: [
    CommonModule
  ],
  exports: [
    ActionBarComponent
  ],
  providers: [
    BreadcrumbService
  ]
})
export class ActionBarModule { }
