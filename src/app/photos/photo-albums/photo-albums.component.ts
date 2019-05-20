import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../photo.service';
import { APIResponse } from './../../shared/interfaces/api-response';
import { Album } from './../album';

@Component({
  selector: 'rb-photo-albums',
  templateUrl: './photo-albums.component.html',
  styleUrls: ['./photo-albums.component.scss']
})
export class PhotoAlbumsComponent implements OnInit {
  albums: Album[];
  constructor(private service: PhotoService) {}

  ngOnInit() {
    this.getData();
  }
  getData() {
    this.service.getAlbums().subscribe((response: APIResponse) => {
      this.albums = response.response.results as Album[];
    });
  }
  newAlbum() {}
}
