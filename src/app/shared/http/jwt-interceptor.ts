import { Observable } from 'rxjs';
import { AuthService } from 'src/app/login/auth.service';

import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { Notification } from 'src/app/notifications/notification';
import { NotificationService } from 'src/app/notifications/notification.service';

@Injectable()
export class JWTInterceptor implements HttpInterceptor {
  private readonly blackList = new RegExp(/^https?:\/\/|^\/\//i);
  constructor(
    public auth: AuthService,
    private notification: NotificationService
  ) {}
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (
      !this.blackList.exec(request.url) ||
      request.url.search('robbailey3.co.uk') > 0 ||
      request.url.search('localhost') > 0
    ) {
      if (this.auth.jwt) {
        const rqst = request.clone({
          setHeaders: {
            Authorization: `Bearer ${this.auth.jwt}`
          }
        });
        return next.handle(rqst).pipe(this.handleRequest());
      }
    }
    return next.handle(request).pipe(this.handleRequest());
  }
  private handleRequest() {
    return tap((event: HttpEvent<any>) => {
      if (event instanceof HttpResponse && event.status !== 200) {
        this.notification.addNotification(
          new Notification(
            `An error occurred with the HTTP Request: ${event.statusText}`,
            'error',
            false
          )
        );
      }
    });
  }
}
