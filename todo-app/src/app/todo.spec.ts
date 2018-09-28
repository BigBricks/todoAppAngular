import { Todo } from "./todo";

describe("Todo", () => {
  it("should create an instance", () => {
    expect(new Todo()).toBeTruthy();
  });
  it("should accept values into constructor", () => {
    let bob = new Todo({
      title: "WHAT ARE YOU DOING PRIVATE",
      complete: true
    });
    expect(bob.title).toEqual("WHAT ARE YOU DOING PRIVATE");
    expect(bob.complete).toEqual(true);
  });
});
