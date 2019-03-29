import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationListComponent } from './notification-list/notification-list.component';
import { NotificationComponent } from './notification/notification.component';
import { NotificationsComponent } from './notifications/notifications.component';

@NgModule({
  declarations: [
    NotificationListComponent,
    NotificationComponent,
    NotificationsComponent
  ],
  exports: [
    NotificationListComponent,
    NotificationComponent,
    NotificationsComponent
  ],
  imports: [CommonModule]
})
export class NotificationsModule {}
