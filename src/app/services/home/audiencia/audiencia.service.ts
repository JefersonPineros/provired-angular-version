import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ConsultarAudiencia } from 'src/app/models/audiencias/getAudiencia';
import { Audiencias } from 'src/app/models/audiencias/audiencias';

@Injectable({
  providedIn: 'root'
})
export class AudienciaService {

  constructor(private http: HttpClient) { }

  getListAudiencias(consultar: ConsultarAudiencia): Observable<Audiencias[]> {
    return this.http.post<Audiencias[]>(environment.apiBaseUrl + 'audiencias/getAudiencias', consultar).pipe(
      map((res: any) => {
        let status = res['status' as any];
        if(status == 200) {
          return res.data;
        } else {
          throw new Error('Se ha presentado un error');
        }
      })
    );
  }
}
