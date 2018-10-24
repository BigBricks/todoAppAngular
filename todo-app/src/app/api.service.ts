import { Injectable } from "@angular/core";
import { environment } from "../environments/environment";
import { Http, Response } from "@angular/http";
import { Todo } from "./todo";
import { HttpHeaders } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { map, catchError } from "rxjs/operators";
import { __core_private_testing_placeholder__ } from "@angular/core/testing";
const API_URL = environment.apiUrl;
@Injectable({
  providedIn: "root"
})
export class APIService {
  constructor(private http: Http) {}
  private handleError(error: Response | any) {
    console.error("ApiService::handleError", error);
    return throwError(error);
  }

  public addTodo(todo: Todo): Observable<Todo> {
    // let body = JSON.stringify(todo);
    return this.http.post(API_URL + "/api/todo", { title: todo }).pipe(
      map(response => {
        return new Todo(response.json());
      }),
      // tap((todo: Todo) => console.log(`added hero w/ title=${todo.title}`)),
      catchError(this.handleError)
    );
  }
  public deleteTodo(todoId: number): Observable<null> {
    return this.http.delete(API_URL + "/api/todo/" + todoId).pipe(
      map(response => null),
      catchError(this.handleError)
    );
  }
  public updateTodo(todo: Todo): Observable<Todo> {
    return this.http
      .put(API_URL + "/api/todo/" + todo.id, {
        title: todo.title,
        complete: todo.complete
      })
      .pipe(
        map(response => {
          return new Todo(response.json());
        }),
        catchError(this.handleError)
      );
  }
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
}
