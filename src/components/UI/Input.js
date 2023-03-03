import React from "react";

import "./Input.css";
import RadioCard from "./RadioCard";

const Input = ({
  type,
  placeholder,
  title,
  value,
  label,
  inputHandler,
  errorText,
}) => {
  let input;
  if (type === "text" || type === "email" || type === "phone") {
    input = (
      <>
        <div className="input-header">
          <label htmlFor={label} className="input-label">
            {title}
          </label>
          {errorText && <p className="input-error">{errorText}</p>}
        </div>
        <input
          id={label}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={(e) => {
            inputHandler(e.target.value);
          }}
          className="input"
        />
      </>
    );

    if (type === "radio") {
      input = (
        <input
          id={label}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={(e) => {
            inputHandler(e.target.value);
          }}
          className="radio"
        />
      );
    }
  }

  return <div className="input-wrapper">{input}</div>;
};

export default Input;
