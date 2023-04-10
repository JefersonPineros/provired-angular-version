import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SessionStorageService } from '../utils/session-storage.service';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class MenuServiceService {

  constructor(private http: HttpClient, private session: SessionStorageService) { }

  getMenu(): Observable<any> {
    let sessionActive = this.session.getSession();
    let menu;
    switch (sessionActive.tipousuario) {
      case 'S':
        menu = 'menu_s.json'
        break;
      case 'O':
        menu = 'menu_a.json'
        break;
      case 'A':
        menu = 'menu_o.json'
        break;
      default:
        break;
    }
    return this.http.get( environment.baseMocks + menu );
  }
}
