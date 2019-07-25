import { Component, Input } from '@angular/core';

@Component({
  selector: 'rb-weather-icon',
  templateUrl: './weather-icon.component.html',
  styleUrls: ['./weather-icon.component.scss']
})
export class WeatherIconComponent {
  /**
   *
   * The type of icon.
   * @private
   */
  @Input() private icon: string;
  /**
   *
   * The width of the svg
   */
  @Input() private width = 50;
  /**
   *
   * The height of the svg
   */
  @Input() private height = 50;
  constructor() {}
}
