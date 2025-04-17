import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Proceso } from 'src/app/models/home/procesos/proceso';
import { Observable } from 'rxjs';
import { RequestModel } from 'src/app/utils/generateRequestModel';
import { GeneralConst } from 'src/app/constans/general-const';
@Injectable({
  providedIn: 'root',
})
export class ProcesosService {
  constructor(private http: HttpClient) {}

  public createProceso(pro: Proceso): Observable<any> {
    let generate = new RequestModel();

    let req = generate.generateModel(
      GeneralConst.CONTROLLERS_METHODS[33].controller,
      GeneralConst.CONTROLLERS_METHODS[33].method,
      pro
    );

    return this.http.post<any>(environment.apiBaseUrl + 'index', req);
  }
}
