import { Component, OnInit } from '@angular/core';
import { BreadcrumbService } from 'src/app/services/utils/app.breadcrumb.service';

@Component({
  selector: 'app-procesos-generales',
  templateUrl: './procesos-generales.component.html',
  styleUrls: ['./procesos-generales.component.scss']
})
export class ProcesosGeneralesComponent implements OnInit {
  constructor(public breadCrumService: BreadcrumbService) {

  }

  ngOnInit(): void {
    this.breadCrumService.setItems(
      [
        {label: 'Reportes'},
        {label: 'Listado procesos generales'}
      ]
    );
  }
}
