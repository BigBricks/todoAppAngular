import { TestBed, async, inject } from "@angular/core/testing";
import { Todo } from "./todo";
import { TodoDataService } from "./todo-data.service";

describe("TodoDataService", () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [TodoDataService]
    }));

  it("should be created", () => {
    const service: TodoDataService = TestBed.get(TodoDataService);
    expect(service).toBeTruthy();
  });
  describe("#getAllTodo()", () => {
    it("should return an empty array by default", inject(
      [TodoDataService],
      (service: TodoDataService) => {
        expect(service.getAllTodo()).toEqual([]);
      }
    ));
    it("should return all todos", inject(
      [TodoDataService],
      (service: TodoDataService) => {
        let todo1 = new Todo({ title: "1", complete: false });
        let todo2 = new Todo({ title: "2", complete: true });
        service.addTodo(todo1);
        service.addTodo(todo2);
        expect(service.getAllTodo()).toEqual([todo1, todo2]);
      }
    ));
  });
});
