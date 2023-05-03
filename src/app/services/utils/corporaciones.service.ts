import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CorporacionesService {

  constructor(private http: HttpClient) { }

  public getCorporaciones(): Observable<any> {
    return this.http.get<any>(environment.apiBaseUrl + 'corporacion').pipe(
      map((res: any) => {
        let status = res['status' as any];
        if (status == 200) {
          return res.data;
        } else {
          throw new Error('error_corporacion', res);
        }
      })
    );
  }

  public getCorporacionesPorMunicipio(idMun: any): Observable<any> {
    return this.http.get<any>(environment.apiBaseUrl + 'corporacion/mun/'+ idMun).pipe(
      map((res: any) => {
        let status = res['status' as any];
        if (status == 200) {
          return res.data;
        } else {
          throw new Error('error_corporacion', res);
        }
      })
    );
  }
}
