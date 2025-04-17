import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HistorialProcesosModel } from 'src/app/models/home/procesos/historialProcesosFilter';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { RequestModel } from 'src/app/utils/generateRequestModel';
import { GeneralConst } from 'src/app/constans/general-const';
@Injectable({
  providedIn: 'root',
})
export class EmailDespachosService {
  constructor(private http: HttpClient) {}

  getEmailDespacho(filter: HistorialProcesosModel): Observable<any> {
    let generate = new RequestModel();

    let req = generate.generateModel(
      GeneralConst.CONTROLLERS_METHODS[32].controller,
      GeneralConst.CONTROLLERS_METHODS[32].method,
      filter
    );

    return this.http.post<any>(`${environment.apiBaseUrl}index`, req);
  }
}
