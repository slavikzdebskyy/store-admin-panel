import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { JwtHelperService } from "@auth0/angular-jwt";
import { Observable } from 'rxjs';
import { Constants } from './../modules/constants/constants.module';

@Injectable()
export class AuthGuard implements CanActivate {

  jwtHelper = new JwtHelperService();
  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const token = localStorage.getItem(Constants.STORAGE_KEYS.ADMIN_KEY) || '';
    if (!this.jwtHelper.isTokenExpired(token)) {
      return true;
    }
    localStorage.removeItem(Constants.STORAGE_KEYS.ADMIN_KEY);
    this.router.navigate([Constants.ROUTERS.LOGIN], { replaceUrl: true });
    return false;
  }

}
