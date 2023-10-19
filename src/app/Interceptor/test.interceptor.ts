import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TestInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    //case we wanna intercept a request
    const API_TOKEN =  'Kqojrg246iporogjq40t9yq246red9g246aogjrnet-v904y7n15'
    const newHeader = {API_KEY:API_TOKEN}
    const requestCopy = request.clone({setHeaders:newHeader})
    // return next.handle(request);
    return next.handle(requestCopy); //nb: request is immutable, we can clone, modify & pass it to the handler for use.
  }
}
