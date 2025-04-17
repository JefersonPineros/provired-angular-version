import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenuServiceService } from 'src/app/services/menu/menu-service.service';
import { SessionStorageService } from 'src/app/services/utils/session-storage.service';
import { HomeComponent } from 'src/app/views/provired/home/home.component';

@Component({
  selector: 'app-menu-component',
  templateUrl: './menu-component.component.html',
  styleUrls: ['./menu-component.component.scss'],
  providers: [MenuServiceService],
})
export class MenuComponentComponent implements OnInit {
  model: any[] = [];

  constructor(
    public app: HomeComponent,
    private menuObject: MenuServiceService,
    private session: SessionStorageService
  ) {}

  ngOnInit() {
    this.menuObject.getMenu().subscribe({
      next: (res) => {
        setTimeout(() => {
          let ses = this.session.getSession();
          switch (ses.tipousuario) {
            case 'S':
              this.model = this.validPermisosSuscriptor(res);
              break;
            case 'A':
              this.model = res;
              break;
            case 'O':
              this.model = res;
              break;
            default:
              this.model = res;
              break;
          }
        }, 500);
      },
    });
  }

  validPermisosSuscriptor(jsonObject: any[]): any {
    let ses = this.session.getStorage('user', 'json');
    let menuItem: MenuItem[] = jsonObject as MenuItem[];

    if (ses.data.misprocesosauto == 0) {
      for (let item of menuItem) {
        if (item.label == 'Reportes') {
          let indexItem = item.items
            .map((x) => x.label)
            .indexOf('Historial de procesos');
          if (indexItem > -1) {
            item.items.splice(indexItem, 1);
          }
        }
      }
    }
    return menuItem;
  }
}
