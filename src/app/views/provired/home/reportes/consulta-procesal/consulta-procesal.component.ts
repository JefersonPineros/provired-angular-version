import { Component, OnInit } from '@angular/core';
import { BreadcrumbService } from 'src/app/services/utils/app.breadcrumb.service';

@Component({
  selector: 'app-consulta-procesal',
  templateUrl: './consulta-procesal.component.html',
  styleUrls: ['./consulta-procesal.component.scss']
})
export class ConsultaProcesalComponent implements OnInit {
  constructor(public breadCrumService: BreadcrumbService) {

  }

  ngOnInit(): void {
    this.breadCrumService.setItems(
      [
        {label: 'Reportes'},
        {label: 'Consulta impulso procesal'}
      ]
    );
  }
}
