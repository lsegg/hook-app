export const toDoReducer = (initialState, action) => {
  switch (action.type) {
    case "addToDo":
      return [...initialState, action.payload];
    case "removeToDo":
      return initialState.filter((toDo) => toDo.id !== action.payload);
    case "toggleToDo":
      return initialState.map((toDo) => {
        if (toDo.id === action.payload) {
          return { ...toDo, done: !toDo.done };
        } else {
          return toDo;
        }
      });
    default:
      return initialState;
  }
};
