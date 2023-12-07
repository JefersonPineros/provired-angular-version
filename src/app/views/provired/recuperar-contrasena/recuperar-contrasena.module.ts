import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RecuperarContrasenaRoutingModule } from './recuperar-contrasena-routing.module';
import { RecuperarContrasenaComponent } from './recuperar-contrasena.component';
import {
  ButtonComponentModule,
  CardComponentModule,
  InputPassModule,
  InputTextComponentModule,
} from 'src/app/components/components.module';
import { StepsComponentModule } from 'src/app/components/steps-component/steps-component.module';
import { MessageService } from 'primeng/api';
import { LoginServiceService } from 'src/app/services/login/login-service.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ToastModule } from 'primeng/toast';
import { RecaptchaFormsModule, RecaptchaModule } from 'ng-recaptcha';

@NgModule({
  declarations: [RecuperarContrasenaComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,

    RecuperarContrasenaRoutingModule,
    CardComponentModule,
    InputTextComponentModule,
    ButtonComponentModule,
    StepsComponentModule,
    InputPassModule,

    NgxSpinnerModule,
    ToastModule,
    RecaptchaModule,
    RecaptchaFormsModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [MessageService, LoginServiceService],
})
export class RecuperarContrasenaModule {}
