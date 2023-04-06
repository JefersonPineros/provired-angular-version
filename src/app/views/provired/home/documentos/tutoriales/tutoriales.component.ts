import { Component, OnInit } from '@angular/core';
import { BreadcrumbService } from 'src/app/services/utils/app.breadcrumb.service';

@Component({
  selector: 'app-tutoriales',
  templateUrl: './tutoriales.component.html',
  styleUrls: ['./tutoriales.component.scss']
})
export class TutorialesComponent implements OnInit {
  constructor(public breadCrumService: BreadcrumbService) {}

  ngOnInit(): void {
    this.breadCrumService.setItems(
      [
        {label: 'Documentos'},
        {label: 'Tutoriales'},
      ]
    );
  }
}
