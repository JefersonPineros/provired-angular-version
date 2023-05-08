import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { SearchProcesos } from 'src/app/models/interfaces/filterProcesosGenerales';
import { BreadcrumbService } from 'src/app/services/utils/app.breadcrumb.service';

@Component({
  selector: 'app-eliminar-procesos',
  templateUrl: './eliminar-procesos.component.html',
  styleUrls: ['./eliminar-procesos.component.scss']
})
export class EliminarProcesosComponent implements OnInit {

  public formSearchProcess: SearchProcesos = {} as SearchProcesos;
  public fb: FormGroup;

  constructor(public breadCrumService: BreadcrumbService) {
    this.fb = new FormGroup({});
  }

  ngOnInit(): void {
    this.breadCrumService.setItems(
      [
        { label: 'Reportes' },
        { label: 'Eliminación masiva de procesos' }
      ]
    );
  }

  consultarProcesos(): void {
    console.log(this.formSearchProcess);
  }
}
