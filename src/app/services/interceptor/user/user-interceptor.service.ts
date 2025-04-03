import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Token } from 'src/app/constans/token-const';
import { SessionStorageService } from '../../utils/session-storage.service';
@Injectable({
  providedIn: 'root',
})
export class UserInterceptorService implements HttpInterceptor {
  constructor(private storage: SessionStorageService) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(this.addToken(req));
  }

  addToken(req: HttpRequest<any>) {
    const token = this.storage.getSession();

    return req.clone({
      setHeaders: {
        Accept: '*/*',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token.token}`,
      },
    });
  }
}
