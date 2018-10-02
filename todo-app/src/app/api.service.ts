import { Injectable } from "@angular/core";
import { environment } from "../environments/environment";
import { Http, Response } from "@angular/http";
import { Todo } from "./todo";
import { Observable } from "rxjs";
import { map, catchError } from "rxjs/operators";
const API_URL = environment.apiUrl;
@Injectable({
  providedIn: "root"
})
export class APIService {
  constructor(private http: Http) {}
  private handleError(error: Response | any) {
    console.error("ApiService::handleError", error);
    return Observable.throw(error);
  }
  public addTodo(todo: Todo): Observable<Todo> {
    return this.http.post(API_URL + "/api/todo", todo).pipe(
      map(response => {
        return new Todo(response.json());
      }),
      catchError(this.handleError)
    );
  }
  public deleteTodo(todoId: number) {}
  public updateTodo(todo: Todo) {}
  public getTodo(todoId: number): Observable<Todo> {
    return this.http.get(API_URL + "/api/todo" + todoId).pipe(
      map(response => {
        return new Todo(response.json());
      }),
      catchError(this.handleError)
    );
  }
  public getAllTodo(): Observable<Todo[]> {
    return this.http.get(API_URL + "/api/todo").pipe(
      map(response => {
        const todos = response.json();
        return todos.map(todo => new Todo(todo));
      }),
      catchError(this.handleError)
    );
  }
  public toggleComplete() {}
}
