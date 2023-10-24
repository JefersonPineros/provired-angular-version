import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { FilterProceso } from 'src/app/models/home/procesos/filterProcesos';
import { EliminarProcesoModel } from 'src/app/models/home/procesos/eliminarProceso';
import { environment } from 'src/environments/environment';
import { CaptchaSendDataModel } from 'src/app/models/home/procesos/captchaSendData';

@Injectable({
  providedIn: 'root'
})
export class EliminarProcesosService {

  constructor(private http: HttpClient) { }

  public getListEliminarProcesos(filter: FilterProceso): Observable<Array<EliminarProcesoModel>> {
    return this.http.post(environment.apiBaseUrl + 'eliminacionMasiva', filter).pipe(
      map((res: any) => {
        let status = res['status' as any];
        if (status == 200) {
          return res.data;
        } else {
          throw new Error('Se ha presentado un error');
        }
      })
    );
  }

  public deleteProcesos(data: CaptchaSendDataModel): Observable<any> {
    return this.http.post(environment.apiBaseUrl + 'eliminacionMasiva/delete', data);
  }

  public transferirProcesos(data: CaptchaSendDataModel): Observable<any> {
    return this.http.post(`${environment.apiBaseUrl}eliminacionMasiva/delete`, data);
  }

  public getUsersTransfer(userId: number): Observable<any> {
    return this.http.get(`${environment.apiBaseUrl}user/child/${userId}`)
      .pipe(
        map((res: any) => {
          let status = res['status' as any];
          if (status == 200) {
            return res.data;
          } else {
            throw new Error('Se ha presentado un error')
          }
        })
      );
  }
}
