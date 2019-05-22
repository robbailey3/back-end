import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from '../../environments/environment';
import { APIResponse } from '../shared/interfaces/api-response';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  private readonly ALBUM_URL_BASE = `${environment.apiURL}/albums`;
  private readonly PHOTO_URL_BASE = `${environment.apiURL}/album`;
  constructor(private http: HttpClient) {}

  getAlbums(): Observable<APIResponse> {
    return this.http.get<APIResponse>(this.ALBUM_URL_BASE);
  }
  getAlbum(id: number): Observable<APIResponse> {
    return this.http.get<APIResponse>(`${this.PHOTO_URL_BASE}/${id}`);
  }
  createAlbum(data: object): Observable<APIResponse> {
    return this.http.post<APIResponse>(`${this.PHOTO_URL_BASE}`, data);
  }
}
