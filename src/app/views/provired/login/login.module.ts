import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing.module'
import { ButtonComponentModule, CardComponentModule, InputTextComponentModule, ModalComponentModule } from 'src/app/components/components.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginServiceService } from 'src/app/services/login/login-service.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginInterceptorService } from 'src/app/services/interceptor/login-interceptor.service';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ToastModule } from 'primeng/toast';
import { TerminosService } from 'src/app/services/login/terminos.service';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,

    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

    CardComponentModule,
    InputTextComponentModule,
    ButtonComponentModule,
    NgxSpinnerModule,
    ToastModule,
    ModalComponentModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    LoginServiceService,
    TerminosService,
    { provide: HTTP_INTERCEPTORS ,useClass: LoginInterceptorService, multi: true }
  ]
})
export class LoginModule { }
