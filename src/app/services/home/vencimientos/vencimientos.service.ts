import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SessionStorageService } from '../../utils/session-storage.service';
import { ResponseLogin } from 'src/app/models/login/responseLogin';
import { Vencimientos } from 'src/app/models/home/vencimientos/vencimientos';
import { RequestModel } from 'src/app/utils/generateRequestModel';
import { GeneralConst } from 'src/app/constans/general-const';
@Injectable({
  providedIn: 'root',
})
export class VencimientosService {
  private sessionLog: ResponseLogin = new ResponseLogin();

  constructor(
    private http: HttpClient,
    private session: SessionStorageService
  ) {}

  getVencimientos(): Observable<Array<Vencimientos>> {
    let sess = this.session.getSession();
    const { user } = sess;
    let generarReq = new RequestModel();

    let req = generarReq.generateModel(
      GeneralConst.CONTROLLERS_METHODS[1].controller,
      GeneralConst.CONTROLLERS_METHODS[1].method,
      { user }
    );

    this.sessionLog = this.session.getSession();
    return this.http
      .post<Array<Vencimientos>>(environment.apiBaseUrl + 'index', req)
      .pipe(
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
