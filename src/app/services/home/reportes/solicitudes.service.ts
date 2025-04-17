import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HistorialProcesosModel } from 'src/app/models/home/procesos/historialProcesosFilter';
import { environment } from 'src/environments/environment';
import { FilterSolicitudes } from 'src/app/models/home/procesos/FilterSolicitudes';
import { RequestModel } from 'src/app/utils/generateRequestModel';
import { GeneralConst } from 'src/app/constans/general-const';

@Injectable({
  providedIn: 'root',
})
export class SolicitudesService {
  constructor(private http: HttpClient) {}

  public getListSolicitudes(filter: HistorialProcesosModel): Observable<any> {
    let generate = new RequestModel();

    let req = generate.generateModel(
      GeneralConst.CONTROLLERS_METHODS[25].controller,
      GeneralConst.CONTROLLERS_METHODS[25].method,
      filter
    );

    return this.http.post(`${environment.apiBaseUrl}index`, req);
  }

  public updateSolicitud(data: any): Observable<any> {
    let generate = new RequestModel();

    let req = generate.generateModel(
      GeneralConst.CONTROLLERS_METHODS[26].controller,
      GeneralConst.CONTROLLERS_METHODS[26].method,
      data
    );
    return this.http.put(`${environment.apiBaseUrl}index`, req);
  }

  public getReportListProcesos(
    filterSolicitudes: FilterSolicitudes
  ): Observable<any> {
    let generate = new RequestModel();

    let req = generate.generateModel(
      GeneralConst.CONTROLLERS_METHODS[27].controller,
      GeneralConst.CONTROLLERS_METHODS[27].method,
      filterSolicitudes
    );

    return this.http.post(environment.apiBaseUrl + 'index', req);
  }
}
