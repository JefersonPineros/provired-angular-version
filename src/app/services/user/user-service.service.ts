import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SessionStorageService } from '../utils/session-storage.service';
import { UpdatePass } from 'src/app/models/user/updatePass';
import { RequestModel } from 'src/app/utils/generateRequestModel';
import { GeneralConst } from 'src/app/constans/general-const';
@Injectable({
  providedIn: 'root',
})
export class UserServiceService {
  private constUTILS = new GeneralConst();
  constructor(
    private http: HttpClient,
    private session: SessionStorageService
  ) {}

  getUser(): Observable<any> {
    let sess = this.session.getSession();

    let generate = new RequestModel();
    const { user, tipousuario } = sess;

    let req = generate.generateModel(
      GeneralConst.CONTROLLERS_METHODS[0].controller,
      GeneralConst.CONTROLLERS_METHODS[0].method,
      { user, tipousuario }
    );

    return this.http.post(environment.apiBaseUrl + `index`, req);
  }

  updatePass(update: UpdatePass): Observable<any> {
    return this.http.put<any>(
      `${environment.apiBaseUrl}user/updatePassword`,
      update
    );
  }
}
