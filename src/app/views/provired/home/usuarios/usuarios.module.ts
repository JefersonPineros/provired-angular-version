import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuariosRoutingModule } from './usuarios-routing.module';
import { UsuariosComponent } from './usuarios.component';
import { AdministradoresComponent } from './administradores/administradores.component';
import { OperativosComponent } from './operativos/operativos.component';
import { SuscriptoresComponent } from './suscriptores/suscriptores.component';
import { ProfileComponent } from './profile/profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonComponentModule, CardComponentModule, InputTextComponentModule } from 'src/app/components/components.module';


@NgModule({
  declarations: [
    UsuariosComponent,
    AdministradoresComponent,
    OperativosComponent,
    SuscriptoresComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    UsuariosRoutingModule,

    ReactiveFormsModule,
    FormsModule,

    InputTextComponentModule,
    CardComponentModule,
    ButtonComponentModule

  ],
  providers: []
})
export class UsuariosModule { }
