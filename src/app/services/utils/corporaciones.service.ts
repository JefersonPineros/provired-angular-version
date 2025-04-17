import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { RequestModel } from 'src/app/utils/generateRequestModel';
import { GeneralConst } from 'src/app/constans/general-const';

@Injectable({
  providedIn: 'root',
})
export class CorporacionesService {
  constructor(private http: HttpClient) {}

  public getCorporaciones(): Observable<any> {
    let generate = new RequestModel();

    let req = generate.generateModel(
      GeneralConst.CONTROLLERS_METHODS[10].controller,
      GeneralConst.CONTROLLERS_METHODS[10].method
    );

    return this.http.post<any>(environment.apiBaseUrl + 'index', req).pipe(
      map((res: any) => {
        let status = res['status' as any];
        if (status == 200) {
          return res.data;
        } else {
          throw new Error('error_corporacion', res);
        }
      })
    );
  }

  public getCorporacionesPorMunicipio(idMun: any): Observable<any> {
    let generate = new RequestModel();

    let req = generate.generateModel(
      GeneralConst.CONTROLLERS_METHODS[11].controller,
      GeneralConst.CONTROLLERS_METHODS[11].method,
      { id: idMun }
    );
    return this.http.post<any>(environment.apiBaseUrl + 'index', req).pipe(
      map((res: any) => {
        let status = res['status' as any];
        if (status == 200) {
          return res.data;
        } else {
          throw new Error('error_corporacion', res);
        }
      })
    );
  }
}
