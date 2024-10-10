import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import { HooksApp } from "./HooksApp";
// import "./07-useReducer/intro-reducer";
import { ToDoApp } from "./07-useReducer/ToDoApp";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ToDoApp />
  </StrictMode>
);
