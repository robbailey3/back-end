import { AfterViewInit, Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { NotificationService } from './../../notifications/notification.service';

import { Subject, Subject as BehaviourSubject, Subscription } from 'rxjs';
// tslint:disable-next-line:no-submodule-imports
import { distinctUntilChanged, throttleTime } from 'rxjs/operators';
import { Notification } from '../../notifications/notification';
import { APIResponse } from '../../shared/interfaces/api-response';
import { Photo } from '../photo';
import { PhotoService } from '../photo.service';

@Component({
  selector: 'rb-photo-album',
  templateUrl: './photo-album.component.html',
  styleUrls: ['./photo-album.component.scss']
})
export class PhotoAlbumComponent implements OnInit, AfterViewInit {
  public modalState = 'inactive';
  public exifPanelState = 'inactive';
  public albumID: number;
  public photos: Photo[];
  public fullScreenImage: Photo;
  public captionInput: Subject<any> = new Subject<any>();
  public currentExif: any;
  selectedPhotos: Photo[] = [];
  @HostListener('window:keydown', ['$event']) onkeypress($event) {
    if ($event.key === 'Escape') {
      if (this.modalState === 'active') {
        this.modalState = 'inactive';
      }
    }
  }
  constructor(
    private route: ActivatedRoute,
    private service: PhotoService,
    private notification: NotificationService
  ) {}

  ngOnInit() {
    this.getIDFromRoute();
  }
  ngAfterViewInit() {
    this.captionInput
      .pipe(throttleTime(1000))
      .subscribe((photo: Photo) => this.updateCaption(photo));
  }
  toggleModal(): void {
    this.modalState === 'inactive'
      ? (this.modalState = 'active')
      : (this.modalState = 'inactive');
  }
  getIDFromRoute(): void {
    this.route.paramMap.subscribe((route: Params) => {
      this.albumID = +route.params['id'];
      this.getData();
    });
  }
  getData(): void {
    this.service.getAlbum(this.albumID).subscribe((res) => {
      this.photos = res.response.results as Photo[];
    });
  }
  togglePhotoMenu(photo: Photo): void {
    photo.menu_active = !photo.menu_active;
  }
  togglePhotoEditMode(photo: Photo): void {
    this.togglePhotoMenu(photo);
    photo.edit_mode = !photo.edit_mode;
  }
  togglePhotoFullscreen(photo: Photo): void {
    this.togglePhotoMenu(photo);
    this.fullScreenImage = photo;
    console.log(this);
  }
  toggleSelect(photo: Photo, $event?: MouseEvent) {
    const curPState = photo.is_selected;
    if (!$event.ctrlKey) {
      this.selectedPhotos = [];
      this.photos.map((ph: Photo) => (ph.is_selected = false));
    }
    this.selectedPhotos.includes(photo)
      ? this.selectedPhotos.splice(this.selectedPhotos.indexOf(photo), 1)
      : this.selectedPhotos.push(photo);
    this.currentExif = photo.exif;
    photo.is_selected = !curPState;
  }
  toggleExifPanel() {
    this.exifPanelState === 'inactive'
      ? (this.exifPanelState = 'active')
      : (this.exifPanelState = 'inactive');
  }
  deletePhoto(photo: Photo): void {
    this.service.deletePhoto(photo.photoID).subscribe((res: APIResponse) => {
      if (res.response.status === 'ok') {
        this.photos.splice(this.photos.indexOf(photo), 1);
        this.notification.addNotification(
          new Notification('Photo 📷 deleted', 'success', true)
        );
      }
    });
  }
  captionSubmit(photo: Photo) {
    this.captionInput.next(photo);
  }
  updateCaption(photo: Photo): void {
    this.service
      .updateCaption(photo.photoID, photo.caption)
      .subscribe((res: APIResponse) => {
        if (res.response.status === 'ok') {
          this.togglePhotoEditMode(photo);
          this.togglePhotoMenu(photo);
          this.notification.addNotification(
            new Notification('Caption updated 📷 ', 'success', true)
          );
        }
      });
  }
  closeFullScreen() {
    this.fullScreenImage = null;
  }
  setAlbumImage(photo: Photo) {
    this.service
      .setAlbumImage(photo.photoID, this.albumID)
      .subscribe((res: APIResponse) => {
        if (res.response.status === 'ok') {
          this.togglePhotoMenu(photo);
          this.notification.addNotification(
            new Notification('Album cover image updated 📷 ', 'success', true)
          );
        }
      });
  }
  onUploadEnd() {
    this.modalState = 'inactive';
    this.getData();
  }
}
