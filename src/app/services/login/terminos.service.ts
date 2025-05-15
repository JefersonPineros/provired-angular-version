import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { RequestModel } from 'src/app/utils/generateRequestModel';
import { GeneralConst } from 'src/app/constans/general-const';

@Injectable({
  providedIn: 'root',
})
export class TerminosService {
  constructor(private http: HttpClient) {}

  public aceptarTerminos(user: string): Observable<any> {
    let generate = new RequestModel();

    let req = generate.generateModel(
      GeneralConst.CONTROLLERS_METHODS[41].controller,
      GeneralConst.CONTROLLERS_METHODS[41].method,
      user
    );

    return this.http.post(environment.apiBaseUrl + 'index', req);
  }
}
