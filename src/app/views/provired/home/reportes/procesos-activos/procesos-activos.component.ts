import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { SearchProcesos } from 'src/app/models/interfaces/filterProcesosGenerales';
import { BreadcrumbService } from 'src/app/services/utils/app.breadcrumb.service';

@Component({
  selector: 'app-procesos-activos',
  templateUrl: './procesos-activos.component.html',
  styleUrls: ['./procesos-activos.component.scss']
})
export class ProcesosActivosComponent implements OnInit {

  public formSearchProcess: SearchProcesos = {} as SearchProcesos;
  public fb: FormGroup;

  constructor(public breadCrumService: BreadcrumbService) {
    this.fb = new FormGroup({});
  }

  ngOnInit(): void {
    this.breadCrumService.setItems(
      [
        { label: 'Reportes' },
        { label: 'Listado procesos activos' }
      ]
    );
  }

  consultarProcesos(): void {
    console.log(this.formSearchProcess);
  }
}
