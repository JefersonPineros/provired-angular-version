import { Injectable } from '@angular/core';
import { SessionStorageService } from '../utils/session-storage.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class LogOutService {

  constructor(private http: HttpClient, private session: SessionStorageService) { }

  public logOutSession(): Observable<any> {
    let sess = this.session.getSession();
    return this.http.get(environment.apiBaseUrl + `login/out/${sess.user}/${sess.tipousuario}`);
  }
}
