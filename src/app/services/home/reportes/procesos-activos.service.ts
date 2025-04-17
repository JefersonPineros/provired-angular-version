import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { FilterProceso } from 'src/app/models/home/procesos/filterProcesos';
import { environment } from 'src/environments/environment';
import { UpProcesoActivo } from 'src/app/models/home/procesos/updateProcesoActivo';
import { FilterGeneral } from 'src/app/models/home/reports/filterGeneral';
import { InformeProcesal } from 'src/app/models/home/reports/informeProcesal';
import { CaptchaSendDataModel } from 'src/app/models/home/procesos/captchaSendData';
import { RequestModel } from 'src/app/utils/generateRequestModel';
import { GeneralConst } from 'src/app/constans/general-const';

@Injectable({
  providedIn: 'root',
})
export class ProcesosActivosService {
  constructor(private http: HttpClient) {}

  public getListProcesoActivo(filterActivo: FilterProceso): Observable<any> {
    let generate = new RequestModel();

    let req = generate.generateModel(
      GeneralConst.CONTROLLERS_METHODS[18].controller,
      GeneralConst.CONTROLLERS_METHODS[18].method,
      filterActivo
    );

    return this.http.post<any>(environment.apiBaseUrl + 'index', req).pipe(
      map((res: any) => {
        let status = res['status' as any];
        if ((status = 200)) {
          return res;
        }
      })
    );
  }

  public updateProcesosActivo(updateActivo: UpProcesoActivo): Observable<any> {
    let generate = new RequestModel();

    let req = generate.generateModel(
      GeneralConst.CONTROLLERS_METHODS[6].controller,
      GeneralConst.CONTROLLERS_METHODS[6].method,
      updateActivo
    );

    return this.http.post<any>(environment.apiBaseUrl + 'index', req);
  }

  public deleteProcesoActivo(deleteId: CaptchaSendDataModel): Observable<any> {
    let generate = new RequestModel();

    let req = generate.generateModel(
      GeneralConst.CONTROLLERS_METHODS[39].controller,
      GeneralConst.CONTROLLERS_METHODS[39].method,
      deleteId
    );
    return this.http.post<any>(environment.apiBaseUrl + 'index', req);
  }

  public getStructureInfoProcesal(
    filter: FilterGeneral
  ): Observable<InformeProcesal> {
    let generate = new RequestModel();

    let req = generate.generateModel(
      GeneralConst.CONTROLLERS_METHODS[35].controller,
      GeneralConst.CONTROLLERS_METHODS[35].method,
      filter
    );
    return this.http.post(environment.apiBaseUrl + 'index', req);
  }

  public getReportActivos(filterActivo: FilterProceso): Observable<any> {
    let generate = new RequestModel();

    let req = generate.generateModel(
      GeneralConst.CONTROLLERS_METHODS[38].controller,
      GeneralConst.CONTROLLERS_METHODS[38].method,
      filterActivo
    );

    return this.http.post<any>(environment.apiBaseUrl + 'index', req);
  }

  public getReportInfoProcesal(filterActivo: FilterProceso): Observable<any> {
    let generate = new RequestModel();

    let req = generate.generateModel(
      GeneralConst.CONTROLLERS_METHODS[37].controller,
      GeneralConst.CONTROLLERS_METHODS[37].method,
      filterActivo
    );

    return this.http.post<any>(environment.apiBaseUrl + 'index', req);
  }

  public insertInformeProcesal(informe: InformeProcesal): Observable<any> {
    let generate = new RequestModel();

    let req = generate.generateModel(
      GeneralConst.CONTROLLERS_METHODS[36].controller,
      GeneralConst.CONTROLLERS_METHODS[36].method,
      informe
    );

    return this.http.post<any>(`${environment.apiBaseUrl}index`, req);
  }
}
