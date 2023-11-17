import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HistorialProcesosModel } from 'src/app/models/home/procesos/historialProcesosFilter';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class EmailDespachosService {
  constructor(private http: HttpClient) {}

  getEmailDespacho(filter: HistorialProcesosModel): Observable<any> {
    return this.http.post<any>(
      `${environment.apiBaseUrl}emailDespachos`,
      filter
    );
  }
}
