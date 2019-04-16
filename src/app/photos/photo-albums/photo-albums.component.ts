import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../photo.service';
import { APIResponse } from 'src/app/shared/interfaces/api-response';

@Component({
  selector: 'rb-photo-albums',
  templateUrl: './photo-albums.component.html',
  styleUrls: ['./photo-albums.component.scss']
})
export class PhotoAlbumsComponent implements OnInit {
  albums: any;
  constructor(private service: PhotoService) {}

  ngOnInit() {
    this.getData();
  }
  getData() {
    this.service.getAlbums().subscribe((response: APIResponse) => {
      this.albums = response.response.results;
    });
  }
}
