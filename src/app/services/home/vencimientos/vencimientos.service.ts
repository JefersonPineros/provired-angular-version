import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SessionStorageService } from '../../utils/session-storage.service';
import { ResponseLogin } from 'src/app/models/login/responseLogin';
import { Vencimientos } from 'src/app/models/home/vencimientos/vencimientos';
@Injectable({
  providedIn: 'root'
})
export class VencimientosService {

  private sessionLog: ResponseLogin = new ResponseLogin();

  constructor(private http: HttpClient, private session: SessionStorageService) { }


  getVencimientos(): Observable<Array<Vencimientos>> {
    this.sessionLog = this.session.getSession();
    return this.http.get<Array<Vencimientos>>(environment.apiBaseUrl + 'audiencias/getVencimientos/' + `${this.sessionLog.user}`).pipe(
      map((res: any) => {
        let status = res['status' as any];
        if (status == 200) {
          return res.data;
        } else {
          throw new Error('Se ha presentado un error');
        }
      })
    );
  }
}
