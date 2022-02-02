import { Component } from '@angular/core';
import { Todo } from '../todo/todo.model';
import { TodoService } from '../todo/todo.service';

@Component({
  selector: 'app-todo-add-card',
  templateUrl: './todo-add-card.component.html',
  styleUrls: ['./todo-add-card.component.css']
})
export class TodoAddCardComponent {

  constructor(private service: TodoService) {
  }

  color: string = '#FFF';
  todoText: string = '';

  addTodo(): void {

    if (this.todoText === '') {
      return;
    }

    let todo: Todo = {
      content: this.todoText,
      dateCreated: new Date(),
      color: this.color
    }

    this.service.addTodo(todo);

    this.resetFields();
  }

  resetFields(): void {
    this.todoText = '';
    this.color = '#FFF';
  }
}
