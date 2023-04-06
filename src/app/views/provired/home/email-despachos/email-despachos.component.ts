import { Component, OnInit } from '@angular/core';
import { BreadcrumbService } from 'src/app/services/utils/app.breadcrumb.service';

@Component({
  selector: 'app-email-despachos',
  templateUrl: './email-despachos.component.html',
  styleUrls: ['./email-despachos.component.scss']
})
export class EmailDespachosComponent implements OnInit {
  constructor(public breadCrumService: BreadcrumbService) {}

  ngOnInit(): void {
    this.breadCrumService.setItems(
      [
        {label: 'Email despachos'}
      ]
    );
  }
}
