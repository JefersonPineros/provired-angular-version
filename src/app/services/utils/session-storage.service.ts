import { Injectable } from '@angular/core';
import { ResponseLogin } from 'src/app/models/login/responseLogin';

@Injectable({
  providedIn: 'root'
})
export class SessionStorageService {

  public userLogin: ResponseLogin = new ResponseLogin();

  constructor() { }

  public setSession(user_login: ResponseLogin): any {
    sessionStorage.setItem("session", JSON.stringify(user_login) );
  }

  public getSession(): ResponseLogin {
    this.userLogin = JSON.parse( sessionStorage.getItem("session")! );
    return this.userLogin;
  }

  public clearAllSession(): void {
    sessionStorage.clear();
  }
}
