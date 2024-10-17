import { render, screen } from "@testing-library/react";
import { RouterProvider, createMemoryRouter } from "react-router-dom";
import { getRoutes } from "../src/Routes";

describe("MainApp", () => {
  const router = getRoutes();
  test("should render HomePage", () => {
    render(<RouterProvider router={router} />);

    expect(screen.getByText("Home")).toBeTruthy();
  });

  test("should render LoginPage", () => {
    render(<RouterProvider router={router} />);

    expect(screen.getByText("Login")).toBeTruthy();
  });
});
