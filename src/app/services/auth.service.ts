import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from './../../environments/environment';
import { ILoginRequest } from '../shared/interfaces/login-request.interface';

@Injectable()
export class AuthService {
  private serverApiUrl: string = environment.serverApiUrl;



  constructor(private httpClient: HttpClient) {}

  public login(body: ILoginRequest): Observable<any> {
    return this.httpClient.post<any>(`${this.serverApiUrl}/administrators/login-admin`, body)
  }

}
