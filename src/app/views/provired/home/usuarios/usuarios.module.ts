import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuariosRoutingModule } from './usuarios-routing.module';
import { UsuariosComponent } from './usuarios.component';
import { AdministradoresComponent } from './administradores/administradores.component';
import { OperativosComponent } from './operativos/operativos.component';
import { SuscriptoresComponent } from './suscriptores/suscriptores.component';
import { ProfileComponent } from './profile/profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  ButtonComponentModule,
  CardComponentModule,
  InputPassModule,
  InputTextComponentModule,
  TabMenuComponentModule,
} from 'src/app/components/components.module';
import { RecaptchaFormsModule, RecaptchaModule } from 'ng-recaptcha';
import { ToastModule } from 'primeng/toast';
import { NgxSpinnerModule } from 'ngx-spinner';
import { MessageService } from 'primeng/api';

@NgModule({
  declarations: [
    UsuariosComponent,
    AdministradoresComponent,
    OperativosComponent,
    SuscriptoresComponent,
    ProfileComponent,
  ],
  imports: [
    CommonModule,
    UsuariosRoutingModule,

    ReactiveFormsModule,
    FormsModule,

    InputTextComponentModule,
    CardComponentModule,
    ButtonComponentModule,
    TabMenuComponentModule,
    InputPassModule,

    RecaptchaModule,
    RecaptchaFormsModule,
    ToastModule,
    NgxSpinnerModule,
  ],
  providers: [MessageService],
})
export class UsuariosModule {}
