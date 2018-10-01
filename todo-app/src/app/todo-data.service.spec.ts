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
  describe("#save(todo)", () => {
    it("should automatically increment id", inject(
      [TodoDataService],
      (service: TodoDataService) => {
        let todo1 = new Todo({ title: "1", complete: false });
        let todo2 = new Todo({ title: "2", complete: true });
        service.addTodo(todo1);
        service.addTodo(todo2);
        expect(service.getTodo(1)).toEqual(todo1);
        expect(service.getTodo(2)).toEqual(todo2);
      }
    ));
  });
  describe("#deleteTodo(id)", () => {
    it("should remove a todo by id", inject(
      [TodoDataService],
      (service: TodoDataService) => {
        let todo1 = new Todo({ title: "1", complete: false });
        let todo2 = new Todo({ title: "2", complete: true });
        service.addTodo(todo1);
        service.addTodo(todo2);
        expect(service.getAllTodo()).toEqual([todo1, todo2]);
        service.deleteTodo(1);
        expect(service.getAllTodo()).toEqual([todo2]);
        service.deleteTodo(2);
        expect(service.getAllTodo()).toEqual([]);
      }
    ));
    it("should not remove anything if given a false id", inject(
      [TodoDataService],
      (service: TodoDataService) => {
        let todo1 = new Todo({ title: "1", complete: false });
        let todo2 = new Todo({ title: "2", complete: true });
        service.addTodo(todo1);
        service.addTodo(todo2);
        expect(service.getAllTodo()).toEqual([todo1, todo2]);
        service.deleteTodo(3);
        expect(service.getAllTodo()).toEqual([todo1, todo2]);
      }
    ));
  });
  describe("#updateTodo(id, values)", () => {
    it("should return todo with id and corresponding data updated", inject(
      [TodoDataService],
      (service: TodoDataService) => {
        let todo1 = new Todo({ title: "1", complete: false });
        service.addTodo(todo1);
        let update = service.updateTodo(1, {
          title: "bob ross"
        });
        expect(update.title).toEqual("bob ross");
      }
    ));
  });
});
