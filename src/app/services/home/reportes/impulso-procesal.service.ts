import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HistorialProcesosModel } from 'src/app/models/home/procesos/historialProcesosFilter';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { FilterSolicitudes } from 'src/app/models/home/procesos/FilterSolicitudes';

@Injectable({
  providedIn: 'root'
})
export class ImpulsoProcesalService {

  constructor(private http: HttpClient) { }

  public getImpulsoProcesal(filter: HistorialProcesosModel): Observable<any> {
    return this.http.post<any>(`${environment.apiBaseUrl}impulsoProcesal`, filter);
  }

  public generateDoc(filterSolicitudes: FilterSolicitudes): Observable<any> {
    return this.http.post<any>(`${environment.apiBaseUrl}impulsoProcesal/exportExcel`, filterSolicitudes);
  }
}
