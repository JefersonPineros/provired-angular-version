import { Component, OnInit } from '@angular/core';
import { BreadcrumbService } from 'src/app/services/utils/app.breadcrumb.service';

@Component({
  selector: 'app-procesos-activos',
  templateUrl: './procesos-activos.component.html',
  styleUrls: ['./procesos-activos.component.scss']
})
export class ProcesosActivosComponent implements OnInit {
  constructor(public breadCrumService: BreadcrumbService) {

  }

  ngOnInit(): void {
    this.breadCrumService.setItems(
      [
        {label: 'Reportes'},
        {label: 'Listado procesos activos'}
      ]
    );
  }
}
