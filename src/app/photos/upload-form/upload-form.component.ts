import { Component, OnInit } from '@angular/core';
import { Notification } from '../../notifications/notification';
import { NotificationService } from './../../notifications/notification.service';

@Component({
  selector: 'rb-upload-form',
  templateUrl: './upload-form.component.html',
  styleUrls: ['./upload-form.component.scss']
})
export class UploadFormComponent implements OnInit {
  previews: HTMLImageElement[] = [];
  files: File[] = [];
  private readonly MAX_FILE_SIZE = 1000 * 1000 * 2;
  private readonly ACCEPTED_FILETYPES = [
    'image/jpg',
    'image/jpeg',
    'image/png',
    'image/gif'
  ];
  private errors = [];
  constructor(private notification: NotificationService) {}

  ngOnInit() {}
  generatePreviews($event) {
    this.previews = [];
    this.errors = [];
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
    $event.target.value = null;
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
}
