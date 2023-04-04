import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MenuComponentModule, TopbarModule } from 'src/app/components/components.module';
import { MenuService } from 'src/app/services/utils/app.menu.service';
import { ReportesComponent } from './reportes/reportes.component';


@NgModule({
  declarations: [
    HomeComponent,
    ReportesComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MenuComponentModule,
    TopbarModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    MenuService
  ]
})
export class HomeModule { }
