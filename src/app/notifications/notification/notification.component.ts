import { Component, Input } from '@angular/core';
import { Notification } from '../notification';
import { fadeInOut } from 'src/app/shared/animations';

@Component({
  selector: 'rb-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent {
  @Input() notification: Notification;
  close() {
    this.notification.isActive = false;
  }
}
