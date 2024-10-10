import { PropTypes } from "prop-types";
import { ToDoItem } from "./ToDoItem";

export const ToDoList = ({ toDos, onDeleteToDo, onToggleToDo }) => {
  return (
    <ul className="list-group">
      {toDos.map((toDo) => (
        <ToDoItem
          key={toDo.id}
          toDo={toDo}
          onDeleteToDo={onDeleteToDo}
          onToggleToDo={onToggleToDo}
        />
      ))}
    </ul>
  );
};

ToDoList.propTypes = {
  toDos: PropTypes.array.isRequired,
  onDeleteToDo: PropTypes.func.isRequired,
  onToggleToDo: PropTypes.func.isRequired,
};
