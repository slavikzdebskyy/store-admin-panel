import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from './../../environments/environment';
import { ILoginRequest } from '../shared/interfaces/login-request.interface';
import { Constants } from './../modules/constants/constants.module';

@Injectable()
export class AuthService {

  private serverApiUrl: string = environment.serverApiUrl;

  constructor(private httpClient: HttpClient) {}

  public login(body: ILoginRequest): Observable<any> {
    return this.httpClient.post<any>(`${this.serverApiUrl}${Constants.ROUTERS_API.ADMIN.LOGIN}`, body)
  }

}
