import { useState } from "react";

export const useForm = (initialFormState = {}) => {
  const [formState, setFormState] = useState(initialFormState);

  const handleInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({ ...formState, [name]: value });
  };
  return { ...formState, handleInputChange };
};
