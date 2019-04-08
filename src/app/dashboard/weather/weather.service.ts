import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { APIResponse } from 'src/app/shared/interfaces/api-response';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private readonly URL_BASE = `${environment.apiURL}/weather`;
  constructor(private http: HttpClient) {}
  getWeather(lat: number, lng: number): Observable<APIResponse> {
    return this.http.get<APIResponse>(`${this.URL_BASE}?lat=${lat}&lng=${lng}`);
  }
}
