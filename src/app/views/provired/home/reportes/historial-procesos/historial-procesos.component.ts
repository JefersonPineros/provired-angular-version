import { Component, OnInit } from '@angular/core';
import { BreadcrumbService } from 'src/app/services/utils/app.breadcrumb.service';

@Component({
  selector: 'app-historial-procesos',
  templateUrl: './historial-procesos.component.html',
  styleUrls: ['./historial-procesos.component.scss']
})
export class HistorialProcesosComponent implements OnInit {
  constructor(public breadCrumService: BreadcrumbService) {

  }

  ngOnInit(): void {
    this.breadCrumService.setItems(
      [
        {label: 'Reportes'},
        {label: 'Historial de procesos'}
      ]
    );
  }
}
