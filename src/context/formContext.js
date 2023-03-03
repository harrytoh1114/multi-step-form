import { createContext, useState } from "react";

export const formContext = createContext({
  formState: "",
  setFormState: (currentState) => {},
});

export const FormContextProvider = ({ children }) => {
  const [formState, setFormState] = useState("personal");

  const changeFormState = (currentState) => {
    setFormState(currentState);
  };

  const value = {
    formState,
    setFormState: changeFormState,
  };

  return <formContext.Provider value={value}>{children}</formContext.Provider>;
};
