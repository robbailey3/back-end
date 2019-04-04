import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  constructor() {}
  getLocation() {
    return new Promise((resolve, reject) => {
      if ('geolocation' in window.navigator) {
        navigator.geolocation.getCurrentPosition(
          (success: any) => {
            resolve(success);
          },
          (error: any) => {
            reject(error);
          }
        );
      } else {
        reject('Geolocation is not supported on this browser');
      }
    });
  }
}
