import { TestBed } from "@angular/core/testing";
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
    it(
      "should return an empty array by default",
      inject([TodoDataService]),
      (service: TodoDataService) => {
        expect(service.getAllTodo()).toEqual([]);
      }
    );
  });
});
