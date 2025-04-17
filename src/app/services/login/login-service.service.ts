import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ResponseLogin } from 'src/app/models/login/responseLogin';
import { Login } from 'src/app/models/login/login';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UpdatePassLogin } from 'src/app/models/user/updatePassLogin';

@Injectable({
  providedIn: 'root',
})
export class LoginServiceService {
  constructor(private http: HttpClient) {}

  public login(modelLogin: Login): Observable<ResponseLogin> {
    return this.http.post(environment.apiBaseUrl + 'login', modelLogin);
  }

  public enviarCorreoToken(user: string): Observable<any> {
    return this.http.get<any>(`${environment.apiBaseUrl}sendCambio/${user}`);
  }

  public validarToken(modelUp: UpdatePassLogin): Observable<any> {
    return this.http.get<any>(
      `${environment.apiBaseUrl}validarCodigo/${modelUp.user}/${modelUp.token}`
    );
  }

  public updatePass(modelUp: UpdatePassLogin): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'text/plain;charset-UTF-8',
    });

    return this.http.post<any>(
      `${environment.apiBaseUrl}actualizaPassword`,
      modelUp,
      { headers }
    );
  }
}
