import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../notification.service';
import { Notification } from '../notification';
import { fadeInDown } from 'src/app/shared/animations';

@Component({
  selector: 'rb-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss'],
  animations: [fadeInDown]
})
export class NotificationsComponent implements OnInit {
  public notifications: Notification[];
  constructor(private service: NotificationService) {}

  ngOnInit() {
    this.getNotifications();
  }
  getNotifications() {
    this.service.getNotifications().subscribe((response: Notification[]) => {
      this.notifications = response;
    });
  }
}
