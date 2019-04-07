import { Observable } from 'rxjs';
import { AuthService } from 'src/app/login/auth.service';

import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class JWTInterceptor implements HttpInterceptor {
  constructor(public auth: AuthService) {}
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (this.auth.jwt) {
      const rqst = request.clone({
        setHeaders: {
          Authorization: `Bearer ${this.auth.jwt}`
        }
      });
      return next.handle(rqst);
    }
    return next.handle(request);
  }
}
