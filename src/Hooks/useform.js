import { useState } from "react";

export const useForm = (initialForm={}) => {
  const [formState, setFormState] = useState(initialForm);

  const handleChange = ({ target }) => {
    const { value, name } = target; 
    setFormState({
      ...formState,
      [name]: value
    });
  };

  return {
    formState,
    handleChange,
  };
}
