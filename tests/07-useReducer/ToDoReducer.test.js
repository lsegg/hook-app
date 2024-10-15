import { toDoReducer } from "../../src/07-useReducer/ToDoReducer";

describe("ToDoReducer", () => {
  const initialState = [
    {
      id: 1,
      description: "test",
      done: false,
    },
  ];

  const newToDo = {
    id: 2,
    description: "new task",
    done: false,
  };

  test("should return the initial state", () => {
    const newState = toDoReducer(initialState, {});
    expect(newState).toBe(initialState);
  });

  test("should add a task to do", () => {
    const action = {
      type: "addToDo",
      payload: newToDo,
    };

    const newState = toDoReducer(initialState, action);
    expect(newState.length).toBe(2);
    expect(newState).toContain(action.payload);
  });

  test("should remove a task to do", () => {
    const action = {
      type: "removeToDo",
      payload: 2,
    };

    const newState = toDoReducer(initialState, action);
    expect(newState.length).toBe(1);
  });

  test("should toggle a task to do", () => {
    const action = {
      type: "toggleToDo",
      payload: 1,
    };

    const newState = toDoReducer(initialState, action);
    expect(newState[0].done).toBeTruthy();
  });
});
