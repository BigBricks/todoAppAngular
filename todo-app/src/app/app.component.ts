import { Component, OnInit, OnChanges } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { Todo } from "./todo";
import { TodoDataService } from "./todo-data.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  providers: [TodoDataService]
})
export class AppComponent implements OnInit, OnChanges {
  // title = "todo-app";
  // newTodo: Todo = new Todo();
  todos: Todo[] = [];
  constructor(private todoDataService: TodoDataService) {}
  public ngOnInit() {
    this.todoDataService.getAllTodo().subscribe(todos => {
      this.todos = todos;
    });
  }
  public ngOnChanges() {
    this.todoDataService.getAllTodo().subscribe(todos => {
      this.todos = todos;
    });
  }
  toggleComplete(todo) {
    console.log(todo);
    this.todoDataService.toggleComplete(todo).subscribe(updatedTodo => {
      todo = updatedTodo;
    });
  }
  addTodo(todo) {
    console.log(todo);
    this.todoDataService.addTodo(todo).subscribe(newTodo => {
      this.todos.push(newTodo);
    });
    // this.todoDataService.addTodo(this.newTodo);
    // this.newTodo = new Todo();
  }

  removeTodo(todo) {
    console.log(todo);
    this.todoDataService.deleteTodo(todo).subscribe(() => {
      this.todos = this.todos.filter(t => t.title !== todo.title);
      this.ngOnInit();
    });
  }

  // get todoss() {
  //   return this.todoDataService.getAllTodo();
  // }
}
