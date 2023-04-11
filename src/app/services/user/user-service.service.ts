import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SessionStorageService } from '../utils/session-storage.service';
@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http: HttpClient, private session: SessionStorageService) { }

  getUser(): Observable<any> {

    let sess = this.session.getSession();
    return this.http.get(environment.apiBaseUrl+ `user/getUser/${sess.user}/${sess.tipousuario}`);
  }
}
