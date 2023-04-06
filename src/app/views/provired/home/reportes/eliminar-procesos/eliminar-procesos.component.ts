import { Component, OnInit } from '@angular/core';
import { BreadcrumbService } from 'src/app/services/utils/app.breadcrumb.service';

@Component({
  selector: 'app-eliminar-procesos',
  templateUrl: './eliminar-procesos.component.html',
  styleUrls: ['./eliminar-procesos.component.scss']
})
export class EliminarProcesosComponent implements OnInit {
  constructor(public breadCrumService: BreadcrumbService) {

  }

  ngOnInit(): void {
    this.breadCrumService.setItems(
      [
        {label: 'Reportes'},
        {label: 'Eliminación masiva de procesos'}
      ]
    );
  }
}
