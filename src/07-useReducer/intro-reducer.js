console.log("Hello world");

const initialState = [
  {
    id: 1,
    toDo: "Pick the Soul Gem",
    done: false,
  },
];

const toDoReducer = (state = initialState, action = {}) => {
  if (action.type === "[TODO] add toDo") return [...state, action.payload];

  return state;
};

let toDos = toDoReducer();

const newToDo = {
  id: 2,
  toDo: "Pick th Power Gem",
  done: false,
};

const addToDoAction = {
  type: "[TODO] add toDo",
  payload: newToDo,
};

toDos = toDoReducer(toDos, addToDoAction);

console.log(toDos);
