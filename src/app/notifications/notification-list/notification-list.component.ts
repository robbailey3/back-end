import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../notification.service';
import { Notification } from '../notification';

@Component({
  selector: 'rb-notification-list',
  templateUrl: './notification-list.component.html',
  styleUrls: ['./notification-list.component.scss']
})
export class NotificationListComponent implements OnInit {
  public notifications: Notification[];
  constructor(private service: NotificationService) {}

  ngOnInit() {
    this.service.getNotifications().subscribe((response: Notification[]) => {
      this.notifications = response;
    });
  }
  newNotification() {
    this.service.addNotification(new Notification('foo', 'success', false));
  }
  clearNotifications() {
    this.service.clearNotifications();
    console.log(this.service.notifications);
  }
}
