import { Debug } from 'src/app/global/debug';
import { APIResponse } from 'src/app/shared/interfaces/api-response';
import { LocationService } from 'src/app/shared/services/location.service';

import { Component, OnInit } from '@angular/core';

import { Weather } from './weather';
import { WeatherService } from './weather.service';

@Component({
  selector: 'rb-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
  public location: Coordinates;
  public locationName: string;
  public fullLocationDetails: any;
  public lastKnownWeather: Weather;
  public weather: Weather;

  constructor(
    private locationService: LocationService,
    private weatherService: WeatherService
  ) {}

  ngOnInit() {
    this.getLastKnownLocation();
    this.getLocation();
  }
  getLastKnownLocation(): void {
    if ('localStorage' in window) {
      if (localStorage.getItem('last_known_location')) {
        this.location = JSON.parse(localStorage.getItem('last_known_location'));
      }
    }
  }
  getLocation(): void {
    this.locationService
      .getLocation()
      .then((result: Position) => {
        this.location = result['coords'];
        this.storeLocation();
      })
      .finally(() => {
        this.getLocationName();
        this.getWeather();
      });
  }
  storeLocation(): void {
    if ('localStorage' in window) {
      localStorage.setItem(
        'last_known_location',
        JSON.stringify({
          latitude: this.location.latitude,
          longitude: this.location.longitude
        })
      );
    }
  }
  getLocationName() {
    this.locationService
      .getLocationName(this.location.latitude, this.location.longitude)
      .then((res: any) => {
        this.locationName = res['results'][0]['formatted_address'];
        this.fullLocationDetails = res;
      });
  }
  getWeather() {
    this.weatherService
      .getWeather(this.location.latitude, this.location.longitude)
      .subscribe((res: APIResponse) => {
        this.weather = res.response.results[0] as Weather;
        Debug.log(this.weather);
      });
  }
}
