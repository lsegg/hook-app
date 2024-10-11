import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { getRoutes } from "./Routes";
// import { HooksApp } from "./HooksApp";
// import "./07-useReducer/intro-reducer";
// import { ToDoApp } from "./07-useReducer/ToDoApp";
import "./index.css";

const router = getRoutes();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
