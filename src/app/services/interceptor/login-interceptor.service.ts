import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpEvent,
  HttpHandler,
  HttpRequest,
  HttpResponse,
  HttpErrorResponse,
} from '@angular/common/http';
import { filter, map, Observable } from 'rxjs';
import { SessionStorageService } from '../utils/session-storage.service';
import { Token } from 'src/app/constans/token-const';
import { environment } from 'src/environments/environment';

@Injectable()
export class LoginInterceptorService implements HttpInterceptor {
  constructor(private storage: SessionStorageService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (req.method == 'POST') {
      return next.handle(this.setHeader(req)).pipe(
        filter((event) => event instanceof HttpResponse),
        map((event: HttpResponse<any>) => {
          this.storage.setSession(event.body);
          return event.clone();
        })
      );
    } else {
      return next.handle(this.addToken(req));
    }
  }

  addToken(req: HttpRequest<any>) {
    const token = Token.TOKEN_AUTHORIZATION.TOKEN;

    return req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  setHeader(req: HttpRequest<any>) {
    if (req.url == `${environment.apiBaseUrl + 'login'}`) {
      const requ = req.clone({
        setHeaders: {
          Accept: '*/*',
          'Content-Type': 'text/plain;charset-UTF-8',
        },
      });
      return requ;
    } else {
      return req;
    }
  }
}
