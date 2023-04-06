import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActionBarModule, MenuComponentModule, TopbarModule } from 'src/app/components/components.module';
import { MenuService } from 'src/app/services/utils/app.menu.service';
import { ReportesComponent } from './reportes/reportes.component';
import { BreadcrumbService } from 'src/app/services/utils/app.breadcrumb.service';
import { RouterModule } from '@angular/router';
import { AppComponent } from 'src/app/app.component';


@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    RouterModule,
    FormsModule,

    ReactiveFormsModule,
    MenuComponentModule,
    TopbarModule,
    ActionBarModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    MenuService,
    BreadcrumbService
  ],
  bootstrap: [AppComponent]
})
export class HomeModule { }
