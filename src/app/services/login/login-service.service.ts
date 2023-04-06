import { Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ResponseLogin } from 'src/app/models/login/responseLogin';
import { Login } from 'src/app/models/login/login';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(private http: HttpClient) { }

  public login(modelLogin: Login): Observable<ResponseLogin> {
    return this.http.post(environment.apiBaseUrl + 'login', modelLogin);
  }
}
