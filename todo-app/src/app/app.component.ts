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
  title = "todo-app";
  // newTodo: Todo = new Todo();
  todos: Todo[] = [];
  constructor(private todoDataService: TodoDataService) {}
  public ngOnInit() {
    this.todoDataService.getAllTodo().subscribe(todos => {
      this.todos = todos;
    });
  }
  toggleComplete(todo) {
    this.todoDataService.toggleComplete(todo).subscribe(updatedTodo => {
      todo = updatedTodo;
    });
  }
  addTodo(todo) {
    console.log(todo);
    this.todoDataService.addTodo(todo).subscribe(newTodo => {
      this.todos = this.todos.concat(newTodo);
    });
    // this.todoDataService.addTodo(this.newTodo);
    // this.newTodo = new Todo();
  }

  removeTodo(todo) {
    this.todoDataService.deleteTodo(todo.id).subscribe(() => {
      this.todos = this.todos.filter(t => t.id !== todo.id);
    });
  }

  // get todoss() {
  //   return this.todoDataService.getAllTodo();
  // }
}
