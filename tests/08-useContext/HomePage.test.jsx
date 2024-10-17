import { render, screen } from "@testing-library/react";
import { HomePage } from "../../src/08-useContext/HomePage";
import { UserContext } from "../../src/08-useContext/context/UserContext";

describe("HomePage", () => {
  test("should render the component without a user", () => {
    render(
      <UserContext.Provider value={{ user: null }}>
        <HomePage />
      </UserContext.Provider>
    );

    const paragraph = screen.getByRole("paragraph");
    expect(paragraph).toBeTruthy();
    expect(paragraph.innerHTML).toBe("Hello !");
  });

  test("should render the component with a user", () => {
    const user = {
      id: 1,
      name: "Jane Doe",
    };
    render(
      <UserContext.Provider value={{ user }}>
        <HomePage />
      </UserContext.Provider>
    );

    const paragraph = screen.getByRole("paragraph");
    expect(paragraph.innerHTML).toBe(`Hello ${user.name}!`);
  });
});
