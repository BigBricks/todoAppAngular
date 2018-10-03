import { Component } from "@angular/core";
import { Todo } from "./todo";
import { TodoDataService } from "./todo-data.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  providers: [TodoDataService]
})
export class AppComponent {
  title = "todo-app";
  newTodo: Todo = new Todo();
  constructor(private todoDataService: TodoDataService) {}
  toggleComplete(todo) {
    this.todoDataService.toggleComplete(todo);
  }
  addTodo(todo) {
    this.todoDataService.addTodo(todo);
    // this.todoDataService.addTodo(this.newTodo);
    // this.newTodo = new Todo();
  }

  removeTodo(todo) {
    this.todoDataService.deleteTodo(todo.id);
  }

  get todos() {
    return this.todoDataService.getAllTodo();
  }
}
