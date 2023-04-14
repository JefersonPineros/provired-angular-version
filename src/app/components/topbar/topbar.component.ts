import { Component } from '@angular/core';
import { SessionStorageService } from 'src/app/services/utils/session-storage.service';
import { HomeComponent } from 'src/app/views/provired/home/home.component';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent {

  public user: string = '';

  public tipo: string = '';

  constructor(public app: HomeComponent, private session: SessionStorageService) {
    setTimeout(() => {
      let userLog = this.session.getStorage('user', 'json');
      this.user = userLog.data.nombre;
      this.tipo = userLog.tipousuario;
    }, 500)
  }

}
