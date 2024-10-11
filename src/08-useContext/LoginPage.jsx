import { useContext } from "react";
import { UserContext } from "./context/UserContext";

export const LoginPage = () => {
  const { user, setUser } = useContext(UserContext);

  return (
    <>
      <h1>Login Page</h1>
      <hr />
      <pre>{JSON.stringify(user)}</pre>

      <button
        className="btn btn-primary"
        onClick={() =>
          setUser({ id: 1, name: "Jane Doe", email: "jane@doe.com" })
        }
      >
        Set User
      </button>
    </>
  );
};
