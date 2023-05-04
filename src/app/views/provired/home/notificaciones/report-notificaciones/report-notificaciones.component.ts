import { Component, OnInit } from '@angular/core';
import { BreadcrumbService } from 'src/app/services/utils/app.breadcrumb.service';

@Component({
  selector: 'app-report-notificaciones',
  templateUrl: './report-notificaciones.component.html',
  styleUrls: ['./report-notificaciones.component.scss']
})
export class ReportNotificacionesComponent implements OnInit {

  constructor(public breadCrumService: BreadcrumbService) { }

  ngOnInit(): void {
    this.breadCrumService.setItems(
      [
        { label: 'Reporte de notificaciones' }
      ]
    );
  }

}
