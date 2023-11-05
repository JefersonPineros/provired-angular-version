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
import { MenuServiceService } from 'src/app/services/menu/menu-service.service';
import { UserServiceService } from 'src/app/services/user/user-service.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserInterceptorService } from 'src/app/services/interceptor/user/user-interceptor.service';
import { LogOutService } from 'src/app/services/logOut/log-out.service';
import { AudienciaService } from 'src/app/services/home/audiencia/audiencia.service';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    RouterModule,
    MenuComponentModule,
    TopbarModule,
    ActionBarModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    MenuService,
    BreadcrumbService,
    MenuServiceService,
    UserServiceService,
    LogOutService,
    AudienciaService,
    { provide: HTTP_INTERCEPTORS, useClass: UserInterceptorService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class HomeModule { }
