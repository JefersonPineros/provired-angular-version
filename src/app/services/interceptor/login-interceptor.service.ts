import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import {SessionStorageService} from '../utils/session-storage.service';

@Injectable()
export class LoginInterceptorService implements HttpInterceptor {

  constructor (private storage: SessionStorageService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    next.handle(req).subscribe({
      next: (resp) => {
        if (resp instanceof HttpResponse) {
          this.storage.setSession(resp.body);
        }
      },
      error: (err) => {
        if (err instanceof HttpErrorResponse) {
          console.log(err.error);
        }
      }
    });
    return next.handle(req);
  }
}

