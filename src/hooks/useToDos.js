import { toDoReducer } from "../07-useReducer/ToDoReducer";
import { useReducer, useEffect } from "react";

const initialState = [
  // {
  //   id: new Date().getTime(),
  //   description: "Pick the Soul Gem",
  //   done: false,
  // },
  // {
  //   id: new Date().getTime() + 100,
  //   description: "Pick the Time Gem",
  //   done: false,
  // },
];

const init = () => {
  return JSON.parse(localStorage.getItem("toDos")) || [];
};

export const useToDos = () => {
  const [toDos, dispatch] = useReducer(toDoReducer, initialState, init);

  useEffect(() => {
    localStorage.setItem("toDos", JSON.stringify(toDos));
  }, [toDos]);

  const handleAddToDo = (toDo) => {
    const action = {
      type: "addToDo",
      payload: toDo,
    };

    dispatch(action);
  };

  const handleRemoveToDo = (id) => {
    const action = {
      type: "removeToDo",
      payload: id,
    };

    dispatch(action);
  };

  const handleToggleToDo = (id) => {
    const action = {
      type: "toggleToDo",
      payload: id,
    };

    dispatch(action);
  };

  const totalCount = toDos.length;
  const pendingCount = toDos.filter((toDo) => !toDo.done).length;
  return {
    toDos,
    totalCount,
    pendingCount,
    handleAddToDo,
    handleRemoveToDo,
    handleToggleToDo,
  };
};
