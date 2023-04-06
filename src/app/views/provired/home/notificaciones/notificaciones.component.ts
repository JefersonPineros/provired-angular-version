import { Component, OnInit } from '@angular/core';
import { BreadcrumbService } from 'src/app/services/utils/app.breadcrumb.service';

@Component({
  selector: 'app-notificaciones',
  templateUrl: './notificaciones.component.html',
  styleUrls: ['./notificaciones.component.scss']
})
export class NotificacionesComponent implements OnInit {
  constructor(public breadCrumService: BreadcrumbService) {

  }

  ngOnInit(): void {
    this.breadCrumService.setItems(
      [
        {label: 'Notificaciones'}
      ]
    );
  }
}
