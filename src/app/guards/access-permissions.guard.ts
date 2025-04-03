import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { SessionStorageService } from '../services/utils/session-storage.service';
import { ResponseLogin } from '../models/login/responseLogin';

@Injectable({
  providedIn: 'root',
})
export class AccessPermissionsGuard implements CanActivate {
  constructor(private session: SessionStorageService) {}

  canActivate():
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (this.getSession()) {
      return true;
    } else {
      return false;
    }
  }

  getSession(): boolean {
    let sessionActive = this.session.getSession();
    if (sessionActive) {
      if (sessionActive.tipousuario == 'S') {
        if (sessionActive.status == 200 && sessionActive.terminos_ok) {
          return true;
        } else {
          return false;
        }
      } else if (sessionActive.tipousuario == 'A') {
        if (sessionActive.status == 200) {
          return true;
        } else {
          alert('Es necesario iniciar sesion.');
          return false;
        }
      } else {
        if (sessionActive.status == 200) {
          return true;
        } else {
          alert('Es necesario iniciar sesion.');
          return false;
        }
      }
    } else {
      alert('Es necesario iniciar sesion.');
      return false;
    }
  }
}
