import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'rb-exif-panel',
  templateUrl: './exif-panel.component.html',
  styleUrls: ['./exif-panel.component.scss']
})
export class ExifPanelComponent implements OnChanges {
  @Input() active: boolean;
  @Input() exif: any;
  constructor() {}

  ngOnChanges() {
    if (this.exif) {
      this.exif = JSON.parse(this.exif);
      this.convertExifValues();
      console.log(this.exif);
    }
  }
  convertExifValues() {
    const regex = /.*(\/){1}.*/gm;
    for (const key in this.exif) {
      if (this.exif.hasOwnProperty(key)) {
        console.log(this.exif[key]);
        if (this.exif[key].match(regex)) {
          console.log(this.exif[key]);
        }
      }
    }
  }
}
