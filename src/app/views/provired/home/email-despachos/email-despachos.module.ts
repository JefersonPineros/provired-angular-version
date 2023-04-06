import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmailDespachosRoutingModule } from './email-despachos-routing.module';
import { EmailDespachosComponent } from './email-despachos.component';


@NgModule({
  declarations: [EmailDespachosComponent],
  imports: [
    CommonModule,
    EmailDespachosRoutingModule
  ]
})
export class EmailDespachosModule { }
