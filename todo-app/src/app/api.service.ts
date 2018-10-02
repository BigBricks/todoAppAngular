import { Injectable } from "@angular/core";
import { environment } from "../environments/environment";
import { Http, Response } from "@angular/http";
import { Todo } from "./todo";
import { Observable } from "rxjs/Observable";
const API_URL = environment.apiUrl;
@Injectable({
  providedIn: "root"
})
export class APIService {
  constructor(private http: Http) {}
  public addTodo(todo: Todo) {}
  public deleteTodo() {}
  public updateTodo() {}
  public getTodo() {}
  public getAllTodo() {}
  public toggleComplete() {}
}
