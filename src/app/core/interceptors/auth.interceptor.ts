import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {UserService} from "../../service/user.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService:UserService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const jwtToken = this.authService.getJwtFromCookies();
    const authReq = request.clone({
      setHeaders: {
        Authorization: `Bearer ${jwtToken}`,
      },
    });
    console.log("token:"+authReq.headers.get("Authorization"));

    return next.handle(authReq);
  }
}
