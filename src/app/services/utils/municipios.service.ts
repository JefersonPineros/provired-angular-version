import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { RequestModel } from 'src/app/utils/generateRequestModel';
import { GeneralConst } from 'src/app/constans/general-const';

@Injectable({
  providedIn: 'root',
})
export class MunicipiosService {
  constructor(private http: HttpClient) {}

  public getMunicipio(): Observable<any> {
    let generate = new RequestModel();

    let req = generate.generateModel(
      GeneralConst.CONTROLLERS_METHODS[9].controller,
      GeneralConst.CONTROLLERS_METHODS[9].method
    );
    return this.http.post(environment.apiBaseUrl + 'index', req).pipe(
      map((res: any) => {
        let status = res['status' as any];
        if (status == 200) {
          return res.data;
        } else {
          throw new Error('Se ha presentado un error.');
        }
      })
    );
  }

  public getMunicipioPorDep(idDepto: string): Observable<any[]> {
    let generate = new RequestModel();

    let req = generate.generateModel(
      GeneralConst.CONTROLLERS_METHODS[12].controller,
      GeneralConst.CONTROLLERS_METHODS[12].method,
      { id: idDepto }
    );
    return this.http.post<any[]>(environment.apiBaseUrl + 'index', req).pipe(
      map((res: any) => {
        let status = res['status' as any];
        if (status == 200) {
          return res.data;
        } else {
          throw new Error('error_message', res);
        }
      })
    );
  }
}
