import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { FilterProceso } from 'src/app/models/home/procesos/filterProcesos';
import { environment } from 'src/environments/environment';
import { UpProcesoActivo } from 'src/app/models/home/procesos/updateProcesoActivo';

@Injectable({
  providedIn: 'root'
})
export class ProcesosActivosService {

  constructor(private http: HttpClient) { }

  public getListProcesoActivo(filterActivo: FilterProceso): Observable<any> {
    return this.http.post<any>(environment.apiBaseUrl + 'listadoProcesosActivos', filterActivo).pipe(
      map(
        (res: any) => {
          let status = res['status' as any];
          if (status = 200) {
            return res;
          }
        }
      )
    );
  }

  public updateProcesosActivo(updateActivo: UpProcesoActivo): Observable<any> {
    return this.http.post<any>(environment.apiBaseUrl + 'audiencias/insertAudiencias', updateActivo)
  }

  public deleteProcesoActivo(deleteId: any): Observable<any> {
    return this.http.delete<any>(environment.apiBaseUrl + 'listadoProcesosActivos/delete', deleteId);
  }

  public getReportActivos(filterActivo: FilterProceso): Observable<any> {
    return this.http.post<any>(environment.apiBaseUrl + 'listadoProcesosActivos/exportExcel', filterActivo);
  }
}
