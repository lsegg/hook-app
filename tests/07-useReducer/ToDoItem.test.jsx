import { fireEvent, render, screen } from "@testing-library/react";
import { ToDoItem } from "../../src/07-useReducer/ToDoItem";

describe("ToDoItem", () => {
  const toDo = {
    id: 1,
    description: "test",
    done: false,
  };

  const onDeleteToDoMock = jest.fn();
  const onToggleToDoMock = jest.fn();

  beforeEach(() => jest.clearAllMocks());

  test("should render with pending toDo", () => {
    render(
      <ToDoItem
        toDo={toDo}
        onDeleteToDo={onDeleteToDoMock}
        onToggleToDo={onToggleToDoMock}
      />
    );

    const liElement = screen.getByRole("listitem");
    expect(liElement).toBeTruthy();
    expect(liElement.className).toBe(
      "list-group-item d-flex justify-content-between"
    );
    const spanElement = screen.getByLabelText("span");
    expect(spanElement).toBeTruthy();
    expect(spanElement.className).toBe("align-self-center");
  });

  test("should render with done toDo", () => {
    toDo.done = true;
    render(
      <ToDoItem
        toDo={toDo}
        onDeleteToDo={onDeleteToDoMock}
        onToggleToDo={onToggleToDoMock}
      />
    );

    const liElement = screen.getByRole("listitem");
    expect(liElement).toBeTruthy();
    expect(liElement.className).toContain("bg-secondary-subtle");
    const spanElement = screen.getByLabelText("span");
    expect(spanElement).toBeTruthy();
    expect(spanElement.className).toContain("text-decoration-line-through");
  });

  test("span should call toggle on click", () => {
    render(
      <ToDoItem
        toDo={toDo}
        onDeleteToDo={onDeleteToDoMock}
        onToggleToDo={onToggleToDoMock}
      />
    );

    const spanElement = screen.getByLabelText("span");
    fireEvent.click(spanElement);
    expect(onToggleToDoMock).toHaveBeenCalledWith(toDo.id);
  });

  test("button should call delete on click", () => {
    render(
      <ToDoItem
        toDo={toDo}
        onDeleteToDo={onDeleteToDoMock}
        onToggleToDo={onToggleToDoMock}
      />
    );

    const buttonElement = screen.getByRole("button");
    fireEvent.click(buttonElement);
    expect(onDeleteToDoMock).toHaveBeenCalledWith(toDo.id);
  });
});
