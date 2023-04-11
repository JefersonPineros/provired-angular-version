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

  public createStorage(key: string, data: string): void {
    sessionStorage.setItem(key, data);
  }

  public getStorage(key: string, tipo: string): any {
    switch (tipo) {
      case 'string':
        return sessionStorage.getItem(key);

      case 'number':
        return parseInt(sessionStorage.getItem(key)!) ;

      case 'boolean':

        break;
      case 'json':
        return JSON.parse( sessionStorage.getItem("session")! );
      default:
        break;
    }
  }

  public clearAllSession(): void {
    sessionStorage.clear();
  }
}
