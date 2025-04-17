import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HistorialProcesosModel } from 'src/app/models/home/procesos/historialProcesosFilter';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { RequestModel } from 'src/app/utils/generateRequestModel';
import { GeneralConst } from 'src/app/constans/general-const';
@Injectable({
  providedIn: 'root',
})
export class HistorialProcesosService {
  constructor(private http: HttpClient) {}

  public filterHistorial(filter: HistorialProcesosModel): Observable<any> {
    let generate = new RequestModel();

    let req = generate.generateModel(
      GeneralConst.CONTROLLERS_METHODS[23].controller,
      GeneralConst.CONTROLLERS_METHODS[23].method,
      filter
    );
    return this.http.post<any>(`${environment.apiBaseUrl}index`, req);
  }

  public getActuacion(filter: HistorialProcesosModel): Observable<any> {
    let generate = new RequestModel();

    let req = generate.generateModel(
      GeneralConst.CONTROLLERS_METHODS[24].controller,
      GeneralConst.CONTROLLERS_METHODS[24].method,
      filter
    );
    return this.http.post<any>(`${environment.apiBaseUrl}index`, req);
  }
}
