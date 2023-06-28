import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { FilterProceso } from 'src/app/models/home/procesos/filterProcesos';
import { UpdateProceso } from 'src/app/models/home/procesos/updateProceso';
@Injectable({
  providedIn: 'root'
})
export class ProcesosGeneralesService {

  constructor(private http: HttpClient) { }

  public getListProcesos(filterProceso: FilterProceso): Observable<any> {
    return this.http.post<any>(environment.apiBaseUrl + 'listadoProcesosGenerales', filterProceso).pipe(
      map(
        (res: any) => {
          let status = res["status" as any];
          if (status = 200) {
            return res;
          } else {
            throw new Error('Se ha presentado un error');
          }
        }
      )
    );
  }

  public updateProceso(upProceso: UpdateProceso): Observable<any> {
    return this.http.put<any>(environment.apiBaseUrl + 'listadoProcesosGenerales/update', upProceso);
  }

  public getReportListProcesos(filterProceso: FilterProceso): Observable<any> {
    return this.http.post(environment.apiBaseUrl + 'listadoProcesosGenerales/exportExcel', filterProceso);
  }

}
