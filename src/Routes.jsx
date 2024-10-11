import { createBrowserRouter } from "react-router-dom";
import {
  MainApp,
  AboutPage,
  HomePage,
  LoginPage,
  NotFoundPage,
} from "./08-useContext";

export const getRoutes = () =>
  createBrowserRouter([
    {
      path: "/",
      element: <MainApp />,
      errorElement: <NotFoundPage />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "login",
          element: <LoginPage />,
        },
        {
          path: "about",
          element: <AboutPage />,
        },
      ],
    },
  ]);
