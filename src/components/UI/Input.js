import React, { useEffect, useReducer } from "react";
import { validate } from "../../util/validators";

import "./Input.css";

const inputReducer = (state, action) => {
  switch (action.type) {
    case "INITIAL":
      let value = "";
      let isValid = false;
      if (action.initialValue) {
        value = action.initialValue;
        isValid = true;
      }

      return {
        ...state,
        value: value,
        isValid: isValid,
      };

    case "CHANGE":
      return {
        ...state,
        value: action.payload,
        isValid: validate(action.payload, action.validators).isValid,
        errorText: validate(action.payload, action.validators).errorText,
      };
    case "TOUCHED":
      return {
        ...state,
        isTouched: true,
      };
    default:
      return state;
  }
};

const Input = ({
  id,
  type,
  title,
  label,
  placeholder,
  initialValue,
  invalidInput,
  validators,
  onInput,
}) => {
  const [inputState, dispatch] = useReducer(inputReducer, {
    value: "",
    isValid: false,
    isTouched: false,
    errorText: "This field is required",
  });

  const { value, isValid } = inputState;

  useEffect(() => {
    dispatch({
      type: "INITIAL",
      initialValue: initialValue,
    });
  }, [initialValue]);

  useEffect(() => {}, []);

  useEffect(() => {
    onInput(id, value, isValid);
  }, [id, value, isValid, onInput]);

  const inputChangeHandler = (e) => {
    dispatch({
      type: "CHANGE",
      payload: e.target.value,
      validators: validators,
      initialValue: initialValue,
    });
  };

  const touchHandler = () => {
    dispatch({
      type: "TOUCHED",
    });
  };

  return (
    <div className="input-wrapper">
      <div className="input-header">
        <label htmlFor={label} className="input-label">
          {title}
        </label>
        {((inputState.isTouched && !inputState.isValid) ||
          (invalidInput && !inputState.isValid)) && (
          <p className="input-error">{inputState.errorText}</p>
        )}
      </div>
      <input
        id={label}
        type={type}
        placeholder={placeholder}
        value={inputState.value}
        onChange={inputChangeHandler}
        onBlur={touchHandler}
        className={`${
          (inputState.isTouched && !inputState.isValid) ||
          (invalidInput && !inputState.isValid)
            ? "input error"
            : "input"
        }`}
      />
    </div>
  );
};

export default Input;
