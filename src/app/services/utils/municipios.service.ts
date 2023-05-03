import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MunicipiosService {

  constructor(private http: HttpClient) { }

  public getMunicipio(): Observable<any> {
    return this.http.get(environment.apiBaseUrl + 'municipio').pipe(
      map((res: any) => {
        let status = res['status' as any];
        if(status == 200) {
          return res.data;
        } else {
          throw new Error('Se ha presentado un error.');
        }
      })
    );
  }

  public getMunicipioPorDep(idDepto: string): Observable<any[]> {
    return this.http.get<any[]>(environment.apiBaseUrl + 'municipio/depto/' + idDepto).pipe(
      map((res: any) => {
        let status = res['status' as any];
        if(status == 200) {
          return res.data
        } else {
          throw new Error('error_message', res);
        }
      })
    );
  }
}
