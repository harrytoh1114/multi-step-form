import React, {
  useReducer,
  useContext,
  useCallback,
  useState,
  useEffect,
} from "react";

import "./Form.css";
import { formContext } from "../../context/formContext";
import { VALIDATOR_EMAIL, VALIDATOR_REQUIRE } from "../../util/validators";
import Button from "../UI/Button";
import Input from "../UI/Input";

const formReducer = (state, action) => {
  switch (action.type) {
    case "INPUT_CHANGE":
      let formIsValid = true;

      for (const input in state.inputs) {
        if (input === action.input) {
          formIsValid = formIsValid && action.isValid;
        } else {
          formIsValid = formIsValid && state.inputs[input].isValid;
        }
      }

      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.input]: { value: action.value, isValid: action.isValid },
        },
        formIsValid: formIsValid,
      };
    case "PROMPT_IF_EMPTY":
      return {
        ...state,
        inputs: {
          ...state.inputs,
          name: { ...state.inputs.name, isValid: false },
          email: { ...state.inputs.email, isValid: false },
          phone: { ...state.inputs.phone, isValid: false },
        },
      };
    default:
      return state;
  }
};

const PersonalInfo = () => {
  const [checkIfNameEmpty, setCheckIfNameEmpty] = useState(false);
  const [checkIfEmailEmpty, setCheckIfEmailEmpty] = useState(false);
  const [checkIfPhoneEmpty, setCheckIfPhoneEmpty] = useState(false);

  const [formState, dispatch] = useReducer(formReducer, {
    inputs: {
      name: {
        value: "",
        isValid: false,
      },
      email: {
        value: "",
        isValid: false,
      },
      phone: {
        value: "",
        isValid: false,
      },
    },
    formIsValid: false,
  });

  useEffect(() => {
    setCheckIfNameEmpty(false);
    setCheckIfEmailEmpty(false);
    setCheckIfPhoneEmpty(false);
  }, []);

  const inputChangeHandler = useCallback((inputField, value, isValid) => {
    dispatch({
      type: "INPUT_CHANGE",
      input: inputField,
      value: value,
      isValid: isValid,
    });
  }, []);

  const formCtx = useContext(formContext);

  const nextPageHandler = (e) => {
    e.preventDefault();

    if (formState.formIsValid) {
      const data = {
        name: formState.inputs.name.value,
        email: formState.inputs.email.value,
        phone: formState.inputs.phone.value,
      };
      formCtx.setFormData({ ...formCtx.formData, ...data });
      formCtx.setFormState("plan");
    }

    if (formState.inputs.name.value === "") {
      setCheckIfNameEmpty(true);
    }

    if (formState.inputs.email.value === "") {
      setCheckIfEmailEmpty(true);
    }

    if (formState.inputs.phone.value === "") {
      setCheckIfPhoneEmpty(true);
    }
  };

  return (
    <>
      <Input
        id="name"
        type="text"
        title="Name"
        label="name"
        placeholder="e.g Stephen King"
        initialValue={formCtx.formData.name || ""}
        invalidInput={checkIfNameEmpty}
        validators={[VALIDATOR_REQUIRE()]}
        onInput={inputChangeHandler}
        errorText="This field is required"
      />
      <Input
        id="email"
        type="email"
        title="Email Adress"
        label="email"
        placeholder="e.g stephenking@lorem.com"
        initialValue={formCtx.formData.email || ""}
        invalidInput={checkIfEmailEmpty}
        validators={[VALIDATOR_EMAIL(), VALIDATOR_REQUIRE()]}
        onInput={inputChangeHandler}
        errorText={"Please enter a valid email address"}
      />
      <Input
        id="phone"
        type="phone"
        title="Phone Number"
        label="phone"
        placeholder="e.g 1234 5678"
        initialValue={formCtx.formData.phone || ""}
        invalidInput={checkIfPhoneEmpty}
        validators={[VALIDATOR_REQUIRE()]}
        onInput={inputChangeHandler}
        errorText="This field is required"
      />
      <div className="button-wrapper">
        <Button type="button" styles="next-step" onClick={nextPageHandler}>
          Next Step
        </Button>
      </div>
    </>
  );
};

export default PersonalInfo;
