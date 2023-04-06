import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmailDespachosComponent } from './email-despachos.component';

const routes: Routes = [
  {
    path: '',
    component: EmailDespachosComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmailDespachosRoutingModule { }
