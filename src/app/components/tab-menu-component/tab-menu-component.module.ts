import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabMenuModule } from 'primeng/tabmenu';
import { TabMenuComponentComponent } from './tab-menu-component.component';

export * from './tab-menu-component.component';

@NgModule({
  declarations: [TabMenuComponentComponent],
  imports: [CommonModule, TabMenuModule],
  exports: [TabMenuComponentComponent],
})
export class TabMenuComponentModule {}
