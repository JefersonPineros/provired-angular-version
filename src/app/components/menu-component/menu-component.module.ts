import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
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
    RouterModule,
    HttpClientModule
  ],
  exports:[
    MenuComponentComponent
  ]
})
export class MenuComponentModule { }
