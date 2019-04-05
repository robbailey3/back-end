import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.devlive';
import { Observable } from 'rxjs';
import { APIResponse } from '../shared/interfaces/api-response';
import { Debug } from '../global/debug';
import * as jwtDecode from 'jwt-decode';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly loginURL = `${environment.apiURL}/login`;
  jwt: string;
  constructor(private http: HttpClient) {}
  login(credentials: object): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.post(this.loginURL, credentials).subscribe(
        (res: APIResponse) => {
          if (res.response.status === 'ok') {
            if (res.response.results['JWT']) {
              this.jwt = res.response.results['JWT'];
              resolve();
            }
          } else {
            reject(res.response.errorMessage);
          }
        },
        (err: any) => {
          reject('An error occurred: ' + err);
        }
      );
    });
  }
  logout(credentials): Observable<APIResponse> {
    return this.http.post<APIResponse>(this.loginURL, credentials);
  }
  tokenIsValid(): boolean {
    if (this.jwt) {
      const decoded = jwtDecode(this.jwt);
      console.log(decoded['exp'] > new Date().getTime() / 1000);
      return decoded['exp'] > new Date().getTime() / 1000;
    }
    return false;
  }
}
