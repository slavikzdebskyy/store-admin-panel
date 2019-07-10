import { Injectable, Injector } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class JwtService implements HttpInterceptor {
  constructor(private injector: Injector) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authService: AuthService = this.injector.get(AuthService);
    const token: string = authService.adminToken;
    let extendHeaders: any = {} as any;

    extendHeaders = {
      Authorization: token,
    };

    return next.handle(
      request.clone({
        headers: new HttpHeaders(extendHeaders),
      }),
    );
  }
}
