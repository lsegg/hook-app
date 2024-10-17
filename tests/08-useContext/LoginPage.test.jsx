import { render, screen, fireEvent } from "@testing-library/react";
import { LoginPage } from "../../src/08-useContext/LoginPage";
import { UserContext } from "../../src/08-useContext/context/UserContext";
describe("LoginPage", () => {
  test("should render the component without a user", () => {
    render(
      <UserContext.Provider value={{ user: null }}>
        <LoginPage />
      </UserContext.Provider>
    );

    const preTag = screen.getByLabelText("pre");
    expect(preTag).toBeTruthy();
    expect(preTag.innerHTML).toBe("null");
  });

  test("should call set user on button click", () => {
    const user = { id: 1, name: "Jane Doe", email: "jane@doe.com" };

    const setUserMock = jest.fn();

    render(
      <UserContext.Provider value={{ user, setUser: setUserMock }}>
        <LoginPage />
      </UserContext.Provider>
    );

    const button = screen.getByRole("button");
    fireEvent.click(button);
    expect(setUserMock).toHaveBeenCalledWith(user);
  });
});
