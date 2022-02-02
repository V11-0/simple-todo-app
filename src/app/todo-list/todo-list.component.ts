import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo/todo.model';
import { TodoService } from '../todo/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {

  constructor(private todoService: TodoService) { }

  deleteTodo(todo: Todo): void {
    let index = this.todos.indexOf(todo);

    this.todoService.removeTodo(index);
  }

  get todos(): Array<Todo> {
    return this.todoService.todoList;
  }
}
