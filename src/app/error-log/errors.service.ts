import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { APIResponse } from '../shared/interfaces/api-response';

@Injectable({
  providedIn: 'root'
})
export class ErrorsService {
  private readonly URL_BASE = `${environment.apiURL}/errors`;
  constructor(private http: HttpClient) {}
  /**
   * @description get all PHP Errors from the database
   * @returns an Observable of the APIResponse
   */
  getPHPErrors(): Observable<APIResponse> {
    return this.http.get<APIResponse>(this.URL_BASE);
  }
  /**
   * @description get all JavaScript Errors from the database
   * @returns an Observable of the APIResponse
   */
  getJSErrors(): Observable<APIResponse> {
    return this.http.get<APIResponse>(this.URL_BASE);
  }
}
