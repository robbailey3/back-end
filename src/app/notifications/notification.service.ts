import { Injectable } from '@angular/core';
import { Notification } from './notification';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  public notifications: Notification[] = [];
  public subject = new BehaviorSubject<Notification[]>(this.notifications);
  constructor() {}

  addNotification(notification: Notification) {
    this.notifications.push(notification);
    this.subject.next(this.notifications);
  }
  getNotifications() {
    return this.subject;
  }
  clearNotifications() {
    this.notifications = [];
    this.subject.next(this.notifications);
  }
}
