import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { HistorialProcesosModel } from 'src/app/models/home/procesos/historialProcesosFilter';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class HistorialProcesosService {

  constructor(private http: HttpClient) { }

  public filterHistorial(filter: HistorialProcesosModel): Observable<any> {
    return this.http.post<any>(`${environment.apiBaseUrl}historialProcesos`, filter);
  }

  public getActuacion(filter: HistorialProcesosModel): Observable<any> {
    return this.http.post<any>(`${environment.apiBaseUrl}historialProcesos/actuacion`, filter);
  }
}
