import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { FilterProceso } from 'src/app/models/home/procesos/filterProcesos';
import { UpdateProceso } from 'src/app/models/home/procesos/updateProceso';
import { RequestModel } from 'src/app/utils/generateRequestModel';
import { GeneralConst } from 'src/app/constans/general-const';
@Injectable({
  providedIn: 'root',
})
export class ProcesosGeneralesService {
  constructor(private http: HttpClient) {}

  public getListProcesos(filterProceso: FilterProceso): Observable<any> {
    let generate = new RequestModel();

    let req = generate.generateModel(
      GeneralConst.CONTROLLERS_METHODS[15].controller,
      GeneralConst.CONTROLLERS_METHODS[15].method,
      filterProceso
    );

    return this.http.post<any>(environment.apiBaseUrl + 'index', req).pipe(
      map((res: any) => {
        let status = res['status' as any];
        if ((status = 200)) {
          return res;
        } else {
          throw new Error('Se ha presentado un error');
        }
      })
    );
  }

  public updateProceso(upProceso: UpdateProceso): Observable<any> {
    let generate = new RequestModel();

    let req = generate.generateModel(
      GeneralConst.CONTROLLERS_METHODS[16].controller,
      GeneralConst.CONTROLLERS_METHODS[16].method,
      upProceso
    );

    return this.http.post<any>(environment.apiBaseUrl + 'index', req);
  }

  public getReportListProcesos(filterProceso: FilterProceso): Observable<any> {
    let generate = new RequestModel();

    let req = generate.generateModel(
      GeneralConst.CONTROLLERS_METHODS[17].controller,
      GeneralConst.CONTROLLERS_METHODS[17].method,
      filterProceso
    );

    return this.http.post(environment.apiBaseUrl + 'index', req);
  }
}
