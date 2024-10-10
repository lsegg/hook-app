import { ToDoList } from "./ToDoList";
import { ToDoAdd } from "./ToDoAdd";
import { useToDos } from "../hooks";

export const ToDoApp = () => {
  const {
    toDos,
    totalCount,
    pendingCount,
    handleAddToDo,
    handleRemoveToDo,
    handleToggleToDo,
  } = useToDos();

  return (
    <>
      <h1>ToDoApp ({totalCount})</h1>
      <small>Pending: {pendingCount}</small>
      <hr />

      <div className="row">
        <div className="col-7">
          <ToDoList
            toDos={toDos}
            onDeleteToDo={handleRemoveToDo}
            onToggleToDo={handleToggleToDo}
          />
        </div>

        <div className="col-5">
          <h4>Add toDo</h4>
          <hr />
          <ToDoAdd onNewToDo={handleAddToDo} />
        </div>
      </div>
    </>
  );
};
