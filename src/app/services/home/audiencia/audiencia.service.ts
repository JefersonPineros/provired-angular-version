import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ConsultarAudiencia } from 'src/app/models/audiencias/getAudiencia';
import { Audiencias } from 'src/app/models/audiencias/audiencias';
import { FilterReport } from 'src/app/models/home/notificaciones/filterReport';
import { RequestModel } from 'src/app/utils/generateRequestModel';
import { GeneralConst } from 'src/app/constans/general-const';
import { SessionStorageService } from '../../utils/session-storage.service';

@Injectable({
  providedIn: 'root',
})
export class AudienciaService {
  constructor(
    private http: HttpClient,
    private session: SessionStorageService
  ) {}

  getListAudiencias(consultar: ConsultarAudiencia): Observable<Audiencias[]> {
    let generate = new RequestModel();
    let req = generate.generateModel(
      GeneralConst.CONTROLLERS_METHODS[2].controller,
      GeneralConst.CONTROLLERS_METHODS[2].method,
      consultar
    );

    return this.http
      .post<Audiencias[]>(environment.apiBaseUrl + 'index', req)
      .pipe(
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
    let ses = this.session.getSession();

    let generate = new RequestModel();
    let req = generate.generateModel(
      GeneralConst.CONTROLLERS_METHODS[3].controller,
      GeneralConst.CONTROLLERS_METHODS[3].method,
      { id: id, username: ses.user }
    );
    return this.http.post(environment.apiBaseUrl + 'index', req).pipe(
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
    let generate = new RequestModel();
    let req = generate.generateModel(
      GeneralConst.CONTROLLERS_METHODS[6].controller,
      GeneralConst.CONTROLLERS_METHODS[6].method,
      createAudiencia
    );
    return this.http.post(environment.apiBaseUrl + 'index', req);
  }

  updateAudiencia(updateAudiencia: any): Observable<any> {
    let generate = new RequestModel();
    let req = generate.generateModel(
      GeneralConst.CONTROLLERS_METHODS[4].controller,
      GeneralConst.CONTROLLERS_METHODS[4].method,
      updateAudiencia
    );
    return this.http.post(environment.apiBaseUrl + 'index', req);
  }

  deleteAudiencia(eliminar: any): Observable<any> {
    let generate = new RequestModel();
    let req = generate.generateModel(
      GeneralConst.CONTROLLERS_METHODS[5].controller,
      GeneralConst.CONTROLLERS_METHODS[5].method,
      eliminar
    );

    return this.http.post(environment.apiBaseUrl + 'index', req);
  }

  downloadReport(filterReport: FilterReport): Observable<any> {
    let headers = new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
    });
    return this.http.post<any>(
      environment.apiBaseUrl + 'audiencias/exportExcel',
      filterReport,
      { headers }
    );
  }

  downloadFile(url: string): Observable<HttpResponse<Blob>> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/xlsx',
      Accept: 'application/xlsx',
      'Access-Control-Allow-Origin': '*',
    });
    return this.http.get<Blob>(url, {
      headers,
      responseType: 'blob' as 'json',
      observe: 'response',
    });
  }
}
