import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './todo-list/todo-list.component';
import { DashboardRootComponent } from './dashboard-root/dashboard-root.component';
import { TodoService } from './todo-list/todo.service';

@NgModule({
  declarations: [TodoListComponent, DashboardRootComponent],
  imports: [CommonModule, SharedModule],
  providers: [TodoService]
})
export class DashboardModule {}
