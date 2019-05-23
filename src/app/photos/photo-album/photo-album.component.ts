import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { APIResponse } from '../../shared/interfaces/api-response';
import { Photo } from '../photo';
import { PhotoService } from '../photo.service';

@Component({
  selector: 'rb-photo-album',
  templateUrl: './photo-album.component.html',
  styleUrls: ['./photo-album.component.scss']
})
export class PhotoAlbumComponent implements OnInit {
  public modalState = 'inactive';
  public albumID: number;
  public photos: Photo[];
  @HostListener('window:keydown', ['$event']) onkeypress($event) {
    if ($event.key === 'Escape') {
      if (this.modalState === 'active') {
        this.modalState = 'inactive';
      }
    }
  }
  constructor(private route: ActivatedRoute, private service: PhotoService) {}

  ngOnInit() {
    this.getIDFromRoute();
  }
  toggleModal(): void {
    this.modalState === 'inactive'
      ? (this.modalState = 'active')
      : (this.modalState = 'inactive');
  }
  getIDFromRoute(): void {
    this.route.paramMap.subscribe((route: Params) => {
      this.albumID = +route.params['id'];
      this.getData(this.albumID);
    });
  }
  getData(id: number): void {
    this.service.getAlbum(id).subscribe((res) => {
      this.photos = res.response.results as Photo[];
    });
  }
  togglePhotoMenu(photo: Photo): void {
    photo.menu_active = !photo.menu_active;
  }
  togglePhotoEditMode(photo: Photo): void {
    photo.edit_mode = !photo.edit_mode;
  }
  togglePhotoFullscreen(photo: Photo): void {
    photo.photo_fullscreen = !photo.photo_fullscreen;
    console.log(photo);
  }
  deletePhoto(photo: Photo): void {
    this.service.deletePhoto(photo.photoID).subscribe((res: APIResponse) => {
      if (res.response.status === 'ok') {
        this.photos.splice(this.photos.indexOf(photo), 1);
      }
    });
  }
  updateCaption(photoID: number, caption: string): void {
    console.log({ photoID, caption });
  }
}
