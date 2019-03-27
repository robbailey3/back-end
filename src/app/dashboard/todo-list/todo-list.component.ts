import { APIResponse } from './../../shared/interfaces/api-response';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { TodoService } from './todo.service';
import { Todo } from './todo';

@Component({
  selector: 'rb-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
  encapsulation: ViewEncapsulation.None
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
  deleteTodo(id) {
    this.service.deleteTodo(id).subscribe(() => {
      this.getData();
    });
  }
}
