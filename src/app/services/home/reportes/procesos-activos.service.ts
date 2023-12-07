import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { FilterProceso } from 'src/app/models/home/procesos/filterProcesos';
import { environment } from 'src/environments/environment';
import { UpProcesoActivo } from 'src/app/models/home/procesos/updateProcesoActivo';
import { FilterGeneral } from 'src/app/models/home/reports/filterGeneral';
import { InformeProcesal } from 'src/app/models/home/reports/informeProcesal';
import { CaptchaSendDataModel } from 'src/app/models/home/procesos/captchaSendData';

@Injectable({
  providedIn: 'root',
})
export class ProcesosActivosService {
  constructor(private http: HttpClient) {}

  public getListProcesoActivo(filterActivo: FilterProceso): Observable<any> {
    return this.http
      .post<any>(
        environment.apiBaseUrl + 'listadoProcesosActivos',
        filterActivo
      )
      .pipe(
        map((res: any) => {
          let status = res['status' as any];
          if ((status = 200)) {
            return res;
          }
        })
      );
  }

  public updateProcesosActivo(updateActivo: UpProcesoActivo): Observable<any> {
    return this.http.post<any>(
      environment.apiBaseUrl + 'audiencias/insertAudiencias',
      updateActivo
    );
  }

  public deleteProcesoActivo(deleteId: CaptchaSendDataModel): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      body: deleteId,
    };
    return this.http.delete<any>(
      environment.apiBaseUrl + 'listadoProcesosActivos/delete',
      httpOptions
    );
  }

  public getStructureInfoProcesal(
    filter: FilterGeneral
  ): Observable<InformeProcesal> {
    return this.http.post(
      environment.apiBaseUrl + 'listadoProcesosActivos/informeProcesal',
      filter
    );
  }

  public getReportActivos(filterActivo: FilterProceso): Observable<any> {
    return this.http.post<any>(
      environment.apiBaseUrl + 'listadoProcesosActivos/exportExcel',
      filterActivo
    );
  }

  public getReportInfoProcesal(filterActivo: FilterProceso): Observable<any> {
    return this.http.post<any>(
      environment.apiBaseUrl +
        'listadoProcesosActivos/exportExcelInformeProcesal',
      filterActivo
    );
  }

  public insertInformeProcesal(informe: InformeProcesal): Observable<any> {
    return this.http.post<any>(
      `${environment.apiBaseUrl}listadoProcesosActivos/insertInformeProcesal`,
      informe
    );
  }
}
