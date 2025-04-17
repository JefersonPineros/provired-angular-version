import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { RequestModel } from 'src/app/utils/generateRequestModel';
import { GeneralConst } from 'src/app/constans/general-const';

@Injectable({
  providedIn: 'root',
})
export class TerminosCondicionesService {
  constructor(private http: HttpClient) {}

  getTerminos(): Observable<any> {
    let generate = new RequestModel();

    let req = generate.generateModel(
      GeneralConst.CONTROLLERS_METHODS[40].controller,
      GeneralConst.CONTROLLERS_METHODS[40].method
    );

    return this.http.post<any>(`${environment.apiBaseUrl}index`, req);
  }
}
