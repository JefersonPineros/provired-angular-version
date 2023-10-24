import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { FilterProceso } from 'src/app/models/home/procesos/filterProcesos';
import { environment } from 'src/environments/environment';
import { UpProcesoActivo } from 'src/app/models/home/procesos/updateProcesoActivo';
import { FilterGeneral } from 'src/app/models/home/reports/filterGeneral';
import { InformeProcesal } from 'src/app/models/home/reports/informeProcesal';
import { CaptchaSendDataModel } from 'src/app/models/home/procesos/captchaSendData';

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

  public deleteProcesoActivo(deleteId: CaptchaSendDataModel): Observable<any> {

    return this.http.post<any>(environment.apiBaseUrl + 'listadoProcesosActivos/delete', deleteId);
  }

  public getStructureInfoProcesal(filter: FilterGeneral): Observable<InformeProcesal> {
    return this.http.post(environment.apiBaseUrl + 'listadoProcesosActivos/informeProcesal', filter);
  }

  public getReportActivos(filterActivo: FilterProceso): Observable<any> {
    return this.http.post<any>(environment.apiBaseUrl + 'listadoProcesosActivos/exportExcel', filterActivo);
  }

  public insertInformeProcesal(informe: InformeProcesal): Observable<any> {
    return this.http.post<any>(`${environment.apiBaseUrl}listadoProcesosActivos/insertInformeProcesal`, informe)
  }
}
