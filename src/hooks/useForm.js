import { useState } from "react";

export const useForm = (initialFormState = {}) => {
  const [formState, setFormState] = useState(initialFormState);

  const handleInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({ ...formState, [name]: value });
  };
  const handleReset = () => {
    setFormState(initialFormState);
  };
  return { ...formState, handleInputChange, handleReset };
};
