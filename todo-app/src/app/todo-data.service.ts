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
  updateTodo(id: number, values: Object = {}): Todo {
    let bob = this.getTodo(id);
    if (!bob) {
      return null;
    }
    Object.assign(bob, values);
    return bob;
  }
  getTodo(id: number): Todo {
    return this.todos.filter(todo => todo.id === id).pop();
  }
  getAllTodo(): Todo[] {
    return this.todos;
  }
  toggleComplete(todo: Todo) {
    let update = this.updateTodo(todo.id, {
      complete: !todo.complete
    });
    return update;
  }
}
