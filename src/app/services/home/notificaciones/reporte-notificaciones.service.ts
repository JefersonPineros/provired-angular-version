import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, retry } from 'rxjs';
import { FilterDateModel } from 'src/app/models/home/notificaciones/filterDate';
import { environment } from 'src/environments/environment';
import { RequestModel } from 'src/app/utils/generateRequestModel';
import { GeneralConst } from 'src/app/constans/general-const';

@Injectable({
  providedIn: 'root',
})
export class ReporteNotificacionesService {
  constructor(private http: HttpClient) {}

  getReporteNotificaciones(filters: FilterDateModel): Observable<any> {
    let generate = new RequestModel();

    let req = generate.generateModel(
      GeneralConst.CONTROLLERS_METHODS[30].controller,
      GeneralConst.CONTROLLERS_METHODS[30].method,
      filters
    );

    return this.http.post(environment.apiBaseUrl + 'index', req);
  }

  getExcelNotificaciones(userReport: any): Observable<any> {
    let generate = new RequestModel();

    let req = generate.generateModel(
      GeneralConst.CONTROLLERS_METHODS[31].controller,
      GeneralConst.CONTROLLERS_METHODS[31].method,
      userReport
    );

    return this.http.post(environment.apiBaseUrl + 'index', req);
  }

  downloadExcel(url: string): Observable<Blob> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/pdf', // Cambia el tipo de contenido según el tipo de archivo que deseas descargar
      Accept: 'application/pdf', // Cambia el tipo de contenido según el tipo de archivo que deseas descargar
    });
    return this.http.get<Blob>(url);
  }
}
