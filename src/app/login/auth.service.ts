import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.devlive';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly loginURL = `${environment.apiURL}/login`;
  constructor(private http: HttpClient) {}
  login(credentials: object) {
    this.http.post(this.loginURL, credentials).subscribe();
  }
  logout() {
    this.http.get(this.loginURL);
  }
}
