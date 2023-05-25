import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Proceso } from 'src/app/models/home/procesos/proceso';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProcesosService {

  constructor(private http: HttpClient) { }

  public createProceso(pro: Proceso): Observable<any> {
    return this.http.post<any>(environment.apiBaseUrl + 'newProceso/insert', pro);
  }
}
