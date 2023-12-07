import { Component, OnInit } from '@angular/core';
import { BreadcrumbService } from 'src/app/services/utils/app.breadcrumb.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(public breadCrumService: BreadcrumbService) { }

  ngOnInit(): void {
    console.log('Hola');

    this.breadCrumService.setItems(
      [
        { label: 'Usuarios' },
        { label: 'Perfil' }
      ]
    );
  }
}
