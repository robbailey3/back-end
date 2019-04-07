import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as jwtDecode from 'jwt-decode';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { APIResponse } from '../shared/interfaces/api-response';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly loginURL = `${environment.apiURL}/login`;
  private readonly refreshURL = `${environment.apiURL}/token`;
  jwt: string;
  constructor(private http: HttpClient) {}
  login(credentials: object): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.post(this.loginURL, credentials).subscribe(
        (res: APIResponse) => {
          if (res.response.status === 'ok') {
            if (res.response.results['JWT']) {
              this.jwt = res.response.results['JWT'];
              if ('localStorage' in window) {
                localStorage.setItem('jwt', this.jwt);
              }
              resolve();
            }
          } else {
            reject(res.response.errorMessage);
          }
        },
        (err: any) => {
          reject(`An error occurred: ${JSON.stringify(err)}`);
        }
      );
    });
  }
  logout(): void {
    if ('localStorage' in window) {
      localStorage.removeItem('jwt');
      this.jwt = '';
    }
  }
  getTokenFromStorage() {
    if ('localStorage' in window) {
      const jwt = localStorage.getItem('jwt');
      if (jwt) {
        this.jwt = jwt;
      }
    }
  }
  tokenIsValid(): boolean {
    this.jwt = this.jwt || localStorage.getItem('jwt') || undefined;
    if (this.jwt) {
      const decoded = jwtDecode(this.jwt);
      return decoded['exp'] > new Date().getTime() / 1000 + 60;
    }
    return false;
  }
  refreshToken(): void {
    if (this.jwt || localStorage.getItem('jwt')) {
      this.http.get(this.refreshURL).subscribe((res: APIResponse) => {
        if (res.response.results['JWT']) {
          this.jwt = res.response.results['JWT'];
          if ('localStorage' in window) {
            localStorage.setItem('jwt', this.jwt);
          }
        }
      });
    }
  }
}
