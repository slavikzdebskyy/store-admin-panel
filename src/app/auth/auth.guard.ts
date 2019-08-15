import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, CanActivate } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Constants } from './../modules/constants/constants.module';

@Injectable()
export class AuthGuard implements CanActivate {

  jwtHelper = new JwtHelperService();
  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot, tate: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const token = localStorage.getItem(Constants.STORAGE_KEYS.ADMIN_TOKEN_KEY) || '';
    if (!this.jwtHelper.isTokenExpired(token)) {
      return true;
    }
    localStorage.removeItem(Constants.STORAGE_KEYS.ADMIN_TOKEN_KEY);
    this.router.navigate([Constants.ROUTERS.AUTH], { replaceUrl: true });
    return false;
  }

}
