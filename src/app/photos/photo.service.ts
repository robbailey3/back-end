import { Injectable } from '@angular/core';
import { APIResponse } from '../shared/interfaces/api-response';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  private readonly ALBUM_URL_BASE = `${environment.apiURL}/albums`;
  constructor(private http: HttpClient) {}

  getAlbums(): Observable<APIResponse> {
    return this.http.get<APIResponse>(this.ALBUM_URL_BASE);
  }
}
