import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {Token} from '@angular/compiler';

@Injectable()
export class XAuthTokenInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const req = this.addAuthenticationToken(request);
    return next.handle(req);
  }

  private addAuthenticationToken = (request: HttpRequest<any>): HttpRequest<any> => {
  const token = '79dc2203064b415c8e7d2b54ec33c2da';
  if (token !== undefined){
    return request.clone({
      headers: request.headers.set('x-auth-token', token)
    });
  }
  }
}
