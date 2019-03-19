import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './todo-list/todo-list.component';
import { DashboardRootComponent } from './dashboard-root/dashboard-root.component';

@NgModule({
  declarations: [TodoListComponent, DashboardRootComponent],
  imports: [
    CommonModule
  ]
})
export class DashboardModule { }
