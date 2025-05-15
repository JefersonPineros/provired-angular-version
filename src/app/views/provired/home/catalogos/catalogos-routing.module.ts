import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GenericoDepartamentoComponent } from './generico-departamento/generico-departamento.component';
import { GenericoMunicipiosComponent } from './generico-municipios/generico-municipios.component';
import { GenericoCorporacionComponent } from './generico-corporacion/generico-corporacion.component';
import { GenericoDespachosComponent } from './generico-despachos/generico-despachos.component';

const routes: Routes = [
  {
    path: 'generico_departamentos',
    component: GenericoDepartamentoComponent,
  },
  {
    path: 'generico_municipios',
    component: GenericoMunicipiosComponent,
  },
  {
    path: 'generico_corporacion',
    component: GenericoCorporacionComponent,
  },
  {
    path: 'generico_despachos',
    component: GenericoDespachosComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CatalogosRoutingModule {}
