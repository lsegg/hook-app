import { useEffect } from "react";
import { useForm } from "../hooks/useForm";

export const SimpleFormWithCustomHook = () => {
  const { username, email, password, handleInputChange, handleReset } = useForm(
    {
      username: "janedoe",
      email: "jane@doe.com",
      password: "password",
    }
  );

  useEffect(() => {
    console.log("Username changed");
  }, [username]);

  useEffect(() => {
    console.log("Email changed");
  }, [email]);

  useEffect(() => {
    console.log("Password changed");
  }, [password]);

  return (
    <>
      <h1>Simple Form With Custom Hook</h1>
      <hr />

      <input
        type="text"
        className="form-control mt-2"
        placeholder="janedoe"
        name="username"
        value={username}
        onChange={handleInputChange}
      />

      <input
        type="text"
        className="form-control mt-2"
        placeholder="jane@doe.com"
        name="email"
        value={email}
        onChange={handleInputChange}
      />

      <input
        type="password"
        className="form-control mt-2"
        placeholder="password"
        name="password"
        value={password}
        onChange={handleInputChange}
      />

      <button className="btn btn-danger mt-2" onClick={handleReset}>
        Reset
      </button>
    </>
  );
};
