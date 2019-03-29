import { FormsModule } from '@angular/forms';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './todo-list/todo-list.component';
import { DashboardRootComponent } from './dashboard-root/dashboard-root.component';
import { TodoService } from './todo-list/todo.service';
import { NotificationsModule } from '../notifications/notifications.module';

@NgModule({
  declarations: [TodoListComponent, DashboardRootComponent],
  imports: [CommonModule, SharedModule, FormsModule, NotificationsModule],
  providers: [TodoService]
})
export class DashboardModule {}
