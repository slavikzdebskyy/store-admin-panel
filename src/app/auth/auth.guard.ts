import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Constants } from './../modules/constants/constants.module';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {}    // TODO: implement Guards

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const token = localStorage.getItem(Constants.STORAGE_KEYS.ADMIN_KEY);
    if (token === 'qwerty123') {
      return true;
    }
    this.router.navigate([Constants.ROUTERS.LOGIN], { replaceUrl: true });
    return false;
  }

}
