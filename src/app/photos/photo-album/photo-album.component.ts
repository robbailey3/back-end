import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Photo } from '../photo';
import { PhotoService } from '../photo.service';

@Component({
  selector: 'rb-photo-album',
  templateUrl: './photo-album.component.html',
  styleUrls: ['./photo-album.component.scss']
})
export class PhotoAlbumComponent implements OnInit {
  private albumID: number;
  modalState = 'inactive';
  public photos: Photo[];
  constructor(private route: ActivatedRoute, private service: PhotoService) {}

  ngOnInit() {
    this.getIDFromRoute();
  }
  toggleModal() {
    this.modalState === 'inactive'
      ? (this.modalState = 'active')
      : (this.modalState = 'inactive');
  }
  getIDFromRoute() {
    this.route.paramMap.subscribe((route: Params) => {
      this.getData(+route.params['id']);
    });
  }
  getData(id: number) {
    this.service.getAlbum(id).subscribe((res) => {
      this.photos = res.response.results as Photo[];
    });
  }
}
