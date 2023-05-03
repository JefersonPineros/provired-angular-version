import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DepartamentosService {

  constructor(private http: HttpClient) { }

  public getDepartamento(): Observable<any> {
    return this.http.get(environment.apiBaseUrl + 'departamento').pipe(
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
