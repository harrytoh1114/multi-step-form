import { createContext, useState } from "react";

export const formContext = createContext({
  formState: "",
  formData: {},
  setFormState: (currentState) => {},
  setFormData: (data) => {},
});

export const FormContextProvider = ({ children }) => {
  const [formState, setFormState] = useState("personal");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    plan: {},
    period: "",
    addOns: [],
  });

  const changeFormState = (currentState) => {
    setFormState(currentState);
  };

  const changeFormData = (data) => {
    setFormData({
      ...data,
    });
  };

  const value = {
    formState,
    formData,
    setFormState: changeFormState,
    setFormData: changeFormData,
  };

  return <formContext.Provider value={value}>{children}</formContext.Provider>;
};
