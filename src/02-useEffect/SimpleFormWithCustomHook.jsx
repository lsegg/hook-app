import { useEffect } from "react";
import { useForm } from "../hooks/useForm";

export const SimpleFormWithCustomHook = () => {
  const { username, email, password, handleInputChange } = useForm({
    username: "janedoe",
    email: "jane@doe.com",
    password: "password",
  });

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
        className="form-control"
        placeholder="janedoe"
        name="username"
        value={username}
        onChange={handleInputChange}
      />

      <input
        type="text"
        className="form-control"
        placeholder="jane@doe.com"
        name="email"
        value={email}
        onChange={handleInputChange}
      />

      <input
        type="password"
        className="form-control"
        placeholder="password"
        name="password"
        value={password}
        onChange={handleInputChange}
      />
    </>
  );
};
