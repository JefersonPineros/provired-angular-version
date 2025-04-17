import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, map } from 'rxjs';
import { RequestModel } from 'src/app/utils/generateRequestModel';
import { GeneralConst } from 'src/app/constans/general-const';
@Injectable({
  providedIn: 'root',
})
export class DespachosService {
  constructor(private http: HttpClient) {}

  public getDespacho(): Observable<any> {
    let generate = new RequestModel();

    let req = generate.generateModel(
      GeneralConst.CONTROLLERS_METHODS[13].controller,
      GeneralConst.CONTROLLERS_METHODS[13].method
    );
    return this.http.post<any>(environment.apiBaseUrl + 'index', req).pipe(
      map((res: any) => {
        let status = res['status' as any];
        if (status == 200) {
          return res.data;
        } else {
          throw new Error('error_despacho', res);
        }
      })
    );
  }

  public getDespachoPorCorp(idCorp: any): Observable<any> {
    let generate = new RequestModel();

    let req = generate.generateModel(
      GeneralConst.CONTROLLERS_METHODS[14].controller,
      GeneralConst.CONTROLLERS_METHODS[14].method,
      { id: idCorp }
    );
    return this.http.post<any>(environment.apiBaseUrl + 'index', req).pipe(
      map((res: any) => {
        let status = res['status' as any];
        if (status == 200) {
          return res.data;
        } else {
          throw new Error('error_despacho', res);
        }
      })
    );
  }
}
