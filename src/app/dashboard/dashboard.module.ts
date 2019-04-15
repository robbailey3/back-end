import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NotificationsModule } from '../notifications/notifications.module';
import { SharedModule } from '../shared/shared.module';
import { DashboardRootComponent } from './dashboard-root/dashboard-root.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoService } from './todo-list/todo.service';
import { WeatherComponent } from './weather/weather.component';
import { DialogService } from '../shared/dialog/dialog.service';

@NgModule({
  declarations: [TodoListComponent, DashboardRootComponent, WeatherComponent],
  imports: [CommonModule, SharedModule, FormsModule, NotificationsModule],
  providers: [TodoService, DialogService]
})
export class DashboardModule {}
