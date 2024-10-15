import { PropTypes } from "prop-types";

export const ToDoItem = ({ toDo, onDeleteToDo, onToggleToDo }) => {
  return (
    <li
      className={`list-group-item d-flex justify-content-between${
        toDo.done ? " bg-secondary-subtle" : ""
      }`}
    >
      <span
        className={`align-self-center${
          toDo.done ? " text-decoration-line-through" : ""
        }`}
        aria-label="span"
        onClick={() => onToggleToDo(toDo.id)}
      >
        {toDo.description}
      </span>
      <button
        className="btn btn-outline-danger"
        onClick={() => onDeleteToDo(toDo.id)}
      >
        Delete
      </button>
    </li>
  );
};

ToDoItem.propTypes = {
  toDo: PropTypes.object.isRequired,
  onDeleteToDo: PropTypes.func.isRequired,
  onToggleToDo: PropTypes.func.isRequired,
};
