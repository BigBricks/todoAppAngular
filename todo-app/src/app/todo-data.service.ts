import { Injectable } from "@angular/core";
import { Todo } from "./todo";
@Injectable({
  providedIn: "root"
})
export class TodoDataService {
  finalId: number = 0;
  todos: Todo[] = [];
  constructor() {}
  addTodo(todo: Todo): TodoDataService {
    if (!todo.id) {
      todo.id = ++this.finalId;
    }
    this.todos.push(todo);
    return this;
  }
  deleteTodo(id: number): TodoDataService {
    this.todos = this.todos.filter(todo => todo.id !== id);
    return this;
  }
}
