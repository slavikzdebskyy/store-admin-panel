import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";


@Injectable()
export class AuthService {

  constructor(private httpClient: HttpClient) {}

  public login(): Observable<any> {
    return this.httpClient
      .post<any>('http://localhost:3000/administrators/login-admin', {})
      .pipe((res: any) => res);
  }

}
