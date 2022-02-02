import { Todo } from "./todo.model";

export class TodoService {

    private todos: Array<Todo> = [];

    addTodo(todo: Todo) {
        this.todos.push(todo);
    }

    removeTodo(index: number) {
        this.todos.splice(index, 1);
    }

    get todoList(): Array<Todo> {
        return this.todos.slice();
    }
}