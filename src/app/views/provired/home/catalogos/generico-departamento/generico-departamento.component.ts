import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { MessageService } from 'primeng/api';
import { DepartamentoModel } from 'src/app/models/home/genericos/departamentosModel';
import { BreadcrumbService } from 'src/app/services/utils/app.breadcrumb.service';
import { DepartamentosService } from 'src/app/services/utils/departamentos.service';

@Component({
  selector: 'app-generico-departamento',
  templateUrl: './generico-departamento.component.html',
  styleUrls: ['./generico-departamento.component.scss'],
})
export class GenericoDepartamentoComponent implements OnInit {
  public listDepartamentos: Array<DepartamentoModel>;
  public newDepartamento: DepartamentoModel;
  public showModal: boolean = false;
  public formDep: FormGroup = new FormGroup({});

  constructor(
    private breadCrumService: BreadcrumbService,
    private spinner: NgxSpinnerService,
    private message: MessageService,
    private departamentoService: DepartamentosService
  ) {
    this.listDepartamentos = [];
    this.newDepartamento = new DepartamentoModel();
    this.breadCrumService.setItems([
      { label: 'Catalogos' },
      { label: 'Generico departamento' },
    ]);
  }

  ngOnInit(): void {
    this.spinner.show();
    this.departamentoService.getDepartamento().subscribe({
      next: (resp) => {
        this.spinner.hide();
        this.listDepartamentos = resp;
      },
    });
  }

  crearDepartamento() {}
}
