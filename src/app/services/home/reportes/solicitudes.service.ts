import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { HistorialProcesosModel } from 'src/app/models/home/procesos/historialProcesosFilter';
import { environment } from 'src/environments/environment';
import { FilterSolicitudes } from 'src/app/models/home/procesos/FilterSolicitudes';

@Injectable({
  providedIn: 'root'
})
export class SolicitudesService {

  constructor(private http: HttpClient) { }

  public getListSolicitudes(filter: HistorialProcesosModel): Observable<any> {
    return this.http.post(`${environment.apiBaseUrl}misSolicitudes`, filter);
  }

  public updateSolicitud(data: any): Observable<any> {
    return this.http.put(`${environment.apiBaseUrl}misSolicitudes/update`, data);
  }

  public getReportListProcesos(filterSolicitudes: FilterSolicitudes): Observable<any> {
    return this.http.post(environment.apiBaseUrl + 'misSolicitudes/exportExcel', filterSolicitudes);
  }
}
