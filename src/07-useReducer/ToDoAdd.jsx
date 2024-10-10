import { PropTypes } from "prop-types";
import { useForm } from "../hooks/useForm";

export const ToDoAdd = ({ onNewToDo }) => {
  const { description, handleInputChange, handleReset } = useForm({
    description: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (description.length <= 1) return;

    const newToDo = {
      id: new Date().getTime(),
      description,
      done: false,
    };

    onNewToDo(newToDo);
    handleReset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="description"
        placeholder="what do you need to do?"
        className="form-control"
        id="toDo"
        value={description}
        onChange={handleInputChange}
      />

      <button type="submit" className="btn btn-outline-primary mt-2">
        Add toDo
      </button>
    </form>
  );
};

ToDoAdd.propTypes = {
  onNewToDo: PropTypes.func.isRequired,
};
