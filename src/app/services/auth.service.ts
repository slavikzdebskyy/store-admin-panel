import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ILoginRequest, IAuthResponse } from '../shared/interfaces/auth-api.interfaces';
import { Constants } from 'src/app/modules/constants/constants.module';
import { environment } from './../../environments/environment';

@Injectable()
export class AuthService {

  private serverApiUrl: string = environment.serverApiUrl;
  private adminStoreKey: string = Constants.STORAGE_KEYS.ADMIN_KEY;

  constructor(private httpClient: HttpClient) {}

  public login(body: ILoginRequest): Observable<IAuthResponse> {
    return this.httpClient.post<IAuthResponse>(`${this.serverApiUrl}${Constants.ROUTERS_API.ADMIN.LOGIN}`, body);
  }

  public logout(email: string): Observable<IAuthResponse> {
    return this.httpClient.post<IAuthResponse>(`${this.serverApiUrl}${Constants.ROUTERS_API.ADMIN.LOGOUT}`, { email });
  }

  public get adminToken(): string {
    return localStorage.getItem(this.adminStoreKey) || '';
  }

  public set adminToken(token: string) {
    localStorage.setItem(this.adminStoreKey, token);
  }

  public removeAdminToken() {
    localStorage.removeItem(this.adminStoreKey);
  }

}
