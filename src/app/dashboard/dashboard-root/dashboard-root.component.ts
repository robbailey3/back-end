import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rb-dashboard-root',
  templateUrl: './dashboard-root.component.html',
  styleUrls: ['./dashboard-root.component.scss']
})
export class DashboardRootComponent implements OnInit {
  public weatherActive: boolean;

  constructor() {}

  public ngOnInit() {}

  public toggleWeather($event: boolean) {
    this.weatherActive = $event;
  }
}
