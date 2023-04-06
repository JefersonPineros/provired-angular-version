import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageRedRoutingModule } from './page-red-routing.module';
import { PageRedComponent } from './page-red.component';


@NgModule({
  declarations: [
    PageRedComponent
  ],
  imports: [
    CommonModule,
    PageRedRoutingModule
  ]
})
export class PageRedModule { }
