import { Observable } from 'rxjs';
import { APIResponse } from 'src/app/shared/interfaces/api-response';
import { environment } from 'src/environments/environment';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private readonly URL_BASE = `${environment.apiURL}/weather`;
  constructor(private http: HttpClient) {}
  getWeather(lat: number, lng: number): Observable<APIResponse> {
    return this.http.get<APIResponse>(
      `${this.URL_BASE}?lat=${lat}&lng=${lng}&units=uk2`
    );
  }
}
