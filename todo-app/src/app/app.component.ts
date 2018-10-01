import { Component } from "@angular/core";
import { TodoDataService } from "./todo-data.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "todo-app";
  constructor(private todoDataService: TodoDataService) {}
  toggleComplete(todo) {
    this.todoDataService.toggleComplete(todo);
  }
}
