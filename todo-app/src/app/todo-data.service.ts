import { Injectable } from "@angular/core";
import { Todo } from "./todo";
@Injectable({
  providedIn: "root"
})
export class TodoDataService {
  finalId: number = 0;
  todos: Todo[] = [];
  constructor() {}
}
