import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  private readonly API_KEY = 'AIzaSyBas8gvcqVKTAwDYrcJ6sNkV8_HvtIoW8w';
  private readonly URL_BASE =
    'https://maps.googleapis.com/maps/api/geocode/json';
  constructor(private http: HttpClient) {}
  getLocation(): Promise<Position> {
    return new Promise((resolve, reject) => {
      if ('geolocation' in window.navigator) {
        navigator.geolocation.getCurrentPosition(
          (success: any) => {
            resolve(success);
          },
          (error: any) => {
            reject(error);
          },
          { enableHighAccuracy: true }
        );
      } else {
        reject('Geolocation is not supported on this browser');
      }
    });
  }
  getLocationName(lat: number, lng: number): Promise<any> {
    return this.http
      .get(`${this.URL_BASE}?latlng=${lat},${lng}&key=${this.API_KEY}`)
      .toPromise();
  }
}
