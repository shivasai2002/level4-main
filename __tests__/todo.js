/* eslint-disable no-undef */
const todoList = require("../todo");
const { all, markAsDone, add, over_Due, dueToday, dueLater } = todoList();

describe("Todo List Test Suite", () => {
  beforeAll(() => {
    const this_very_day = new Date();
    const twoDay = 86400000;
    [
      {
        title: "Prepare for Exam",
        completed: false,
        dueDate: new Date(this_very_day.getTime() - twoDay).toLocaleDateString(
          "en-CA"
        ),
      },
      {
        title: "Pay rent",
        completed: false,
        dueDate: new Date().toLocaleDateString("en-CA"),
      },
      {
        title: "Submit assignment",
        completed: false,
        dueDate: new Date(this_very_day.getTime() + twoDay).toLocaleDateString(
          "en-CA"
        ),
      },
    ].forEach(add);
  });
  test("checks creating a new todo", () => {
    expect(all.length).toEqual(3);
    add({
      title: "Go Buy Bred",
      completed: false,
      dueDate: new Date().toLocaleDateString("en-CA"),
    });

    expect(all.length).toEqual(4);
  });

  test("checks marking a todo as completed", () => {
    expect(all[0].completed).toEqual(false);
    markAsDone(0);
    expect(all[0].completed).toEqual(true);
  });

  test("checks retrieval of overdue items", () => {
    expect(over_Due().length).toEqual(1);
  });

  test("checks retrieval of due today items", () => {
    expect(dueToday().length).toEqual(2);
  });

  test("checks retrieval of due later items", () => {
    expect(dueLater().length).toEqual(1);
  });
});
