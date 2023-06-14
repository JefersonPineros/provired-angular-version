import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, retry } from 'rxjs';
import { FilterDateModel } from 'src/app/models/home/notificaciones/filterDate';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReporteNotificacionesService {

  constructor(private http: HttpClient) { }

  getReporteNotificaciones(filters: FilterDateModel): Observable<any> {
    return this.http.post(environment.apiBaseUrl + 'reporteNotificaciones', filters);
  }

  getExcelNotificaciones(userReport: any): Observable<any> {
    return this.http.post(environment.apiBaseUrl + 'reporteNotificaciones/exportExcel', userReport);
  }

  downloadExcel(url: string): Observable<Blob> {
    return this.http.get<Blob>(url);
  }

}
