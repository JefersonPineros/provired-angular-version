import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideMenuComponent } from './side-menu.component';
import { MenuModule } from 'primeng/menu';
import { RouterModule } from '@angular/router';

export * from './side-menu.component';


@NgModule({
  declarations: [
    SideMenuComponent
  ],
  imports: [
    CommonModule,
    MenuModule,
    RouterModule
  ],
  exports:[
    SideMenuComponent
  ]
})
export class SideMenuModule { }
