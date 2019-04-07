import { Component, OnInit } from '@angular/core';

import { listAnimation } from '../../shared/animations/src/list.animation';
import { APIResponse } from '../../shared/interfaces/api-response';
import { Todo } from './todo';
import { TodoService } from './todo.service';

@Component({
  selector: 'rb-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
  animations: [listAnimation]
})
export class TodoListComponent implements OnInit {
  todos: Todo[];
  newTodo: string;
  constructor(private service: TodoService) {}

  ngOnInit() {
    this.getData();
  }
  getData() {
    this.service.getTodos().subscribe((response: APIResponse) => {
      this.todos = response.response.results as Todo[];
    });
  }
  checkboxChecked($event, todoID) {
    this.service.changeTodoStatus(todoID, $event).subscribe();
  }
  submitTodo() {
    const data = { todo: this.newTodo };
    this.service.newTodo(data).subscribe(() => {
      this.getData();
      this.newTodo = '';
    });
  }
  deleteTodo(todo: Todo) {
    this.service.deleteTodo(todo.todoID).subscribe();
    this.todos.splice(this.todos.indexOf(todo), 1);
  }
}
