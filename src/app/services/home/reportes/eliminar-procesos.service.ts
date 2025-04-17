import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { FilterProceso } from 'src/app/models/home/procesos/filterProcesos';
import { EliminarProcesoModel } from 'src/app/models/home/procesos/eliminarProceso';
import { environment } from 'src/environments/environment';
import { CaptchaSendDataModel } from 'src/app/models/home/procesos/captchaSendData';
import { RequestModel } from 'src/app/utils/generateRequestModel';
import { GeneralConst } from 'src/app/constans/general-const';

@Injectable({
  providedIn: 'root',
})
export class EliminarProcesosService {
  constructor(private http: HttpClient) {}

  public getListEliminarProcesos(
    filter: FilterProceso
  ): Observable<Array<EliminarProcesoModel>> {
    let generate = new RequestModel();

    let req = generate.generateModel(
      GeneralConst.CONTROLLERS_METHODS[19].controller,
      GeneralConst.CONTROLLERS_METHODS[19].method,
      filter
    );
    return this.http.post(environment.apiBaseUrl + 'index', req).pipe(
      map((res: any) => {
        let status = res['status' as any];
        if (status == 200) {
          return res.data;
        } else {
          throw new HttpErrorResponse({
            error: res,
            status: 200,
            statusText: 'Error lógico',
            url: environment.apiBaseUrl + 'index',
          });
        }
      })
    );
  }

  public deleteProcesos(data: CaptchaSendDataModel): Observable<any> {
    let generate = new RequestModel();

    let req = generate.generateModel(
      GeneralConst.CONTROLLERS_METHODS[20].controller,
      GeneralConst.CONTROLLERS_METHODS[20].method,
      data
    );
    return this.http.post(environment.apiBaseUrl + 'index', req);
  }

  public transferirProcesos(data: CaptchaSendDataModel): Observable<any> {
    let generate = new RequestModel();

    let req = generate.generateModel(
      GeneralConst.CONTROLLERS_METHODS[21].controller,
      GeneralConst.CONTROLLERS_METHODS[21].method,
      data
    );

    return this.http.post(`${environment.apiBaseUrl}index`, req);
  }

  public getUsersTransfer(userId: number): Observable<any> {
    let generate = new RequestModel();

    let req = generate.generateModel(
      GeneralConst.CONTROLLERS_METHODS[22].controller,
      GeneralConst.CONTROLLERS_METHODS[22].method,
      { user: userId }
    );
    return this.http.post(`${environment.apiBaseUrl}index`, req).pipe(
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
