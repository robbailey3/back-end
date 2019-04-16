import { Debug } from 'src/app/global/debug';

import { Component, OnInit } from '@angular/core';

import { Notification } from '../notification';
import { NotificationService } from '../notification.service';
import { NavigationService } from 'src/app/global/navigation/navigation.service';

@Component({
  selector: 'rb-notification-list',
  templateUrl: './notification-list.component.html',
  styleUrls: ['./notification-list.component.scss']
})
export class NotificationListComponent implements OnInit {
  public notifications: Notification[];
  public notifActive: boolean;
  constructor(
    private service: NotificationService,
    private nav: NavigationService
  ) {}

  ngOnInit() {
    this.service.getNotifications().subscribe((response: Notification[]) => {
      this.notifications = response;
    });
    this.nav.$notifStatus.subscribe((status: boolean) => {
      this.notifActive = status;
    });
  }
  newNotification() {
    this.service.addNotification(new Notification('foo', 'success', false));
  }
  clearNotifications() {
    this.service.clearNotifications();
    Debug.log(this.service.notifications);
  }
}
