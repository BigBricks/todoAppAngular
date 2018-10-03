import { Component, OnInit } from "@angular/core";
import { Todo } from "./todo";
import { TodoDataService } from "./todo-data.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  providers: [TodoDataService]
})
export class AppComponent implements OnInit {
  // title = "todo-app";
  // newTodo: Todo = new Todo();
  todos: Todo[] = [];
  constructor(private todoDataService: TodoDataService) {}
  public ngOnInit() {
    this.todoDataService.getAllTodo().subscribe(todos => {
      this.todos = todos;
    });
  }
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

  get todoss() {
    return this.todoDataService.getAllTodo();
  }
}
