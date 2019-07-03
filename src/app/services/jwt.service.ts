import { Injectable, Injector } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class JwtService implements HttpInterceptor {
  constructor(private injector: Injector) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authService: AuthService = this.injector.get(AuthService);
    // const token: string = authService.getAuthorizationHeader();
    let extendHeaders: any = {} as any;

    // if (token && authService.isAuthenticated()) {
    //   extendHeaders = {
    //     Authorization: authService.getAuthorizationHeader()
    //   };
    // }

    // const language: any = localStorage.getItem('language');
    // const language: any = environment.defaultLanguage;
    // if (language) {
    //   const langShort: string = language.slice(0, 2);
    //   extendHeaders = {
    //     ...extendHeaders,
    //     'Accept-Language': `${language},${langShort};q=0.9,${langShort};q=0.8,${language};q=0.7,${langShort};q=0.6`
    //   };
    // }

    // if (environment.xLocation) {
      extendHeaders = {
        // ...extendHeaders,
        'Authorization': 'environment.xLocation'
      };
    // }

    return next.handle(
      request.clone({
        headers: new HttpHeaders(extendHeaders)
      })
    );
  }
}
