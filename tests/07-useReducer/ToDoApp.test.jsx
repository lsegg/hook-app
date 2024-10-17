import { render, screen } from "@testing-library/react";
import { ToDoApp } from "../../src/07-useReducer/ToDoApp";
import { useToDos } from "../../src/hooks/useToDos";

jest.mock("../../src/hooks/useToDos");

describe("ToDoApp", () => {
  useToDos.mockReturnValue({
    toDos: [
      {
        id: 1,
        description: "test",
        done: false,
      },
      {
        id: 2,
        description: "another test",
        done: true,
      },
    ],
    totalCount: 2,
    pendingCount: 1,
    handleAddToDo: jest.fn(),
    handleRemoveToDo: jest.fn(),
    handleToggleToDo: jest.fn(),
  });

  test("should render properly", () => {
    render(<ToDoApp />);

    expect(screen.getByText("test")).toBeTruthy();
    expect(screen.getByText("another test")).toBeTruthy();
  });
});
