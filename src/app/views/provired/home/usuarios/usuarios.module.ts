import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuariosRoutingModule } from './usuarios-routing.module';
import { UsuariosComponent } from './usuarios.component';
import { AdministradoresComponent } from './administradores/administradores.component';
import { OperativosComponent } from './operativos/operativos.component';
import { SuscriptoresComponent } from './suscriptores/suscriptores.component';


@NgModule({
  declarations: [
    UsuariosComponent,
    AdministradoresComponent,
    OperativosComponent,
    SuscriptoresComponent
  ],
  imports: [
    CommonModule,
    UsuariosRoutingModule
  ]
})
export class UsuariosModule { }
