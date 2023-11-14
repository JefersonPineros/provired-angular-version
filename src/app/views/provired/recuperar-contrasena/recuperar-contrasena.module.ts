import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecuperarContrasenaRoutingModule } from './recuperar-contrasena-routing.module';
import { RecuperarContrasenaComponent } from './recuperar-contrasena.component';

@NgModule({
  declarations: [RecuperarContrasenaComponent],
  imports: [CommonModule, RecuperarContrasenaRoutingModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class RecuperarContrasenaModule {}
