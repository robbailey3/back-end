import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { APIResponse } from '../shared/interfaces/api-response';

@Injectable({
  providedIn: 'root'
})
export class ServerAdminService {
  /**
   *
   * The base URL from which all URLs for
   * this service will be constructed.
   * @private
   */
  private readonly URL_BASE = `${environment.apiURL}/server`;
  constructor(private http: HttpClient) {}

  /**
   * Gets all droplets
   * @returns
   */
  public getDroplets(): Observable<APIResponse> {
    return this.http.get(`${this.URL_BASE}/droplets`);
  }
}
