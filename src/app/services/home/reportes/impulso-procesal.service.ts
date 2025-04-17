import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HistorialProcesosModel } from 'src/app/models/home/procesos/historialProcesosFilter';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { FilterSolicitudes } from 'src/app/models/home/procesos/FilterSolicitudes';
import { RequestModel } from 'src/app/utils/generateRequestModel';
import { GeneralConst } from 'src/app/constans/general-const';

@Injectable({
  providedIn: 'root',
})
export class ImpulsoProcesalService {
  constructor(private http: HttpClient) {}

  public getImpulsoProcesal(filter: HistorialProcesosModel): Observable<any> {
    let generate = new RequestModel();

    let req = generate.generateModel(
      GeneralConst.CONTROLLERS_METHODS[28].controller,
      GeneralConst.CONTROLLERS_METHODS[28].method,
      filter
    );

    return this.http.post<any>(`${environment.apiBaseUrl}index`, req);
  }

  public generateDoc(filterSolicitudes: FilterSolicitudes): Observable<any> {
    let generate = new RequestModel();

    let req = generate.generateModel(
      GeneralConst.CONTROLLERS_METHODS[29].controller,
      GeneralConst.CONTROLLERS_METHODS[29].method,
      filterSolicitudes
    );

    return this.http.post<any>(`${environment.apiBaseUrl}index`, req);
  }
}
