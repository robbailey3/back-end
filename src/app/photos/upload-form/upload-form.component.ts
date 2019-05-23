import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Notification } from '../../notifications/notification';
import { PhotoService } from '../photo.service';
import { APIResponse } from './../../../../../frontEnd/src/app/shared/interfaces/api-response.interface';
import { NotificationService } from './../../notifications/notification.service';

@Component({
  selector: 'rb-upload-form',
  templateUrl: './upload-form.component.html',
  styleUrls: ['./upload-form.component.scss']
})
export class UploadFormComponent implements OnInit {
  @Input() albumID: number;
  @Output() uploaded: EventEmitter<void> = new EventEmitter<void>();
  previews: HTMLImageElement[] = [];
  files: File[] = [];
  uploadField: HTMLElement;
  private readonly MAX_FILE_SIZE = 1000 * 1000 * 2;
  private readonly ACCEPTED_FILETYPES = [
    'image/jpg',
    'image/jpeg',
    'image/png',
    'image/gif'
  ];
  private errors = [];
  constructor(
    private notification: NotificationService,
    private service: PhotoService
  ) {}

  ngOnInit() {}
  generatePreviews($event) {
    this.previews = [];
    this.errors = [];
    this.uploadField = $event.target;
    const files = Array.from($event.target.files);
    [].forEach.call(files, (file: File) => {
      const fr = new FileReader();
      if (this.validateFile(file as File)) {
        fr.readAsDataURL(file as Blob);
        fr.onloadend = (e) => {
          this.previews.push(e.target['result']);
          this.files.push(file);
        };
        fr.onerror = (e) => {
          this.errors.push(e);
        };
        fr.onabort = (e) => {
          this.errors.push(e);
        };
      }
    });
    this.errors.forEach((err) => {
      this.notification.addNotification(new Notification(err, 'error'));
    });
  }
  validateFile(file: File): boolean {
    if (file.size > this.MAX_FILE_SIZE) {
      this.errors.push(`${file.name} was too large`);
      return false;
    }
    if (!this.ACCEPTED_FILETYPES.includes(file.type.toLowerCase())) {
      this.errors.push(`${file.name} was of incorrect filetype`);
      return false;
    }
    return true;
  }
  submitForm() {
    const formData = new FormData();
    this.files.forEach((file) => {
      formData.append('files[]', file);
    });
    formData.append('albumID', this.albumID.toString());
    this.service.postPhotos(formData).subscribe((res: APIResponse) => {
      if (res.response.status === 'ok') {
        this.previews = [];
        this.files = [];
        this.errors = [];
        this.uploadField.files = null;
        this.uploaded.emit();
      }
    });
  }
}
