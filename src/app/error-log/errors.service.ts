import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { APIResponse } from '../shared/interfaces/api-response';

@Injectable({
  providedIn: 'root'
})
export class ErrorsService {
  private readonly URL_BASE = `${environment.apiURL}/errors`;
  constructor(private http: HttpClient) {}
  /**
   *
   * @description Gets all errors from the database
   */
  getAllErrors(): Observable<APIResponse> {
    return this.http.get<APIResponse>(this.URL_BASE);
  }
}
