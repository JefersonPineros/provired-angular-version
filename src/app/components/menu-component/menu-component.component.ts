import { Component, OnInit } from '@angular/core';
import { MenuServiceService } from 'src/app/services/menu/menu-service.service';
import { HomeComponent } from 'src/app/views/provired/home/home.component';

@Component({
  selector: 'app-menu-component',
  templateUrl: './menu-component.component.html',
  styleUrls: ['./menu-component.component.scss'],
  providers: [MenuServiceService]
})
export class MenuComponentComponent implements OnInit {
  model: any[] = [];

  constructor(public app: HomeComponent, private menuObject: MenuServiceService) { }

  ngOnInit() {
    this.menuObject.getMenu().subscribe({
      next: (res) => {
        this.model = res;
      }
    });
  }
}
