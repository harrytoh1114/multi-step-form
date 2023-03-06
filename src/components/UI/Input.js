import React from "react";

import "./Input.css";

const Input = ({
  type,
  placeholder,
  title,
  value,
  label,
  onChange,
  errorText,
}) => {
  return (
    <div className="input-wrapper">
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
          onChange(e.target.value);
        }}
        className="input"
      />
    </div>
  );
};

export default Input;
