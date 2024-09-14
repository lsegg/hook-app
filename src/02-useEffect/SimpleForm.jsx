import { useState, useEffect } from "react";
import { Message } from "./Message";

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    username: "janedoe",
    email: "jane@doe.com",
  });

  const { username, email } = formState;

  const handleInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({ ...formState, [name]: value });
  };

  useEffect(() => {
    console.log("Username changed");
  }, [username]);

  useEffect(() => {
    console.log("Email changed");
  }, [email]);

  return (
    <>
      <h1>Simple Form</h1>
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
      {username === "janedoe" && <Message />}
    </>
  );
};
