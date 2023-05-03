import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, map } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DespachosService {

  constructor(private http: HttpClient) { }

  public getDespacho(): Observable<any> {
    return this.http.get<any>(environment.apiBaseUrl + 'despacho').pipe(
      map((res: any) => {
        let status = res['status' as any];
        if(status == 200) {
          return res.data;
        } else {
          throw new Error('error_despacho', res);
        }
      })
    );
  }

  public getDespachoPorCorp(idCorp: any): Observable<any> {
    return this.http.get<any>(environment.apiBaseUrl + 'despacho/corp/' + idCorp).pipe(
      map((res: any) => {
        let status = res['status' as any];
        if(status == 200) {
          return res.data;
        } else {
          throw new Error('error_despacho', res);
        }
      })
    );
  }
}
