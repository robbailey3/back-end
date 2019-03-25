import { APIResponse } from './../../shared/interfaces/api-response';
import { Component, OnInit } from '@angular/core';
import { TodoService } from './todo.service';
import { Todo } from './todo';

@Component({
  selector: 'rb-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  todos: Todo[];
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
}
