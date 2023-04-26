import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BreadcrumbService } from 'src/app/services/utils/app.breadcrumb.service';

@Component({
  selector: 'app-procesos',
  templateUrl: './procesos.component.html',
  styleUrls: ['./procesos.component.scss']
})
export class ProcesosComponent implements OnInit {

  public ciudadModel: any;

  public formProceso: FormGroup = new FormGroup({});

  public listDep = [
    { codCiudad: '01', ciudad: 'Bogota' },
    { codCiudad: '02', ciudad: 'Medellin' },
    { codCiudad: '03', ciudad: 'Barranquilla' },
    { codCiudad: '04', ciudad: 'Valle del cauca' },
    { codCiudad: '05', ciudad: 'Choco' }
  ];

  constructor(public breadCrumService: BreadcrumbService) {}

  ngOnInit(): void {
    this.breadCrumService.setItems(
      [
        {label: 'Procesos'}
      ]
    );
  }

  crearProceso(eve: any): void {
    console.log(this.ciudadModel, 'Hola mundo');
  }

  clearFormulario(): void {
    console.log('Limpiar formulario');

  }
}
