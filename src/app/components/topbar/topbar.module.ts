import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopbarComponent } from './topbar.component';
import { RouterModule } from '@angular/router';

export * from './topbar.component';


@NgModule({
  declarations: [
    TopbarComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [TopbarComponent]
})
export class TopbarModule { }
