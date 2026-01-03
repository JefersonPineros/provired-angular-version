import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { GeneralConst } from 'src/app/constans/general-const';
import { FilterProceso } from 'src/app/models/home/procesos/filterProcesos';
import { RequestModel } from 'src/app/utils/generateRequestModel';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class RamaJudicialService {
  constructor(private http: HttpClient) {}

  public getRamaJudicialReport(filterProceso: FilterProceso): Observable<any> {
    let generate = new RequestModel();

    let req = generate.generateModel(
      GeneralConst.CONTROLLERS_METHODS[42].controller,
      GeneralConst.CONTROLLERS_METHODS[42].method,
      filterProceso
    );
    return this.http.post<any>(environment.apiBaseUrl + 'index', req);
  }
}
