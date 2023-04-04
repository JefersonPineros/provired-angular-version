import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponentComponent } from './menu-component.component';
import { AppMenuitemComponent } from './app.menuitem.component';
import { RouterModule } from '@angular/router';

export * from './menu-component.component';

@NgModule({
  declarations: [
    MenuComponentComponent,
    AppMenuitemComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    MenuComponentComponent
  ]
})
export class MenuComponentModule { }
