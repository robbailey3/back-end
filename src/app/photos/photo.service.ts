import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from '../../environments/environment';
import { APIResponse } from '../shared/interfaces/api-response';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  private readonly ALBUMS_URL_BASE = `${environment.apiURL}/albums`;
  private readonly ALBUM_URL_BASE = `${environment.apiURL}/album`;
  private readonly PHOTO_URL_BASE = `${environment.apiURL}/photo`;
  constructor(private http: HttpClient) {}

  getAlbums(): Observable<APIResponse> {
    return this.http.get<APIResponse>(this.ALBUMS_URL_BASE);
  }
  getAlbum(id: number): Observable<APIResponse> {
    return this.http.get<APIResponse>(`${this.ALBUM_URL_BASE}/${id}`);
  }
  createAlbum(data: object): Observable<APIResponse> {
    return this.http.post<APIResponse>(`${this.ALBUM_URL_BASE}`, data);
  }
  deletePhoto(photoID: number): Observable<APIResponse> {
    return this.http.delete<APIResponse>(`${this.PHOTO_URL_BASE}/${photoID}`);
  }
  postPhotos(formData: FormData): Observable<APIResponse> {
    return this.http.post<APIResponse>(`${this.PHOTO_URL_BASE}s`, formData);
  }
  updateCaption(photoID: number, caption: string): Observable<APIResponse> {
    return this.http.patch<APIResponse>(`${this.PHOTO_URL_BASE}/${photoID}`, {
      caption
    });
  }
  setAlbumImage(photoID: number, albumID: number): Observable<APIResponse> {
    return this.http.patch<APIResponse>(`${this.ALBUM_URL_BASE}/${albumID}`, {
      photoID
    });
  }
}
