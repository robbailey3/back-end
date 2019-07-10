import { Notification } from 'src/app/notifications/notification';
import { NotificationService } from 'src/app/notifications/notification.service';
import { DialogService } from 'src/app/shared/dialog/dialog.service';

import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { listAnimation } from '../../shared/animations/src/list.animation';
import { APIResponse } from '../../shared/interfaces/api-response';
import { Todo } from './todo';
import { TodoService } from './todo.service';

@Component({
  selector: 'rb-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
  animations: [listAnimation],
  encapsulation: ViewEncapsulation.None
})
export class TodoListComponent implements OnInit {
  public todos: Todo[];
  public newTodo: string;
  constructor(
    private service: TodoService,
    private notification: NotificationService,
    private dialogService: DialogService
  ) {}

  public ngOnInit() {
    this.getData();
  }
  public getData() {
    this.service.getTodos().subscribe((response: APIResponse) => {
      this.todos = response.response.results as Todo[];
    });
  }
  public checkboxChecked($event, todoID) {
    this.service.changeTodoStatus(todoID, $event).subscribe();
  }
  public submitTodo() {
    const data = { todo: this.newTodo };
    this.service.newTodo(data).subscribe(() => {
      this.getData();
      this.newTodo = '';
    });
  }
  public deleteTodo(todo: Todo) {
    this.dialogService
      .confirm({
        title: 'Delete Todo?',
        content: 'Are you sure you want to delete this todo item?',
        confirmButtonTxt: 'Yes',
        declineButtonTxt: 'No'
      })
      .subscribe((res: boolean) => {
        if (res) {
          this.service.deleteTodo(todo.todoID).subscribe(() => {
            this.notification.addNotification(
              new Notification('Todo deleted', 'success', true)
            );
          });
          this.todos.splice(this.todos.indexOf(todo), 1);
        }
      });
  }
}
