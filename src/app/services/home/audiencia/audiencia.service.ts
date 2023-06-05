import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ConsultarAudiencia } from 'src/app/models/audiencias/getAudiencia';
import { Audiencias } from 'src/app/models/audiencias/audiencias';
import { FilterReport } from 'src/app/models/home/notificaciones/filterReport';

@Injectable({
  providedIn: 'root'
})
export class AudienciaService {

  constructor(private http: HttpClient) { }

  getListAudiencias(consultar: ConsultarAudiencia): Observable<Audiencias[]> {
    return this.http.post<Audiencias[]>(environment.apiBaseUrl + 'audiencias/getAudiencias', consultar).pipe(
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

  getAudiencia(id: any): Observable<Audiencias> {
    return this.http.get(environment.apiBaseUrl + 'audiencias/getAudiencias/' + id).pipe(
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

  createAudiencia(createAudiencia: Audiencias): Observable<any> {
    return this.http.post(environment.apiBaseUrl + 'audiencias/insertAudiencias', createAudiencia);
  }

  updateAudiencia(updateAudiencia: any): Observable<any> {
    return this.http.put(environment.apiBaseUrl + 'audiencias/updateAudiencias', updateAudiencia);
  }

  deleteAudiencia(eliminar: any): Observable<any> {
    console.log(eliminar);

    return this.http.delete(environment.apiBaseUrl + 'audiencias/deleteAudiencias', { body: eliminar });
  }

  downloadReport(filterReport: FilterReport): Observable<any> {
    return this.http.post<any>(environment.apiBaseDocs + 'audiencias/exportExcel', filterReport);
  }
}
